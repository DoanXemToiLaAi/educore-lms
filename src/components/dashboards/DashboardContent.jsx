import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import SystemAdminDashboard from "./SystemAdminDashboard";
import SchoolAdminDashboard from "./SchoolAdminDashboard";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import ParentDashboard from "./ParentDashboard";

export default function DashboardContent() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  const dashboardComponents = {
    system_admin: SystemAdminDashboard,
    school_admin: SchoolAdminDashboard,
    teacher: TeacherDashboard,
    student: StudentDashboard,
    parent: ParentDashboard,
  };

  const DashboardComponent = dashboardComponents[user.role];

  if (!DashboardComponent) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          Dashboard không tìm thấy cho vai trò này.
        </p>
      </div>
    );
  }

  return <DashboardComponent theme={theme} setTheme={setTheme} />;
}
