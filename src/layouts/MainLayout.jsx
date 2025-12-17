import { useState } from "react";
import Sidebar from "../components/userdashboard/Sidebar/Sidebar";
import Topbar from "../components/userdashboard/Topbar/Topbar";

export default function MainLayout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f7fb]">

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <Topbar setOpen={setSidebarOpen} />

        <div className="px-3 sm:px-5 lg:px-8 py-5 w-full max-w-[1600px] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
