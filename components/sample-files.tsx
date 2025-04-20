import { FileIcon } from "./file-icon";

const sampleFiles = [
  {
    id: 1,
    name: "input1.pdf",
    type: "pdf",
    size: "2.1 MB",
  },
  {
    id: 2,
    name: "input2.doc",
    type: "doc",
    size: "1.8 MB",
  },
  {
    id: 3,
    name: "input3.png",
    type: "png",
    size: "4.2 MB",
  },
  {
    id: 4,
    name: "input4.pptx",
    type: "pptx",
    size: "3.7 MB",
  },
];

export function SampleFiles() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {sampleFiles.map((file) => (
        <div
          key={file.id}
          className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
        >
          <FileIcon fileType={file.type} />
          <div className="mt-2">
            <p className="text-sm font-medium">{file.name}</p>
            <p className="text-xs text-muted-foreground">{file.size}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
