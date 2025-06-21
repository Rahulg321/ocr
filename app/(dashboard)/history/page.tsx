import DashboardHeader from "@/components/dashboard-header";
import { HistoryTable } from "@/components/history-table";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import db from "@/lib/db";

const HistoryPage = async () => {
  const userSession = await auth();

  if (!userSession) {
    redirect("/login");
  }

  const allDocuments = await db.document.findMany({
    where: {
      userId: userSession.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("allDocuments", allDocuments);

  // Map DB documents to FileHistory[]
  const documents = allDocuments.map((doc) => {
    // Map status from DB to table values
    let status: "Successful" | "Unsuccessful" | "Processing" | "Pending" =
      "Pending";
    if (doc.status === "COMPLETED") status = "Successful";
    else if (doc.status === "FAILED") status = "Unsuccessful";
    else if (doc.status === "PROCESSING") status = "Processing";
    else if (doc.status === "PENDING") status = "Pending";

    // TODO: Add fileType and fileSize support if/when available in DB

    return {
      id: doc.id,
      fileName: doc.fileName || "Untitled",
      dateTime: doc.createdAt ? new Date(doc.createdAt).toLocaleString() : "-",
      processingTime: "-", // Not available
      fileType: "Other" as const, // Not available
      fileSize: "-", // Not available
      status,
      action:
        status === "Successful" ? ("Download" as const) : ("Retry" as const),
    };
  });

  return (
    <div className="flex big-container flex-col min-h-screen">
      <DashboardHeader
        title="History"
        subtitle="View your file processing history"
      />
      <HistoryTable data={documents} />
    </div>
  );
};

export default HistoryPage;
