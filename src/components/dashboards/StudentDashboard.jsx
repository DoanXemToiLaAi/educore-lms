import React from "react";
import { BookOpen, Award, Clock, Play, FileText, Bell } from "lucide-react";

const QuickStatCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center space-x-3">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const ClassCard = ({ subject, teacher, time, room, status }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-gray-900">{subject}</h3>
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === "live"
            ? "bg-red-100 text-red-800"
            : status === "upcoming"
            ? "bg-blue-100 text-blue-800"
            : "bg-gray-100 text-gray-800"
        }`}>
        {status === "live"
          ? "Đang diễn ra"
          : status === "upcoming"
          ? "Sắp tới"
          : "Đã kết thúc"}
      </span>
    </div>
    <div className="space-y-1 text-sm text-gray-600">
      <p>GV: {teacher}</p>
      <p>Thời gian: {time}</p>
      <p>Phòng: {room}</p>
    </div>
    {status === "live" && (
      <button className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center">
        <Play className="h-4 w-4 mr-2" />
        Tham gia ngay
      </button>
    )}
  </div>
);

const AssignmentCard = ({ title, subject, dueDate, status }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === "pending"
            ? "bg-yellow-100 text-yellow-800"
            : status === "submitted"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}>
        {status === "pending"
          ? "Chưa nộp"
          : status === "submitted"
          ? "Đã nộp"
          : "Quá hạn"}
      </span>
    </div>
    <div className="space-y-1 text-sm text-gray-600">
      <p>Môn: {subject}</p>
      <p>Hạn nộp: {dueDate}</p>
    </div>
    {status === "pending" && (
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
        Làm bài
      </button>
    )}
  </div>
);

export default function StudentDashboard() {
  const mockClasses = [
    {
      subject: "Toán học",
      teacher: "Nguyễn Văn A",
      time: "8:00 - 9:30",
      room: "Phòng 101",
      status: "live",
    },
    {
      subject: "Văn học",
      teacher: "Trần Thị B",
      time: "10:00 - 11:30",
      room: "Phòng 102",
      status: "upcoming",
    },
    {
      subject: "Tiếng Anh",
      teacher: "Lê Văn C",
      time: "14:00 - 15:30",
      room: "Phòng 103",
      status: "completed",
    },
  ];

  const mockAssignments = [
    {
      title: "Bài tập chương 3",
      subject: "Toán học",
      dueDate: "25/12/2024",
      status: "pending",
    },
    {
      title: "Luận văn về Truyện Kiều",
      subject: "Văn học",
      dueDate: "28/12/2024",
      status: "submitted",
    },
    {
      title: "Bài kiểm tra Unit 5",
      subject: "Tiếng Anh",
      dueDate: "20/12/2024",
      status: "overdue",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1E3A8A]">Chào mừng trở lại!</h1>
        <p className="text-gray-600 mt-1">
          Hôm nay bạn có 3 lớp học và 2 bài tập cần hoàn thành
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickStatCard
          icon={BookOpen}
          title="Lớp học hôm nay"
          value="3"
          color="bg-blue-500"
        />
        <QuickStatCard
          icon={FileText}
          title="Bài tập chưa nộp"
          value="2"
          color="bg-orange-500"
        />
        <QuickStatCard
          icon={Award}
          title="Điểm trung bình"
          value="8.5"
          color="bg-green-500"
        />
        <QuickStatCard
          icon={Clock}
          title="Giờ học tuần này"
          value="24h"
          color="bg-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Lớp học hôm nay
                </h2>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockClasses.map((classItem, index) => (
                  <ClassCard key={index} {...classItem} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Bài tập</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockAssignments.map((assignment, index) => (
                  <AssignmentCard key={index} {...assignment} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Thông báo</h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start space-x-3">
                <Bell className="h-4 w-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Bài kiểm tra Toán học
                  </p>
                  <p className="text-xs text-gray-500">Ngày mai 8:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Bell className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Điểm bài tập đã được cập nhật
                  </p>
                  <p className="text-xs text-gray-500">2 giờ trước</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Bell className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Nhắc nhở nộp bài tập
                  </p>
                  <p className="text-xs text-gray-500">1 ngày trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
