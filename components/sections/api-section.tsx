import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function ApiSection() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-white to-pink-50">
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 mx-auto text-center">
        <Button variant={"outline"} className="text-purple-500">
          API integration
        </Button>

        <h2 className="">
          Unlock Endless Possibilities with{" "}
          <span className="text-purple-500">Extractr</span> API
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
    </section>
  );
}
