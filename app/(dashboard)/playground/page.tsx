import { Metadata } from "next";
import React from "react";
import PlaygroundSection from "./playground-section";

export const metadata: Metadata = {
  title: "Playground",
  description: "Playground",
};

const PlaygroundPage = () => {
  return (
    <div>
      <PlaygroundSection />
    </div>
  );
};

export default PlaygroundPage;
