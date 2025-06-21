"use client";

import JSONEditor from "@/components/JSONEditor";
import React, { useEffect, useState, useTransition } from "react";
import DashboardHeader from "@/components/dashboard-header";
import PdfViewer from "@/components/pdf-viewer";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import UploadedFileCard from "@/components/uploaded-file-carcd";
import { Document } from "@prisma/client";

const SpecificDashboardComponent = ({
  initialDoc,
  userId,
  documentId,
}: {
  initialDoc: Document;
  userId: string;
  documentId: string;
}) => {
  const [websocket, setWebSocket] = useState<WebSocket | null>(null);
  const [isPending, startTransition] = useTransition();
  const [doc, setDoc] = useState(initialDoc);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");

    ws.onopen = () => {
      console.log("connected to websocket");
      ws.send(JSON.stringify({ type: "register", userId, documentId }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "registered") {
        console.log("registered to websocket", data);
        alert("Connected and registered to websocket");
      }

      console.log("data", data);

      if (
        data.type === "document_processed" &&
        data.documentId === initialDoc.id
      ) {
        console.log("document processed", data);
        setDoc((prev) => ({
          ...prev,
          status: data.result === "success" ? "COMPLETED" : "FAILED",
        }));

        if (data.result === "success") {
          console.log(
            "fetching fresh document since the result was successsful"
          );
          fetch(`/api/document/${initialDoc.id}`)
            .then((r) => r.json())
            .then((fresh) => setDoc(fresh));
        }
      }
    };

    setWebSocket(ws);

    return () => {
      ws.close();
    };
  }, [initialDoc.id, initialDoc.userId, documentId, userId]);

  return (
    <section className="bg-muted p-4 md:p-6">
      <DashboardHeader title="Welcome, Raunak" showRunButton={true} />

      <div className="flex-1 ">
        <div className="flex items-center justify-between my-4 md:my-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <div className="flex items-center gap-2">
            <Button
              variant={"outline"}
              className="cursor-pointer text-figma-main  rounded-full"
              size={"lg"}
            >
              Customize <Download />
            </Button>
            <Button
              className="bg-figma-main cursor-pointer text-white hover:bg-figma-main/80 rounded-full"
              size={"lg"}
            >
              Download <Download />
            </Button>
          </div>
        </div>
        <UploadedFileCard
          fileName={doc.fileName}
          fileType={doc.fileName.split(".").pop()?.toLowerCase() || "pdf"}
          fileSize={undefined}
          totalSize={undefined}
          status={doc.status}
        />
      </div>

      <div className="flex gap-4 container bg-white p-4 md:p-6 rounded-2xl mt-4">
        <div className="flex-1">
          <PdfViewer pdfUrl={doc.fileUrl} />
        </div>
        <div className="flex-1">
          {doc.status === "COMPLETED" ? (
            <>
              <PageSettingsForm />
              <div className="mt-4">
                <pre className="text-xs whitespace-pre-wrap">
                  {doc.markdown}
                </pre>
              </div>
              <JSONEditor />
            </>
          ) : doc.status === "FAILED" ? (       
            <div className="flex items-center justify-center h-full">
              <p>Failed to process document</p>
              <p>{doc.errorMessage}</p>
            </div>
          ) : doc.status === "PROCESSING" ? (
            <div className="flex items-center justify-center h-full">
              <p>Processing...</p>
            </div>
          ) : doc.status === "PENDING" ? (
            <div className="flex items-center justify-center h-full">
              <p>Pending...</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>On The Way...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpecificDashboardComponent;
