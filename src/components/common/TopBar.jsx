import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const roleLabels = {
  system_admin: "Quản trị hệ thống",
  school_admin: "Quản trị trường",
  teacher: "Giáo viên",
  student: "Học sinh",
  parent: "Phụ huynh",
};

export default function TopBar({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  isSearchShow = false,
  onSearchBtnClick,
  isDarkTheme = false,
  setIsDarkTheme,
}) {
  const { user, switchRole } = useAuth();
  const [isRoleSwitchOpen, setIsRoleSwitchOpen] = useState(false);
  const roleRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    if (!isRoleSwitchOpen) return;
    function handleClickOutside(event) {
      if (roleRef.current && !roleRef.current.contains(event.target)) {
        setIsRoleSwitchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isRoleSwitchOpen]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsSidebarCollapsed((v) => !v)}>
          <i className="bx bx-menu text-2xl text-blue-600 dark:text-blue-400"></i>
        </button>

        <form
          className={`relative transition-all duration-300 ${
            isSearchShow ? "w-80" : "w-64"
          }`}>
          <div className="relative">
            <input
              type="search"
              placeholder="Tìm kiếm..."
              className={`w-full pl-4 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                isSearchShow ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              type="submit"
              onClick={onSearchBtnClick}>
              <i
                className={`bx ${
                  isSearchShow ? "bx-x" : "bx-search"
                } text-gray-500 dark:text-gray-400`}></i>
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={isDarkTheme ? "Light mode" : "Dark mode"}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsDarkTheme && setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? (
            <i className="bx bx-moon text-2xl text-blue-600 transition-colors"></i>
          ) : (
            <i className="bx bx-sun text-2xl text-yellow-500 transition-colors"></i>
          )}
        </button>

        <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <i className="bx bx-bell text-2xl text-gray-600 dark:text-gray-400"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
            12
          </span>
        </button>

        <button className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <img
            src={require("../../assets/images/avatar.jpg")}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      </div>
    </nav>
  );
}
