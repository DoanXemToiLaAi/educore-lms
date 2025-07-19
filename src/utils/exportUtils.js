import html2canvas from 'html2canvas';
import { generateSystemReportPDF } from './pdfGenerator';

// Chart to Image Converter
export const captureChartAsImage = async (canvasElement) => {
  if (!canvasElement) return null;
  
  try {
    // Ensure chart is rendered
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const canvas = await html2canvas(canvasElement, {
      backgroundColor: '#ffffff',
      scale: 2, // Higher quality
      logging: false,
    });
    
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Error capturing chart:', error);
    return null;
  }
};

// Capture all charts from dashboard
export const captureAllCharts = async (chartRefs) => {
  const chartImages = {};
  
  try {
    // API Usage Chart
    if (chartRefs.apiUsageRef?.current) {
      chartImages.apiUsage = await captureChartAsImage(chartRefs.apiUsageRef.current);
    }
    
    // Uptime Chart
    if (chartRefs.lineRef?.current) {
      chartImages.uptime = await captureChartAsImage(chartRefs.lineRef.current);
    }
    
    // User Activity Chart
    if (chartRefs.barRef?.current) {
      chartImages.userActivity = await captureChartAsImage(chartRefs.barRef.current);
    }
    
    // Tenant Growth Chart
    if (chartRefs.tenantGrowthRef?.current) {
      chartImages.tenantGrowth = await captureChartAsImage(chartRefs.tenantGrowthRef.current);
    }
    
    // Resource Gauges
    if (chartRefs.cpuGaugeRef?.current) {
      chartImages.cpuGauge = await captureChartAsImage(chartRefs.cpuGaugeRef.current);
    }
    
    if (chartRefs.memoryGaugeRef?.current) {
      chartImages.memoryGauge = await captureChartAsImage(chartRefs.memoryGaugeRef.current);
    }
    
    if (chartRefs.storageGaugeRef?.current) {
      chartImages.storageGauge = await captureChartAsImage(chartRefs.storageGaugeRef.current);
    }
    
    if (chartRefs.networkRef?.current) {
      chartImages.networkChart = await captureChartAsImage(chartRefs.networkRef.current);
    }
  } catch (error) {
    console.error('Error capturing charts:', error);
  }
  
  return chartImages;
};

// CSV Export Functions
export const convertToCSV = (data, headers) => {
  const csvHeaders = headers.join(',');
  const csvRows = data.map(row => 
    headers.map(header => {
      const value = row[header] || '';
      // Escape commas and quotes
      return typeof value === 'string' && (value.includes(',') || value.includes('"')) 
        ? `"${value.replace(/"/g, '""')}"` 
        : value;
    }).join(',')
  );
  
  return [csvHeaders, ...csvRows].join('\n');
};

export const downloadCSV = (csvContent, filename) => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Get sample data for different report types
export const getSampleDataForReport = (reportType, dateRange) => {
  const baseData = {
    systemActivities: [
      { 
        stt: 1, 
        nguoiDung: 'superadmin@educore.com', 
        hanhDong: 'Tạo Tenant (Sở GD&ĐT Quảng Ninh)', 
        thoiGian: '16-07-2025 09:15', 
        trangThai: 'Thành công',
        ipAddress: '192.168.1.100',
        userAgent: 'Chrome/91.0'
      },
      { 
        stt: 2, 
        nguoiDung: 'admin1@educore.com', 
        hanhDong: 'Cập nhật cấu hình hệ thống', 
        thoiGian: '16-07-2025 08:45', 
        trangThai: 'Thành công',
        ipAddress: '192.168.1.101',
        userAgent: 'Firefox/89.0'
      },
      { 
        stt: 3, 
        nguoiDung: 'system@educore.com', 
        hanhDong: 'Sao lưu cơ sở dữ liệu tự động', 
        thoiGian: '16-07-2025 02:00', 
        trangThai: 'Thành công',
        ipAddress: 'localhost',
        userAgent: 'System/1.0'
      },
      { 
        stt: 4, 
        nguoiDung: 'monitor@educore.com', 
        hanhDong: 'Phát hiện lỗi kết nối DB', 
        thoiGian: '15-07-2025 14:22', 
        trangThai: 'Cảnh báo',
        ipAddress: '192.168.1.102',
        userAgent: 'Monitor/2.1'
      },
    ],
    supportTickets: [
      { 
        stt: 1, 
        maVe: '#1285', 
        tieuDe: 'Database Error', 
        moTa: 'Server database không phản hồi - ảnh hưởng 15 trường', 
        nguoiGui: 'Monitoring System', 
        uuTien: 'Cao', 
        trangThai: 'Đang chờ',
        ngayTao: '16-07-2025',
        ngayCapNhat: '16-07-2025'
      },
      { 
        stt: 2, 
        maVe: '#1284', 
        tieuDe: 'Storage Request', 
        moTa: 'Yêu cầu tăng quota storage từ 100GB lên 500GB', 
        nguoiGui: 'Sở GD&ĐT Hà Nội', 
        uuTien: 'Cao', 
        trangThai: 'Đang chờ',
        ngayTao: '16-07-2025',
        ngayCapNhat: '16-07-2025'
      },
      { 
        stt: 3, 
        maVe: '#1283', 
        tieuDe: 'SMTP Configuration', 
        moTa: 'Lỗi cấu hình SMTP - không gửi được email thông báo', 
        nguoiGui: 'Trường THPT ABC', 
        uuTien: 'Trung bình', 
        trangThai: 'Đang xử lý',
        ngayTao: '15-07-2025',
        ngayCapNhat: '16-07-2025'
      },
    ],
    apiStats: [
      { 
        stt: 1, 
        endpoint: '/api/auth/login', 
        soLanGoi: 1250, 
        thanhCong: 1230, 
        loi: 15, 
        timeout: 5, 
        thoiGianPhanHoi: 120,
        ngay: '16-07-2025'
      },
      { 
        stt: 2, 
        endpoint: '/api/users/profile', 
        soLanGoi: 890, 
        thanhCong: 885, 
        loi: 3, 
        timeout: 2, 
        thoiGianPhanHoi: 95,
        ngay: '16-07-2025'
      },
      { 
        stt: 3, 
        endpoint: '/api/courses/list', 
        soLanGoi: 2340, 
        thanhCong: 2320, 
        loi: 15, 
        timeout: 5, 
        thoiGianPhanHoi: 200,
        ngay: '16-07-2025'
      },
    ],
    systemResources: [
      { 
        stt: 1, 
        thoiGian: '16-07-2025 00:00', 
        cpu: 68, 
        memory: 74, 
        storage: 45, 
        network: 120,
        diskIO: 50
      },
      { 
        stt: 2, 
        thoiGian: '16-07-2025 01:00', 
        cpu: 65, 
        memory: 72, 
        storage: 45, 
        network: 110,
        diskIO: 45
      },
      { 
        stt: 3, 
        thoiGian: '16-07-2025 02:00', 
        cpu: 70, 
        memory: 76, 
        storage: 45, 
        network: 130,
        diskIO: 55
      },
    ]
  };

  return baseData[reportType] || baseData.systemActivities;
};

// CSV Headers for different report types
export const getCSVHeaders = (reportType) => {
  const headers = {
    'system-activity': ['stt', 'nguoiDung', 'hanhDong', 'thoiGian', 'trangThai', 'ipAddress', 'userAgent'],
    'support-tickets': ['stt', 'maVe', 'tieuDe', 'moTa', 'nguoiGui', 'uuTien', 'trangThai', 'ngayTao', 'ngayCapNhat'],
    'api-performance': ['stt', 'endpoint', 'soLanGoi', 'thanhCong', 'loi', 'timeout', 'thoiGianPhanHoi', 'ngay'],
    'system-resources': ['stt', 'thoiGian', 'cpu', 'memory', 'storage', 'network', 'diskIO']
  };

  return headers[reportType] || headers['system-activity'];
};

// Generate filename based on report type and date
export const generateFilename = (reportType, format, dateRange) => {
  const date = new Date().toISOString().split('T')[0];
  const type = reportType.replace('-', '_');
  const range = dateRange.replace('-', '_');
  
  return `educore_${type}_${range}_${date}.${format}`;
};

// Main export function
export const exportReport = async (config, chartRefs, onProgress) => {
  const { type, format, dateRange } = config;
  
  try {
    console.log('Starting export with config:', config);
    onProgress(10);
    
    if (format === 'pdf') {
      // Capture charts
      console.log('Capturing charts...');
      onProgress(30);
      const chartImages = await captureAllCharts(chartRefs);
      console.log('Charts captured:', Object.keys(chartImages));
      
      onProgress(60);
      
      // Generate PDF
      console.log('Generating PDF...');
      const pdfDoc = await generateSystemReportPDF({
        reportType: type, 
        dateRange: dateRange
      }, chartImages);
      
      onProgress(80);
      
      // Create and download PDF
      console.log('Creating PDF blob...');
      const filename = generateFilename(type, format, dateRange);
      console.log('Download filename:', filename);
      
      // Save PDF
      console.log('Triggering download...');
      pdfDoc.save(filename);
      
      onProgress(100);
      console.log('PDF export completed successfully');
      
    } else if (format === 'csv') {
      onProgress(40);
      
      // Get data for CSV
      const data = getSampleDataForReport(type, dateRange);
      const headers = getCSVHeaders(type);
      
      onProgress(70);
      
      // Generate CSV
      const csvContent = convertToCSV(data, headers);
      const filename = generateFilename(type, format, dateRange);
      
      onProgress(90);
      
      // Download CSV
      downloadCSV(csvContent, filename);
      onProgress(100);
    }
    
    return { success: true };
    
  } catch (error) {
    console.error('Export error:', error);
    return { success: false, error: error.message };
  }
};
