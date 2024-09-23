import DashboardSidebar from "../components/DashboardSidebar";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    // Whole Screen
    <section className="w-full h-screen flex">
      {/* Left Side */}
      <DashboardSidebar />
      {/* Right Side */}
      <main className="w-full h-full bg-white dark:bg-zinc-900/30 p-4">
        {/* Content */}
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
