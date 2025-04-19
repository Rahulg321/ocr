import Image from "next/image";
import { BarChart3 } from "lucide-react";

export default function RealWorldSolutions() {
  return (
    <section className="w-full py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Use case
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Real-World Solutions, Powered by AI
        </h2>
        <p className="text-gray-600 max-w-2xl">
          From documents to data — smarter, faster, and more flexible than ever.
          See how our OCR solution transforms everyday workflows across
          industries.
        </p>
      </div>

      {/* Industry Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium">
          Finance
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
          Insurance
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
          Logistics
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
          Research
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
          Marketing
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
          Knowledge
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-[#f8fafc] rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="p-10 md:p-12 flex flex-col">
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Finance</h3>
              <p className="text-gray-600 mb-8">
                From static files to dynamic data. Turn dense financial docs
                into usable formats — automatically.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-black mt-2 mr-3"></div>
                  <span className="text-gray-800">
                    Extract shipment details from bills of lading
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-black mt-2 mr-3"></div>
                  <span className="text-gray-800">
                    Parse delivery receipts, barcodes, and handwritten notes
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-black mt-2 mr-3"></div>
                  <span className="text-gray-800">
                    Capture signatures and timestamps effortlessly
                  </span>
                </li>
              </ul>
              <div>
                <button className="bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                  Try now
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33337 8H12.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66663 4L12.6666 8L8.66663 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <Image
              src="/images/real-world-solutions.png"
              alt="Payment terminal with credit card"
              fill
              className="object-cover"
              style={{
                clipPath: "inset(245px 0 0 522px)",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
