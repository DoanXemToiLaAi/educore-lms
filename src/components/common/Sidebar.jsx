import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LogoImg from "../../assets/images/Logo-01-1.png";

// Sidebar component styled exactly like index.html + style.css
export default function Sidebar({
  isCollapsed,
  activeMenu = 2,
  onMenuClick,
  role = "system_admin",
}) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      logout();
      // Redirect to login page using React Router
      navigate("/login");
    }
  };
  // Định nghĩa menu cho từng vai trò
  const menuByRole = {
    system_admin: [
      { icon: "bx-home", label: "Tổng quan" },
      { icon: "bx-buildings", label: "Quản lý trường học" },
      { icon: "bx-book", label: "Quản lý học tập" },
      { icon: "bx-football", label: "Hoạt động ngoại khóa" },
      { icon: "bx-support", label: "Hỗ trợ hệ thống" },
      { icon: "bx-cog", label: "Cài đặt" },
    ],
    school_admin: [
      { icon: "bx-home", label: "Tổng quan" },
      { icon: "bx-book", label: "Quản lý học tập" },
      { icon: "bx-group", label: "Quản lý giáo viên" },
      { icon: "bx-user", label: "Quản lý học sinh" },
      { icon: "bx-football", label: "Hoạt động ngoại khóa" },
      { icon: "bx-cog", label: "Cài đặt" },
    ],
    teacher: [
      { icon: "bx-home", label: "Tổng quan" },
      { icon: "bx-book", label: "Lớp giảng dạy" },
      { icon: "bx-task", label: "Bài tập & Đánh giá" },
      { icon: "bx-football", label: "Hoạt động ngoại khóa" },
      { icon: "bx-support", label: "Hỗ trợ" },
    ],
    student: [
      { icon: "bx-home", label: "Tổng quan" },
      { icon: "bx-book", label: "Lớp học" },
      { icon: "bx-task", label: "Bài tập" },
      { icon: "bx-football", label: "Hoạt động ngoại khóa" },
      { icon: "bx-support", label: "Hỗ trợ" },
    ],
    parent: [
      { icon: "bx-home", label: "Tổng quan" },
      { icon: "bx-user", label: "Theo dõi học tập" },
      { icon: "bx-support", label: "Hỗ trợ" },
    ],
  };

  const menuItems = menuByRole[role] || menuByRole["system_admin"];
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {!isCollapsed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" />
      )}

      <div
        className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-lg z-30 transition-all duration-300 border-r border-gray-200 dark:border-gray-700
        ${isCollapsed ? "w-16" : "w-64"}
        ${isCollapsed ? "-translate-x-full lg:translate-x-0" : "translate-x-0"}
      `}>
        <div className="flex items-center gap-3 p-4">
          <img
            src={LogoImg}
            className="w-10 h-10 object-contain flex-shrink-0"
            alt="EduCore Logo"
          />
          {!isCollapsed && (
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
              <span className="text-blue-800 dark:text-blue-300">Edu</span>Core
            </div>
          )}
        </div>

        <nav className="mt-6">
          <ul className="space-y-1 px-3">
            {menuItems.map((item, idx) => (
              <li key={item.label}>
                <button
                  type="button"
                  title={isCollapsed ? item.label : ""}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group w-full text-left ${
                    activeMenu === idx
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onMenuClick && onMenuClick(idx);
                  }}>
                  <i
                    className={`bx ${item.icon} text-xl flex-shrink-0 ${
                      activeMenu === idx
                        ? "text-blue-600 dark:text-blue-400"
                        : ""
                    }`}></i>
                  {!isCollapsed && (
                    <span className="font-medium truncate">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-3 px-3">
            <button
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 w-full text-left"
              title={isCollapsed ? "Đăng xuất" : ""}
              onClick={handleLogout}>
              <i className="bx bx-log-out-circle text-xl flex-shrink-0"></i>
              {!isCollapsed && <span className="font-medium">Đăng xuất</span>}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
