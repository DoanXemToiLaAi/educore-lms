import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "../../assets/css/dashboard.css";

const roleLabels = {
  system_admin: "Quản trị hệ thống",
  school_admin: "Quản trị trường",
  teacher: "Giáo viên",
  student: "Học sinh",
  parent: "Phụ huynh",
};

export default function TopBar({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  isSearchShow = false,
  onSearchBtnClick,
  isDarkTheme = false,
  setIsDarkTheme,
}) {
  const { user, switchRole } = useAuth();
  const [isRoleSwitchOpen, setIsRoleSwitchOpen] = useState(false);
  const roleRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    if (!isRoleSwitchOpen) return;
    function handleClickOutside(event) {
      if (roleRef.current && !roleRef.current.contains(event.target)) {
        setIsRoleSwitchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isRoleSwitchOpen]);

  return (
    <nav className="navbar">
      <i
        className="bx bx-menu"
        style={{ color: "#1E3A8A", cursor: "pointer", fontSize: 24 }}
        onClick={() => setIsSidebarCollapsed((v) => !v)}></i>
      <form action="#" className={`navbar-form${isSearchShow ? " show" : ""}`}>
        <div className="form-input">
          <input type="search" placeholder="Tìm kiếm..." />
          <button
            className="search-btn"
            style={{ border: "1px solid var(--light)" }}
            type="submit"
            onClick={onSearchBtnClick}>
            <i className={`bx ${isSearchShow ? "bx-x" : "bx-search"}`}></i>
          </button>
        </div>
      </form>
      <button
        type="button"
        aria-label={isDarkTheme ? "Light mode" : "Dark mode"}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          marginRight: 8,
        }}
        onClick={() => setIsDarkTheme && setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? (
          <i
            className="bx bx-moon"
            style={{
              fontSize: 22,
              color: "#1976D2",
              transition: "color 0.2s",
            }}></i>
        ) : (
          <i
            className="bx bx-sun"
            style={{
              fontSize: 22,
              color: "#FFD600",
              transition: "color 0.2s",
            }}></i>
        )}
      </button>
      <a href="#" className="notif">
        <i className="bx bx-bell"></i>
        <span className="count">12</span>
      </a>
      <a href="#" className="profile">
        <img
          src={require("../../assets/images/avatar.jpg")}
          alt="User avatar"
        />
      </a>
    </nav>
  );
}
