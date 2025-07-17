

import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../assets/css/dashboard.css';
import LogoImg from '../../assets/images/Logo-01-1.png';

// Sidebar component styled exactly like index.html + style.css
export default function Sidebar({ isCollapsed, activeMenu = 2, onMenuClick, role = "system_admin" }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      logout();
      // Redirect to login page using React Router
      navigate('/login');
    }
  };
  // Định nghĩa menu cho từng vai trò
  const menuByRole = {
    system_admin: [
      { icon: 'bx-home', label: 'Tổng quan' },
      { icon: 'bx-buildings', label: 'Quản lý trường học' },
      { icon: 'bx-book', label: 'Quản lý học tập' },
      { icon: 'bx-football', label: 'Hoạt động ngoại khóa' },
      { icon: 'bx-support', label: 'Hỗ trợ hệ thống' },
      { icon: 'bx-cog', label: 'Cài đặt' },
    ],
    school_admin: [
      { icon: 'bx-home', label: 'Tổng quan' },
      { icon: 'bx-book', label: 'Quản lý học tập' },
      { icon: 'bx-group', label: 'Quản lý giáo viên' },
      { icon: 'bx-user', label: 'Quản lý học sinh' },
      { icon: 'bx-football', label: 'Hoạt động ngoại khóa' },
      { icon: 'bx-cog', label: 'Cài đặt' },
    ],
    teacher: [
      { icon: 'bx-home', label: 'Tổng quan' },
      { icon: 'bx-book', label: 'Lớp giảng dạy' },
      { icon: 'bx-task', label: 'Bài tập & Đánh giá' },
      { icon: 'bx-football', label: 'Hoạt động ngoại khóa' },
      { icon: 'bx-support', label: 'Hỗ trợ' },
    ],
    student: [
      { icon: 'bx-home', label: 'Tổng quan' },
      { icon: 'bx-book', label: 'Lớp học' },
      { icon: 'bx-task', label: 'Bài tập' },
      { icon: 'bx-football', label: 'Hoạt động ngoại khóa' },
      { icon: 'bx-support', label: 'Hỗ trợ' },
    ],
    parent: [
      { icon: 'bx-home', label: 'Tổng quan' },
      { icon: 'bx-user', label: 'Theo dõi học tập' },
      { icon: 'bx-support', label: 'Hỗ trợ' },
    ],
  };

  const menuItems = menuByRole[role] || menuByRole["system_admin"];
  return (
    <div className={`sidebar${isCollapsed ? ' close' : ''}`}>
      <button type="button" className="logo" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        <img src={LogoImg} className="logo-img" alt="EduCore Logo" />
        <div className="logo-name"><span>Edu</span>Core</div>
      </button>
      <ul className="side-menu">
        {menuItems.map((item, idx) => (
          <li key={item.label} className={activeMenu === idx ? 'active' : ''}>
            <a href="#" 
               title={isCollapsed ? item.label : ''} 
               onClick={e => { e.preventDefault(); onMenuClick && onMenuClick(idx); }}>
              <i className={`bx ${item.icon}`}></i>{item.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <button 
             className="logout" 
             title={isCollapsed ? 'Đăng xuất' : ''}
             onClick={handleLogout}>
            <i className="bx bx-log-out-circle"></i>
            Đăng xuất
          </button>
        </li>
      </ul>
    </div>
  );
}
