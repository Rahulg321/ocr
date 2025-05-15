import {
  FileText,
  ImageIcon,
  FileSpreadsheet,
  FileIcon as FilePresentation,
} from "lucide-react";

export default function HowHelpSection() {
  return (
    <section className="w-full py-16 ">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 mb-2">Key features</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How We Can Help You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Without structured data, businesses struggle to make data-driven
            decisions.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8">
          {/* Feature 1: AI-Powered Structuring */}
          <div className="bg-amber-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Accurate AI-Powered Structuring
            </h3>
            <p className="text-gray-600 mb-6">
              Experience pinpoint-accurate text extraction powered by
              cutting-edge AI. Say goodbye to manual errors and hello to 99%+
              precision.
            </p>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="#E97F0D"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#E97F0D"
                    strokeWidth="2"
                  />
                  <path d="M12 2L12 4" stroke="#E97F0D" strokeWidth="2" />
                  <path d="M12 20L12 22" stroke="#E97F0D" strokeWidth="2" />
                  <path d="M2 12L4 12" stroke="#E97F0D" strokeWidth="2" />
                  <path d="M20 12L22 12" stroke="#E97F0D" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="h-2 w-24 bg-amber-200 rounded-full"></div>
                <div className="h-2 w-20 bg-amber-200 rounded-full"></div>
                <div className="h-2 w-28 bg-amber-200 rounded-full"></div>
                <div className="h-2 w-16 bg-amber-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Feature 2: Multi-Format Support */}
          <div className="bg-purple-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Multi-Format Support
            </h3>
            <p className="text-gray-600 mb-6">
              We support 15+ file types and even scanned handwritten notes—our
              engine handles them all with ease.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <span className="text-xs font-bold">W</span>
                </div>
                <div>
                  <p className="font-medium">Word</p>
                  <p className="text-xs text-gray-500">.docx</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                  <FileText size={16} />
                </div>
                <div>
                  <p className="font-medium">Pdf</p>
                  <p className="text-xs text-gray-500">.pdf</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  <ImageIcon size={16} />
                </div>
                <div>
                  <p className="font-medium">Image</p>
                  <p className="text-xs text-gray-500">
                    .png, .jpg, .jpeg, .svg
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <FileSpreadsheet size={16} />
                </div>
                <div>
                  <p className="font-medium">Excel</p>
                  <p className="text-xs text-gray-500">.xlsx</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl col-span-1">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <FilePresentation size={16} />
                </div>
                <div>
                  <p className="font-medium">PPT</p>
                  <p className="text-xs text-gray-500">.pptx</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Quick and Easy */}
          <div className="bg-purple-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Quick and Easy to Use
            </h3>
            <p className="text-gray-600 mb-6">
              Get started instantly—no setup, no hassle. Just upload your file
              and let our OCR do the magic in seconds.
            </p>
            <div className="bg-white p-4 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-medium">Convert files</p>
                <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md">
                  Run
                </button>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">~certificate.pdf</p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">27 KB</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500 ml-1">Completed</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">~certificate.pdf</p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">84 KB</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500 ml-1">Completed</span>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                  5.19 sec
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Visual Output */}
          <div className="bg-purple-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Crystal Clear Visual Output
            </h3>
            <p className="text-gray-600 mb-6">
              Get clean, well-organized visual charts and tables that are ready
              to use or present instantly.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                  <path d="M3 9H21" stroke="#4F46E5" strokeWidth="2" />
                  <path d="M9 21L9 9" stroke="#4F46E5" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="2"
                  width="16"
                  height="20"
                  rx="2"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M8 7H16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 12H16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 17H12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
