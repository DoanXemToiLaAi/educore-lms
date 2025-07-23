import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  BarChart3,
  UserCheck,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../assets/css/dashboard.css";
import "../../assets/css/school-admin-dashboard.css";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <li className="stat-card">
    <i className={`bx ${getIconClass(Icon)}`}></i>
    <div className="info">
      <h3>{value}</h3>
      <p>{title}</p>
      {change && (
        <span className={`change ${change.positive ? 'positive' : 'negative'}`}>
          {change.positive ? "+" : ""}{change.value}% so với tháng trước
        </span>
      )}
    </div>
  </li>
);

const getIconClass = (Icon) => {
  if (Icon === UserCheck) return 'bx-user-check';
  if (Icon === GraduationCap) return 'bi bi-mortarboard';
  if (Icon === Users) return 'bx-group';
  if (Icon === BarChart3) return 'bx-bar-chart-alt-2';
  return 'bx-home';
};
const ClassOverviewCard = ({
  grade,
  totalClasses,
  totalStudents,
  averageScore,
}) => (
  <div className="class-overview-card">
    <div className="class-header">
      <h3>Khối {grade}</h3>
      <span className="class-count">{totalClasses} lớp</span>
    </div>
    <div className="class-stats">
      <div className="stat-row">
        <span>Học sinh:</span>
        <span className="stat-value">{totalStudents}</span>
      </div>
      <div className="stat-row">
        <span>Điểm TB:</span>
        <span className="stat-value score">{averageScore}</span>
      </div>
    </div>
  </div>
);

// Dữ liệu mẫu cho biểu đồ điểm trung bình của 3 khối theo tháng
const chartData = {
  labels: [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
  ],
  datasets: [
    {
      label: "Khối 10",
      data: [8.0, 8.1, 8.2, 8.3, 8.2, 8.2, 8.1, 8.0, 8.2, 8.3, 8.2, 8.1],
      backgroundColor: "#3b82f6",
    },
    {
      label: "Khối 11",
      data: [7.8, 7.9, 8.0, 7.9, 7.8, 7.9, 7.8, 7.7, 7.9, 8.0, 7.9, 7.8],
      backgroundColor: "#10b981",
    },
    {
      label: "Khối 12",
      data: [8.3, 8.4, 8.5, 8.5, 8.6, 8.5, 8.4, 8.5, 8.6, 8.5, 8.4, 8.5],
      backgroundColor: "#f59e42",
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Điểm trung bình các khối theo tháng" },
  },
};

export default function SchoolAdminDashboard() {
  const mockGrades = [
    { grade: 10, totalClasses: 8, totalStudents: 280, averageScore: 8.2 },
    { grade: 11, totalClasses: 7, totalStudents: 245, averageScore: 7.9 },
    { grade: 12, totalClasses: 6, totalStudents: 210, averageScore: 8.5 },
  ];

  // Danh sách lớp với quy tắc: khối 10 là A, 11 là B, 12 là C
  const classList = [
    // Khối 10 - lớp A
    { id: "10A1", name: "Lớp 10A1", grade: 10, students: 32, avgScore: 8.1 },
    { id: "10A2", name: "Lớp 10A2", grade: 10, students: 28, avgScore: 7.9 },
    { id: "10A3", name: "Lớp 10A3", grade: 10, students: 30, avgScore: 8.3 },
    { id: "10A4", name: "Lớp 10A4", grade: 10, students: 29, avgScore: 8.0 },
    { id: "10A5", name: "Lớp 10A5", grade: 10, students: 31, avgScore: 8.2 },
    // Khối 11 - lớp B
    { id: "11B1", name: "Lớp 11B1", grade: 11, students: 33, avgScore: 7.8 },
    { id: "11B2", name: "Lớp 11B2", grade: 11, students: 27, avgScore: 8.0 },
    { id: "11B3", name: "Lớp 11B3", grade: 11, students: 30, avgScore: 7.7 },
    { id: "11B4", name: "Lớp 11B4", grade: 11, students: 28, avgScore: 8.1 },
    { id: "11B5", name: "Lớp 11B5", grade: 11, students: 32, avgScore: 7.9 },
    // Khối 12 - lớp C
    { id: "12C1", name: "Lớp 12C1", grade: 12, students: 30, avgScore: 8.4 },
    { id: "12C2", name: "Lớp 12C2", grade: 12, students: 29, avgScore: 8.2 },
    { id: "12C3", name: "Lớp 12C3", grade: 12, students: 31, avgScore: 8.6 },
    { id: "12C4", name: "Lớp 12C4", grade: 12, students: 28, avgScore: 8.3 },
    { id: "12C5", name: "Lớp 12C5", grade: 12, students: 32, avgScore: 8.5 },
  ];

  const timetable = {
    "10A1": [
      {
        period: "Tiết 1-2",
        subject: "Toán học",
        teacher: "Nguyễn Văn A",
        time: "09:30-10:15",
      },
      {
        period: "Tiết 3-4",
        subject: "Vật lý",
        teacher: "Phạm Thị D",
        time: "12:20-13:05",
      },
      {
        period: "Tiết 5",
        subject: "Lịch sử",
        teacher: "Mai XUân E",
        time: "13:10-13:55",
      },
    ],
    "11B2": [
      {
        period: "Tiết 1-2",
        subject: "Hóa học",
        teacher: "Trần Thị B",
        time: "07:00-08:30",
      },
      {
        period: "Tiết 3-4",
        subject: "Văn học",
        teacher: "Lê Văn E",
        time: "20:45-21:15",
      },
    ],
    "12C3": [
      {
        period: "Tiết 1-2",
        subject: "Tiếng Anh",
        teacher: "Lê Văn C",
        time: "07:00-08:30",
      },
      {
        period: "Tiết 3-4",
        subject: "Sinh học",
        teacher: "Nguyễn Thị F",
        time: "08:45-10:15",
      },
    ],
  };

  const [selectedClass, setSelectedClass] = useState(classList[0].id);
  const [showModal, setShowModal] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);

  // Hàm lấy ngày hôm nay dạng DD/MM/YYYY
  function getTodayString() {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${now.getFullYear()}`;
  }

  // Hàm kiểm tra tiết hiện tại
  function getPeriodStatus(timeRange) {
    const [start, end] = timeRange.split("-");
    const now = new Date();
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
    const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startH, startM);
    const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endH, endM);

    if (now >= startTime && now <= endTime) return "current";
    if (now < startTime) return "next";
    return "normal";
  }

  return (
    <div className="school-admin-dashboard">
      <div className="header">
        <div className="left">
          <h1>Tổng quan</h1>
          <p>Tổng quan và quản lý toàn bộ hoạt động của trường</p>
        </div>
      </div>

      <ul className="insights">
        <StatCard
          icon={UserCheck}
          title="Tổng học sinh"
          value="735"
        />
        <StatCard
          icon={GraduationCap}
          title="Giáo viên"
          value="45"
        />
        <StatCard
          icon={Users}
          title="Lớp học"
          value="21"
        />
        <StatCard
          icon={BarChart3}
          title="Điểm TB trường"
          value="8.2"
          change={{ value: 3.5, positive: true }}
        />
      </ul>

      {/* Biểu đồ điểm trung bình các lớp theo tháng */}
      <div className="chart-section">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="bottom-data">
        <div className="orders class-overview-section">
          <div className="header">
            <h3>Tổng quan theo khối</h3>
            <button
              className="view-details-btn"
              onClick={() => setShowModal(true)}
            >
              Xem chi tiết
            </button>
          </div>
          
          <div className="class-overview-grid">
            {mockGrades.map((grade, index) => (
              <ClassOverviewCard key={index} {...grade} />
            ))}
          </div>

          <div className="timetable-section">
            <h3 className="timetable-title">
              Thời khóa biểu hôm nay
              <span className="date-label">
                {getTodayString()}
              </span>
            </h3>
            
            <div className="class-selector">
              {classList.map((cls) => (
                <button
                  key={cls.id}
                  className={`class-btn ${
                    selectedClass === cls.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedClass(cls.id)}
                >
                  {cls.name}
                </button>
              ))}
            </div>
            
            <div className="timetable-list">
              {(timetable[selectedClass] || []).map((item, idx) => {
                const status = getPeriodStatus(item.time);
                let statusClass = '';
                if (status === "current") statusClass = 'current';
                else if (status === "next") statusClass = 'next';
                
                return (
                  <div
                    key={idx}
                    className={`timetable-item ${statusClass}`}
                  >
                    <div className="period-info">
                      <p className="period-title">
                        {item.period}: {item.subject}
                      </p>
                      <p className="period-details">
                        {classList.find(c => c.id === selectedClass)?.name || selectedClass} - GV: {item.teacher}
                      </p>
                    </div>
                    <span className="period-time">
                      {item.time.replace("-", " - ")}
                    </span>
                  </div>
                );
              })}
              {!timetable[selectedClass] && (
                <div className="no-timetable">
                  Lớp này chưa có thời khóa biểu hôm nay.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="reminders actions-section">
          <div className="action-buttons">
            <button className="action-btn primary">
              Tạo lớp học mới
            </button>
            <button className="action-btn secondary">
              Tạo lịch thi mới
            </button>
            <button className="action-btn secondary">
              Thêm thời khóa biểu
            </button>
          </div>
        </div>
      </div>

      {/* Khối báo cáo gần đây riêng biệt */}
      <div className="recent-reports-section">
        <div className="recent-reports">
          <div className="header">
            <h3>Báo cáo gần đây</h3>
          </div>
          <ul className="task-list">
            <li className="completed">
              <div className="task-title">
                <i className="bx bx-group"></i>
                <p>Đã thêm lớp học mới</p>
              </div>
              <span className="task-time">30 phút trước</span>
            </li>
            <li className="not-completed">
              <div className="task-title">
                <i className="bx bx-calendar"></i>
                <p>Đã tạo lịch thi mới</p>
              </div>
              <span className="task-time">2 giờ trước</span>
            </li>
            <li className="completed">
              <div className="task-title">
                <i className="bx bx-bar-chart-alt-2"></i>
                <p>Đã đổi thời khóa biểu</p>
              </div>
              <span className="task-time">1 ngày trước</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal chọn khối */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Chọn khối để xem chi tiết</h3>
            <div className="grade-selector">
              {mockGrades.map((grade) => (
                <button
                  key={grade.grade}
                  className={`grade-btn ${
                    selectedGrade === grade.grade ? 'active' : ''
                  }`}
                  onClick={() => setSelectedGrade(grade.grade)}
                >
                  Khối {grade.grade}
                </button>
              ))}
            </div>
            {selectedGrade && (
              <div className="grade-details">
                {(() => {
                  const info = mockGrades.find(g => g.grade === selectedGrade);
                  const classesInGrade = classList.filter(cls => cls.grade === selectedGrade);
                  return (
                    <>
                      <p className="grade-info-title">Thông tin khối {info.grade}</p>
                      <div className="grade-stats">
                        <div>• Số lớp: <span className="stat-value">{info.totalClasses}</span></div>
                        <div>• Tổng học sinh: <span className="stat-value">{info.totalStudents}</span></div>
                        <div>• Điểm trung bình: <span className="stat-value score">{info.averageScore}</span></div>
                      </div>
                      <p className="class-list-title">Danh sách lớp:</p>
                      <div className="class-list-container">
                        {classesInGrade.length === 0 && (
                          <div className="no-classes">Không có lớp nào thuộc khối này.</div>
                        )}
                        {classesInGrade.map(cls => (
                          <div key={cls.id} className="class-item">
                            <span className="class-name">{cls.name}</span>
                            <span className="class-students">Sĩ số: <span className="value">{cls.students}</span></span>
                            <span className="class-score">Điểm TB: <span className="value">{cls.avgScore}</span></span>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
            <div className="modal-actions">
              <button
                className="close-btn"
                onClick={() => {
                  setShowModal(false);
                  setSelectedGrade(null);
                }}
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