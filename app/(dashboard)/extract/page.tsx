import { Metadata } from "next";
import React from "react";
import ExtractDashboard from "./extract-dashboard";

export const metadata: Metadata = {
  title: "Extract",
  description: "Extract",
};

const ExtractPage = () => {
  return (
    <div className="">
      <ExtractDashboard />
    </div>
  );
};

export default ExtractPage;
