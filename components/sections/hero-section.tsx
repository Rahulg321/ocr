import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <>
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
