"use client";

import React from "react";

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h2 className="font-medium text-2xl mb-4">Customize Extraction</h2>
      <div className="font-medium text-gray-700 mb-3">Preview</div>
      <iframe
        src={pdfUrl}
        width="100%"
        height="400px"
        title="PDF Viewer"
        className="w-full 0 rounded-lg"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
