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
    <>
      <div className="header">
        <div className="left">
          <h1>Tổng quan</h1>
          <ul className="breadcrumb">
            <li>
              <span>Tổng quan hệ thống</span>
            </li>
          </ul>
        </div>
        <button className="report" onClick={() => setIsExportModalOpen(true)}>
          <i className="bx bx-cloud-download"></i>
          <span>Tải báo cáo</span>
        </button>
      </div>

      {/* Insights as Charts */}
      <div className="insights-charts three-charts">
        <div className="chart-card tenant-active-card">
          <div className="tenant-active-info">
            <i className="bx bx-radio-circle-marked"></i>
            <div>
              <h3>8.645 API Calls</h3>
              <p>Hiệu năng API & Lỗi hệ thống</p>
            </div>
          </div>
          <canvas ref={apiUsageRef}></canvas>
        </div>
        <div className="chart-card uptime-card">
          <div className="tenant-active-info">
            <i className="bx bx-time-five"></i>
            <div>
              <h3>99.9% Uptime</h3>
              <p>Tỷ lệ hoạt động của hệ thống</p>
            </div>
          </div>
          <canvas ref={lineRef}></canvas>
        </div>
        <div className="chart-card user-active-card">
          <div className="tenant-active-info">
            <i className="bx bx-group"></i>
            <div>
              <h3>50.000 Người dùng</h3>
              <p>Tổng số người dùng đang hoạt động</p>
            </div>
          </div>
          <canvas ref={barRef}></canvas>
        </div>
      </div>
      {/* End of Insights as Charts */}

      {/* Tenant Growth Analytics - Large Chart */}
      <div className="tenant-growth-section">
        <div className="chart-card large-chart">
          <canvas ref={tenantGrowthRef}></canvas>
        </div>
      </div>
      {/* End of Tenant Growth Analytics */}

      {/* System Resources Section */}
      <div className="system-resources">
        <div className="header">
          <div className="left">
            <h2>Tài nguyên hệ thống</h2>
            <p>Theo dõi hiệu năng và sử dụng tài nguyên</p>
          </div>
        </div>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-info">
              <i className="bx bx-chip"></i>
              <div>
                <h3>CPU Usage</h3>
                <p>Sử dụng bộ xử lý</p>
              </div>
            </div>
            <div className="gauge-container">
              <canvas ref={cpuGaugeRef}></canvas>
              <div className="gauge-value">68%</div>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-info">
              <i className="bx bx-memory-card"></i>
              <div>
                <h3>Memory Usage</h3>
                <p>Sử dụng bộ nhớ RAM</p>
              </div>
            </div>
            <div className="gauge-container">
              <canvas ref={memoryGaugeRef}></canvas>
              <div className="gauge-value">74%</div>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-info">
              <i className="bx bx-hdd"></i>
              <div>
                <h3>Storage Usage</h3>
                <p>Sử dụng ổ cứng</p>
              </div>
            </div>
            <div className="gauge-container">
              <canvas ref={storageGaugeRef}></canvas>
              <div className="gauge-value">45%</div>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-info">
              <i className="bx bx-wifi"></i>
              <div>
                <h3>Network Traffic</h3>
                <p>Lưu lượng mạng (24h)</p>
              </div>
            </div>
            <div className="network-chart">
              <canvas ref={networkRef}></canvas>
            </div>
          </div>
        </div>
      </div>
      {/* End of System Resources */}

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
                <th>Ngày - Giờ</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>superadmin@educore.com</p>
                </td>
                <td>Tạo Tenant (Sở GD&ĐT Quảng Ninh)</td>
                <td>16-07-2025 09:15</td>
                <td>
                  <span className="status completed">Thành công</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>admin1@educore.com</p>
                </td>
                <td>Cập nhật cấu hình hệ thống</td>
                <td>16-07-2025 08:45</td>
                <td>
                  <span className="status completed">Thành công</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>system@educore.com</p>
                </td>
                <td>Sao lưu cơ sở dữ liệu tự động</td>
                <td>16-07-2025 02:00</td>
                <td>
                  <span className="status completed">Thành công</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>admin2@educore.com</p>
                </td>
                <td>Gán quyền Admin trường (User123)</td>
                <td>15-07-2025 16:30</td>
                <td>
                  <span className="status completed">Thành công</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>monitor@educore.com</p>
                </td>
                <td>Phát hiện lỗi kết nối DB</td>
                <td>15-07-2025 14:22</td>
                <td>
                  <span className="status pending">Cảnh báo</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("../../assets/images/avatar.jpg")} alt="User avatar" />
                  <p>admin3@educore.com</p>
                </td>
                <td>Tạm dừng Tenant (Trường ABC)</td>
                <td>15-07-2025 11:10</td>
                <td>
                  <span className="status process">Đang xử lý</span>
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
          <table>
            <thead>
              <tr>
                <th>Mã vé</th>
                <th>Mô tả</th>
                <th>Người gửi</th>
                <th>Ưu tiên</th>
                <th>Ngày gửi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="priority-high">
                <td>#1285</td>
                <td>Server database không phản hồi - ảnh hưởng 15 trường</td>
                <td>Monitoring System</td>
                <td><span className="priority">Cao</span></td>
                <td>16-07-2025</td>
              </tr>
              <tr className="priority-high">
                <td>#1284</td>
                <td>Yêu cầu tăng quota storage từ 100GB lên 500GB</td>
                <td>Sở GD&ĐT Hà Nội</td>
                <td><span className="priority">Cao</span></td>
                <td>16-07-2025</td>
              </tr>
              <tr className="priority-medium">
                <td>#1283</td>
                <td>Lỗi cấu hình SMTP - không gửi được email thông báo</td>
                <td>Trường THPT ABC</td>
                <td><span className="priority">Trung bình</span></td>
                <td>15-07-2025</td>
              </tr>
              <tr className="priority-medium">
                <td>#1282</td>
                <td>Yêu cầu tích hợp API với hệ thống quản lý học sinh</td>
                <td>Sở GD&ĐT TP.HCM</td>
                <td><span className="priority">Trung bình</span></td>
                <td>15-07-2025</td>
              </tr>
              <tr className="priority-low">
                <td>#1281</td>
                <td>Yêu cầu thêm tính năng báo cáo tùy chỉnh</td>
                <td>Trường THCS XYZ</td>
                <td><span className="priority">Thấp</span></td>
                <td>14-07-2025</td>
              </tr>
              <tr className="priority-low">
                <td>#1280</td>
                <td>Hướng dẫn cách tạo lớp học ảo cho giáo viên mới</td>
                <td>Giáo viên Nguyễn A</td>
                <td><span className="priority">Thấp</span></td>
                <td>14-07-2025</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End of Reminders*/}
      </div>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onExport={handleExport}
        isExporting={isExporting}
        exportProgress={exportProgress}
      />
    </>
  );
}
