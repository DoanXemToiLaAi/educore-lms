import React from "react";
import {
  Users,
  BookOpen,
  ClipboardList,
  MessageSquare,
  Award,
} from "lucide-react";

const StatCard = ({ icon: Icon, title, value, subtitle, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {value}
        </p>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {subtitle}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

const ClassCard = ({ className, students, subject, schedule, progress }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-gray-900 dark:text-white">
        {className}
      </h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {students} học sinh
      </span>
    </div>
    <div className="space-y-2">
      <p className="text-sm text-gray-600 dark:text-gray-400">Môn: {subject}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Lịch: {schedule}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Tiến độ:
        </span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}></div>
      </div>
    </div>
    <div className="mt-4 flex space-x-2">
      <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
        Vào lớp
      </button>
      <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        Quản lý
      </button>
    </div>
  </div>
);

const RecentActivityCard = ({ type, title, time, status }) => (
  <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
    <div
      className={`p-2 rounded-lg ${
        type === "assignment"
          ? "bg-blue-100"
          : type === "grade"
          ? "bg-green-100"
          : "bg-orange-100"
      }`}>
      {type === "assignment" ? (
        <ClipboardList className="h-4 w-4 text-blue-600" />
      ) : type === "grade" ? (
        <Award className="h-4 w-4 text-green-600" />
      ) : (
        <MessageSquare className="h-4 w-4 text-orange-600" />
      )}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
    </div>
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        status === "completed"
          ? "bg-green-100 text-green-800"
          : status === "pending"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-blue-100 text-blue-800"
      }`}>
      {status === "completed"
        ? "Hoàn thành"
        : status === "pending"
        ? "Đang chờ"
        : "Mới"}
    </span>
  </div>
);

export default function TeacherDashboard() {
  const mockClasses = [
    {
      className: "Lớp 10A1",
      students: 35,
      subject: "Toán học",
      schedule: "T2, T4, T6 - 8:00",
      progress: 75,
    },
    {
      className: "Lớp 10A2",
      students: 32,
      subject: "Toán học",
      schedule: "T3, T5, T7 - 9:00",
      progress: 68,
    },
    {
      className: "Lớp 11B1",
      students: 28,
      subject: "Toán nâng cao",
      schedule: "T2, T4 - 14:00",
      progress: 82,
    },
  ];

  const mockActivities = [
    {
      type: "assignment",
      title: "Bài tập chương 5 đã được nộp",
      time: "2 phút trước",
      status: "new",
    },
    {
      type: "grade",
      title: "Chấm xong bài kiểm tra lớp 10A1",
      time: "1 giờ trước",
      status: "completed",
    },
    {
      type: "message",
      title: "Phụ huynh gửi tin nhắn",
      time: "3 giờ trước",
      status: "pending",
    },
    {
      type: "assignment",
      title: "Tạo đề kiểm tra giữa kỳ",
      time: "1 ngày trước",
      status: "completed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Giáo viên
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Quản lý lớp học và theo dõi tiến độ học tập của học sinh
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Tổng học sinh"
          value="95"
          subtitle="3 lớp học"
          color="bg-blue-500"
        />
        <StatCard
          icon={BookOpen}
          title="Bài giảng"
          value="24"
          subtitle="Tuần này"
          color="bg-green-500"
        />
        <StatCard
          icon={ClipboardList}
          title="Bài tập chưa chấm"
          value="12"
          subtitle="Cần xử lý"
          color="bg-orange-500"
        />
        <StatCard
          icon={MessageSquare}
          title="Tin nhắn mới"
          value="5"
          subtitle="Từ phụ huynh"
          color="bg-purple-500"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Classes */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Lớp học của tôi
                </h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Tạo lớp mới
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockClasses.map((classItem, index) => (
                  <ClassCard key={index} {...classItem} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Thao tác nhanh
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                <ClipboardList className="h-4 w-4 mr-2" />
                Tạo bài kiểm tra
              </button>
              <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Tạo bài giảng
              </button>
              <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Gửi thông báo
              </button>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Hoạt động gần đây
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                {mockActivities.map((activity, index) => (
                  <RecentActivityCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
