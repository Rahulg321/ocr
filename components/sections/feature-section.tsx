"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
  icon?: React.ReactNode;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  imageHeight?: string;
  autoPlayInterval?: number;
}

export function FeatureSteps({
  features,
  className,
  title = "How it Works",
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  // Function to determine the color based on the step index
  const getStepColor = (index: number) => {
    if (index === 0) return "bg-primary text-primary-foreground";
    if (index === 1) return "bg-orange-500 text-white";
    if (index === 2) return "bg-purple-500 text-white";
    return "bg-primary text-primary-foreground";
  };

  // Function to determine the text color based on the step index
  const getTextColor = (index: number) => {
    if (index === 0) return "text-figma-main";
    if (index === 1) return "text-orange-500";
    if (index === 2) return "text-purple-500";
    return "text-figma-main";
  };

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-start gap-6 md:gap-8 cursor-pointer relative p-4 rounded-lg transition-all duration-300"
                )}
                onClick={() => setCurrentFeature(index)}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-sm",
                      index === currentFeature
                        ? getStepColor(index)
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    <span className="text-lg font-semibold">{index + 1}</span>
                  </motion.div>
                </div>
                <div className="flex-1 flex flex-col items-start">
                  {feature.icon && (
                    <div
                      className={cn(
                        "mb-2 flex items-center justify-center",
                        index === currentFeature
                          ? getTextColor(index)
                          : "text-muted-foreground"
                      )}
                    >
                      {feature.icon}
                    </div>
                  )}
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-semibold",
                      index === currentFeature
                        ? getTextColor(index)
                        : "text-foreground"
                    )}
                  >
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-contain transition-transform transform bg-white"
                        width={1000}
                        height={500}
                      />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
