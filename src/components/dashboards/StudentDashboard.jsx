import React, { useState } from "react";

const QuickStatCard = ({ icon, title, value, color }) => (
  <li className="p-6 bg-white dark:bg-gray-800 rounded-2xl flex items-center gap-6 cursor-pointer shadow-sm hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all">
    <i
      className={`bx ${icon} w-20 h-20 bg-blue-600 text-white rounded-lg text-4xl flex items-center justify-center`}></i>
    <div className="flex-1">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {value}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm m-0">{title}</p>
    </div>
  </li>
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

  let statusClasses =
    "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600";
  let statusText = "Đã kết thúc";

  if (realStatus === "live") {
    statusClasses =
      "bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-600";
    statusText = "Đang diễn ra";
  } else if (realStatus === "upcoming") {
    statusClasses =
      "bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-600";
    statusText = "Sắp tới";
  }

  return (
    <div
      className={`p-5 rounded-xl border transition-all hover:shadow-sm ${statusClasses}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 m-0">
          {subject}
        </h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${
            realStatus === "live"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : realStatus === "upcoming"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
              : "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300"
          }`}>
          {statusText}
        </span>
      </div>
      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
        <p className="m-0">GV: {teacher}</p>
        <p className="m-0">Thời gian: {time}</p>
        <p className="m-0">Phòng: {room}</p>
      </div>
    </div>
  );
};

const AssignmentCard = ({ title, subject, dueDate, status }) => {
  let statusClasses =
    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  let statusText = "Quá hạn nộp";

  if (status === "pending") {
    statusClasses =
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    statusText = "Chưa hoàn thành";
  } else if (status === "submitted") {
    statusClasses =
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    statusText = "Đã hoàn thành";
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 m-0">
          {title}
        </h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${statusClasses}`}>
          {statusText}
        </span>
      </div>
      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="m-0">Môn: {subject}</p>
        <p className="m-0">Hạn nộp: {dueDate}</p>
      </div>
      {status === "pending" && (
        <button className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
          Làm bài
        </button>
      )}
    </div>
  );
};

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
    <div className="w-full text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="mb-9">
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-blue-600">
            Tổng quan
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base m-0">
            Hôm nay bạn có 3 lớp học và 2 bài tập cần hoàn thành
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
        <QuickStatCard icon="bx-book-open" title="Lớp học hôm nay" value="3" />
        <QuickStatCard
          icon="bx-file-blank"
          title="Bài tập chưa nộp"
          value="2"
        />
        <QuickStatCard icon="bx-award" title="Điểm trung bình" value="8.5" />
        <QuickStatCard icon="bx-time" title="Giờ học tuần này" value="24h" />
      </ul>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-9">
        {/* Classes Today */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
              Lớp học hôm nay
              <span className="text-sm font-semibold text-blue-600 ml-3">
                {getTodayString()}
              </span>
            </h3>
            <span
              className="text-sm text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors"
              onClick={() => setShowScheduleModal(true)}>
              Xem chi tiết
            </span>
          </div>
          <div className="space-y-4">
            {mockClasses.map((classItem, index) => (
              <ClassCard key={index} {...classItem} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Assignments */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
                Bài tập
              </h3>
            </div>
            <div className="space-y-3">
              {mockAssignments.map((assignment, index) => (
                <AssignmentCard key={index} {...assignment} />
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
                Thông báo
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="bx bx-bell text-blue-600 text-sm"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm m-0">
                    Bài kiểm tra Toán học
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 m-0">
                    Ngày mai 8:00 AM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <i className="bx bx-bell text-green-600 text-sm"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm m-0">
                    Điểm bài tập đã được cập nhật
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 m-0">
                    2 giờ trước
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center">
                  <i className="bx bx-bell text-orange-600 text-sm"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm m-0">
                    Nhắc nhở nộp bài tập
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 m-0">
                    1 ngày trước
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Thời khóa biểu từ hôm nay đến 2 ngày tiếp theo
            </h3>
            <div className="space-y-6">
              {scheduleByDate.map((day, idx) => (
                <div key={idx} className="space-y-3">
                  <p className="font-semibold text-blue-600 text-base">
                    {day.date}
                  </p>
                  {day.classes.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                      Không có lớp học.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {day.classes.map((cls, i) => (
                        <div
                          key={i}
                          className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            {cls.subject}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <div>GV: {cls.teacher}</div>
                            <div>Thời gian: {cls.time}</div>
                            <div>Phòng: {cls.room}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                onClick={() => setShowScheduleModal(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
