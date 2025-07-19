import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "../../context/NavigationContext";
import SystemAdminDashboard from "./SystemAdminDashboard";
import SchoolAdminDashboard from "./SchoolAdminDashboard";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import ParentDashboard from "./ParentDashboard";

// Component tạm cho các trang chưa được implement
const PlaceholderPage = ({ title }) => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
    <p className="text-gray-500">Trang này đang được phát triển.</p>
  </div>
);

export default function DashboardContent() {
  const { user } = useAuth();
  const { activeMenuIndex } = useNavigation();

  // Định nghĩa các component cho từng menu item của từng role
  const contentByRole = {
    system_admin: [
      SystemAdminDashboard,                                    // 0: Tổng quan
      () => <PlaceholderPage title="Quản lý trường học" />,   // 1: Quản lý trường học
      () => <PlaceholderPage title="Quản lý học tập" />,      // 2: Quản lý học tập
      () => <PlaceholderPage title="Hoạt động ngoại khóa" />, // 3: Hoạt động ngoại khóa
      () => <PlaceholderPage title="Hỗ trợ hệ thống" />,      // 4: Hỗ trợ hệ thống
      () => <PlaceholderPage title="Cài đặt" />,              // 5: Cài đặt
    ],
    school_admin: [
      SchoolAdminDashboard,                                    // 0: Tổng quan
      () => <PlaceholderPage title="Quản lý học tập" />,      // 1: Quản lý học tập
      () => <PlaceholderPage title="Quản lý giáo viên" />,    // 2: Quản lý giáo viên
      () => <PlaceholderPage title="Quản lý học sinh" />,     // 3: Quản lý học sinh
      () => <PlaceholderPage title="Hoạt động ngoại khóa" />, // 4: Hoạt động ngoại khóa
      () => <PlaceholderPage title="Cài đặt" />,              // 5: Cài đặt
    ],
    teacher: [
      TeacherDashboard,                                        // 0: Tổng quan
      () => <PlaceholderPage title="Lớp giảng dạy" />,        // 1: Lớp giảng dạy
      () => <PlaceholderPage title="Bài tập & Đánh giá" />,   // 2: Bài tập & Đánh giá
      () => <PlaceholderPage title="Hoạt động ngoại khóa" />, // 3: Hoạt động ngoại khóa
      () => <PlaceholderPage title="Hỗ trợ" />,               // 4: Hỗ trợ
    ],
    student: [
      StudentDashboard,                                        // 0: Tổng quan
      () => <PlaceholderPage title="Lớp học" />,              // 1: Lớp học
      () => <PlaceholderPage title="Bài tập" />,              // 2: Bài tập
      () => <PlaceholderPage title="Hoạt động ngoại khóa" />, // 3: Hoạt động ngoại khóa
      () => <PlaceholderPage title="Hỗ trợ" />,               // 4: Hỗ trợ
    ],
    parent: [
      ParentDashboard,                                         // 0: Tổng quan
      () => <PlaceholderPage title="Theo dõi học tập" />,     // 1: Theo dõi học tập
      () => <PlaceholderPage title="Hỗ trợ" />,               // 2: Hỗ trợ
    ],
  };

  const roleComponents = contentByRole[user.role] || contentByRole["system_admin"];
  const ContentComponent = roleComponents[activeMenuIndex] || roleComponents[0];

  if (!ContentComponent) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          Nội dung không tìm thấy cho vai trò này.
        </p>
      </div>
    );
  }

  return <ContentComponent />;
}
