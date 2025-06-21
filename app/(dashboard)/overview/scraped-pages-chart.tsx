"use client";

export function ScrapedPagesChart() {
  const chartData = [
    { date: "06/15/2025", value: 0 },
    { date: "06/17/2025", value: 0 },
    { date: "06/19/2025", value: 1 },
    { date: "06/21/2025", value: 0 },
  ];

  return (
    <div className="h-32 relative">
      <svg className="w-full h-full" viewBox="0 0 400 120">
        {/* Grid lines */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 20"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Chart line */}
        <polyline
          fill="none"
          stroke="#f97316"
          strokeWidth="2"
          points="50,100 150,100 250,20 350,100"
        />

        {/* Data points */}
        <circle cx="50" cy="100" r="3" fill="#f97316" />
        <circle cx="150" cy="100" r="3" fill="#f97316" />
        <circle cx="250" cy="20" r="3" fill="#f97316" />
        <circle cx="350" cy="100" r="3" fill="#f97316" />
      </svg>

      {/* Date labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        {chartData.map((point, index) => (
          <span key={index}>{point.date}</span>
        ))}
      </div>
    </div>
  );
}
