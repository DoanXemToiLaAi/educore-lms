import jsPDF from 'jspdf';

// Helper function to add Vietnamese font support
const setupVietnameseFont = (doc) => {
  // Use default fonts that support Unicode better
  doc.setFont('helvetica');
};

// Helper function to draw table manually
const drawTable = (doc, headers, data, startY, columnWidths) => {
  let currentY = startY;
  const rowHeight = 8;
  const cellPadding = 2;
  
  // Draw header
  doc.setFillColor(30, 58, 138);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  
  let currentX = 20;
  headers.forEach((header, index) => {
    doc.rect(currentX, currentY, columnWidths[index], rowHeight, 'F');
    doc.text(header, currentX + cellPadding, currentY + 6);
    currentX += columnWidths[index];
  });
  
  currentY += rowHeight;
  
  // Draw data rows
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);
  
  data.forEach((row, rowIndex) => {
    // Alternate row colors
    if (rowIndex % 2 === 0) {
      doc.setFillColor(248, 249, 250);
      doc.rect(20, currentY, columnWidths.reduce((sum, width) => sum + width, 0), rowHeight, 'F');
    }
    
    currentX = 20;
    row.forEach((cell, cellIndex) => {
      // Draw cell border
      doc.setDrawColor(220, 220, 220);
      doc.rect(currentX, currentY, columnWidths[cellIndex], rowHeight);
      
      // Draw cell text
      const cellText = String(cell).substring(0, 30); // Limit text length
      doc.text(cellText, currentX + cellPadding, currentY + 6);
      currentX += columnWidths[cellIndex];
    });
    
    currentY += rowHeight;
  });
  
  return currentY;
};

// Generate PDF with jsPDF
export const generateSystemReportPDF = async (config, chartImages = {}) => {
  const { reportType, dateRange } = config;
  
  try {
    const doc = new jsPDF('p', 'mm', 'a4');
    setupVietnameseFont(doc);
    
    let yPosition = 20;
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(30, 58, 138); // Primary color
    doc.text('EduCore System Report', 20, yPosition);
    
    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('Bao cao tong quan he thong giao duc', 20, yPosition);
    
    yPosition += 15;
    doc.setFontSize(10);
    doc.setTextColor(140, 140, 140);
    doc.text(`Tao luc: ${new Date().toLocaleString('vi-VN')}`, 20, yPosition);
    doc.text(`Khoang thoi gian: ${dateRange}`, 120, yPosition);
    doc.text(`Loai: ${reportType}`, 20, yPosition + 5);
    
    // Add a line separator
    yPosition += 15;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPosition, 190, yPosition);
    
    yPosition += 10;
    
    // Executive Summary Section
    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('Tong quan', 20, yPosition);
    
    yPosition += 15;
    
    // Metrics Cards
    const metrics = [
      { label: 'API Calls', value: '8,645', change: '+12%' },
      { label: 'Uptime', value: '99.9%', change: '+0.1%' },
      { label: 'Nguoi dung', value: '50,000', change: '+2.5%' },
      { label: 'Tai nguyen', value: '68%', change: '-5%' },
    ];
    
    // Draw metric cards
    const cardWidth = 40;
    const cardHeight = 25;
    let xPosition = 20;
    
    metrics.forEach((metric, index) => {
      // Card background
      doc.setFillColor(246, 246, 249);
      doc.rect(xPosition, yPosition, cardWidth, cardHeight, 'F');
      
      // Card border
      doc.setDrawColor(30, 58, 138);
      doc.setLineWidth(1);
      doc.line(xPosition, yPosition, xPosition, yPosition + cardHeight);
      
      // Metric value
      doc.setFontSize(14);
      doc.setTextColor(30, 58, 138);
      doc.text(metric.value, xPosition + 3, yPosition + 8);
      
      // Metric label
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(metric.label, xPosition + 3, yPosition + 15);
      
      // Metric change
      doc.setFontSize(7);
      doc.setTextColor(56, 142, 60);
      doc.text(metric.change, xPosition + 3, yPosition + 20);
      
      xPosition += cardWidth + 5;
    });
    
    yPosition += cardHeight + 20;
    
    // Insight Box
    doc.setFillColor(239, 246, 255);
    doc.rect(20, yPosition, 170, 20, 'F');
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(2);
    doc.line(20, yPosition, 20, yPosition + 20);
    
    doc.setFontSize(10);
    doc.setTextColor(30, 64, 175);
    doc.text('Diem chinh', 23, yPosition + 6);
    
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    const insightText = 'He thong hoat dong on dinh voi uptime 99.9%. API performance tot voi 8,645 luot goi thanh cong.';
    doc.text(insightText, 23, yPosition + 12, { maxWidth: 165 });
    
    yPosition += 35;
    
    // Charts Section
    if (Object.keys(chartImages).length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(30, 58, 138);
      doc.text('Bieu do phan tich', 20, yPosition);
      
      yPosition += 15;
      
      // Add charts if available
      let chartCount = 0;
      for (const [chartName, chartImage] of Object.entries(chartImages)) {
        if (chartImage && chartCount < 2) { // Limit to 2 charts per page
          try {
            doc.setFontSize(12);
            doc.setTextColor(54, 57, 73);
            doc.text(`Bieu do: ${chartName}`, 20, yPosition);
            
            yPosition += 10;
            
            // Add chart image
            doc.addImage(chartImage, 'PNG', 20, yPosition, 170, 80);
            yPosition += 90;
            chartCount++;
            
            if (yPosition > 250) { // Page break
              doc.addPage();
              yPosition = 20;
            }
          } catch (error) {
            console.warn('Could not add chart image:', chartName, error);
          }
        }
      }
    }
    
    // System Activities Table
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('Hoat dong he thong gan day', 20, yPosition);
    
    yPosition += 10;
    
    const systemActivities = [
      ['superadmin@educore.com', 'Tao Tenant (So GD&DT Quang Ninh)', '16-07-2025 09:15', 'Thanh cong'],
      ['admin1@educore.com', 'Cap nhat cau hinh he thong', '16-07-2025 08:45', 'Thanh cong'],
      ['system@educore.com', 'Sao luu co so du lieu tu dong', '16-07-2025 02:00', 'Thanh cong'],
      ['monitor@educore.com', 'Phat hien loi ket noi DB', '15-07-2025 14:22', 'Canh bao'],
    ];
    
    yPosition = drawTable(
      doc, 
      ['Nguoi dung', 'Hanh dong', 'Thoi gian', 'Trang thai'],
      systemActivities,
      yPosition,
      [45, 70, 35, 25]
    );
    
    yPosition += 20;
    
    // Support Tickets Table
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('Ve ho tro dang cho', 20, yPosition);
    
    yPosition += 10;
    
    const supportTickets = [
      ['#1285', 'Server database khong phan hoi', 'Monitoring System', 'Cao', '16-07-2025'],
      ['#1284', 'Yeu cau tang quota storage', 'So GD&DT Ha Noi', 'Cao', '16-07-2025'],
      ['#1283', 'Loi cau hinh SMTP', 'Truong THPT ABC', 'Trung binh', '15-07-2025'],
      ['#1282', 'Yeu cau tich hop API', 'So GD&DT TP.HCM', 'Trung binh', '15-07-2025'],
    ];
    
    yPosition = drawTable(
      doc,
      ['Ma ve', 'Mo ta', 'Nguoi gui', 'Uu tien', 'Ngay gui'],
      supportTickets,
      yPosition,
      [20, 60, 40, 25, 30]
    );
    
    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(156, 163, 175);
      doc.text('EduCore Learning Management System', 20, 285);
      doc.text(`Trang ${i}`, 95, 285);
      doc.text('Bao cao duoc tao tu dong', 150, 285);
    }
    
    return doc;
    
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
};
