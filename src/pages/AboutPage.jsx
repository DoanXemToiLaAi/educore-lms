"use client";

import { Link } from "react-router-dom";
import { Users, Target, Award, Heart } from "lucide-react";
import Header from "../components/common/Header";
import { TooltipProvider } from "../components/ui/tooltip";
import "../assets/styles/animations.css";
import TeamSection from "../components/sections/TeamSection";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Tận tâm",
      description:
        "Chúng tôi luôn đặt lợi ích của học sinh và giáo viên lên hàng đầu",
    },
    {
      icon: Target,
      title: "Chất lượng",
      description: "Cam kết mang đến những giải pháp giáo dục tốt nhất",
    },
    {
      icon: Users,
      title: "Cộng đồng",
      description: "Xây dựng cộng đồng giáo dục mạnh mẽ và gắn kết",
    },
    {
      icon: Award,
      title: "Xuất sắc",
      description: "Không ngừng đổi mới và nâng cao chất lượng dịch vụ",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header currentPage="about" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Về chúng tôi
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                EduCore được thành lập với sứ mệnh cách mạng hóa giáo dục Việt
                Nam thông qua công nghệ tiên tiến và phương pháp giảng dạy hiện
                đại.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue-50 dark:bg-blue-950 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Sứ mệnh
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Mang đến cho mọi học sinh Việt Nam cơ hội tiếp cận với nền
                  giáo dục chất lượng cao thông qua công nghệ, không phân biệt
                  hoàn cảnh hay địa lý.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Tầm nhìn
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Trở thành nền tảng giáo dục trực tuyến hàng đầu Đông Nam Á,
                  tiên phong trong việc ứng dụng AI và công nghệ 4.0 vào giáo
                  dục.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Giá trị cốt lõi
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Những giá trị định hướng mọi hoạt động của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="absolute inset-y-0 right-0 w-1/2 bg-contain bg-no-repeat bg-right"
              style={{
                backgroundImage: "url('/assets/images/team-pattern.svg')",
              }}></div>
          </div>
        </section>
        <TooltipProvider>
          <TeamSection />
        </TooltipProvider>
        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cùng chúng tôi xây dựng tương lai giáo dục
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tham gia cộng đồng EduCore để cùng tạo nên những thay đổi tích cực
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200">
              Liên hệ với chúng tôi
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
