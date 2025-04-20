import DashboardHeader from "@/components/dashboard-header";
import { HistoryTable } from "@/components/history-table";
import React from "react";

const HistoryPage = () => {
  return (
    <div className="flex big-container flex-col min-h-screen">
      <DashboardHeader
        title="History"
        subtitle="View your file processing history"
      />
      <HistoryTable />
    </div>
  );
};

export default HistoryPage;
