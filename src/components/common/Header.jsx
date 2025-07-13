import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Header({ currentPage = "" }) {
  const navItems = [
    { path: "/", label: "Trang chủ", key: "home" },
    { path: "/features", label: "Tính năng", key: "features" },
    { path: "/pricing", label: "Bảng giá", key: "pricing" },
    { path: "/about", label: "Giới thiệu", key: "about" },
    { path: "/contact", label: "Liên hệ", key: "contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <BookOpen className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                EduCore
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`font-medium transition-colors ${
                  currentPage === item.key
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}>
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium">
              Đăng nhập
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
