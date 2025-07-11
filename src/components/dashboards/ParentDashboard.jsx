import React from "react";
import {
  User,
  Award,
  Calendar,
  MessageSquare,
  Clock,
  TrendingUp,
  Bell,
} from "lucide-react";

const ChildCard = ({ name, grade, class: className, overallScore }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-center space-x-3 mb-3">
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">
          Lớp {className} - Khối {grade}
        </p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">Điểm TB:</span>
      <span
        className={`text-lg font-bold ${
          overallScore >= 8
            ? "text-green-600"
            : overallScore >= 6.5
            ? "text-yellow-600"
            : "text-red-600"
        }`}>
        {overallScore}
      </span>
    </div>
  </div>
);

const SubjectScoreCard = ({ subject, score, trend }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-medium text-gray-900">{subject}</h3>
      <div className="flex items-center space-x-2">
        <span
          className={`text-lg font-bold ${
            score >= 8
              ? "text-green-600"
              : score >= 6.5
              ? "text-yellow-600"
              : "text-red-600"
          }`}>
          {score}
        </span>
        <TrendingUp
          className={`h-4 w-4 ${
            trend === "up"
              ? "text-green-500"
              : trend === "down"
              ? "text-red-500"
              : "text-gray-400"
          }`}
        />
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${
          score >= 8
            ? "bg-green-500"
            : score >= 6.5
            ? "bg-yellow-500"
            : "bg-red-500"
        }`}
        style={{ width: `${(score / 10) * 100}%` }}></div>
    </div>
  </div>
);

const ActivityCard = ({ type, title, time, teacher }) => (
  <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
    <div
      className={`p-2 rounded-lg ${
        type === "grade"
          ? "bg-green-100"
          : type === "assignment"
          ? "bg-blue-100"
          : "bg-orange-100"
      }`}>
      {type === "grade" ? (
        <Award className="h-4 w-4 text-green-600" />
      ) : type === "assignment" ? (
        <Clock className="h-4 w-4 text-blue-600" />
      ) : (
        <MessageSquare className="h-4 w-4 text-orange-600" />
      )}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <p className="text-xs text-gray-500">
        GV: {teacher} • {time}
      </p>
    </div>
  </div>
);

export default function ParentDashboard() {
  const mockChildren = [
    {
      name: "Nguyễn Minh An",
      grade: 10,
      class: "10A1",
      avatar: "/placeholder.svg?height=40&width=40&text=MA",
      overallScore: 8.5,
    },
    {
      name: "Nguyễn Minh Châu",
      grade: 8,
      class: "8B2",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1E3A8A]">
          Dashboard Phụ huynh
        </h1>
        <p className="text-gray-600 mt-1">
          Theo dõi tiến độ học tập và hoạt động của con em
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockChildren.map((child, index) => (
          <ChildCard key={index} {...child} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Kết quả học tập - Nguyễn Minh An
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                  <option>Học kỳ 1 - 2024</option>
                  <option>Học kỳ 2 - 2024</option>
                </select>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockSubjectScores.map((subject, index) => (
                  <SubjectScoreCard key={index} {...subject} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Thống kê nhanh
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Điểm danh tuần này:
                </span>
                <span className="font-semibold text-green-600">100%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Bài tập hoàn thành:
                </span>
                <span className="font-semibold text-blue-600">18/20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Xếp hạng lớp:</span>
                <span className="font-semibold text-purple-600">5/35</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Hoạt động ngoại khóa:
                </span>
                <span className="font-semibold text-orange-600">
                  3 hoạt động
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Hoạt động gần đây
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                {mockActivities.map((activity, index) => (
                  <ActivityCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Sự kiện sắp tới
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start space-x-3">
                <Calendar className="h-4 w-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Họp phụ huynh
                  </p>
                  <p className="text-xs text-gray-500">25/12/2024 - 19:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Bell className="h-4 w-4 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Thi cuối kỳ
                  </p>
                  <p className="text-xs text-gray-500">02/01/2025 - 08:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <User className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Gặp gỡ giáo viên chủ nhiệm
                  </p>
                  <p className="text-xs text-gray-500">28/12/2024 - 15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
