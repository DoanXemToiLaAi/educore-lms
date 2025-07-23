
import React from "react";
import '../../assets/css/teacher-dashboard.css';

// Thống kê tổng quan
const stats = [
  {
    icon: "bx-group",
    label: "Tổng học sinh",
    value: 95,
    sub: "3 lớp học",
    color: "var(--primary)",
    bg: "var(--light-primary)"
  },
  {
    icon: "bx-book",
    label: "Bài giảng",
    value: 24,
    sub: "Tuần này",
    color: "var(--success)",
    bg: "var(--light-success)"
  },
  {
    icon: "bx-task",
    label: "Bài kiểm tra",
    value: 8,
    sub: "Đã tạo",
    color: "var(--warning)",
    bg: "var(--light-warning)"
  },
  {
    icon: "bx-message",
    label: "Tin nhắn mới",
    value: 5,
    sub: "Từ phụ huynh",
    color: "#7C3AED",
    bg: "#EDE9FE"
  }
];

// Lịch dạy học trong tuần
const weeklySchedule = [
  { day: "Thứ 2", date: "14/07", lessons: [
    { time: "07:00 - 07:45", class: "10A1", subject: "Toán", room: "A101", status: "completed" },
    { time: "07:55 - 08:40", class: "10A1", subject: "Toán", room: "A101", status: "completed" },
    { time: "08:50 - 09:35", class: "10A2", subject: "Toán", room: "A102", status: "completed" },
    { time: "09:45 - 10:30", class: "10A2", subject: "Toán", room: "A102", status: "completed" },
    { time: "14:00 - 14:45", class: "11B1", subject: "Toán nâng cao", room: "B201", status: "completed" }
  ]},
  { day: "Thứ 3", date: "15/07", lessons: [
    { time: "07:00 - 07:45", class: "11B1", subject: "Toán nâng cao", room: "B201", status: "completed" },
    { time: "08:50 - 09:35", class: "10A1", subject: "Toán", room: "A101", status: "completed" },
    { time: "09:45 - 10:30", class: "10A2", subject: "Toán", room: "A102", status: "completed" },
    { time: "14:00 - 14:45", class: "11B1", subject: "Toán nâng cao", room: "B201", status: "completed" }
  ]},
  { day: "Thứ 4", date: "16/07", lessons: [
    { time: "07:00 - 07:45", class: "10A2", subject: "Toán", room: "A102", status: "today" },
    { time: "07:55 - 08:40", class: "10A1", subject: "Toán", room: "A101", status: "today" },
    { time: "08:50 - 09:35", class: "11B1", subject: "Toán nâng cao", room: "B201", status: "today" },
    { time: "14:00 - 14:45", class: "10A1", subject: "Toán", room: "A101", status: "today" },
    { time: "15:00 - 15:45", class: "10A2", subject: "Toán", room: "A102", status: "today" }
  ]},
  { day: "Thứ 5", date: "17/07", lessons: [
    { time: "07:00 - 07:45", class: "10A1", subject: "Toán", room: "A101", status: "upcoming" },
    { time: "08:50 - 09:35", class: "10A2", subject: "Toán", room: "A102", status: "upcoming" },
    { time: "09:45 - 10:30", class: "11B1", subject: "Toán nâng cao", room: "B201", status: "upcoming" },
    { time: "14:00 - 14:45", class: "10A1", subject: "Toán", room: "A101", status: "upcoming" }
  ]},
  { day: "Thứ 6", date: "18/07", lessons: [
    { time: "07:00 - 07:45", class: "11B1", subject: "Toán nâng cao", room: "B201", status: "upcoming" },
    { time: "07:55 - 08:40", class: "10A2", subject: "Toán", room: "A102", status: "upcoming" },
    { time: "08:50 - 09:35", class: "10A1", subject: "Toán", room: "A101", status: "upcoming" },
    { time: "14:00 - 14:45", class: "11B1", subject: "Toán nâng cao", room: "B201", status: "upcoming" },
    { time: "15:00 - 15:45", class: "10A2", subject: "Toán", room: "A102", status: "upcoming" }
  ]},
  { day: "Thứ 7", date: "19/07", lessons: [
    { time: "07:00 - 07:45", class: "10A1", subject: "Ôn tập", room: "A101", status: "upcoming" },
    { time: "08:50 - 09:35", class: "10A2", subject: "Ôn tập", room: "A102", status: "upcoming" },
    { time: "09:45 - 10:30", class: "11B1", subject: "Ôn tập nâng cao", room: "B201", status: "upcoming" }
  ]}
];

// Danh sách học sinh
const students = [
  { name: "Nguyễn Văn A", class: "10A1", score: 8.5 },
  { name: "Trần Thị B", class: "10A1", score: 7.8 },
  { name: "Lê Văn C", class: "10A2", score: 9.2 },
  { name: "Phạm Thị D", class: "11B1", score: 6.7 },
  { name: "Hoàng Văn E", class: "10A2", score: 8.0 },
  { name: "Vũ Thị F", class: "11B1", score: 7.5 },
];

// Danh sách đề thi
const exams = [
  { name: "Giữa kỳ Toán 10A1", date: "10/07/2025", status: "Đã chấm" },
  { name: "Cuối kỳ Toán 10A2", date: "20/07/2025", status: "Chờ chấm" },
  { name: "Giữa kỳ Toán nâng cao 11B1", date: "15/07/2025", status: "Đã chấm" },
];

// Hoạt động gần đây
const activities = [
  { icon: "bx-task", title: "Tạo đề kiểm tra giữa kỳ", time: "1 ngày trước", status: "completed" },
  { icon: "bx-edit", title: "Chấm xong bài kiểm tra lớp 10A1", time: "1 giờ trước", status: "completed" },
  { icon: "bx-message", title: "Phụ huynh gửi tin nhắn", time: "3 giờ trước", status: "pending" },
  { icon: "bx-book", title: "Tạo bài giảng mới", time: "2 ngày trước", status: "completed" },
];

export default function TeacherDashboard() {

  return (
    <div className="teacher-dashboard">
      {/* Header */}
      <div className="header">
        <div className="left">
          <h1>Tổng quan</h1>
          <ul className="breadcrumb">
            <li>Tổng quan giáo viên</li>
          </ul>
        </div>
        <button className="report">
          <i className="bx bx-cloud-download"></i>
          <span>Tải báo cáo</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="insights-charts three-charts">
        {stats.map((stat, idx) => (
          <div className="chart-card teacher-stat-card" key={stat.label}>
            <div className="tenant-active-info">
              <i className={`bx ${stat.icon}`} style={{ color: stat.color, background: stat.bg }}></i>
              <div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
                <span style={{ color: '#888', fontSize: '0.98em' }}>{stat.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Schedule */}
      <div className="teacher-score-section">
        <div className="chart-card large-chart">
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 16 }}>Lịch dạy học trong tuần</h2>
          <div className="weekly-schedule-grid">
            {weeklySchedule.map((day, idx) => (
              <div key={day.day} className="schedule-day">
                <div className="day-header">
                  <h3>{day.day}</h3>
                  <span className="day-date">{day.date}</span>
                </div>
                <div className="lessons-list">
                  {day.lessons.map((lesson, lessonIdx) => (
                    <div key={lessonIdx} className={`lesson-item ${lesson.status}`}>
                      <div className="lesson-time">{lesson.time}</div>
                      <div className="lesson-info">
                        <div className="lesson-subject">{lesson.subject}</div>
                        <div className="lesson-details">
                          <span className="lesson-class">{lesson.class}</span>
                          <span className="lesson-room">Phòng {lesson.room}</span>
                        </div>
                      </div>
                      <div className={`lesson-status ${lesson.status}`}>
                        {lesson.status === 'completed' ? '✓' : 
                         lesson.status === 'today' ? '●' : '○'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Table & Exam List */}
      <div className="teacher-data-grid">
        <div className="teacher-table-card">
          <div className="header"><h3>Danh sách học sinh</h3></div>
          <table className="teacher-table">
            <thead>
              <tr>
                <th>Họ tên</th>
                <th>Lớp</th>
                <th>Điểm số</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td>{s.class}</td>
                  <td>{s.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="teacher-table-card">
          <div className="header"><h3>Đề thi đã tạo</h3></div>
          <table className="teacher-table">
            <thead>
              <tr>
                <th>Tên đề</th>
                <th>Ngày tạo</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((e, idx) => (
                <tr key={e.name}>
                  <td>{e.name}</td>
                  <td>{e.date}</td>
                  <td>{e.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions & Recent Activities */}
      <div className="teacher-bottom-grid">
        <div className="teacher-actions-card">
          <div className="header"><h3>Thao tác nhanh</h3></div>
          <div className="teacher-actions-list">
            <button className="teacher-action-btn"><i className="bx bx-task"></i> Tạo đề kiểm tra</button>
            <button className="teacher-action-btn"><i className="bx bx-book"></i> Tạo bài giảng</button>
            <button className="teacher-action-btn"><i className="bx bx-message"></i> Gửi thông báo</button>
          </div>
        </div>
        <div className="teacher-activity-card">
          <div className="header"><h3>Hoạt động gần đây</h3></div>
          <ul className="teacher-activity-list">
            {activities.map((a, idx) => (
              <li key={idx} className={`activity-item ${a.status}`}>
                <i className={`bx ${a.icon}`}></i>
                <div className="activity-info">
                  <span className="activity-title">{a.title}</span>
                  <span className="activity-time">{a.time}</span>
                </div>
                <span className={`activity-status ${a.status}`}>{a.status === 'completed' ? 'Hoàn thành' : a.status === 'pending' ? 'Đang chờ' : 'Mới'}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
