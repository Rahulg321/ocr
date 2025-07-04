"use server";

import { revalidatePath } from "next/cache";
import db from "../db";
import { redisClient } from "../redis";

const UploadDocuments = async (formData: FormData, userId: string) => {
  try {
    console.log("Values in profile pic server action");

    const file = formData.get("file") as File;
    const fileName = formData.get("fileName") as string;

    console.log("file is", file);
    console.log("filename is ", fileName);

    const url = `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${process.env.AZURE_STORAGE_CONTAINER_NAME}/${fileName}?${process.env.AZURE_STORAGE_SAS_TOKEN}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "x-ms-blob-type": "BlockBlob",
        "Content-Type": file.type,
      },
      body: file,
    });

    if (!response.ok) {
      console.log("response resulted in error", response);
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    console.log("upload response", response.body, response.blob);

    // https://${storageAccountName}.blob.core.windows.net/${containerName}/${name}

    const fileUrl = `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${process.env.AZURE_STORAGE_CONTAINER_NAME}/${fileName}`;

    console.log("file url generated from azure is", fileUrl);

    const uploadedDocument = await db.document.create({
      data: {
        status: "PENDING",
        fileUrl: fileUrl,
        fileName: fileName,
        userId: userId,
      },
    });

    console.log("document created");

    await redisClient.lpush(
      "documentQueue",
      JSON.stringify({
        documentId: uploadedDocument.id,
        fileUrl: fileUrl,
        fileName: fileName,
        userId: userId,
      })
    );

    console.log("document added to queue");

    revalidatePath(`/dashboard`);

    return {
      success: true,
      message: "Successfully Uploaded file",
      fileUrl,
    };
  } catch (error) {
    console.error("An error occured", error);
    return {
      success: false,
      message: `An error occured ${error}`,
    };
  }
};

export default UploadDocuments;
