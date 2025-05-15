"use client";

import Image from "next/image";
import {
  BarChart3,
  Building2,
  Truck,
  BookOpen,
  Target,
  Brain,
} from "lucide-react";
import { useState } from "react";
import type { ReactElement } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IndustryContent {
  title: string;
  description: string;
  icon: ReactElement;
  features: string[];
  imagePath: string;
  imagePath2?: string;
}

const industryContents: Record<string, IndustryContent> = {
  Finance: {
    title: "Finance",
    description:
      "From static files to dynamic data. Turn dense financial docs into usable formats — automatically.",
    icon: <BarChart3 className="text-white" size={20} />,
    features: [
      "Extract shipment details from bills of lading",
      "Parse delivery receipts, barcodes, and handwritten notes",
      "Capture signatures and timestamps effortlessly",
    ],
    imagePath: "/assets/finance.jpg",
  },
  Insurance: {
    title: "Insurance",
    description:
      "Streamline claims processing and policy management with intelligent document processing.",
    icon: <Building2 className="text-white" size={20} />,
    features: [
      "Automate claims form processing",
      "Extract policy information accurately",
      "Process medical records and reports",
    ],
    imagePath: "/assets/insurance.png",
    imagePath2: "/assets/insurance.png",
  },
  Logistics: {
    title: "Logistics",
    description:
      "Optimize supply chain operations with automated document processing.",
    icon: <Truck className="text-white" size={20} />,
    features: [
      "Process shipping manifests automatically",
      "Extract tracking information",
      "Digitize warehouse documentation",
    ],
    imagePath: "/assets/logistics.png",
    imagePath2: "/assets/logistics.png",
  },
  Research: {
    title: "Research",
    description:
      "Transform research documents into structured, analyzable data.",
    icon: <BookOpen className="text-white" size={20} />,
    features: [
      "Extract data from research papers",
      "Process survey responses",
      "Analyze academic documents",
    ],
    imagePath: "/assets/research.jpg",
    imagePath2: "/assets/research.jpg",
  },
  Marketing: {
    title: "Marketing and Content Teams",
    description:
      "Convert marketing materials and analytics into actionable insights.",
    icon: <Target className="text-white" size={20} />,
    features: [
      "Process campaign performance reports",
      "Extract metrics from analytics documents",
      "Digitize market research data",
    ],
    imagePath: "/assets/marketing.png",
    imagePath2: "/assets/marketing.png",
  },
  Legal: {
    title: "Legal",
    description:
      "Transform unstructured knowledge into searchable, structured content.",
    icon: <Brain className="text-white" size={20} />,
    features: [
      "Convert documentation into knowledge bases",
      "Extract insights from technical papers",
      "Process training materials",
    ],
    imagePath: "/assets/legal.png",
    imagePath2: "/assets/legal.png",
  },
};

export default function RealWorldSolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("Finance");
  const currentContent = industryContents[selectedIndustry];

  return (
    <section className="w-full py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Use case
        </div>
        <h2 className=" font-bold text-gray-800 mb-4">
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
        {Object.keys(industryContents).map((industry) => (
          <Button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            variant="ghost" // Use a base variant that doesn't impose strong background/text colors
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-colors cursor-pointer", // Base styles + reset height if needed
              selectedIndustry === industry
                ? "bg-indigo-500 text-white hover:bg-indigo-500/90" // Active state styles
                : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Inactive state styles
            )}
          >
            {industry}
          </Button>
        ))}
      </div>

      <div className="bg-[#f8fafc] rounded-3xl ">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 md:p-12 flex flex-col">
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-6">
                {currentContent.icon}
              </div>
              <h2 className=" font-bold text-gray-800 mb-3">
                {currentContent.title}
              </h2>
              <p className="text-gray-600 mb-8">{currentContent.description}</p>
              <ul className="space-y-4 mb-10">
                {currentContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="min-w-[6px] h-[6px] rounded-full bg-black mt-2 mr-3"></div>
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
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

          <div className="mt-4 relative md:mt-10 p-6">
            <div className="h-full rounded-2xl overflow-hidden">
              <Image
                src={currentContent.imagePath}
                alt={`${currentContent.title} illustration`}
                height={200}
                width={200}
                className="object-contain w-full  rounded-2xl"
              />
            </div>

            {currentContent.imagePath2 && (
              <div className="absolute bottom-8 right-8 shadow-lg rounded-xl overflow-hidden">
                <Image
                  src={currentContent.imagePath2}
                  alt={`${currentContent.title} illustration`}
                  height={200}
                  width={200}
                  className="object-contain w-full  rounded-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
