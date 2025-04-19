import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* User Pills */}
      <div className="relative max-w-6xl mx-auto mt-8 sm:mt-12 px-4">
        <div className="absolute left-0 sm:left-8 top-0 sm:top-8">
          <div className="bg-emerald-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
            Prasenjit
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-indigo-100 text-gray-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm flex items-center">
            API integration coming soon 🚀
          </div>
        </div>

        <div className="absolute right-0 sm:right-8 top-16 sm:top-32">
          <div className="bg-orange-300 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
            anthony
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 max-w-5xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
          Transform your Unstructured Data <br className="hidden sm:block" />
          into <span className="text-indigo-500">Actionable Insights</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-6 sm:mb-10">
          Vision Language Model (VLM) powered structuring that simplifies your
          data, saves time, and boosts efficiency.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium flex items-center gap-2 mx-auto">
          Upload file
          <Download size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </>
  );
}
