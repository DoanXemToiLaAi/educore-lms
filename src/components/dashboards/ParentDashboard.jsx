import React from "react";
import "../../assets/css/parent-dashboard.css";

const ChildCard = ({ name, grade, class: className, overallScore }) => {
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getScoreClass = (score) => {
    if (score >= 8) return 'excellent';
    if (score >= 6.5) return 'good';
    return 'poor';
  };

  return (
    <div className="child-card">
      <div className="child-header">
        <div className="child-avatar">
          {getInitials(name)}
        </div>
        <div className="child-info">
          <h3>{name}</h3>
          <p>Lớp {className} - Khối {grade}</p>
        </div>
      </div>
      <div className="child-score">
        <span className="label">Điểm TB:</span>
        <span className={`score ${getScoreClass(overallScore)}`}>
          {overallScore}
        </span>
      </div>
    </div>
  );
};

const SubjectScoreCard = ({ subject, score, trend }) => {
  const getScoreClass = (score) => {
    if (score >= 8) return 'excellent';
    if (score >= 6.5) return 'good';
    return 'poor';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'bx-trending-up';
      case 'down': return 'bx-trending-down';
      default: return 'bx-minus';
    }
  };

  return (
    <div className="subject-card">
      <div className="subject-header">
        <h3 className="subject-name">{subject}</h3>
        <div className="subject-score-info">
          <span className={`subject-score ${getScoreClass(score)}`}>
            {score}
          </span>
          <div className={`subject-trend ${trend}`}>
            <i className={`bx ${getTrendIcon(trend)}`}></i>
          </div>
        </div>
      </div>
      <div className="subject-progress">
        <div
          className={`subject-progress-fill ${getScoreClass(score)}`}
          style={{ width: `${(score / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const ActivityCard = ({ type, title, time, teacher }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'grade': return 'bx-award';
      case 'assignment': return 'bx-time';
      default: return 'bx-message-square-dots';
    }
  };

  return (
    <div className="activity-item">
      <div className={`activity-icon ${type}`}>
        <i className={`bx ${getActivityIcon(type)}`}></i>
      </div>
      <div className="activity-content">
        <p className="activity-title">{title}</p>
        <p className="activity-meta">
          GV: {teacher} • {time}
        </p>
      </div>
    </div>
  );
};

export default function ParentDashboard() {
  const mockChildren = [
    {
      name: "Nguyễn Minh An",
      grade: 10,
      class: "10A1",
      overallScore: 8.5,
    },
    {
      name: "Nguyễn Minh Châu",
      grade: 8,
      class: "8B2",
      overallScore: 7.8,
    },
  ];

  const mockSubjectScores = [
    { subject: "Toán học", score: 8.5, trend: "up" },
    { subject: "Văn học", score: 7.8, trend: "stable" },
    { subject: "Tiếng Anh", score: 9.0, trend: "up" },
    { subject: "Vật lý", score: 7.2, trend: "down" },
    { subject: "Hóa học", score: 8.0, trend: "up" },
    { subject: "Sinh học", score: 8.3, trend: "stable" },
  ];

  const mockActivities = [
    {
      type: "grade",
      title: "Điểm kiểm tra Toán học: 8.5",
      time: "2 giờ trước",
      teacher: "Nguyễn Văn A",
    },
    {
      type: "assignment",
      title: "Bài tập Văn học đã được nộp",
      time: "1 ngày trước",
      teacher: "Trần Thị B",
    },
    {
      type: "message",
      title: "Thông báo về buổi họp phụ huynh",
      time: "2 ngày trước",
      teacher: "Lê Văn C",
    },
    {
      type: "grade",
      title: "Điểm bài tập Tiếng Anh: 9.0",
      time: "3 ngày trước",
      teacher: "Phạm Thị D",
    },
  ];

  return (
    <div className="parent-dashboard">
      {/* Header */}
      <div className="header">
        <div className="left">
          <h1>Tổng quan</h1>
          <p>Theo dõi tiến độ học tập và hoạt động của con em</p>
        </div>
      </div>

      {/* Children Cards */}
      <div className="children-grid">
        {mockChildren.map((child, index) => (
          <ChildCard key={index} {...child} />
        ))}
      </div>

      {/* Main Content */}
      <div className="bottom-data">
        {/* Academic Results */}
        <div className="academic-results" style={{ maxHeight: "fit-content", width: 985 }}>
          <div className="header">
            <h3>Kết quả học tập - Nguyễn Minh An</h3>
            <select>
              <option>Học kỳ 1 - 2024</option>
              <option>Học kỳ 2 - 2024</option>
            </select>
          </div>
          <div className="subjects-grid">
            {mockSubjectScores.map((subject, index) => (
              <SubjectScoreCard key={index} {...subject} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar-content">
          {/* Quick Stats */}
          <div className="quick-stats">
            <div className="header">
              <h3>Thống kê nhanh</h3>
            </div>
            <div className="stats-list">
              <div className="stat-item">
                <span className="stat-label">Điểm danh tuần này:</span>
                <span className="stat-value excellent">100%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Bài tập hoàn thành:</span>
                <span className="stat-value good">18/20</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Xếp hạng lớp:</span>
                <span className="stat-value info">5/35</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Hoạt động ngoại khóa:</span>
                <span className="stat-value warning">3 hoạt động</span>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="recent-activities">
            <div className="header">
              <h3>Hoạt động gần đây</h3>
            </div>
            <div className="activity-list">
              {mockActivities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="upcoming-events">
            <div className="header">
              <h3>Sự kiện sắp tới</h3>
            </div>
            <div className="event-list">
              <div className="event-item">
                <div className="event-icon calendar">
                  <i className="bx bx-calendar"></i>
                </div>
                <div className="event-content">
                  <p className="event-title">Họp phụ huynh</p>
                  <p className="event-time">25/12/2024 - 19:00</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-icon bell">
                  <i className="bx bx-bell"></i>
                </div>
                <div className="event-content">
                  <p className="event-title">Thi cuối kỳ</p>
                  <p className="event-time">02/01/2025 - 08:00</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-icon user">
                  <i className="bx bx-user"></i>
                </div>
                <div className="event-content">
                  <p className="event-title">Gặp gỡ giáo viên chủ nhiệm</p>
                  <p className="event-time">28/12/2024 - 15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
