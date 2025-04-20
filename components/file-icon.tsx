import { FileText, FileImage, File } from "lucide-react";

interface FileIconProps {
  fileType: string;
}

export function FileIcon({ fileType }: FileIconProps) {
  const getIconColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "text-red-500 bg-red-50";
      case "doc":
      case "docx":
        return "text-blue-500 bg-blue-50";
      case "png":
      case "jpg":
      case "jpeg":
        return "text-green-500 bg-green-50";
      case "ppt":
      case "pptx":
        return "text-orange-500 bg-orange-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
      case "doc":
      case "docx":
      case "ppt":
      case "pptx":
        return <FileText className="h-8 w-8" />;
      case "png":
      case "jpg":
      case "jpeg":
        return <FileImage className="h-8 w-8" />;
      default:
        return <File className="h-8 w-8" />;
    }
  };

  return (
    <div className={`inline-flex p-2 rounded-md ${getIconColor(fileType)}`}>
      {getIcon(fileType)}
    </div>
  );
}
