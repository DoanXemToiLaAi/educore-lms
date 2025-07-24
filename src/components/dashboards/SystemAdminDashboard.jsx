import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import ExportModal from "../common/ExportModal";
import { exportReport } from "../../utils/exportUtils";

export default function SystemAdminDashboard() {
  // Ref cho từng chart và instance
  const apiUsageRef = useRef(null);  // Thay thế pieRef
  const lineRef = useRef(null);
  const barRef = useRef(null);
  const tenantGrowthRef = useRef(null); // Chart lớn mới
  const cpuGaugeRef = useRef(null);
  const memoryGaugeRef = useRef(null);
  const storageGaugeRef = useRef(null);
  const networkRef = useRef(null);
  
  const apiUsageInstance = useRef(null);  // Thay thế pieChartInstance
  const lineChartInstance = useRef(null);
  const barChartInstance = useRef(null);
  const tenantGrowthInstance = useRef(null); // Chart lớn mới
  const cpuGaugeInstance = useRef(null);
  const memoryGaugeInstance = useRef(null);
  const storageGaugeInstance = useRef(null);
  const networkChartInstance = useRef(null);

  // Export modal states
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  // Chart refs collection for export
  const chartRefs = {
    apiUsageRef,
    lineRef,
    barRef,
    tenantGrowthRef,
    cpuGaugeRef,
    memoryGaugeRef,
    storageGaugeRef,
    networkRef,
  };

  // Handle export
  const handleExport = async (config) => {
    setIsExporting(true);
    setExportProgress(0);

    try {
      const result = await exportReport(config, chartRefs, setExportProgress);
      
      if (result.success) {
        setTimeout(() => {
          setIsExportModalOpen(false);
          setIsExporting(false);
          setExportProgress(0);
        }, 1000);
      } else {
        console.error('Export failed:', result.error);
        setIsExporting(false);
        setExportProgress(0);
      }
    } catch (error) {
      console.error('Export error:', error);
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  useEffect(() => {
    // Destroy chart cũ nếu có
    if (apiUsageInstance.current) apiUsageInstance.current.destroy();
    if (lineChartInstance.current) lineChartInstance.current.destroy();
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (tenantGrowthInstance.current) tenantGrowthInstance.current.destroy();
    if (cpuGaugeInstance.current) cpuGaugeInstance.current.destroy();
    if (memoryGaugeInstance.current) memoryGaugeInstance.current.destroy();
    if (storageGaugeInstance.current) storageGaugeInstance.current.destroy();
    if (networkChartInstance.current) networkChartInstance.current.destroy();

    // API Usage & Performance Chart (thay thế pie chart)
    if (apiUsageRef.current) {
      apiUsageInstance.current = new Chart(apiUsageRef.current, {
        type: "doughnut",
        data: {
          labels: ["API Success", "API Errors", "Timeout"],
          datasets: [
            {
              data: [8420, 180, 45],
              backgroundColor: ["#388E3C", "#FBC02D", "#D32F2F"],
            },
          ],
        },
        options: {
          plugins: { 
            legend: { position: "bottom", display: true }
          },
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
        },
      });
    }

    // Line Chart
    if (lineRef.current) {
      lineChartInstance.current = new Chart(lineRef.current, {
        type: "line",
        data: {
          labels: ["Tháng 5", "Tháng 6", "Tháng 7"],
          datasets: [
            {
              label: "Uptime (%)",
              data: [99.7, 99.8, 99.9],
              borderColor: "#1E3A8A",
              backgroundColor: "#CFE8FF",
              fill: false,
              tension: 0.3,
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          scales: { y: { min: 99, max: 100 } },
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
        },
      });
    }

    // Bar Chart
    if (barRef.current) {
      barChartInstance.current = new Chart(barRef.current, {
        type: "bar",
        data: {
          labels: ["Tháng 5", "Tháng 6", "Tháng 7"],
          datasets: [
            {
              label: "Người dùng hoạt động",
              data: [48000, 49500, 50000],
              backgroundColor: "#1E3A8A",
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
        },
      });
    }

    // Tenant Growth Analytics Chart (Chart lớn mới)
    if (tenantGrowthRef.current) {
      tenantGrowthInstance.current = new Chart(tenantGrowthRef.current, {
        type: "line",
        data: {
          labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
          datasets: [
            {
              label: "Miền Bắc",
              data: [120, 145, 167, 189, 210, 234, 256, 278, 301, 325, 348, 372],
              borderColor: "#1E3A8A",
              backgroundColor: "rgba(30, 58, 138, 0.1)",
              fill: false,
              tension: 0.4,
            },
            {
              label: "Miền Trung", 
              data: [85, 102, 118, 134, 151, 167, 184, 200, 217, 233, 250, 266],
              borderColor: "#FBC02D",
              backgroundColor: "rgba(251, 192, 45, 0.1)",
              fill: false,
              tension: 0.4,
            },
            {
              label: "Miền Nam",
              data: [200, 225, 251, 278, 305, 332, 359, 386, 413, 440, 467, 494],
              borderColor: "#388E3C",
              backgroundColor: "rgba(56, 142, 60, 0.1)",
              fill: false,
              tension: 0.4,
            }
          ],
        },
        options: {
          plugins: { 
            legend: { 
              display: true, 
              position: "top",
              labels: {
                usePointStyle: true,
                padding: 20
              }
            },
            title: {
              display: true,
              text: "Tăng trưởng số lượng trường học theo vùng miền",
              font: { size: 16, weight: 'bold' },
              padding: { bottom: 20 }
            }
          },
          scales: {
            y: { 
              beginAtZero: true,
              title: {
                display: true,
                text: "Số lượng trường học"
              }
            },
            x: { 
              title: {
                display: true,
                text: "Tháng trong năm 2025"
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    // CPU Gauge Chart
    if (cpuGaugeRef.current) {
      cpuGaugeInstance.current = new Chart(cpuGaugeRef.current, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [68, 32],
              backgroundColor: ["#1E3A8A", "#e5e7eb"],
              borderWidth: 0,
              cutout: "75%",
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
        },
      });
    }

    // Memory Gauge Chart
    if (memoryGaugeRef.current) {
      memoryGaugeInstance.current = new Chart(memoryGaugeRef.current, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [74, 26],
              backgroundColor: ["#FBC02D", "#e5e7eb"],
              borderWidth: 0,
              cutout: "75%",
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
        },
      });
    }

    // Storage Gauge Chart
    if (storageGaugeRef.current) {
      storageGaugeInstance.current = new Chart(storageGaugeRef.current, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [45, 55],
              backgroundColor: ["#388E3C", "#e5e7eb"],
              borderWidth: 0,
              cutout: "75%",
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
        },
      });
    }

    // Network Traffic Chart
    if (networkRef.current) {
      networkChartInstance.current = new Chart(networkRef.current, {
        type: "line",
        data: {
          labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
          datasets: [
            {
              label: "Network (Mbps)",
              data: [120, 80, 150, 200, 180, 160, 140],
              borderColor: "#1E3A8A",
              backgroundColor: "rgba(30, 58, 138, 0.1)",
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true },
            x: { display: true }
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    // Cleanup khi unmount
    return () => {
      if (apiUsageInstance.current) apiUsageInstance.current.destroy();
      if (lineChartInstance.current) lineChartInstance.current.destroy();
      if (barChartInstance.current) barChartInstance.current.destroy();
      if (tenantGrowthInstance.current) tenantGrowthInstance.current.destroy();
      if (cpuGaugeInstance.current) cpuGaugeInstance.current.destroy();
      if (memoryGaugeInstance.current) memoryGaugeInstance.current.destroy();
      if (storageGaugeInstance.current) storageGaugeInstance.current.destroy();
      if (networkChartInstance.current) networkChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="w-full text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-9">
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-blue-600">Tổng quan</h1>
          <ul className="flex items-center gap-4 text-gray-500">
            <li>
              <span>Tổng quan hệ thống</span>
            </li>
          </ul>
        </div>
        <button 
          className="h-9 px-4 rounded-full bg-blue-600 text-white flex items-center gap-2 font-medium hover:bg-blue-700 transition-colors border-none cursor-pointer"
          onClick={() => setIsExportModalOpen(true)}
        >
          <i className="bx bx-cloud-download"></i>
          <span>Tải báo cáo</span>
        </button>
      </div>

      {/* Insights as Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm min-h-[280px] max-h-[320px] flex flex-col">
          <div className="flex items-center gap-6 mb-4">
            <i className="bx bx-radio-circle-marked text-blue-600 text-3xl w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">8.645 API Calls</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hiệu năng API & Lỗi hệ thống</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <canvas ref={apiUsageRef} className="w-full h-48 max-h-48"></canvas>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm min-h-[280px] max-h-[320px] flex flex-col">
          <div className="flex items-center gap-6 mb-4">
            <i className="bx bx-time-five text-blue-600 text-3xl w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">99.9% Uptime</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tỷ lệ hoạt động của hệ thống</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <canvas ref={lineRef} className="w-full h-48 max-h-48"></canvas>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm min-h-[280px] max-h-[320px] flex flex-col">
          <div className="flex items-center gap-6 mb-4">
            <i className="bx bx-group text-blue-600 text-3xl w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">50.000 Người dùng</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tổng số người dùng đang hoạt động</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <canvas ref={barRef} className="w-full h-48 max-h-48"></canvas>
          </div>
        </div>
      </div>

      {/* Tenant Growth Analytics - Large Chart */}
      <div className="mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 h-96 flex items-center justify-center">
          <canvas ref={tenantGrowthRef} className="w-full h-80 max-h-80"></canvas>
        </div>
      </div>

      {/* System Resources Section */}
      <div className="mb-8">
        <div className="mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Tài nguyên hệ thống</h2>
            <p className="text-gray-600 dark:text-gray-400">Theo dõi hiệu năng và sử dụng tài nguyên</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <i className="bx bx-chip text-blue-600 text-2xl"></i>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">CPU Usage</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sử dụng bộ xử lý</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <canvas ref={cpuGaugeRef} className="w-24 h-24"></canvas>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800 dark:text-gray-200">68%</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <i className="bx bx-memory-card text-yellow-600 text-2xl"></i>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Memory Usage</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sử dụng bộ nhớ RAM</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <canvas ref={memoryGaugeRef} className="w-24 h-24"></canvas>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800 dark:text-gray-200">74%</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <i className="bx bx-hdd text-green-600 text-2xl"></i>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Storage Usage</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sử dụng ổ cứng</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <canvas ref={storageGaugeRef} className="w-24 h-24"></canvas>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800 dark:text-gray-200">45%</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <i className="bx bx-wifi text-blue-600 text-2xl"></i>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Network Traffic</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lưu lượng mạng (24h)</p>
              </div>
            </div>
            <div className="h-24 flex items-center justify-center">
              <canvas ref={networkRef} className="w-full h-full"></canvas>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <i className="bx bx-history text-blue-600 text-xl"></i>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Hoạt động hệ thống gần đây</h3>
            <div className="ml-auto flex gap-2">
              <i className="bx bx-filter text-gray-400 cursor-pointer hover:text-gray-600"></i>
              <i className="bx bx-search text-gray-400 cursor-pointer hover:text-gray-600"></i>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Người dùng</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Hành động</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Ngày - Giờ</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" className="w-8 h-8 rounded-full" />
                      <p className="text-sm text-gray-800 dark:text-gray-200">superadmin@educore.com</p>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Tạo Tenant (Sở GD&ĐT Quảng Ninh)</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">16-07-2025 09:15</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Thành công</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" className="w-8 h-8 rounded-full" />
                      <p className="text-sm text-gray-800 dark:text-gray-200">admin1@educore.com</p>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Cập nhật cấu hình hệ thống</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">16-07-2025 08:45</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Thành công</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" className="w-8 h-8 rounded-full" />
                      <p className="text-sm text-gray-800 dark:text-gray-200">system@educore.com</p>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Sao lưu cơ sở dữ liệu tự động</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">16-07-2025 02:00</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Thành công</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" className="w-8 h-8 rounded-full" />
                      <p className="text-sm text-gray-800 dark:text-gray-200">admin2@educore.com</p>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Gán quyền Admin trường (User123)</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">15-07-2025 16:30</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Thành công</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" className="w-8 h-8 rounded-full" />
                      <p className="text-sm text-gray-800 dark:text-gray-200">monitor@educore.com</p>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Phát hiện lỗi kết nối DB</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">15-07-2025 14:22</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Cảnh báo</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" className="w-8 h-8 rounded-full" />
                      <p className="text-sm text-gray-800 dark:text-gray-200">admin3@educore.com</p>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Tạm dừng Tenant (Trường ABC)</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">15-07-2025 11:10</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">Đang xử lý</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Support Tickets */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <i className="bx bx-support text-blue-600 text-xl"></i>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Vé hỗ trợ đang chờ</h3>
            <div className="ml-auto flex gap-2">
              <i className="bx bx-filter text-gray-400 cursor-pointer hover:text-gray-600"></i>
              <i className="bx bx-plus text-gray-400 cursor-pointer hover:text-gray-600"></i>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Mã vé</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Mô tả</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Người gửi</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Ưu tiên</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-600 dark:text-gray-400">Ngày gửi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <td className="py-3 px-2 text-sm font-medium text-gray-800 dark:text-gray-200">#1285</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Server database không phản hồi - ảnh hưởng 15 trường</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Monitoring System</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Cao</span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">16-07-2025</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <td className="py-3 px-2 text-sm font-medium text-gray-800 dark:text-gray-200">#1284</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Yêu cầu tăng quota storage từ 100GB lên 500GB</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Sở GD&ĐT Hà Nội</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Cao</span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">16-07-2025</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20">
                  <td className="py-3 px-2 text-sm font-medium text-gray-800 dark:text-gray-200">#1283</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Lỗi cấu hình SMTP - không gửi được email thông báo</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Trường THPT ABC</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Trung bình</span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">15-07-2025</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/20">
                  <td className="py-3 px-2 text-sm font-medium text-gray-800 dark:text-gray-200">#1282</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Yêu cầu tích hợp API với hệ thống quản lý học sinh</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Sở GD&ĐT TP.HCM</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Trung bình</span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">15-07-2025</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2 text-sm font-medium text-gray-800 dark:text-gray-200">#1281</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Yêu cầu thêm tính năng báo cáo tùy chỉnh</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Trường THCS XYZ</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Thấp</span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">14-07-2025</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-2 text-sm font-medium text-gray-800 dark:text-gray-200">#1280</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Hướng dẫn cách tạo lớp học ảo cho giáo viên mới</td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">Giáo viên Nguyễn A</td>
                  <td className="py-3 px-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">Thấp</span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-400">14-07-2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onExport={handleExport}
        isExporting={isExporting}
        exportProgress={exportProgress}
      />
    </div>
  );
}
