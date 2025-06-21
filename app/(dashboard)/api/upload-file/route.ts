import { auth } from "@/auth";
import db from "@/lib/db";
import { redisClient } from "@/lib/redis";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("upload file route called");

  const userSession = await auth();

  if (!userSession?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!redisClient.isOpen) {
    console.log("redis client not connected, connecting...");

    await redisClient.connect();
  }

  const userId = userSession.user.id;

  try {
    const formData = await request.formData();
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

    const fileUrl = `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${process.env.AZURE_STORAGE_CONTAINER_NAME}/${fileName}`;

    console.log("file url generated from azure is", fileUrl);

    const uploadedDocument = await db.document.create({
      data: {
        fileUrl: fileUrl,
        fileName: fileName,
        userId: userId!,
      },
    });

    console.log("document created");

    await redisClient.lPush(
      "documentQueue",
      JSON.stringify({
        documentId: uploadedDocument.id,
        fileUrl: fileUrl,
        fileName: fileName,
        userId: userId!,
      })
    );

    console.log("document added to queue");

    revalidatePath(`/dashboard`);

    return NextResponse.json({
      success: true,
      fileUrl: fileUrl,
      documentId: uploadedDocument.id,
    });
  } catch (error) {
    console.error("error uploading file", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
