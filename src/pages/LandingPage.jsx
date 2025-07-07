import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Globe, Zap, Shield, Heart } from "lucide-react";

const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">EduCore</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition-colors">
            Tính năng
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition-colors">
            Giới thiệu
          </a>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Đăng nhập
          </Link>
        </nav>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Cách mạng hóa giáo dục
          <span className="text-blue-600 block">với công nghệ</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          EduCore mang đến trải nghiệm học tập hiện đại, tương tác và hiệu quả
          cho học sinh, giáo viên và phụ huynh
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Bắt đầu ngay
          </Link>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
    <div
      className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tính năng nổi bật
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Khám phá những công nghệ tiên tiến giúp nâng cao chất lượng giáo dục
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={Zap}
          title="AI Tutor"
          description="Trợ lý AI thông minh hỗ trợ học tập cá nhân hóa cho từng học sinh"
          color="bg-yellow-500"
        />
        <FeatureCard
          icon={Globe}
          title="Tour 360 độ"
          description="Khám phá thế giới qua các chuyến tham quan ảo sinh động và tương tác"
          color="bg-green-500"
        />
        <FeatureCard
          icon={Heart}
          title="Bình đẳng giáo dục"
          description="Mang giáo dục chất lượng cao đến với mọi học sinh, mọi hoàn cảnh"
          color="bg-red-500"
        />
        <FeatureCard
          icon={Users}
          title="Lớp học tương tác"
          description="Môi trường học tập trực tuyến với nhiều công cụ hỗ trợ giảng dạy"
          color="bg-blue-500"
        />
        <FeatureCard
          icon={Shield}
          title="An toàn & Bảo mật"
          description="Đảm bảo thông tin và dữ liệu học tập được bảo vệ tuyệt đối"
          color="bg-purple-500"
        />
        <FeatureCard
          icon={BookOpen}
          title="Thư viện số"
          description="Kho tài liệu học tập phong phú với hàng ngàn bài giảng và bài tập"
          color="bg-indigo-500"
        />
      </div>
    </div>
  </section>
);

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

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
