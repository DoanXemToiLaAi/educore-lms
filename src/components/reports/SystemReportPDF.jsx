import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Register fonts for better Vietnamese support
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2' },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2', fontWeight: 'bold' },
  ]
});

// Styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Inter',
  },
  // Header Section
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderBottom: '2px solid #1E3A8A',
    paddingBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
  },
  headerText: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#666666',
  },
  generatedInfo: {
    alignItems: 'flex-end',
  },
  generatedText: {
    fontSize: 10,
    color: '#888888',
    marginBottom: 2,
  },
  
  // Executive Summary
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 15,
    borderBottom: '1px solid #E5E7EB',
    paddingBottom: 5,
  },
  
  // Metrics Cards
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metricCard: {
    width: '23%',
    padding: 15,
    backgroundColor: '#F6F6F9',
    borderRadius: 8,
    borderLeft: '4px solid #1E3A8A',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 5,
  },
  metricLabel: {
    fontSize: 10,
    color: '#666666',
  },
  metricChange: {
    fontSize: 8,
    color: '#388E3C',
    marginTop: 3,
  },
  
  // Charts Section
  chartContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#363949',
    marginBottom: 10,
    textAlign: 'center',
  },
  chartImage: {
    width: 400,
    height: 250,
    objectFit: 'contain',
  },
  chartPlaceholder: {
    width: 400,
    height: 200,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  
  // Tables
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#E5E7EB',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#E5E7EB',
    backgroundColor: '#F3F4F6',
    padding: 8,
  },
  tableCol: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#E5E7EB',
    padding: 8,
  },
  tableCellHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
  },
  tableCell: {
    fontSize: 9,
    color: '#4B5563',
  },
  
  // Status badges
  statusCompleted: {
    backgroundColor: '#10B981',
    color: '#ffffff',
    padding: '2 6',
    borderRadius: 4,
    fontSize: 8,
  },
  statusPending: {
    backgroundColor: '#F59E0B',
    color: '#ffffff',
    padding: '2 6',
    borderRadius: 4,
    fontSize: 8,
  },
  statusProcess: {
    backgroundColor: '#3B82F6',
    color: '#ffffff',
    padding: '2 6',
    borderRadius: 4,
    fontSize: 8,
  },
  
  // Priority badges
  priorityHigh: {
    backgroundColor: '#DC2626',
    color: '#ffffff',
    padding: '2 6',
    borderRadius: 4,
    fontSize: 8,
  },
  priorityMedium: {
    backgroundColor: '#D97706',
    color: '#ffffff',
    padding: '2 6',
    borderRadius: 4,
    fontSize: 8,
  },
  priorityLow: {
    backgroundColor: '#059669',
    color: '#ffffff',
    padding: '2 6',
    borderRadius: 4,
    fontSize: 8,
  },
  
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #E5E7EB',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    color: '#9CA3AF',
  },
  
  // Text utilities
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textSmall: {
    fontSize: 10,
  },
  
  // Spacing utilities
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  
  // Insights section
  insightBox: {
    backgroundColor: '#EFF6FF',
    padding: 15,
    borderRadius: 8,
    borderLeft: '4px solid #2563EB',
    marginBottom: 15,
  },
  insightTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 5,
  },
  insightText: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4,
  },
});

// Sample data (in real app, this would be passed as props)
const sampleData = {
  generatedAt: new Date().toLocaleString('vi-VN'),
  dateRange: '7 ngày qua',
  metrics: [
    { label: 'API Calls', value: '8,645', change: '+12%' },
    { label: 'Uptime', value: '99.9%', change: '+0.1%' },
    { label: 'Người dùng', value: '50,000', change: '+2.5%' },
    { label: 'Tài nguyên', value: '68%', change: '-5%' },
  ],
  systemActivities: [
    { user: 'superadmin@educore.com', action: 'Tạo Tenant (Sở GD&ĐT Quảng Ninh)', time: '16-07-2025 09:15', status: 'Thành công' },
    { user: 'admin1@educore.com', action: 'Cập nhật cấu hình hệ thống', time: '16-07-2025 08:45', status: 'Thành công' },
    { user: 'system@educore.com', action: 'Sao lưu cơ sở dữ liệu tự động', time: '16-07-2025 02:00', status: 'Thành công' },
    { user: 'monitor@educore.com', action: 'Phát hiện lỗi kết nối DB', time: '15-07-2025 14:22', status: 'Cảnh báo' },
  ],
  supportTickets: [
    { id: '#1285', description: 'Server database không phản hồi', sender: 'Monitoring System', priority: 'Cao', date: '16-07-2025' },
    { id: '#1284', description: 'Yêu cầu tăng quota storage', sender: 'Sở GD&ĐT Hà Nội', priority: 'Cao', date: '16-07-2025' },
    { id: '#1283', description: 'Lỗi cấu hình SMTP', sender: 'Trường THPT ABC', priority: 'Trung bình', date: '15-07-2025' },
    { id: '#1282', description: 'Yêu cầu tích hợp API', sender: 'Sở GD&ĐT TP.HCM', priority: 'Trung bình', date: '15-07-2025' },
  ],
};

export default function SystemReportPDF({ reportType = 'dashboard-overview', dateRange = '7-days', chartImages = {} }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Thành công': return styles.statusCompleted;
      case 'Cảnh báo': return styles.statusPending;
      case 'Đang xử lý': return styles.statusProcess;
      default: return styles.statusCompleted;
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'Cao': return styles.priorityHigh;
      case 'Trung bình': return styles.priorityMedium;
      case 'Thấp': return styles.priorityLow;
      default: return styles.priorityMedium;
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>EduCore System Report</Text>
            <Text style={styles.subtitle}>Báo cáo tổng quan hệ thống giáo dục</Text>
          </View>
          <View style={styles.generatedInfo}>
            <Text style={styles.generatedText}>Tạo lúc: {sampleData.generatedAt}</Text>
            <Text style={styles.generatedText}>Khoảng thời gian: {sampleData.dateRange}</Text>
            <Text style={styles.generatedText}>Loại: {reportType}</Text>
          </View>
        </View>

        {/* Executive Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tổng quan</Text>
          
          <View style={styles.metricsGrid}>
            {sampleData.metrics.map((metric, index) => (
              <View key={index} style={styles.metricCard}>
                <Text style={styles.metricValue}>{metric.value}</Text>
                <Text style={styles.metricLabel}>{metric.label}</Text>
                <Text style={styles.metricChange}>{metric.change}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.insightBox}>
            <Text style={styles.insightTitle}>Điểm chính</Text>
            <Text style={styles.insightText}>
              Hệ thống hoạt động ổn định với uptime 99.9%. API performance tốt với 8,645 lượt gọi thành công. 
              Tài nguyên hệ thống đang sử dụng 68% capacity. Có 4 vé hỗ trợ đang chờ xử lý.
            </Text>
          </View>
        </View>

        {/* Charts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Biểu đồ phân tích</Text>
          
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>API Usage & Performance</Text>
            {chartImages.apiUsage ? (
              <Image style={styles.chartImage} src={chartImages.apiUsage} />
            ) : (
              <View style={styles.chartPlaceholder}>
                <Text style={styles.chartPlaceholderText}>Biểu đồ API Usage</Text>
              </View>
            )}
          </View>

          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>System Uptime Trend</Text>
            {chartImages.uptime ? (
              <Image style={styles.chartImage} src={chartImages.uptime} />
            ) : (
              <View style={styles.chartPlaceholder}>
                <Text style={styles.chartPlaceholderText}>Biểu đồ Uptime</Text>
              </View>
            )}
          </View>
        </View>

        {/* System Activities Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hoạt động hệ thống gần đây</Text>
          
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Người dùng</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Hành động</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Thời gian</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Trạng thái</Text>
              </View>
            </View>
            
            {sampleData.systemActivities.slice(0, 10).map((activity, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{activity.user}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{activity.action}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{activity.time}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={getStatusStyle(activity.status)}>{activity.status}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Support Tickets Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vé hỗ trợ đang chờ</Text>
          
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Mã vé</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Mô tả</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Người gửi</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Ưu tiên</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Ngày gửi</Text>
              </View>
            </View>
            
            {sampleData.supportTickets.map((ticket, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, styles.textBold]}>{ticket.id}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{ticket.description}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{ticket.sender}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={getPriorityStyle(ticket.priority)}>{ticket.priority}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{ticket.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>EduCore Learning Management System</Text>
          <Text style={styles.footerText}>Trang 1</Text>
          <Text style={styles.footerText}>Báo cáo được tạo tự động</Text>
        </View>
      </Page>
    </Document>
  );
}
