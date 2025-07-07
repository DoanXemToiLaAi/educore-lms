import React from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Home,
  Users,
  BookOpen,
  Calendar,
  FileText,
  Settings,
  BarChart3,
  GraduationCap,
  School,
  UserCheck,
  ClipboardList,
  MessageSquare,
  Award,
  Clock,
  Bell,
} from "lucide-react";

const sidebarMenus = {
  system_admin: [
    { icon: Home, label: "Tổng quan", active: true },
    { icon: School, label: "Quản lý Tenant" },
    { icon: Users, label: "Quản lý người dùng" },
    { icon: Settings, label: "Cấu hình hệ thống" },
    { icon: BarChart3, label: "Báo cáo tổng hợp" },
    { icon: FileText, label: "Logs hệ thống" },
  ],
  school_admin: [
    { icon: Home, label: "Tổng quan", active: true },
    { icon: Users, label: "Quản lý lớp học" },
    { icon: Calendar, label: "Thời khóa biểu" },
    { icon: GraduationCap, label: "Quản lý giáo viên" },
    { icon: UserCheck, label: "Quản lý học sinh" },
    { icon: BarChart3, label: "Báo cáo trường" },
    { icon: Settings, label: "Cài đặt trường" },
  ],
  teacher: [
    { icon: Home, label: "Tổng quan", active: true },
    { icon: Users, label: "Lớp của tôi" },
    { icon: BookOpen, label: "Bài giảng" },
    { icon: ClipboardList, label: "Tạo đề kiểm tra" },
    { icon: FileText, label: "Chấm bài" },
    { icon: MessageSquare, label: "Gửi thông báo" },
    { icon: BarChart3, label: "Báo cáo học tập" },
  ],
  student: [
    { icon: Home, label: "Tổng quan", active: true },
    { icon: Calendar, label: "Thời khóa biểu" },
    { icon: BookOpen, label: "Bài học" },
    { icon: ClipboardList, label: "Bài kiểm tra" },
    { icon: Award, label: "Điểm số" },
    { icon: Bell, label: "Thông báo" },
    { icon: FileText, label: "Tài liệu" },
  ],
  parent: [
    { icon: Home, label: "Tổng quan", active: true },
    { icon: GraduationCap, label: "Tiến độ học tập" },
    { icon: Calendar, label: "Lịch học của con" },
    { icon: Award, label: "Kết quả học tập" },
    { icon: MessageSquare, label: "Tin nhắn từ GV" },
    { icon: Bell, label: "Thông báo" },
    { icon: Clock, label: "Lịch sử hoạt động" },
  ],
};

export default function Sidebar({ position, isCollapsed }) {
  const { user } = useAuth();
  const menuItems = sidebarMenus[user.role] || [];

  const sidebarClasses = {
    left: `fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? "w-16" : "w-64"
    }`,
    right: `fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white border-l border-gray-200 transition-all duration-300 ${
      isCollapsed ? "w-16" : "w-64"
    }`,
    bottom: `fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300 ${
      isCollapsed ? "h-16" : "h-48"
    }`,
  };

  if (position === "bottom") {
    return (
      <aside className={sidebarClasses[position]}>
        <div
          className={`p-4 ${isCollapsed ? "h-16" : "h-full"} overflow-y-auto`}>
          {isCollapsed ? (
            <div className="flex space-x-2 justify-center">
              {menuItems.slice(0, 6).map((item, index) => (
                <button
                  key={index}
                  className={`p-2 rounded-lg transition-colors ${
                    item.active
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  title={item.label}>
                  <item.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                    item.active
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}>
                  <item.icon className="h-5 w-5 mb-1" />
                  <span className="text-xs text-center">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>
    );
  }

  return (
    <aside className={sidebarClasses[position]}>
      <div className="p-4 h-full overflow-y-auto">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              title={isCollapsed ? item.label : ""}>
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
