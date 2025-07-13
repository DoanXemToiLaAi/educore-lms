import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isCollapsed, activeMenu = 2, onMenuClick }) {
  const navigate = useNavigate();
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
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex items-center space-x-2 px-6 py-4 w-full hover:bg-gray-50">
        <i className="bx bx-code-alt text-2xl text-blue-600"></i>
        <div
          className={`font-bold text-xl transition-opacity duration-200 ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}>
          <span className="text-blue-600">Edu</span>Core
        </div>
      </button>

      <ul className="py-4">
        {menuItems.map((item, idx) => (
          <li
            key={item.label}
            className={`px-4 py-2 ${activeMenu === idx ? "bg-blue-50" : ""}`}>
            <button
              type="button"
              className="flex items-center w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => onMenuClick && onMenuClick(idx)}>
              <i
                className={`bx ${item.icon} text-xl ${
                  activeMenu === idx ? "text-blue-600" : "text-gray-600"
                }`}></i>
              <span
                className={`ml-3 text-sm transition-opacity duration-200 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                } ${
                  activeMenu === idx
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                }`}>
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 w-full py-4 border-t">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full px-6 py-2 flex items-center text-gray-600 hover:bg-gray-50 transition-colors">
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
          className="w-full px-6 py-2 flex items-center text-red-600 hover:bg-red-50 transition-colors">
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
