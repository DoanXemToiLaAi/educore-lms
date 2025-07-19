import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar({
  isCollapsed: propIsCollapsed,
  activeMenu = 2,
  onMenuClick,
}) {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [isCollapsedState, setIsCollapsedState] = useState(false);

  // Use prop if provided, otherwise use internal state
  const isCollapsed =
    propIsCollapsed !== undefined ? propIsCollapsed : isCollapsedState;
  const toggleCollapse = () => {
    if (propIsCollapsed === undefined) {
      setIsCollapsedState(!isCollapsedState);
    }
  };

  const menuItems = [
    { icon: "bxs-dashboard", label: "Tổng quan" },
    { icon: "bx-store-alt", label: "Quản lý trường học" },
    { icon: "bx-analyse", label: "Quản lý học tập" },
    { icon: "bx-message-square-dots", label: "Hoạt động ngoại khóa" },
    { icon: "bx-group", label: "Hỗ trợ hệ thống" },
    { icon: "bx-cog", label: "Cài đặt" },
  ];
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}>
      <button
        onClick={toggleCollapse}
        className={`absolute -right-4 top-10 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md border border-gray-200 dark:border-gray-700 z-10 ${
          propIsCollapsed !== undefined ? "hidden" : ""
        }`}>
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        )}
      </button>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex items-center space-x-2 px-6 py-4 w-full hover:bg-gray-50 dark:hover:bg-gray-700">
        <i className="bx bx-code-alt text-2xl text-blue-600"></i>
        <div
          className={`font-bold text-xl transition-opacity duration-200 ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}>
          <span className="text-blue-600 dark:text-blue-400">Edu</span>
          <span className="dark:text-white">Core</span>
        </div>
      </button>

      <ul className="py-4">
        {menuItems.map((item, idx) => (
          <li
            key={item.label}
            className={`px-4 py-2 ${
              activeMenu === idx ? "bg-blue-50 dark:bg-blue-900/30" : ""
            }`}>
            <button
              type="button"
              className="flex items-center w-full px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => onMenuClick && onMenuClick(idx)}>
              <i
                className={`bx ${item.icon} text-xl ${
                  activeMenu === idx
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}></i>
              <span
                className={`ml-3 text-sm transition-opacity duration-200 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                } ${
                  activeMenu === idx
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-600 dark:text-gray-400"
                }`}>
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 w-full py-4 border-t dark:border-gray-700">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full px-6 py-2 flex items-center text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <i className="bx bx-arrow-back text-xl"></i>
          <span
            className={`ml-3 text-sm transition-opacity duration-200 ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}>
            Quay lại
          </span>
        </button>
        <button
          type="button"
          className="w-full px-6 py-2 flex items-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
          <i className="bx bx-log-out-circle text-xl"></i>
          <span
            className={`ml-3 text-sm transition-opacity duration-200 ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}>
            Đăng xuất
          </span>
        </button>
      </div>
    </div>
  );
}
