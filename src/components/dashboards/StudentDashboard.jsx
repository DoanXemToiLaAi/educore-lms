import React, { useState } from "react";
import { BookOpen, Award, Clock, Play, FileText, Bell } from "lucide-react";

const QuickStatCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white flex items-center justify-center py-6 rounded-lg shadow-sm border border-gray-100 h-28">
    <div className={`p-4 rounded-lg mr-16 flex-shrink-0 flex items-center justify-center ${color}`}>
      <Icon className="h-10 w-10 text-white" />
    </div>
    <div className="flex flex-col items-center justify-center ml-2">
      <p className="text-base font-semibold text-gray-700">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  </div>
);

const getClassStatus = (start, end) => {
  const now = new Date();
  const [startH, startM] = start.split(":").map(Number);
  const [endH, endM] = end.split(":").map(Number);
  const startTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    startH,
    startM
  );
  const endTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    endH,
    endM
  );

  if (now >= startTime && now <= endTime) return "live";
  if (now < startTime) return "upcoming";
  return "completed";
};

const ClassCard = ({ subject, teacher, time, room, status }) => {
  // Tính trạng thái thực tế theo thời gian
  const [start, end] = time.split(" - ").map((t) => t.trim());
  const realStatus = getClassStatus(start, end);

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{subject}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            realStatus === "live"
              ? "bg-green-100 text-green-800"
              : realStatus === "upcoming"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {realStatus === "live"
            ? "Đang diễn ra"
            : realStatus === "upcoming"
            ? "Sắp tới"
            : "Đã kết thúc"}
        </span>
      </div>
      <div className="space-y-1 text-sm text-gray-600">
        <p>GV: {teacher}</p>
        <p>Thời gian: {time}</p>
        <p>Phòng: {room}</p>
      </div>
    </div>
  );
};

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
        }`}
      >
        {status === "pending"
          ? "Chưa hoàn thành"
          : status === "submitted"
          ? "Đã hoàn thành"
          : "Quá hạn nộp"}
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
      time: "19:50 - 20:35",
      room: "Phòng 101",
      status: "live",
    },
    {
      subject: "Văn học",
      teacher: "Trần Thị B",
      time: "20:40 - 21:25",
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

  // Thêm state cho modal xem chi tiết
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Hàm lấy ngày hiện tại dạng DD/MM/YYYY
  function getTodayString(offset = 0) {
    const now = new Date();
    now.setDate(now.getDate() + offset);
    return `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${now.getFullYear()}`;
  }

  // Giả lập thời khóa biểu cho 3 ngày liên tiếp
  const scheduleByDate = [
    {
      date: getTodayString(0),
      classes: [
        {
          subject: "Toán học",
          teacher: "Nguyễn Văn A",
          time: "19:50 - 20:35",
          room: "Phòng 101",
        },
        {
          subject: "Văn học",
          teacher: "Trần Thị B",
          time: "20:40 - 21:25",
          room: "Phòng 102",
        },
      ],
    },
    {
      date: getTodayString(1),
      classes: [
        {
          subject: "Tiếng Anh",
          teacher: "Lê Văn C",
          time: "14:00 - 15:30",
          room: "Phòng 103",
        },
      ],
    },
    {
      date: getTodayString(2),
      classes: [
        {
          subject: "Tin học",
          teacher: "Phạm Văn D",
          time: "08:00 - 09:30",
          room: "Phòng 104",
        },
      ],
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
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  Lớp học hôm nay
                  <span className="ml-3 text-base font-semibold text-blue-900">
                    {getTodayString()}
                  </span>
                </h2>
                <button
                  className="text-blue-600 text-sm font-medium hover:text-blue-700"
                  onClick={() => setShowScheduleModal(true)}
                >
                  Xem chi tiết
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

      {/* Modal xem chi tiết thời khóa biểu 3 ngày */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-[400px] max-w-lg w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Thời khóa biểu từ hôm nay đến 2 ngày tiếp theo
            </h3>
            <div className="space-y-6">
              {scheduleByDate.map((day, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-blue-700 mb-2">
                    {day.date}
                  </p>
                  {day.classes.length === 0 ? (
                    <div className="text-gray-500 mb-2">Không có lớp học.</div>
                  ) : (
                    <div className="space-y-2">
                      {day.classes.map((cls, i) => (
                        <div key={i} className="p-3 rounded-lg border bg-gray-50">
                          <div className="font-medium text-gray-900">{cls.subject}</div>
                          <div className="text-sm text-gray-600">GV: {cls.teacher}</div>
                          <div className="text-sm text-gray-600">Thời gian: {cls.time}</div>
                          <div className="text-sm text-gray-600">Phòng: {cls.room}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
                onClick={() => setShowScheduleModal(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
