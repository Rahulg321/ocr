"use client";

import { useEffect, useRef } from "react";

export default function SolutionSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
      drawConnections();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-[#FFF5F9]">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Who Needs This Solution?
        </h2>

        <div className="relative h-[400px] md:h-[450px]">
          {/* Canvas for drawing connections */}
          <canvas ref={canvasRef} className="absolute inset-0 z-0" />

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button className="solution-button bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm md:text-base shadow-sm transition-colors">
              Business Analysts
            </button>
            <button className="solution-button bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm md:text-base shadow-sm transition-colors">
              Data Scientists
            </button>
            <button className="solution-button bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm md:text-base shadow-sm transition-colors">
              E-commerce Businesses
            </button>
            <button className="solution-button bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm md:text-base shadow-sm transition-colors">
              Healthcare & Finance
            </button>
            <button className="solution-button bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm md:text-base shadow-sm transition-colors">
              Marketing Teams
            </button>
            <button className="solution-button bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm md:text-base shadow-sm transition-colors">
              Legal & Compliance
            </button>
          </div>

          {/* Center circle */}
          <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#5E6BFF] shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
