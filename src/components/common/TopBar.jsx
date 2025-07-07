import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Bell,
  Search,
  Settings,
  LogOut,
  User,
  ChevronDown,
  Menu,
  SidebarIcon,
  RotateCcw,
} from "lucide-react";

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
}) {
  const { user, logout, switchRole } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isRoleSwitchOpen, setIsRoleSwitchOpen] = useState(false);
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const handleRoleSwitch = (newRole) => {
    switchRole(newRole);
    setIsRoleSwitchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu className="h-5 w-5 text-gray-600" />
          </button>

          <h1 className="text-xl font-semibold text-gray-900">
            EduCore Dashboard
          </h1>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Sidebar Position Control */}
          <div className="relative">
            <button
              onClick={() => setIsSidebarMenuOpen(!isSidebarMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Cấu hình sidebar">
              <SidebarIcon className="h-5 w-5 text-gray-600" />
            </button>

            {isSidebarMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Vị trí Sidebar
                </div>
                {[
                  { value: "left", label: "Bên trái" },
                  { value: "right", label: "Bên phải" },
                  { value: "bottom", label: "Phía dưới" },
                ].map((position) => (
                  <button
                    key={position.value}
                    onClick={() => {
                      setSidebarPosition(position.value);
                      setIsSidebarMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                      sidebarPosition === position.value
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    }`}>
                    {position.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Role Switch */}
          <div className="relative">
            <button
              onClick={() => setIsRoleSwitchOpen(!isRoleSwitchOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Đổi vai trò (Demo)">
              <RotateCcw className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">Đổi role</span>
            </button>

            {isRoleSwitchOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Chọn vai trò
                </div>
                {Object.entries(roleLabels).map(([role, label]) => (
                  <button
                    key={role}
                    onClick={() => handleRoleSwitch(role)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                      user.role === role
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    }`}>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="h-8 w-8 rounded-full"
              />
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900">
                  {user.name}
                </div>
                <div className="text-xs text-gray-500">
                  {roleLabels[user.role]}
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>

                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                  <User className="h-4 w-4 mr-3" />
                  Hồ sơ cá nhân
                </button>

                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                  <Settings className="h-4 w-4 mr-3" />
                  Cài đặt
                </button>

                <div className="border-t border-gray-100 mt-1">
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center">
                    <LogOut className="h-4 w-4 mr-3" />
                    Đăng xuất
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
