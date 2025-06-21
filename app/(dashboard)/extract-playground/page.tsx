import React from "react";
import PlaygroundSection from "./playground-section";

export const metadata = {
  title: "Extract Playground",
  description: "Extract Playground",
};

const ExtractPlaygroundPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Extract Playground</h1>
      <section>
        <PlaygroundSection />
      </section>
    </div>
  );
};

export default ExtractPlaygroundPage;
