import { FeatureSteps } from "./feature-section";

export default function HowItWorksSection() {
  const features = [
    {
      step: "Step 1",
      title: "Upload or Connect your data.",
      content: "Drag & drop any pdf, word, ppt, excel or image file.",
      image:
        "https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 2",
      title: "AI Structures Your Data",
      content: "Automatically convert raw data into usable formats.",
      image:
        "https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 3",
      title: "Export & Use Anywhere",
      content: "Automatically convert raw data into usable formats.",
      image:
        "https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <FeatureSteps
      features={features}
      title="Your Journey Starts Here"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  );
}
