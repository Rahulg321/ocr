import Image from "next/image";
import VLMPDF from "@/public/assets/vlm-pdf.jpg";
import VLMJPEG from "@/public/assets/vlm-jpeg.png";

const JsonDisplay = () => {
  return (
    <div className="text-sm overflow-x-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <pre className="text-gray-800 leading-relaxed">
        <code>
          {`{
  `}
          <span className="text-red-500 font-semibold">&quot;user&quot;</span>
          {`: {
    `}
          <span className="text-red-500 font-semibold">&quot;id&quot;</span>
          {`: `}
          <span className="text-green-600">101</span>
          {`,
    `}
          <span className="text-red-500 font-semibold">&quot;name&quot;</span>
          {`: `}
          <span className="text-green-600">&quot;Raunak Sharma&quot;</span>
          {`,
    `}
          <span className="text-red-500 font-semibold">&quot;email&quot;</span>
          {`: `}
          <span className="text-green-600">&quot;raunak@example.com&quot;</span>
          {`,
    `}
          <span className="text-red-500 font-semibold">
            &quot;isVerified&quot;
          </span>
          {`: `}
          <span className="text-green-600">true</span>
          {`,
    `}
          <span className="text-red-500 font-semibold">&quot;roles&quot;</span>
          {`: [`}
          <span className="text-green-600">&quot;designer&quot;</span>
          {`, `}
          <span className="text-green-600">&quot;developer&quot;</span>
          {`, `}
          <span className="text-green-600">&quot;founder&quot;</span>
          {`]
  },
  `}
          <span className="text-red-500 font-semibold">
            &quot;projects&quot;
          </span>
          {`: [
    {
      `}
          <span className="text-red-500 font-semibold">&quot;id&quot;</span>
          {`: `}
          <span className="text-green-600">&quot;p001&quot;</span>
          {`,
      `}
          <span className="text-red-500 font-semibold">&quot;title&quot;</span>
          {`: `}
          <span className="text-green-600">
            &quot;Smart Kitchen Website&quot;
          </span>
          {`
    }
  ]
}`}
        </code>
      </pre>
    </div>
  );
};

const VLMFlowDiagram = () => (
  <div className="flex flex-col items-center justify-center h-full min-h-[400px] px-2">
    {/* Top PDF */}
    <div className="flex flex-col items-center">
      <div className="bg-white rounded shadow p-1 mb-1">
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          PDF
        </span>
      </div>
      <div className="h-8 w-0.5 bg-gray-300 mb-1" />
    </div>
    {/* Top JPEG */}
    <div className="flex flex-col items-center">
      <div className="bg-white rounded shadow p-1 mb-1">
        <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
          JPEG
        </span>
      </div>
      <div className="h-8 w-0.5 bg-gray-300 mb-1" />
    </div>
    {/* Center AI Agent */}
    <div className="flex flex-col items-center mb-1">
      <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg mb-2">
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
          <rect x="14" y="10" width="4" height="12" rx="2" fill="#fff" />
        </svg>
      </div>
      <div className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded mb-2 shadow">
        VLM Powered
        <br />
        AI-Agent
      </div>
    </div>
    <div className="h-8 w-0.5 bg-gray-300 mb-1" />
    <div className="flex flex-col items-center">
      <div className="bg-white rounded shadow p-1 mb-1">
        <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
          MD
        </span>
      </div>
      <div className="h-8 w-0.5 bg-gray-300 mb-1" />
    </div>
    <div className="flex flex-col items-center">
      <div className="bg-white rounded shadow p-1">
        <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
          JSON
        </span>
      </div>
    </div>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-time Data Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Convert unstructured documents into actionable, structured formats
            instantly
          </p>
        </div>

        <div className="relative">
          {/* Main conversion diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
            {/* Left side - PDF documents */}
            <div className="w-full lg:w-5/12">
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                  <div className="text-xs font-medium text-rose-600 px-2 py-1 bg-rose-100 rounded-md">
                    PDF
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100 relative aspect-square">
                    <Image
                      src={VLMPDF.src}
                      fill
                      alt="Scientific document with charts"
                      className="w-full h-auto  object-contain rounded"
                    />
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100 relative aspect-square">
                    <Image
                      src={VLMJPEG.src}
                      fill
                      alt="Document with tables and images"
                      className="w-full h-auto  object-contain rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
            <VLMFlowDiagram />

            {/* Right side - Output formats */}
            <div className="w-full lg:w-5/12 space-y-6">
              {/* Markdown output */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Markdown File</span>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-indigo-600"
                      >
                        <path d="M22 3H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
                        <path d="M7 12v-2h2"></path>
                        <path d="M11 12v-2h2"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">
                    Natural Greenhouse Effect
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The greenhouse effect is a natural process that warms the
                    Earth&apos;s surface. When the Sun&apos;s energy reaches the
                    Earth&apos;s atmosphere, some of it is reflected back to
                    space and the rest is absorbed and re-radiated by greenhouse
                    gases.
                  </p>
                  <h4 className="font-semibold text-md mb-1">
                    Enhanced Greenhouse Effect
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Increasing the amount of greenhouse gases intensifies the
                    greenhouse effect. This is the cause of today&apos;s climate
                    conditions, nearly two centuries after the Industrial
                    Revolution began.
                  </p>
                </div>
              </div>

              {/* JSON output */}
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">JSON File</span>
                  <div className="text-xs font-medium text-amber-600 px-2 py-1 bg-amber-100 rounded-md">
                    JSON
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                  <JsonDisplay />
                </div>
              </div>
            </div>
          </div>

          {/* Connection lines for mobile */}
          <div className="lg:hidden flex flex-col items-center my-4">
            <div className="h-16 w-0.5 bg-indigo-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
