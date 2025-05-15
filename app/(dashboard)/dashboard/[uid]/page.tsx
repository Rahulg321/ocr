import JSONEditor from "@/components/JSONEditor";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUpload } from "@/components/file-upload";
import { SampleFiles } from "@/components/sample-files";
import DashboardHeader from "@/components/dashboard-header";
import PdfViewer from "@/components/pdf-viewer";
import { FaRegFilePdf, FaTrash } from "react-icons/fa6";
import PageSettingsForm from "@/components/forms/PageSettingsForm";
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";

const page = () => {
  const pdfUrl = "/pdfs/sample-doc.pdf#toolbar=0&navpanes=0&scrollbar=0";

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
        <UploadedFileCard />
      </div>

      <div className="flex gap-4 container bg-white p-4 md:p-6 rounded-2xl mt-4">
        <div className="flex-1">
          <PdfViewer pdfUrl={pdfUrl} />
        </div>
        <div className="flex-1">
          <PageSettingsForm />
          <JSONEditor />
        </div>
      </div>
    </section>
  );
};

export default page;

const UploadedFileCard = () => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 mx-auto">
    <div className="font-medium mb-2">Uploaded file</div>
    <div className="flex items-center bg-gray-50 rounded-lg p-4">
      <div className="flex items-center">
        <span className="bg-red-500 rounded-md p-2 mr-3">
          <FaRegFilePdf className="text-white text-xl" />
        </span>
        <div>
          <div className="font-medium text-gray-900">Research-paper.pdf</div>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            60 KB of 120 KB
            <span className="text-green-500">●</span>
            <span>Completed</span>
          </div>
        </div>
      </div>
      <button className="ml-auto text-gray-400 hover:text-red-500">
        <FaTrash />
      </button>
    </div>
  </div>
);
