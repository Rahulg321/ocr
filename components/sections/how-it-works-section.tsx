import { FeatureSteps } from "./feature-section";
import {
  CheckCircleIcon,
  FileKeyIcon,
  Recycle,
  RecycleIcon,
  UploadCloud,
} from "lucide-react";

export default function HowItWorksSection() {
  const features = [
    {
      step: "Step 1",
      title: "Upload or Connect your data.",
      content: "Drag & drop any pdf, word, ppt, excel or image file.",
      image: "/assets/connect-data.png",
      icon: <UploadCloud className="w-6 h-6" />,
    },
    {
      step: "Step 2",
      title: "AI Structures Your Data",
      content: "Automatically convert raw data into usable formats.",
      image: "/assets/export-anywhere.png",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      step: "Step 3",
      title: "Export & Use Anywhere",
      content: "Automatically convert raw data into usable formats.",
      image: "/assets/ai-structure-data.png",
      icon: <FileKeyIcon className="w-6 h-6" />,
    },
  ];

  return (
    <FeatureSteps
      features={features}
      title="How it Works"
      autoPlayInterval={4000}
      imageHeight=""
    />
  );
}
