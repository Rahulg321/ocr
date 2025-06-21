import { FileIcon } from "./file-icon";
import { FaTrash } from "react-icons/fa6";
import React from "react";

export interface UploadedFileCardProps {
  fileName: string;
  fileType: string;
  fileSize?: string; // e.g. '60 KB'
  totalSize?: string; // e.g. '120 KB'
  status: "COMPLETED" | "PROCESSING" | "FAILED" | "PENDING";
  onDelete?: () => void;
}

const statusColor: Record<string, string> = {
  COMPLETED: "text-green-500",
  PROCESSING: "text-yellow-500",
  FAILED: "text-red-500",
  PENDING: "text-gray-400",
};

const statusText: Record<string, string> = {
  COMPLETED: "Completed",
  PROCESSING: "Processing",
  FAILED: "Failed",
  PENDING: "Pending",
};

const UploadedFileCard: React.FC<UploadedFileCardProps> = ({
  fileName,
  fileType,
  fileSize,
  totalSize,
  status,
  onDelete,
}) => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 mx-auto">
    <div className="font-medium mb-2">Uploaded file</div>
    <div className="flex items-center bg-gray-50 rounded-lg p-4">
      <div className="flex items-center">
        <span className="mr-3">
          <FileIcon fileType={fileType} />
        </span>
        <div>
          <div className="font-medium text-gray-900">{fileName}</div>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            {fileSize && totalSize
              ? `${fileSize} of ${totalSize}`
              : fileSize || ""}
            <span className={statusColor[status] || "text-gray-400"}>●</span>
            <span>{statusText[status] || status}</span>
          </div>
        </div>
      </div>
      <button
        className="ml-auto text-gray-400 hover:text-red-500"
        onClick={onDelete}
        aria-label="Delete file"
        type="button"
      >
        <FaTrash />
      </button>
    </div>
  </div>
);

export default UploadedFileCard;
