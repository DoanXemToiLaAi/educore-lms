import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "../context/NavigationContext";
import Sidebar from "../components/common/Sidebar";
import TopBar from "../components/common/TopBar";
import DashboardContent from "../components/dashboards/DashboardContent";

function Dashboard() {
  const { user } = useAuth();
  const { activeMenuIndex, setActiveMenu, getActiveMenuIndex } =
    useNavigation();

  // Sidebar collapse state, ghi nhớ qua localStorage
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    const stored = localStorage.getItem("sidebar-collapsed");
    // Nếu chưa có trong localStorage, mặc định là false (sidebar hiện)
    return stored === "true";
  });

  // Search form show (mobile)
  const [isSearchShow, setIsSearchShow] = useState(false);
  // Theme (dark/light) - ghi nhớ qua localStorage
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const stored = localStorage.getItem("theme-mode");
    return stored === "dark";
  });

  // Set active menu index dựa trên role khi component mount
  useEffect(() => {
    if (user?.role) {
      const correctActiveIndex = getActiveMenuIndex(user.role);
      setActiveMenu(correctActiveIndex);
    }
  }, [user?.role, getActiveMenuIndex, setActiveMenu]);

  // Ghi nhớ trạng thái mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem(
      "sidebar-collapsed",
      isSidebarCollapsed ? "true" : "false"
    );
  }, [isSidebarCollapsed]);

  // Xử lý resize window cho sidebar và search
  useEffect(() => {
    function handleResize() {
      // Chỉ tự động ẩn sidebar trên mobile nếu chưa có ghi nhớ
      const stored = localStorage.getItem("sidebar-collapsed");
      if (stored === null) {
        if (window.innerWidth < 768) {
          setIsSidebarCollapsed(true);
        } else {
          setIsSidebarCollapsed(false);
        }
      }
      if (window.innerWidth > 576) {
        setIsSearchShow(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Theme toggle effect + ghi nhớ
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme-mode", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme-mode", "light");
    }
  }, [isDarkTheme]);

  // Sidebar menu click handler
  const handleSidebarMenuClick = useCallback(
    (idx) => {
      setActiveMenu(idx);
    },
    [setActiveMenu]
  );

  // Search button click (mobile)
  const handleSearchBtnClick = useCallback((e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setIsSearchShow((show) => !show);
    }
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        activeMenu={activeMenuIndex}
        onMenuClick={handleSidebarMenuClick}
        role={user.role}
      />
      <div
        className={`transition-all duration-300 
        ${isSidebarCollapsed ? "lg:ml-16" : "lg:ml-64"}
      `}>
        {/* TopBar fixed trên cùng */}
        <div className="sticky top-0 z-40">
          <TopBar
            isSidebarCollapsed={isSidebarCollapsed}
            setIsSidebarCollapsed={setIsSidebarCollapsed}
            isSearchShow={isSearchShow}
            onSearchBtnClick={handleSearchBtnClick}
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
          />
        </div>
        {/* Main content */}
        <main className="p-4 pt-6 lg:p-6 lg:pt-8">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
