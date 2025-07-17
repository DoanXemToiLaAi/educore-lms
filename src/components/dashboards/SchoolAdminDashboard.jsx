import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  Calendar,
  BarChart3,
  TrendingUp,
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
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {change && (
          <p
            className={`text-sm mt-1 ${
              change.positive ? "text-green-600" : "text-red-600"
            }`}>
            {change.positive ? "+" : ""}
            {change.value}% so với tháng trước
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

const ClassOverviewCard = ({
  grade,
  totalClasses,
  totalStudents,
  averageScore,
}) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-gray-900">Khối {grade}</h3>
      <span className="text-sm text-gray-500">{totalClasses} lớp</span>
    </div>
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Học sinh:</span>
        <span className="font-medium">{totalStudents}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Điểm TB:</span>
        <span className="font-medium text-blue-600">{averageScore}</span>
      </div>
    </div>
  </div>
);

// Dữ liệu mẫu cho biểu đồ điểm trung bình của 3 khối theo tháng
const chartData = {
  labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
  datasets: [
    {
      label: "Khối 10",
      data: [8.0, 8.1, 8.2, 8.3, 8.2, 8.2],
      backgroundColor: "#3b82f6",
    },
    {
      label: "Khối 11",
      data: [7.8, 7.9, 8.0, 7.9, 7.8, 7.9],
      backgroundColor: "#10b981",
    },
    {
      label: "Khối 12",
      data: [8.3, 8.4, 8.5, 8.5, 8.6, 8.5],
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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1E3A8A]">
          Quản trị trường học
        </h1>
        <p className="text-gray-600 mt-1">
          Tổng quan và quản lý toàn bộ hoạt động của trường
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={UserCheck}
          title="Tổng học sinh"
          value="735"
          change={{ value: 5.2, positive: true }}
          color="bg-blue-500"
        />
        <StatCard
          icon={GraduationCap}
          title="Giáo viên"
          value="45"
          change={{ value: 2.1, positive: true }}
          color="bg-green-500"
        />
        <StatCard
          icon={Users}
          title="Lớp học"
          value="21"
          color="bg-purple-500"
        />
        <StatCard
          icon={BarChart3}
          title="Điểm TB trường"
          value="8.2"
          change={{ value: 3.5, positive: true }}
          color="bg-orange-500"
        />
      </div>

      {/* Biểu đồ điểm trung bình các lớp theo tháng */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-4">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Tổng quan theo khối
                </h2>
                <button
                  className="text-blue-600 text-sm font-medium hover:text-blue-700"
                  onClick={() => setShowModal(true)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {mockGrades.map((grade, index) => (
                  <ClassOverviewCard key={index} {...grade} />
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Thời khóa biểu hôm nay
                  <span className="text-base font-semibold text-blue-700 ml-2">
                    {getTodayString()}
                  </span>
                </h3>
                {/* Thanh cuộn ngang các lớp */}
                <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
                  {classList.map((cls) => (
                    <button
                      key={cls.id}
                      className={`px-4 py-2 rounded-lg border whitespace-nowrap ${
                        selectedClass === cls.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-50 text-gray-800"
                      }`}
                      onClick={() => setSelectedClass(cls.id)}
                    >
                      {cls.name}
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  {(timetable[selectedClass] || []).map((item, idx) => {
                    const status = getPeriodStatus(item.time);
                    let bg = "bg-gray-50";
                    if (status === "current")
                      bg = "bg-green-100 font-bold text-green-700";
                    else if (status === "next")
                      bg = "bg-blue-100 font-semibold text-blue-700";
                    return (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-3 rounded-lg ${bg}`}
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {item.period}: {item.subject}
                          </p>
                          <p className="text-sm text-gray-600">
                            {classList.find(c => c.id === selectedClass)?.name || selectedClass} - GV: {item.teacher}
                          </p>
                        </div>
                        <span className="text-sm text-blue-600 font-medium">
                          {item.time.replace("-", " - ")}
                        </span>
                      </div>
                    );
                  })}
                  {!timetable[selectedClass] && (
                    <div className="p-3 rounded-lg bg-gray-50 text-gray-500">
                      Lớp này chưa có thời khóa biểu hôm nay.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Tạo lớp học mới
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Tạo lịch thi mới
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Thêm thời khóa biểu
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Báo cáo gần đây
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Đã thêm lớp học mới
                  </p>
                  <p className="text-xs text-gray-500">Cập nhật 30 phút trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Đã tạo lịch thi mới
                  </p>
                  <p className="text-xs text-gray-500">Cập nhật 2 giờ trước</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Đã đổi thời khóa biểu
                  </p>
                  <p className="text-xs text-gray-500">Cập nhật 1 ngày trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal chọn khối */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-[480px] max-w-xl w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Chọn khối để xem chi tiết</h3>
            <div className="space-y-2 mb-4">
              {mockGrades.map((grade) => (
                <button
                  key={grade.grade}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    selectedGrade === grade.grade
                      ? "bg-blue-600 text-white"
                      : "bg-gray-50 text-gray-800"
                  }`}
                  onClick={() => setSelectedGrade(grade.grade)}
                >
                  Khối {grade.grade}
                </button>
              ))}
            </div>
            {selectedGrade && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                {(() => {
                  const info = mockGrades.find(g => g.grade === selectedGrade);
                  const classesInGrade = classList.filter(cls => cls.grade === selectedGrade);
                  return (
                    <>
                      <p className="font-semibold text-gray-900 mb-2">Thông tin khối {info.grade}</p>
                      <div className="space-y-1 text-sm mb-3">
                        <div>• Số lớp: <span className="font-medium">{info.totalClasses}</span></div>
                        <div>• Tổng học sinh: <span className="font-medium">{info.totalStudents}</span></div>
                        <div>• Điểm trung bình: <span className="font-medium text-blue-600">{info.averageScore}</span></div>
                      </div>
                      <p className="font-semibold text-gray-900 mb-2">Danh sách lớp:</p>
                      <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                        {classesInGrade.length === 0 && (
                          <div className="text-gray-500">Không có lớp nào thuộc khối này.</div>
                        )}
                        {classesInGrade.map(cls => (
                          <div key={cls.id} className="p-3 rounded-lg border bg-white flex justify-between items-center">
                            <span className="font-medium text-blue-700">{cls.name}</span>
                            <span className="text-sm text-gray-600">Sĩ số: <span className="font-semibold">{cls.students}</span></span>
                            <span className="text-sm text-blue-600">Điểm TB: <span className="font-semibold">{cls.avgScore}</span></span>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
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
