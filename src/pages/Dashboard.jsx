import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/common/Sidebar";
import TopBar from "../components/common/TopBar";
import DashboardContent from "../components/dashboards/DashboardContent";

export default function Dashboard() {
  const { user } = useAuth();
  const [sidebarPosition, setSidebarPosition] = useState("left");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <TopBar
        sidebarPosition={sidebarPosition}
        setSidebarPosition={setSidebarPosition}
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />

      <div
        className={`flex ${
          sidebarPosition === "bottom" ? "flex-col" : "flex-row"
        } pt-16`}>
        {sidebarPosition === "right" ? (
          <>
            <main className="flex-1 p-6">
              <DashboardContent />
            </main>
            <Sidebar
              position={sidebarPosition}
              isCollapsed={isSidebarCollapsed}
            />
          </>
        ) : sidebarPosition === "bottom" ? (
          <>
            <main className="flex-1 p-6">
              <DashboardContent />
            </main>
            <Sidebar
              position={sidebarPosition}
              isCollapsed={isSidebarCollapsed}
            />
          </>
        ) : (
          <>
            <Sidebar
              position={sidebarPosition}
              isCollapsed={isSidebarCollapsed}
            />
            <main className="flex-1 p-6">
              <DashboardContent />
            </main>
          </>
        )}
      </div>
    </div>
  );
}
