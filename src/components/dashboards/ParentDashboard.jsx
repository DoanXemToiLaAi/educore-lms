import React from "react";

const ChildCard = ({ name, grade, class: className, overallScore }) => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getScoreClass = (score) => {
    if (score >= 8.5) return "text-green-600";
    if (score >= 7.0) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-15 h-15 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl font-semibold text-blue-600">
          {getInitials(name)}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0 mb-1">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
            Lớp {className} - Khối {grade}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Điểm TB:
        </span>
        <span className={`text-xl font-bold ${getScoreClass(overallScore)}`}>
          {overallScore}
        </span>
      </div>
    </div>
  );
};
const SubjectScoreCard = ({ subject, score, trend }) => {
  const getScoreClass = (score) => {
    if (score >= 8.5) return "text-green-600";
    if (score >= 7.0) return "text-yellow-600";
    return "text-red-600";
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return "bx-trending-up";
      case "down":
        return "bx-trending-down";
      default:
        return "bx-minus";
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case "up":
        return "bg-green-100 dark:bg-green-900/30 text-green-600";
      case "down":
        return "bg-red-100 dark:bg-red-900/30 text-red-600";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400";
    }
  };

  const getProgressColor = (score) => {
    if (score >= 8.5) return "bg-green-600";
    if (score >= 7.0) return "bg-yellow-600";
    return "bg-red-600";
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl border border-gray-200 dark:border-gray-600 transition-all hover:bg-white dark:hover:bg-gray-600 hover:shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 m-0">
          {subject}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`text-lg font-bold ${getScoreClass(score)}`}>
            {score}
          </span>
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${getTrendColor(
              trend
            )}`}>
            <i className={`bx ${getTrendIcon(trend)} text-xs`}></i>
          </div>
        </div>
      </div>
      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${getProgressColor(
            score
          )}`}
          style={{ width: `${(score / 10) * 100}%` }}></div>
      </div>
    </div>
  );
};

const ActivityCard = ({ type, title, time, teacher }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "grade":
        return "bx-award";
      case "assignment":
        return "bx-time";
      default:
        return "bx-message-square-dots";
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case "grade":
        return "bg-green-100 dark:bg-green-900/30 text-green-600";
      case "assignment":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-600";
      default:
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-600";
    }
  };

  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${getActivityColor(
          type
        )}`}>
        <i className={`bx ${getActivityIcon(type)} text-lg`}></i>
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-800 dark:text-gray-200 text-sm m-0 mb-1">
          {title}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 m-0">
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
    <div className="w-full text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="mb-9">
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-blue-600">
            Tổng quan
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base m-0">
            Theo dõi tiến độ học tập và hoạt động của con em
          </p>
        </div>
      </div>

      {/* Children Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-9">
        {mockChildren.map((child, index) => (
          <ChildCard key={index} {...child} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-9">
        {/* Academic Results */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
              Kết quả học tập - Nguyễn Minh An
            </h3>
            <select className="p-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm cursor-pointer focus:outline-none focus:border-blue-600">
              <option>Học kỳ 1 - 2024</option>
              <option>Học kỳ 2 - 2024</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockSubjectScores.map((subject, index) => (
              <SubjectScoreCard key={index} {...subject} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
                Thống kê nhanh
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Điểm danh tuần này:
                </span>
                <span className="font-semibold text-green-600">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Bài tập hoàn thành:
                </span>
                <span className="font-semibold text-yellow-600">18/20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Xếp hạng lớp:
                </span>
                <span className="font-semibold text-blue-600">5/35</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Hoạt động ngoại khóa:
                </span>
                <span className="font-semibold text-orange-600">
                  3 hoạt động
                </span>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
                Hoạt động gần đây
              </h3>
            </div>
            <div className="space-y-2">
              {mockActivities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
                Sự kiện sắp tới
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <i className="bx bx-calendar text-blue-600 text-lg"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm m-0">
                    Họp phụ huynh
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 m-0">
                    25/12/2024 - 19:00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <i className="bx bx-bell text-red-600 text-lg"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm m-0">
                    Thi cuối kỳ
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 m-0">
                    02/01/2025 - 08:00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <i className="bx bx-user text-green-600 text-lg"></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm m-0">
                    Gặp gỡ giáo viên chủ nhiệm
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 m-0">
                    28/12/2024 - 15:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
