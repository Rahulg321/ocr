import { ArrowUpRight } from "lucide-react";

export default function UnstructuredDataSection() {
  return (
    <section className="w-full py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="px-4 py-1.5 bg-white rounded-full text-sm text-gray-700">
            Problems of unstructured data
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
          Unstructured Data is a Silent Killer
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Without structured data, businesses struggle to make data-driven
          decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-purple-50 p-6 rounded-3xl relative">
            <ArrowUpRight
              className="absolute top-4 right-4 text-purple-300"
              size={24}
            />
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Manual processing is costly, time-consuming,{" "}
                <span className="text-gray-500">and error-prone</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-amber-50 p-6 rounded-3xl relative">
            <ArrowUpRight
              className="absolute top-4 right-4 text-amber-300"
              size={24}
            />
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                80% of business data is unstructured,{" "}
                <span className="text-gray-500">making it hard to use.</span>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-50 p-6 rounded-3xl relative">
            <ArrowUpRight
              className="absolute top-4 right-4 text-purple-300"
              size={24}
            />
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Data silos slow decision-making,{" "}
                <span className="text-gray-500">
                  leading to missed opportunities.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
