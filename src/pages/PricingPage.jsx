import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  EduCore
                </span>
              </Link>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Quay lại
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors">
                Trang chủ
              </Link>
              <Link
                to="/features"
                className="text-gray-700 hover:text-blue-600 transition-colors">
                Tính năng
              </Link>
              <Link to="/pricing" className="text-blue-600 font-medium">
                Bảng giá
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors">
                Giới thiệu
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors">
                Liên hệ
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Bảng giá dịch vụ
          </h1>
          {/* Thêm nội dung trang Pricing ở đây */}
        </div>
      </main>
    </div>
  );
}
