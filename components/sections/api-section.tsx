import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ApiSection() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-white to-pink-50">
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1 mb-6 text-sm font-medium rounded-full bg-slate-50">
          API integration
        </div>

        <h2 className="max-w-3xl mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Unlock Endless Possibilities with{" "}
          <span className="text-purple-500">xyz</span> API
        </h2>

        <p className="max-w-xl mb-8 text-lg text-slate-600">
          Join our waitlist and be the first person to use our API.
        </p>

        <Link
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-200"
        >
          Join waitlist <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Floating API icons */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute w-12 h-12 rounded-full bg-green-400/80 blur-sm left-1/4 top-1/3 animate-float"></div>
          <div className="absolute w-16 h-16 rounded-full bg-blue-500/90 left-1/3 top-1/4 animate-float-slow"></div>
          <div className="absolute w-14 h-14 rounded-full bg-green-500/80 blur-sm right-1/4 top-1/3 animate-float-delay"></div>
          <div className="absolute w-10 h-10 rounded-full bg-purple-400/80 blur-sm right-1/6 top-1/2 animate-float"></div>

          <div className="absolute w-14 h-14 rounded-full bg-slate-800/90 left-1/5 bottom-1/3 animate-float-slow"></div>
          <div className="absolute w-12 h-12 rounded-full bg-green-400/90 left-1/3 bottom-1/4 animate-float-delay"></div>

          <div className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/90 left-1/2 top-1/2 animate-pulse"></div>

          <div className="absolute w-16 h-16 rounded-full bg-blue-400/90 right-1/3 bottom-1/4 animate-float"></div>
          <div className="absolute w-14 h-14 rounded-full bg-orange-500/90 right-1/4 bottom-1/3 animate-float-slow"></div>
        </div>
      </div>
    </section>
  );
}
