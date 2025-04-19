import { Upload, RefreshCw, FileOutputIcon as FileExport } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">
            Work-flow
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
          How it Works
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          From upload to output — just a few simple steps to get accurate,
          AI-powered results.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="text-3xl font-bold text-gray-300">01</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Upload className="text-indigo-400" size={24} />
                  <h3 className="text-xl font-bold text-indigo-400">
                    Upload or Connect Your Data
                  </h3>
                </div>
                <p className="text-gray-600">
                  Drag & drop any pdf, word, ppt, excel or image file.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="text-3xl font-bold text-gray-300">02</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <RefreshCw className="text-gray-800" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">
                    AI Structures Your Data
                  </h3>
                </div>
                <p className="text-gray-600">
                  Automatically convert raw data into usable formats.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="text-3xl font-bold text-gray-300">03</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileExport className="text-gray-800" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">
                    Export & Use Anywhere
                  </h3>
                </div>
                <p className="text-gray-600">
                  Automatically convert raw data into usable formats.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - UI Mockup */}
          <div className="border rounded-xl shadow-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gray-100 rounded-full">
                <Upload size={20} className="text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold">Upload files</h4>
                <p className="text-sm text-gray-500">
                  Select and upload the files oof your choice
                </p>
              </div>
              <div className="ml-auto">
                <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100">
                  <span className="sr-only">Close</span>ⓧ
                </button>
              </div>
            </div>

            {/* Drag & Drop Area */}
            <div className="border-2 border-dashed rounded-lg p-8 mb-4 flex flex-col items-center justify-center">
              <div className="p-2 bg-gray-100 rounded-full mb-2">
                <Upload size={20} className="text-gray-700" />
              </div>
              <p className="text-sm font-medium text-center mb-1">
                Choose a file or drag & drop it here
              </p>
              <p className="text-xs text-gray-500 text-center mb-4">
                JPEG, PNG, PDF, and MP4 formats, up to 50MB
              </p>
              <button className="px-4 py-2 border rounded-md text-sm font-medium">
                Browse File
              </button>
            </div>

            {/* File 1 */}
            <div className="border rounded-lg p-3 mb-3 relative">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded">
                  PDF
                </div>
                <div>
                  <p className="font-medium text-sm">Research-paper.pdf</p>
                  <p className="text-xs text-gray-500">
                    60 KB of 120 KB • ↻ Uploading...
                  </p>
                </div>
                <button className="ml-auto rounded-full p-1 text-gray-400 hover:bg-gray-100">
                  <span className="sr-only">Close</span>ⓧ
                </button>
              </div>
              <div className="mt-2 bg-indigo-100 rounded-full h-1.5 w-full">
                <div className="bg-indigo-500 h-1.5 rounded-full w-3/5"></div>
              </div>
            </div>

            {/* File 2 */}
            <div className="border rounded-lg p-3 relative">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded">
                  PDF
                </div>
                <div>
                  <p className="font-medium text-sm">Google-certificate.pdf</p>
                  <p className="text-xs text-gray-500">
                    94 KB of 94 KB • ✓ Completed
                  </p>
                </div>
                <button className="ml-auto rounded-full p-1 text-gray-400 hover:bg-gray-100">
                  <span className="sr-only">Delete</span>
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
