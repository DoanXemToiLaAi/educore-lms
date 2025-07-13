import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import TeamSection from "../components/sections/TeamSection";

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[85vh] flex items-center">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900"></div>
    <div className="absolute inset-0 bg-[url('./assets/images/grid-pattern.svg')] opacity-10"></div>
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl opacity-20"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="relative inline-block mb-6 animate-fade-in-down">
            <span className="text-blue-300 text-lg font-medium px-6 py-2 bg-white bg-opacity-10 rounded-full border border-blue-200 border-opacity-20 shadow-glow">
              Nền tảng học tập hiện đại
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Học tập thông minh
            </span>
            <span className="block text-blue-300 mt-2">Kiến tạo tương lai</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed animate-fade-in-up">
            EduCore LMS - Hệ thống quản lý học tập thông minh, tạo nên môi
            trường giáo dục số hiện đại, kết nối giáo viên và học sinh một cách
            hiệu quả và linh hoạt
          </p>
          <div className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center animate-fade-in-up">
            <Link
              to="/register"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white bg-opacity-20 rounded-full group-hover:w-full group-hover:h-full"></span>
              <span className="relative flex items-center font-semibold">
                Bắt đầu miễn phí
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
            <a
              href="#about"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
              <span className="flex items-center">
                Tìm hiểu thêm
                <svg
                  className="w-5 h-5 ml-2 group-hover:bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="./assets/images/dashboard-preview.png"
              alt="EduCore Dashboard Preview"
              className="rounded-lg w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-lg text-white">
              <p className="text-sm font-semibold">Giao diện trực quan</p>
              <p className="text-xs opacity-75">Dễ dàng sử dụng</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg
        className="w-full h-auto"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
);

const AboutSection = () => (
  <section
    id="about"
    className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('./assets/images/pattern-grid.svg')] opacity-5"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-20">
        <span className="inline-flex items-center px-6 py-2 text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4 rounded-full bg-blue-50 border border-blue-100">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2V7a1 1 0 112 0v2z" />
          </svg>
          Về EduCore
        </span>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-gray-100 to-blue-600 bg-clip-text text-transparent mb-6">
          Sứ mệnh của chúng tôi
        </h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-1 bg-blue-200 rounded-full"></div>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          <div className="w-12 h-1 bg-blue-200 rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Chúng tôi tin rằng công nghệ là chìa khóa để cải thiện giáo dục, mang
          đến cơ hội học tập công bằng và hiệu quả cho mọi người. Với EduCore,
          chúng tôi đang xây dựng một nền tảng giáo dục số hiện đại, nơi kiến
          thức được chia sẻ và phát triển không ngừng.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="relative">
            <img
              src="/src/assets/images/about-illustration.svg"
              alt="About Us Illustration"
              className="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center text-left">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    10,000+
                  </h4>
                  <p className="text-sm text-gray-600">Học viên đã tham gia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Tầm nhìn của chúng tôi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              EduCore LMS được phát triển với mục tiêu trở thành nền tảng giáo
              dục trực tuyến hàng đầu tại Việt Nam, nơi mọi người có thể học
              tập, phát triển và kết nối với nhau một cách hiệu quả nhất.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Chất lượng cao
                  </h4>
                  <p className="text-gray-600">
                    Nội dung học tập được kiểm duyệt kỹ càng
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    An toàn & Bảo mật
                  </h4>
                  <p className="text-gray-600">
                    Bảo vệ dữ liệu người dùng tuyệt đối
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
              Tìm hiểu thêm về chúng tôi
              <svg
                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureSection = () => (
  <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-50"></div>
    <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-20">
        <span className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3 block">
          Tính năng nổi bật
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tất cả những gì bạn cần để
          <span className="text-blue-600 block mt-2">
            quản lý học tập hiệu quả
          </span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start p-6 bg-white rounded-xl shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quản lý lớp học trực tuyến
              </h3>
              <p className="text-gray-600">
                Tạo và quản lý lớp học online, tổ chức bài giảng trực tuyến,
                theo dõi tiến độ học tập của học viên một cách dễ dàng.
              </p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-white rounded-xl shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bài tập & Đánh giá
              </h3>
              <p className="text-gray-600">
                Hệ thống giao bài tập và chấm điểm tự động, kèm theo phân tích
                chi tiết về kết quả học tập của từng học viên.
              </p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-white rounded-xl shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Báo cáo & Thống kê
              </h3>
              <p className="text-gray-600">
                Tổng hợp và phân tích dữ liệu học tập, tạo báo cáo chi tiết về
                tiến độ và thành tích của học viên.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <img
              src="/src/assets/images/features-dashboard.png"
              alt="EduCore Features"
              className="w-full rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl text-white max-w-xs">
              <h4 className="text-lg font-semibold mb-2">
                Giao diện thân thiện
              </h4>
              <p className="text-sm text-blue-100">
                Thiết kế hiện đại, dễ sử dụng cho mọi đối tượng người dùng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
