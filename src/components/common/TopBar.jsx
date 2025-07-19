"use client";

import { useState } from "react";
import {
  Menu,
  Search,
  Sun,
  Moon,
  LogOut,
  ChevronDown,
  User,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const roleLabels = {
  system_admin: "Quản trị hệ thống",
  school_admin: "Quản trị trường",
  teacher: "Giáo viên",
  student: "Học sinh",
  parent: "Phụ huynh",
};

export default function TopBar({
  sidebarPosition,
  setSidebarPosition,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  isSearchShow,
  onSearchBtnClick,
  theme,
  setTheme,
}) {
  const { user, logout } = useAuth();
  const { theme: contextTheme, setTheme: setContextTheme } = useTheme();
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  // Use props if provided, otherwise use context
  const currentTheme = theme !== undefined ? theme : contextTheme;
  const toggleTheme = setTheme || setContextTheme;

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-700">
          <Menu className="h-5 w-5" />
        </button>

        {/* Search */}
        <div
          className={`relative ${isSearchShow ? "block" : "hidden md:block"}`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition-all duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
          />
        </div>

        <button
          onClick={onSearchBtnClick}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-700">
          <Search className="h-5 w-5" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3">
        {/* Role Switch */}
        <div className="relative">
          <button
            onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
            className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800">
            <User className="h-4 w-4 mr-2" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">
                {user?.name || "Người dùng"}
              </span>
              <span className="text-xs opacity-80">
                {roleLabels[user?.role] || "Người dùng"}
              </span>
            </div>
            <ChevronDown
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                isRoleDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isRoleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden">
              {Object.entries(roleLabels).map(([role, label]) => (
                <button
                  key={role}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    user?.role === role
                      ? "bg-blue-50 text-blue-600 font-medium dark:bg-blue-900 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() =>
            toggleTheme(currentTheme === "dark" ? "light" : "dark")
          }
          className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-700">
          {currentTheme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-blue-500" />
          )}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200">
          <LogOut className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Đăng xuất</span>
        </button>
      </div>
    </nav>
  );
}
