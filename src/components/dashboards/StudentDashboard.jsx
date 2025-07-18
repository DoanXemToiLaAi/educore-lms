import React, { useState } from "react";
import "../../assets/css/student-dashboard.css";

const QuickStatCard = ({ icon, title, value, color }) => (
  <li>
    <i className={`bx ${icon}`}></i>
    <div className="info">
      <h3>{value}</h3>
      <p>{title}</p>
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

  return (
    <div className="class-card">
      <div className="class-header">
        <h3 className="class-subject">{subject}</h3>
        <span className={`class-status ${realStatus}`}>
          {realStatus === "live"
            ? "Đang diễn ra"
            : realStatus === "upcoming"
            ? "Sắp tới"
            : "Đã kết thúc"}
        </span>
      </div>
      <div className="class-details">
        <p className="class-detail">GV: {teacher}</p>
        <p className="class-detail">Thời gian: {time}</p>
        <p className="class-detail">Phòng: {room}</p>
      </div>
    </div>
  );
};

const AssignmentCard = ({ title, subject, dueDate, status }) => (
  <div className="assignment-card">
    <div className="assignment-header">
      <h3 className="assignment-title">{title}</h3>
      <span className={`assignment-status ${status}`}>
        {status === "pending"
          ? "Chưa hoàn thành"
          : status === "submitted"
          ? "Đã hoàn thành"
          : "Quá hạn nộp"}
      </span>
    </div>
    <div className="assignment-details">
      <p className="assignment-detail">Môn: {subject}</p>
      <p className="assignment-detail">Hạn nộp: {dueDate}</p>
    </div>
    {status === "pending" && (
      <button className="assignment-action">
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
    <div className="student-dashboard">
      {/* Header */}
      <div className="header">
        <div className="left">
          <h1>Tổng quan</h1>
          <p>Hôm nay bạn có 3 lớp học và 2 bài tập cần hoàn thành</p>
        </div>
      </div>

      {/* Quick Stats */}
      <ul className="insights">
        <QuickStatCard
          icon="bx-book-open"
          title="Lớp học hôm nay"
          value="3"
        />
        <QuickStatCard
          icon="bx-file-blank"
          title="Bài tập chưa nộp"
          value="2"
        />
        <QuickStatCard
          icon="bx-award"
          title="Điểm trung bình"
          value="8.5"
        />
        <QuickStatCard
          icon="bx-time"
          title="Giờ học tuần này"
          value="24h"
        />
      </ul>

      {/* Main Content */}
      <div className="bottom-data">
        {/* Classes Today */}
        <div className="classes-today" style={{ maxHeight: "fit-content", width: 945}}>
          <div className="header">
            <h3>
              Lớp học hôm nay
              <span className="date-info">{getTodayString()}</span>
            </h3>
            <span 
              className="view-details"
              onClick={() => setShowScheduleModal(true)}
            >
              Xem chi tiết
            </span>
          </div>
          <div className="class-list">
            {mockClasses.map((classItem, index) => (
              <ClassCard key={index} {...classItem} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar-content">
          {/* Assignments */}
          <div className="assignments">
            <div className="header">
              <h3>Bài tập</h3>
            </div>
            <div>
              {mockAssignments.map((assignment, index) => (
                <AssignmentCard key={index} {...assignment} />
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="notifications">
            <div className="header">
              <h3>Thông báo</h3>
            </div>
            <div className="notification-list">
              <div className="notification-item">
                <div className="notification-icon blue">
                  <i className="bx bx-bell"></i>
                </div>
                <div className="notification-content">
                  <p className="notification-title">Bài kiểm tra Toán học</p>
                  <p className="notification-time">Ngày mai 8:00 AM</p>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon green">
                  <i className="bx bx-bell"></i>
                </div>
                <div className="notification-content">
                  <p className="notification-title">Điểm bài tập đã được cập nhật</p>
                  <p className="notification-time">2 giờ trước</p>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon orange">
                  <i className="bx bx-bell"></i>
                </div>
                <div className="notification-content">
                  <p className="notification-title">Nhắc nhở nộp bài tập</p>
                  <p className="notification-time">1 ngày trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="schedule-modal-overlay">
          <div className="schedule-modal">
            <h3 className="schedule-modal-title">
              Thời khóa biểu từ hôm nay đến 2 ngày tiếp theo
            </h3>
            <div>
              {scheduleByDate.map((day, idx) => (
                <div key={idx} className="schedule-day">
                  <p className="schedule-date">{day.date}</p>
                  {day.classes.length === 0 ? (
                    <div className="schedule-empty">Không có lớp học.</div>
                  ) : (
                    <div>
                      {day.classes.map((cls, i) => (
                        <div key={i} className="schedule-class">
                          <div className="schedule-class-subject">{cls.subject}</div>
                          <div className="schedule-class-detail">GV: {cls.teacher}</div>
                          <div className="schedule-class-detail">Thời gian: {cls.time}</div>
                          <div className="schedule-class-detail">Phòng: {cls.room}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="schedule-modal-actions">
              <button
                className="schedule-modal-close"
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