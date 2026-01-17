import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import AdminStats from "../components/admin/AdminStats";
import AdminTable from "../components/admin/AdminTable";
import { Clock } from "lucide-react";

const DashboardHeader = ({ isDark }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* LEFT */}
      <div>
        <h1
          className={`font-poppins text-[28px] ml-9 mt-2 font-bold leading-[100%] ${
            isDark ? "text-[#F1F5F9]" : "text-gray-900"
          }`}
        >
          Dashboard Overview
        </h1>

        <p
          className={`mt-[18px] ml-9 font-poppins text-[18.5px] font-semibold leading-[100%] ${
            isDark ? "text-[#94A3B8]" : "text-gray-600"
          }`}
        >
          Welcome back, here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* RIGHT: LAST UPDATED BOX */}
      <div
        className={`w-[238px] h-[42px] flex items-center gap-2 px-[12px] rounded-[7px] ${
          isDark ? "bg-[#1E293B]" : "bg-[#F1F5F9]"
        }`}
      >
      
        <span
          className={`font-poppins text-[11px] font-semibold leading-[100%] ${
            isDark ? "text-[#64748B]" : "text-gray-500"
          } whitespace-nowrap`}
        >
          Last updated: Just now
        </span>
         <Clock className={`ml-16 w-4 h-4 ${isDark ? "text-[#64748B]" : "text-gray-500"}`} />
      </div>
    </div>
  );
};

const Admin = () => {
  // Initialize theme from localStorage
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("admin-dark-mode");
    return savedTheme === "true";
  });

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("admin-dark-mode", isDark);
  }, [isDark]);

  return (
    <div
      className={`flex min-h-screen transition-colors ${
        isDark ? "bg-[#0B1220] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <AdminSidebar isDark={isDark} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader isDark={isDark} setIsDark={setIsDark} />

        {/* Dashboard content */}
        <main className="flex-1 p-6">
          {/* Dashboard Overview */}
          <DashboardHeader isDark={isDark} />

          {/* Stats Cards */}
          <div className="mb-6">
            <AdminStats isDark={isDark} />
          </div>

          {/* Table / Charts */}
          <AdminTable isDark={isDark} />
        </main>
      </div>
    </div>
  );
};

export default Admin;
