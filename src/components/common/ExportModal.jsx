import React, { useState } from "react";
import "./ExportModal.css";

export default function ExportModal({
  isOpen,
  onClose,
  onExport,
  isExporting,
  exportProgress,
}) {
  const [reportType, setReportType] = useState("dashboard-overview");
  const [dateRange, setDateRange] = useState("7-days");
  const [exportFormat, setExportFormat] = useState("pdf");
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");

  if (!isOpen) return null;

  const handleExport = () => {
    const exportConfig = {
      type: reportType,
      format: exportFormat,
      dateRange: dateRange,
      customDateFrom: dateRange === "custom" ? customDateFrom : null,
      customDateTo: dateRange === "custom" ? customDateTo : null,
    };
    onExport(exportConfig);
  };

  const reportTypes = [
    {
      id: "dashboard-overview",
      label: "Tổng quan Dashboard",
      description: "Bao gồm tất cả charts và thống kê hiện tại",
    },
    {
      id: "system-activity",
      label: "Hoạt động hệ thống",
      description: "Chi tiết các hoạt động và logs hệ thống",
    },
    {
      id: "support-tickets",
      label: "Vé hỗ trợ",
      description: "Danh sách và phân tích vé hỗ trợ",
    },
    {
      id: "api-performance",
      label: "Hiệu năng API",
      description: "Thống kê và phân tích API performance",
    },
    {
      id: "system-resources",
      label: "Tài nguyên hệ thống",
      description: "Báo cáo sử dụng CPU, Memory, Storage",
    },
  ];

  const dateRanges = [
    { id: "today", label: "Hôm nay" },
    { id: "7-days", label: "7 ngày qua" },
    { id: "30-days", label: "30 ngày qua" },
    { id: "custom", label: "Tùy chọn" },
  ];

  return (
    <div className="export-modal-overlay">
      <div className="export-modal">
        <div className="export-modal-header">
          <h2>
            <i className="bx bx-download"></i>
            Tải báo cáo
          </h2>
          <button className="close-btn" onClick={onClose}>
            <i className="bx bx-x"></i>
          </button>
        </div>

        <div className="export-modal-body">
          {/* Format Selection */}
          <div className="export-section">
            <h3>Định dạng file</h3>
            <div className="format-options">
              <label
                className={`format-option ${
                  exportFormat === "pdf" ? "active" : ""
                }`}>
                <input
                  type="radio"
                  name="format"
                  value="pdf"
                  checked={exportFormat === "pdf"}
                  onChange={(e) => setExportFormat(e.target.value)}
                />
                <i className="bx bxs-file-pdf"></i>
                <span>PDF</span>
                <small>Professional report với charts</small>
              </label>
              <label
                className={`format-option ${
                  exportFormat === "csv" ? "active" : ""
                }`}>
                <input
                  type="radio"
                  name="format"
                  value="csv"
                  checked={exportFormat === "csv"}
                  onChange={(e) => setExportFormat(e.target.value)}
                />
                <i className="bx bx-table"></i>
                <span>CSV</span>
                <small>Dữ liệu dạng bảng</small>
              </label>
            </div>
          </div>

          {/* Report Type Selection */}
          <div className="export-section">
            <h3>Loại báo cáo</h3>
            <div className="report-types">
              {reportTypes.map((type) => (
                <label
                  key={type.id}
                  className={`report-type ${
                    reportType === type.id ? "active" : ""
                  }`}>
                  <input
                    type="radio"
                    name="reportType"
                    value={type.id}
                    checked={reportType === type.id}
                    onChange={(e) => setReportType(e.target.value)}
                  />
                  <div className="report-type-content">
                    <h4>{type.label}</h4>
                    <p>{type.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Date Range Selection */}
          <div className="export-section">
            <h3>Khoảng thời gian</h3>
            <div className="date-options">
              {dateRanges.map((range) => (
                <label
                  key={range.id}
                  className={`date-option ${
                    dateRange === range.id ? "active" : ""
                  }`}>
                  <input
                    type="radio"
                    name="dateRange"
                    value={range.id}
                    checked={dateRange === range.id}
                    onChange={(e) => setDateRange(e.target.value)}
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>

            {dateRange === "custom" && (
              <div className="custom-date-range">
                <div className="date-input">
                  <label>Từ ngày:</label>
                  <input
                    type="date"
                    value={customDateFrom}
                    onChange={(e) => setCustomDateFrom(e.target.value)}
                  />
                </div>
                <div className="date-input">
                  <label>Đến ngày:</label>
                  <input
                    type="date"
                    value={customDateTo}
                    onChange={(e) => setCustomDateTo(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Preview Section */}
          <div className="export-section">
            <h3>Xem trước</h3>
            <div className="export-preview">
              <div className="preview-info">
                <i className="bx bx-info-circle"></i>
                <div>
                  <p>
                    <strong>Loại:</strong>{" "}
                    {reportTypes.find((t) => t.id === reportType)?.label}
                  </p>
                  <p>
                    <strong>Định dạng:</strong> {exportFormat.toUpperCase()}
                  </p>
                  <p>
                    <strong>Thời gian:</strong>{" "}
                    {dateRanges.find((d) => d.id === dateRange)?.label}
                  </p>
                  {dateRange === "custom" && customDateFrom && customDateTo && (
                    <p>
                      <strong>Từ:</strong> {customDateFrom}{" "}
                      <strong>đến:</strong> {customDateTo}
                    </p>
                  )}
                </div>
              </div>
              <div className="estimated-size">
                <small>Ước tính: ~2.5MB</small>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {isExporting && (
            <div className="export-progress">
              <div className="progress-info">
                <span>Đang tạo báo cáo...</span>
                <span>{exportProgress}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${exportProgress}%` }}></div>
              </div>
            </div>
          )}
        </div>

        <div className="export-modal-footer">
          <button
            className="btn-secondary"
            onClick={onClose}
            disabled={isExporting}>
            Hủy
          </button>
          <button
            className="btn-primary"
            onClick={handleExport}
            disabled={
              isExporting ||
              (dateRange === "custom" && (!customDateFrom || !customDateTo))
            }>
            {isExporting ? (
              <>
                <i className="bx bx-loader-alt bx-spin"></i>
                Đang tạo...
              </>
            ) : (
              <>
                <i className="bx bx-download"></i>
                Tải xuống
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
