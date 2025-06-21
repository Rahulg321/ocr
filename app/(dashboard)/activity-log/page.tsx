import React from "react";
import LogsSection from "./logs-section";

export const metadata = {
  title: "Activity Log",
  description: "Activity Log",
};

const ActivityLogPage = () => {
  return (
    <div>
      <LogsSection />
    </div>
  );
};

export default ActivityLogPage;
