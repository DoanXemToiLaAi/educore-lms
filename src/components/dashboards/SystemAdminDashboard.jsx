import React from "react";
import {
  School,
  Users,
  Server,
  Activity,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

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

const TenantCard = ({ name, schools, users, status }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === "active"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}>
        {status === "active" ? "Hoạt động" : "Tạm dừng"}
      </span>
    </div>
    <div className="space-y-1 text-sm text-gray-600">
      <p>{schools} trường học</p>
      <p>{users} người dùng</p>
    </div>
  </div>
);

export default function SystemAdminDashboard() {
  const mockTenants = [
    { name: "Sở GD&ĐT Hà Nội", schools: 245, users: 12500, status: "active" },
    { name: "Sở GD&ĐT TP.HCM", schools: 189, users: 9800, status: "active" },
    { name: "Sở GD&ĐT Đà Nẵng", schools: 78, users: 4200, status: "active" },
    {
      name: "Sở GD&ĐT Cần Thơ",
      schools: 56,
      users: 2800,
      status: "maintenance",
    },
  ];

  return (
    <>
      <div className="header">
        <div className="left">
          <h1>Tổng quan</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Tổng quan</a>
            </li>
          </ul>
        </div>
        <a href="#" className="report">
          <i className="bx bx-cloud-download"></i>
          <span>Tải báo cáo CVS</span>
        </a>
      </div>

      {/* Insights as Charts */}
      <div className="insights-charts three-charts">
        <div className="chart-card tenant-active-card">
          <div className="tenant-active-info">
            <i className="bx bx-buildings"></i>
            <div>
              <h3>1.450 Trường học</h3>
              <p>Số lượng Tenant hoạt động</p>
            </div>
          </div>
          <canvas id="tenantActivePieChart"></canvas>
        </div>
        <div className="chart-card uptime-card">
          <div className="tenant-active-info">
            <i className="bx bx-time-five"></i>
            <div>
              <h3>99.9% Uptime</h3>
              <p>Tỷ lệ hoạt động của hệ thống</p>
            </div>
          </div>
          <canvas id="uptimeLineChart"></canvas>
        </div>
        <div className="chart-card user-active-card">
          <div className="tenant-active-info">
            <i className="bx bx-group"></i>
            <div>
              <h3>50.000 Người dùng</h3>
              <p>Tổng số người dùng đang hoạt động</p>
            </div>
          </div>
          <canvas id="activeUserBarChart"></canvas>
        </div>
      </div>
      {/* End of Insights as Charts */}

      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className="bx bx-history"></i>
            <h3>Hoạt động hệ thống gần đây</h3>
            <i className="bx bx-filter"></i>
            <i className="bx bx-search"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Người dùng</th>
                <th>Hành động</th>
                <th>Ngày/Giờ</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>admin1@educore.com</p>
                </td>
                <td>Tạo Tenant (Trường XYZ)</td>
                <td>06-07-2025 08:00</td>
                <td>
                  <span className="status completed">Thành công</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>admin2@educore.com</p>
                </td>
                <td>Gán vai trò (Giáo viên)</td>
                <td>06-07-2025 07:45</td>
                <td>
                  <span className="status completed">Thành công</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>system@educore.com</p>
                </td>
                <td>Khởi tạo sao lưu</td>
                <td>06-07-2025 07:30</td>
                <td>
                  <span className="status process">Đang xử lý</span>
                </td>
              </tr>
              <tr>
                <td>
<img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />                  <p>admin3@educore.com</p>
                </td>
                <td>Xóa Tenant (Trường ABC)</td>
                <td>05-07-2025 18:20</td>
                <td>
                  <span className="status completed">Thành công</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>admin4@educore.com</p>
                </td>
                <td>Đăng nhập</td>
                <td>05-07-2025 17:55</td>
                <td>
                  <span className="status pending">Thất bại</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reminders */}
        <div className="reminders">
          <div className="header">
            <i className="bx bx-support"></i>
            <h3>Vé hỗ trợ đang chờ</h3>
            <i className="bx bx-filter"></i>
            <i className="bx bx-plus"></i>
          </div>
          <div className="ticket-table-wrapper">
            <div className="ticket-labels">
              <span className="ticket-label ticket-label-id">Mã vé</span>
              <span className="ticket-label ticket-label-desc">Tên</span>
              <span className="ticket-label ticket-label-sender">Người gửi</span>
              <span className="ticket-label ticket-label-priority">Ưu tiên</span>
              <span className="ticket-label ticket-label-date">Ngày gửi</span>
            </div>
            <ul className="task-list">
              <li className="priority-high">
                <div className="task-title">
                  <span className="ticket-id">#123</span>
                  <span className="ticket-desc">Không thể tải mô hình 3D lên module ngoại khóa</span>
                </div>
                <div className="ticket-meta">
                  <span className="sender">Trường ABC</span>
                  <span className="priority">Cao</span>
                  <span className="date">06-07-2025</span>
                </div>
              </li>
              <li className="priority-medium">
                <div className="task-title">
                  <span className="ticket-id">#124</span>
                  <span className="ticket-desc">Lỗi cấu hình email SMTP</span>
                </div>
                <div className="ticket-meta">
                  <span className="sender">Trường XYZ</span>
                  <span className="priority">Trung bình</span>
                  <span className="date">06-07-2025</span>
                </div>
              </li>
              <li className="priority-low">
                <div className="task-title">
                  <span className="ticket-id">#125</span>
                  <span className="ticket-desc">Tài khoản người dùng bị khóa</span>
                </div>
                <div className="ticket-meta">
                  <span className="sender">Giáo viên John</span>
                  <span className="priority">Thấp</span>
                  <span className="date">06-06-2025</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Reminders*/}
      </div>
    </>
  );
}
