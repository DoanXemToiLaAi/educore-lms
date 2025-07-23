import React from "react";
import { BookOpen } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">EduCore</span>
          </div>
          <p className="text-gray-400">
            Nền tảng giáo dục trực tuyến hàng đầu Việt Nam
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button className="hover:text-white transition-colors">
                Lớp học trực tuyến
              </button>
            </li>
            <li>
              <button className="hover:text-white transition-colors">
                AI Tutor
              </button>
            </li>
            <li>
              <button className="hover:text-white transition-colors">
                Thư viện số
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button className="hover:text-white transition-colors">
                Trung tâm trợ giúp
              </button>
            </li>
            <li>
              <button className="hover:text-white transition-colors">
                Liên hệ
              </button>
            </li>
            <li>
              <button className="hover:text-white transition-colors">
                Hướng dẫn sử dụng
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@educore.vn</li>
            <li>Hotline: 1900 1234</li>
            <li>Địa chỉ: Hà Nội, Việt Nam</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 EduCore. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
