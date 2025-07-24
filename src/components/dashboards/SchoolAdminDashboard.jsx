import React, { useState } from "react";
import { Users, GraduationCap, BarChart3, UserCheck } from "lucide-react";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <li className="p-6 bg-white dark:bg-gray-800 rounded-2xl flex items-center gap-6 cursor-pointer relative shadow-sm">
    <i
      className={`bx ${getIconClass(
        Icon
      )} text-blue-600 text-3xl w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center`}></i>
    <div className="flex-1">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {value}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm m-0">{title}</p>
      {change && (
        <span
          className={`absolute bottom-2 right-4 text-xs font-medium ${
            change.positive ? "text-green-600" : "text-red-600"
          }`}>
          {change.positive ? "+" : ""}
          {change.value}% so với tháng trước
        </span>
      )}
    </div>
  </li>
);

const getIconClass = (Icon) => {
  if (Icon === UserCheck) return "bx-user-check";
  if (Icon === GraduationCap) return "bi bi-mortarboard";
  if (Icon === Users) return "bx-group";
  if (Icon === BarChart3) return "bx-bar-chart-alt-2";
  return "bx-home";
};
const ClassOverviewCard = ({
  grade,
  totalClasses,
  totalStudents,
  averageScore,
}) => (
  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 m-0">
        Khối {grade}
      </h3>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {totalClasses} lớp
      </span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600 dark:text-gray-400">Học sinh:</span>
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          {totalStudents}
        </span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600 dark:text-gray-400">Điểm TB:</span>
        <span className="font-semibold text-blue-600">{averageScore}</span>
      </div>
    </div>
  </div>
);

// Dữ liệu mẫu cho biểu đồ điểm trung bình của 3 khối theo tháng
const chartData = {
  labels: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
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

    if (now >= startTime && now <= endTime) return "current";
    if (now < startTime) return "next";
    return "normal";
  }

  return (
    <div className="w-full text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="mb-9">
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-blue-600">
            Tổng quan
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base m-0">
            Tổng quan và quản lý toàn bộ hoạt động của trường
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
        <StatCard icon={UserCheck} title="Tổng học sinh" value="735" />
        <StatCard icon={GraduationCap} title="Giáo viên" value="45" />
        <StatCard icon={Users} title="Lớp học" value="21" />
        <StatCard
          icon={BarChart3}
          title="Điểm TB trường"
          value="8.2"
          change={{ value: 3.5, positive: true }}
        />
      </ul>

      {/* Chart Section */}
      <div className="mt-8 mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 h-96 flex items-center justify-center">
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Bottom Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Class Overview Section */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
              Tổng quan theo khối
            </h3>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              onClick={() => setShowModal(true)}>
              Xem chi tiết
            </button>
          </div>

          {/* Class Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {mockGrades.map((grade, index) => (
              <ClassOverviewCard key={index} {...grade} />
            ))}
          </div>

          {/* Timetable Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Thời khóa biểu hôm nay
              <span className="text-sm font-semibold text-blue-600 ml-2">
                {getTodayString()}
              </span>
            </h3>

            {/* Class Selector */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {classList.map((cls) => (
                <button
                  key={cls.id}
                  className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedClass === cls.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setSelectedClass(cls.id)}>
                  {cls.name}
                </button>
              ))}
            </div>

            {/* Timetable List */}
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {(timetable[selectedClass] || []).map((item, idx) => {
                const status = getPeriodStatus(item.time);
                let statusClasses =
                  "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600";
                if (status === "current") {
                  statusClasses =
                    "bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-600";
                } else if (status === "next") {
                  statusClasses =
                    "bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-600";
                }

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border flex items-center justify-between ${statusClasses}`}>
                    <div>
                      <p
                        className={`font-semibold text-gray-800 dark:text-gray-200 mb-1 ${
                          status === "current" || status === "next"
                            ? "text-blue-600 dark:text-blue-400"
                            : ""
                        }`}>
                        {item.period}: {item.subject}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {classList.find((c) => c.id === selectedClass)?.name ||
                          selectedClass}{" "}
                        - GV: {item.teacher}
                      </p>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        status === "current"
                          ? "text-blue-600 dark:text-blue-400"
                          : status === "next"
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-600 dark:text-gray-400"
                      }`}>
                      {item.time.replace("-", " - ")}
                    </span>
                  </div>
                );
              })}
              {!timetable[selectedClass] && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  Lớp này chưa có thời khóa biểu hôm nay.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="space-y-3">
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Tạo lớp học mới
            </button>
            <button className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium">
              Tạo lịch thi mới
            </button>
            <button className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium">
              Thêm thời khóa biểu
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 m-0">
            Báo cáo gần đây
          </h3>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div className="flex items-center gap-3">
              <i className="bx bx-group text-green-600 text-xl"></i>
              <p className="text-gray-800 dark:text-gray-200 m-0">
                Đã thêm lớp học mới
              </p>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              30 phút trước
            </span>
          </li>
          <li className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center gap-3">
              <i className="bx bx-calendar text-gray-600 text-xl"></i>
              <p className="text-gray-800 dark:text-gray-200 m-0">
                Đã tạo lịch thi mới
              </p>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              2 giờ trước
            </span>
          </li>
          <li className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div className="flex items-center gap-3">
              <i className="bx bx-bar-chart-alt-2 text-green-600 text-xl"></i>
              <p className="text-gray-800 dark:text-gray-200 m-0">
                Đã đổi thời khóa biểu
              </p>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              1 ngày trước
            </span>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Chọn khối để xem chi tiết
            </h3>

            {/* Grade Selector */}
            <div className="flex gap-2 mb-4">
              {mockGrades.map((grade) => (
                <button
                  key={grade.grade}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedGrade === grade.grade
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setSelectedGrade(grade.grade)}>
                  Khối {grade.grade}
                </button>
              ))}
            </div>

            {selectedGrade && (
              <div className="space-y-4">
                {(() => {
                  const info = mockGrades.find(
                    (g) => g.grade === selectedGrade
                  );
                  const classesInGrade = classList.filter(
                    (cls) => cls.grade === selectedGrade
                  );
                  return (
                    <>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Thông tin khối {info.grade}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="text-gray-600 dark:text-gray-400">
                          • Số lớp:{" "}
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {info.totalClasses}
                          </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          • Tổng học sinh:{" "}
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {info.totalStudents}
                          </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          • Điểm trung bình:{" "}
                          <span className="font-semibold text-blue-600">
                            {info.averageScore}
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Danh sách lớp:
                      </p>
                      <div className="max-h-40 overflow-y-auto space-y-2">
                        {classesInGrade.length === 0 && (
                          <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                            Không có lớp nào thuộc khối này.
                          </div>
                        )}
                        {classesInGrade.map((cls) => (
                          <div
                            key={cls.id}
                            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                              {cls.name}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Sĩ số:{" "}
                              <span className="font-medium text-gray-800 dark:text-gray-200">
                                {cls.students}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Điểm TB:{" "}
                              <span className="font-medium text-blue-600">
                                {cls.avgScore}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Modal Actions */}
            <div className="mt-6">
              <button
                className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                onClick={() => {
                  setShowModal(false);
                  setSelectedGrade(null);
                }}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
