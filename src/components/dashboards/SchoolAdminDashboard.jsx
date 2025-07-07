import React from "react";
import {
  Users,
  GraduationCap,
  Calendar,
  BarChart3,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {change && (
          <p
            className={`text-sm mt-1 ${
              change.positive ? "text-green-600" : "text-red-600"
            }`}>
            {change.positive ? "+" : ""}
            {change.value}% so với tháng trước
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

const ClassOverviewCard = ({
  grade,
  totalClasses,
  totalStudents,
  averageScore,
}) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-gray-900">Khối {grade}</h3>
      <span className="text-sm text-gray-500">{totalClasses} lớp</span>
    </div>
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Học sinh:</span>
        <span className="font-medium">{totalStudents}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Điểm TB:</span>
        <span className="font-medium text-blue-600">{averageScore}</span>
      </div>
    </div>
  </div>
);

export default function SchoolAdminDashboard() {
  const mockGrades = [
    { grade: 10, totalClasses: 8, totalStudents: 280, averageScore: 8.2 },
    { grade: 11, totalClasses: 7, totalStudents: 245, averageScore: 7.9 },
    { grade: 12, totalClasses: 6, totalStudents: 210, averageScore: 8.5 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Quản trị trường học
        </h1>
        <p className="text-gray-600 mt-1">
          Tổng quan và quản lý toàn bộ hoạt động của trường
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={UserCheck}
          title="Tổng học sinh"
          value="735"
          change={{ value: 5.2, positive: true }}
          color="bg-blue-500"
        />
        <StatCard
          icon={GraduationCap}
          title="Giáo viên"
          value="45"
          change={{ value: 2.1, positive: true }}
          color="bg-green-500"
        />
        <StatCard
          icon={Users}
          title="Lớp học"
          value="21"
          color="bg-purple-500"
        />
        <StatCard
          icon={BarChart3}
          title="Điểm TB trường"
          value="8.2"
          change={{ value: 3.5, positive: true }}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Tổng quan theo khối
                </h2>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {mockGrades.map((grade, index) => (
                  <ClassOverviewCard key={index} {...grade} />
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Thời khóa biểu hôm nay
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">
                        Tiết 1-2: Toán học
                      </p>
                      <p className="text-sm text-gray-600">
                        Lớp 10A1 - GV: Nguyễn Văn A
                      </p>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">
                      7:00 - 8:30
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">
                        Tiết 3-4: Văn học
                      </p>
                      <p className="text-sm text-gray-600">
                        Lớp 11B2 - GV: Trần Thị B
                      </p>
                    </div>
                    <span className="text-sm text-green-600 font-medium">
                      8:45 - 10:15
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">
                        Tiết 5-6: Tiếng Anh
                      </p>
                      <p className="text-sm text-gray-600">
                        Lớp 12A3 - GV: Lê Văn C
                      </p>
                    </div>
                    <span className="text-sm text-orange-600 font-medium">
                      10:30 - 12:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Thao tác nhanh
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Tạo lớp học mới
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Quản lý giáo viên
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Xem báo cáo
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Báo cáo gần đây
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Báo cáo học tập tháng 12
                  </p>
                  <p className="text-xs text-gray-500">Cập nhật 2 giờ trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Thống kê điểm danh
                  </p>
                  <p className="text-xs text-gray-500">Cập nhật 1 ngày trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Calendar className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Lịch thi cuối kỳ
                  </p>
                  <p className="text-xs text-gray-500">Cập nhật 3 ngày trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
