"use client";

import { useEffect, useRef, useState } from "react";

export default function SolutionSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawConnections = () => {
      // Set canvas dimensions based on container
      const container = canvas.parentElement;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // Set canvas dimensions with device pixel ratio for sharpness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Get positions of all buttons and center point
      const buttons = container.querySelectorAll(".solution-button");
      const centerX = width / 2;
      const centerY = height * 0.75;

      // Draw curved lines from each button to center
      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const buttonCenterX = (rect.left + rect.right) / 2 - containerRect.left;
        const buttonCenterY = rect.bottom - containerRect.top;

        ctx.beginPath();
        ctx.moveTo(buttonCenterX, buttonCenterY);

        // Calculate control points for the curve
        const controlX1 = buttonCenterX;
        const controlY1 = buttonCenterY + (centerY - buttonCenterY) * 0.3;
        const controlX2 = centerX + (buttonCenterX - centerX) * 0.3;
        const controlY2 = centerY;

        ctx.bezierCurveTo(
          controlX1,
          controlY1,
          controlX2,
          controlY2,
          centerX,
          centerY
        );

        ctx.strokeStyle = "#8B9CFF";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    // Initial draw
    drawConnections();

    // Redraw on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      drawConnections();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16">
          Who Needs This Solution?
        </h2>

        <div className="relative min-h-[20rem] sm:min-h-[25rem] md:min-h-[28rem]">
          {/* Canvas for drawing connections */}
          <canvas ref={canvasRef} className="absolute inset-0 z-0" />

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 relative z-10">
            {[
              "Business Analysts",
              "Data Scientists",
              "E-commerce Businesses",
              "Healthcare & Finance",
              "Marketing Teams",
              "Legal & Compliance",
            ].map((text, index) => (
              <button
                key={index}
                className="solution-button bg-gray-50 hover:bg-gray-100 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base shadow-sm transition-colors"
              >
                {text}
              </button>
            ))}
          </div>

          {/* Center circle */}
          <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#5E6BFF] shadow-lg flex items-center justify-center">
              <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
