import { Metadata } from "next";
import React from "react";
import UsageSection from "./usage-section";

export const metadata: Metadata = {
  title: "Usage",
  description: "Usage",
};

const UsagePage = () => {
  return (
    <div>
      <UsageSection />
    </div>
  );
};

export default UsagePage;
