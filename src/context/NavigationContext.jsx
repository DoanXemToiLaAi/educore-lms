import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('dashboard'); // Trang hiện tại
  const [activeMenuIndex, setActiveMenuIndex] = useState(0); // Index của menu active

  // Định nghĩa mapping giữa các trang và index menu cho từng role
  const pageToMenuIndex = {
    system_admin: {
      'dashboard': 0,           // Tổng quan
      'school_management': 1,   // Quản lý trường học
      'learning_management': 2, // Quản lý học tập
      'activities': 3,          // Hoạt động ngoại khóa
      'support': 4,             // Hỗ trợ hệ thống
      'settings': 5,            // Cài đặt
    },
    school_admin: {
      'dashboard': 0,           // Tổng quan
      'learning_management': 1, // Quản lý học tập
      'teacher_management': 2,  // Quản lý giáo viên
      'student_management': 3,  // Quản lý học sinh
      'activities': 4,          // Hoạt động ngoại khóa
      'settings': 5,            // Cài đặt
    },
    teacher: {
      'dashboard': 0,           // Tổng quan
      'classes': 1,             // Lớp giảng dạy
      'assignments': 2,         // Bài tập & Đánh giá
      'activities': 3,          // Hoạt động ngoại khóa
      'support': 4,             // Hỗ trợ
    },
    student: {
      'dashboard': 0,           // Tổng quan
      'classes': 1,             // Lớp học
      'assignments': 2,         // Bài tập
      'activities': 3,          // Hoạt động ngoại khóa
      'support': 4,             // Hỗ trợ
    },
    parent: {
      'dashboard': 0,           // Tổng quan
      'student_tracking': 1,    // Theo dõi học tập
      'support': 2,             // Hỗ trợ
    },
  };

  // Hàm để navigate đến trang mới
  const navigateToPage = (pageName, userRole) => {
    setCurrentPage(pageName);
    const menuIndex = pageToMenuIndex[userRole]?.[pageName] ?? 0;
    setActiveMenuIndex(menuIndex);
  };

  // Hàm để set active menu trực tiếp từ sidebar
  const setActiveMenu = (index) => {
    setActiveMenuIndex(index);
  };

  // Hàm để lấy active menu index cho role hiện tại
  const getActiveMenuIndex = (userRole) => {
    return pageToMenuIndex[userRole]?.[currentPage] ?? 0;
  };

  return (
    <NavigationContext.Provider value={{
      currentPage,
      activeMenuIndex,
      navigateToPage,
      setActiveMenu,
      getActiveMenuIndex,
      pageToMenuIndex
    }}>
      {children}
    </NavigationContext.Provider>
  );
};
