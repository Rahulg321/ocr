"use client";

import * as React from "react";
import { FaImage } from "react-icons/fa6";

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

type UploadedFile = {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string; // URL for preview if applicable
};

export function FileUpload() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState<
    Record<string, number>
  >({});
  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    setIsUploading(true);

    Array.from(files).forEach((file) => {
      const fileId = `file-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      // Initialize progress for this file
      setUploadProgress((prev) => ({
        ...prev,
        [fileId]: 0,
      }));

      // Simulate file upload with progress
      simulateFileUpload(file, fileId);
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const simulateFileUpload = (file: File, fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // Create a URL for the file (for preview)
        const fileUrl = URL.createObjectURL(file);

        // Add file to uploaded files list
        setUploadedFiles((prev) => [
          ...prev,
          {
            id: fileId,
            name: file.name,
            size: file.size,
            type: file.type,
            url: fileUrl,
          },
        ]);

        // Check if all files are uploaded
        setUploadProgress((prev) => {
          const updatedProgress = { ...prev, [fileId]: 100 };
          const allCompleted = Object.values(updatedProgress).every(
            (p) => p === 100
          );
          if (allCompleted) {
            setIsUploading(false);
          }
          return updatedProgress;
        });
      } else {
        setUploadProgress((prev) => ({
          ...prev,
          [fileId]: Math.round(progress),
        }));
      }
    }, 200);
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
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
          isUploading ? "opacity-75" : ""
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
              Supports 20+ formats including PDF, Word, Excel, PPT, image, html,
              csv file.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-2 cursor-pointer"
            onClick={handleBrowseClick}
          >
            Browse File
          </Button>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Upload Progress Section */}
      {isUploading && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Uploading...</h3>
          {Object.entries(uploadProgress).map(
            ([fileId, progress]) =>
              progress < 100 && (
                <div key={fileId} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Uploading file...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )
          )}
        </div>
      )}

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Uploaded Files</h3>
          <div className="space-y-2">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 border rounded-md bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-md border">
                    {file.type.includes("pdf") ? (
                      <BsFiletypeDocx className="size-12 text-blue-500" />
                    ) : file.type.includes("word") ||
                      file.type.includes("doc") ? (
                      <BsFiletypeDocx className="size-12 text-blue-500" />
                    ) : file.type.includes("presentation") ||
                      file.type.includes("powerpoint") ||
                      file.type.includes("ppt") ? (
                      <BsFiletypePptx className="size-12 text-orange-500" />
                    ) : file.type.includes("spreadsheet") ||
                      file.type.includes("excel") ||
                      file.type.includes("xlsx") ||
                      file.type.includes("xls") ? (
                      <BsFileEarmarkExcelFill className="size-12 text-green-500" />
                    ) : file.type.includes("png") ||
                      file.type.includes("jpeg") ||
                      file.type.includes("jpg") ? (
                      <FaImage className="size-12 text-purple-500" />
                    ) : file.type.includes("mp3") ||
                      file.type.includes("wav") ||
                      file.type.includes("audio") ? (
                      <Music className="size-12 text-yellow-500" />
                    ) : file.type.includes("mp4") ||
                      file.type.includes("mov") ||
                      file.type.includes("video") ? (
                      <Video className="size-12 text-red-500" />
                    ) : (
                      <File className="size-12 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium ">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-1 hover:bg-gray-200 cursor-pointer rounded-full"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
