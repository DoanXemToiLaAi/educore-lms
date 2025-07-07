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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Quản trị hệ thống</h1>
        <p className="text-gray-600 mt-1">
          Tổng quan và quản lý toàn hệ thống EduCore
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={School}
          title="Tổng số Tenant"
          value="24"
          change={{ value: 8.2, positive: true }}
          color="bg-blue-500"
        />
        <StatCard
          icon={Users}
          title="Tổng người dùng"
          value="45,231"
          change={{ value: 12.5, positive: true }}
          color="bg-green-500"
        />
        <StatCard
          icon={Server}
          title="Uptime hệ thống"
          value="99.9%"
          color="bg-purple-500"
        />
        <StatCard
          icon={Activity}
          title="Requests/giây"
          value="1,247"
          change={{ value: 3.1, positive: false }}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Quản lý Tenant
                </h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Thêm Tenant
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockTenants.map((tenant, index) => (
                  <TenantCard key={index} {...tenant} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Tình trạng hệ thống
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <span className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Hoạt động
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Server</span>
                <span className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Hoạt động
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">File Storage</span>
                <span className="flex items-center text-yellow-600">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  Cảnh báo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">CDN</span>
                <span className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Hoạt động
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Cảnh báo gần đây
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Dung lượng storage cao
                  </p>
                  <p className="text-xs text-gray-500">2 phút trước</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-4 w-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Tăng trưởng người dùng
                  </p>
                  <p className="text-xs text-gray-500">1 giờ trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
