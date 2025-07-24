
import React from "react";

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
    <div className="font-poppins p-9 bg-gray-50 dark:bg-gray-900 w-full text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Tổng quan</h1>
          <ul className="flex items-center gap-4 mt-1">
            <li className="text-gray-600 dark:text-gray-400 text-base pointer-events-none">Tổng quan giáo viên</li>
          </ul>
        </div>
        <button className="h-9 px-4 rounded-full bg-blue-600 text-white flex items-center font-medium border-none cursor-pointer gap-2 hover:bg-blue-700 transition-colors">
          <i className="bx bx-cloud-download"></i>
          <span>Tải báo cáo</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((stat, idx) => (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm h-28 flex flex-col justify-center items-center p-4" key={stat.label}>
            <div className="flex items-center gap-4 mb-2 w-full justify-center">
              <i 
                className={`bx ${stat.icon} text-5xl rounded-xl p-4 flex items-center justify-center min-w-14 min-h-14`}
                style={{ color: stat.color, background: stat.bg }}
              ></i>
              <div>
                <h3 className="text-3xl font-bold m-0 text-blue-600">{stat.value}</h3>
                <p className="m-0 text-gray-600 dark:text-gray-400 text-lg font-semibold">{stat.label}</p>
                <span className="text-gray-500 dark:text-gray-500 text-base">{stat.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Schedule */}
      <div className="mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 min-h-80 w-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Lịch dạy học trong tuần</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
            {weeklySchedule.map((day, idx) => (
              <div key={day.day} className="space-y-3">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-1">{day.day}</h3>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{day.date}</span>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {day.lessons.map((lesson, lessonIdx) => {
                    let statusClasses = 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600';
                    let statusIndicator = '○';
                    if (lesson.status === 'completed') {
                      statusClasses = 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700';
                      statusIndicator = '✓';
                    } else if (lesson.status === 'today') {
                      statusClasses = 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 animate-pulse';
                      statusIndicator = '●';
                    }
                    
                    return (
                      <div key={lessonIdx} className={`p-3 rounded-lg border ${statusClasses} hover:shadow-sm transition-shadow`}>
                        <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{lesson.time}</div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{lesson.subject}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 space-x-2">
                            <span className="font-medium">{lesson.class}</span>
                            <span>Phòng {lesson.room}</span>
                          </div>
                        </div>
                        <div className={`text-sm font-medium text-right mt-1 ${
                          lesson.status === 'completed' ? 'text-green-600' : 
                          lesson.status === 'today' ? 'text-blue-600' : 
                          'text-gray-400'
                        }`}>
                          {statusIndicator}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Table & Exam List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 min-h-56">
          <div className="mb-3">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Danh sách học sinh</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400 font-semibold">Họ tên</th>
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400 font-semibold">Lớp</th>
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400 font-semibold">Điểm số</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, idx) => (
                  <tr key={s.name} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-2 text-gray-800 dark:text-gray-200">{s.name}</td>
                    <td className="py-3 px-2 text-gray-800 dark:text-gray-200">{s.class}</td>
                    <td className="py-3 px-2 text-gray-800 dark:text-gray-200">{s.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 min-h-56">
          <div className="mb-3">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Đề thi đã tạo</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400 font-semibold">Tên đề</th>
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400 font-semibold">Ngày tạo</th>
                  <th className="text-left py-3 px-2 text-gray-600 dark:text-gray-400 font-semibold">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((e, idx) => (
                  <tr key={e.name} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-2 text-gray-800 dark:text-gray-200">{e.name}</td>
                    <td className="py-3 px-2 text-gray-800 dark:text-gray-200">{e.date}</td>
                    <td className="py-3 px-2 text-gray-800 dark:text-gray-200">{e.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
          <div className="mb-3">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Thao tác nhanh</h3>
          </div>
          <div className="space-y-3">
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-3 font-medium">
              <i className="bx bx-task text-lg"></i> Tạo đề kiểm tra
            </button>
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-3 font-medium">
              <i className="bx bx-book text-lg"></i> Tạo bài giảng
            </button>
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-3 font-medium">
              <i className="bx bx-message text-lg"></i> Gửi thông báo
            </button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
          <div className="mb-3">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Hoạt động gần đây</h3>
          </div>
          <ul className="space-y-4 max-h-64 overflow-y-auto">
            {activities.map((a, idx) => {
              let statusClasses = 'bg-gray-100 dark:bg-gray-700';
              let statusText = 'Mới';
              if (a.status === 'completed') {
                statusClasses = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400';
                statusText = 'Hoàn thành';
              } else if (a.status === 'pending') {
                statusClasses = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400';
                statusText = 'Đang chờ';
              }
              
              return (
                <li key={idx} className={`p-3 rounded-lg ${statusClasses.includes('bg-gray') ? statusClasses : statusClasses.split(' ')[0] + ' ' + statusClasses.split(' ')[1]} flex items-center gap-3`}>
                  <i className={`bx ${a.icon} text-xl text-gray-600 dark:text-gray-400`}></i>
                  <div className="flex-1">
                    <span className="block font-medium text-gray-800 dark:text-gray-200 text-sm">{a.title}</span>
                    <span className="block text-xs text-gray-600 dark:text-gray-400 mt-1">{a.time}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses}`}>
                    {statusText}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
