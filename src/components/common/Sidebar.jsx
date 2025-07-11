

import React from "react";
import '../../assets/css/dashboard.css';

// Sidebar component styled exactly like index.html + style.css
export default function Sidebar({ isCollapsed, activeMenu = 2, onMenuClick }) {
  const menuItems = [
    { icon: 'bxs-dashboard', label: 'Tổng quan' },
    { icon: 'bx-store-alt', label: 'Quản lý trường học' },
    { icon: 'bx-analyse', label: 'Quản lý học tập' },
    { icon: 'bx-message-square-dots', label: 'Hoạt động ngoại khóa' },
    { icon: 'bx-group', label: 'Hỗ trợ hệ thống' },
    { icon: 'bx-cog', label: 'Cài đặt' },
  ];
  return (
    <div className={`sidebar${isCollapsed ? ' close' : ''}`}>
      <button type="button" className="logo" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        <i className="bx bx-code-alt"></i>
        <div className="logo-name"><span>Edu</span>Core</div>
      </button>
      <ul className="side-menu">
        {menuItems.map((item, idx) => (
          <li key={item.label} className={activeMenu === idx ? 'active' : ''}>
            <a href="#" onClick={e => { e.preventDefault(); onMenuClick && onMenuClick(idx); }}>
              <i className={`bx ${item.icon}`}></i>{item.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#" className="logout">
            <i className="bx bx-log-out-circle"></i>
            Đăng xuất
          </a>
        </li>
      </ul>
    </div>
  );
}
