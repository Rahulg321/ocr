"use client";

import * as React from "react";
import { FaImage } from "react-icons/fa6";
import { useTransition } from "react";
import {
  Upload,
  X,
  File,
  CheckCircle,
  FileSpreadsheet,
  Presentation,
  WholeWordIcon,
  Music,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  BsFiletypePptx,
  BsFiletypeDocx,
  BsFileEarmarkExcelFill,
} from "react-icons/bs";
import UploadDocuments from "@/lib/actions/upload-documents";

type UploadedFile = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string; // URL for preview if applicable
};

interface FileUploadProps {
  userId: string;
}

export function FileUpload({ userId }: FileUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState<number>(0);
  const [uploadedFile, setUploadedFile] = React.useState<UploadedFile | null>(
    null
  );
  const [isUploading, setIsUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const [uploadStatus, setUploadStatus] = React.useState<{
    success?: string;
    error?: string;
  }>({});

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Take only the first file
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Take only the first file
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Reset state for new upload
    setIsUploading(true);
    setUploadProgress(0);
    setUploadStatus({});

    // Upload the file
    uploadFile(file);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadFile = async (file: File) => {
    try {
      // Start progress
      setUploadProgress(10);

      const blobName = `doc-${Date.now()}-${file.name}`;
      const formData = new FormData();

      formData.append("file", file);
      formData.append("fileName", blobName);

      // Update progress
      setUploadProgress(30);

      // Call API to upload file
      const response = await UploadDocuments(formData, userId);

      if (response.success) {
        // Complete progress
        setUploadProgress(100);

        // Set the uploaded file
        const fileId = `file-${Date.now()}`;
        setUploadedFile({
          id: fileId,
          name: file.name,
          size: file.size,
          type: file.type,
          url: response.imageUrl || URL.createObjectURL(file),
        });

        setUploadStatus({
          success: `File uploaded successfully: ${file.name}`,
          error: undefined,
        });
      } else {
        setUploadStatus({
          error: response.message || "Server Side Error Occurred",
          success: undefined,
        });
      }
    } catch (error) {
      console.log("An error occurred while trying to upload file", error);
      setUploadStatus({
        error: "An error occurred, please try again later!!",
        success: undefined,
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  return (
    <div className="w-full space-y-4">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300",
          isUploading ? "opacity-75 pointer-events-none" : ""
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="rounded-full bg-gray-100 p-3">
            <Upload className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-medium">
              Choose a file or drag & drop it here
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supports PDF, Word, Excel, PPT, image, and other document formats
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-2 cursor-pointer"
            onClick={handleBrowseClick}
            disabled={isUploading}
          >
            Browse File
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.png,.jpg,.jpeg,.csv,.html,.txt"
          />
        </div>
      </div>

      {/* Status Messages */}
      {uploadStatus.success && (
        <div className="bg-green-50 p-3 rounded-md border border-green-200 text-green-800">
          {uploadStatus.success}
        </div>
      )}

      {uploadStatus.error && (
        <div className="bg-red-50 p-3 rounded-md border border-red-200 text-red-800">
          {uploadStatus.error}
        </div>
      )}

      {/* Upload Progress Section */}
      {isUploading && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Uploading...</h3>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Uploading file...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
          </div>
        </div>
      )}

      {/* Uploaded File */}
      {uploadedFile && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Uploaded File</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-md border">
                  {uploadedFile.type.includes("pdf") ? (
                    <BsFiletypeDocx className="size-12 text-blue-500" />
                  ) : uploadedFile.type.includes("word") ||
                    uploadedFile.type.includes("doc") ? (
                    <BsFiletypeDocx className="size-12 text-blue-500" />
                  ) : uploadedFile.type.includes("presentation") ||
                    uploadedFile.type.includes("powerpoint") ||
                    uploadedFile.type.includes("ppt") ? (
                    <BsFiletypePptx className="size-12 text-orange-500" />
                  ) : uploadedFile.type.includes("spreadsheet") ||
                    uploadedFile.type.includes("excel") ||
                    uploadedFile.type.includes("xlsx") ||
                    uploadedFile.type.includes("xls") ? (
                    <BsFileEarmarkExcelFill className="size-12 text-green-500" />
                  ) : uploadedFile.type.includes("png") ||
                    uploadedFile.type.includes("jpeg") ||
                    uploadedFile.type.includes("jpg") ? (
                    <FaImage className="size-12 text-purple-500" />
                  ) : uploadedFile.type.includes("mp3") ||
                    uploadedFile.type.includes("wav") ||
                    uploadedFile.type.includes("audio") ? (
                    <Music className="size-12 text-yellow-500" />
                  ) : uploadedFile.type.includes("mp4") ||
                    uploadedFile.type.includes("mov") ||
                    uploadedFile.type.includes("video") ? (
                    <Video className="size-12 text-red-500" />
                  ) : (
                    <File className="size-12 text-blue-500" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{uploadedFile.name}</p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(uploadedFile.size)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <button
                  onClick={removeFile}
                  className="p-1 hover:bg-gray-200 cursor-pointer rounded-full"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
