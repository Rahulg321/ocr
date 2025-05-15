import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <div className="block-space big-container">
        <h1 className="mb-4 sm:mb-6 text-center">
          Transform your Unstructured Data <br className="hidden sm:block" />
          into
          <span className="ml-2 text-blue-600">OCR</span>
        </h1>
        <p className="max-w-2xl mx-auto text-center text-base sm:text-lg text-gray-600 mb-6 sm:mb-10">
          Vision Language Model (VLM) powered structuring that simplifies your
          data, saves time, and boosts efficiency.
        </p>
        <div className="flex justify-center">
          <Button
            className="bg-figma-main cursor-pointer hover:bg-figma-main/80 rounded-2xl"
            size={"2xl"}
          >
            Upload file
            <Download size={18} className="sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </>
  );
}
