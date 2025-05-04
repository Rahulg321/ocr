import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FileUploadSection() {
  return (
    <div className="w-full  block-space ">
      <div className="bg-gray-50 rounded-3xl p-8  max-w-4xl mx-auto">
        <div className="relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Transform Your Files into{" "}
              <span className="text-indigo-400">Smart, Searchable Data?</span>
            </h1>

            <p className="text-gray-600 mt-4 max-w-lg mx-auto">
              Stop wasting time with manual data entry. Let our AI-powered OCR
              do the heavy lifting – fast, accurate, and hassle-free.
            </p>

            <div className="mt-8">
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full h-auto">
                Upload file
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Gradient background effect */}
        <div
          className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -left-10 -bottom-20 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -right-10 -bottom-20 w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
