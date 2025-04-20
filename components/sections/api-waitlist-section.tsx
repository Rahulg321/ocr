export default function ApiWaitlistSection() {
  return (
    <section className="w-full py-16 ">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
          <span className="text-sm font-medium text-gray-800">Coming Soon</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Be the First to Access Our{" "}
          <span className="text-purple-500">API</span>
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the waitlist to get early access to powerful schema-based OCR
          APIs. Extract structured data from any document with precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg">
            Join
          </button>
        </div>
      </div>
    </section>
  );
}
