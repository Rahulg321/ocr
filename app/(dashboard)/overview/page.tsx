import React from "react";
import { OverviewSection } from "./overview-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "Overview",
};

const OverviewPage = () => {
  return (
    <div>
      <OverviewSection />
    </div>
  );
};

export default OverviewPage;
