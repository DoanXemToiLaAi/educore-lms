"use client";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react";
import Header from "../components/common/Header";

export default function AboutPage() {
  const navigate = useNavigate();

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

  const team = [
    {
      name: "Nguyễn Văn A",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=200&width=200",
      description: "15 năm kinh nghiệm trong lĩnh vực giáo dục và công nghệ",
    },
    {
      name: "Trần Thị B",
      role: "CTO",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Chuyên gia công nghệ với nhiều năm kinh nghiệm phát triển sản phẩm",
    },
    {
      name: "Lê Văn C",
      role: "Head of Education",
      image: "/placeholder.svg?height=200&width=200",
      description: "Tiến sĩ Giáo dục với 20 năm kinh nghiệm giảng dạy",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8 group">
              <ArrowLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
              Quay lại
            </button>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Về chúng tôi
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sứ mệnh
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Mang đến cho mọi học sinh Việt Nam cơ hội tiếp cận với nền
                  giáo dục chất lượng cao thông qua công nghệ, không phân biệt
                  hoàn cảnh hay địa lý.
                </p>
              </div>
              <div className="bg-purple-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Tầm nhìn
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Trở thành nền tảng giáo dục trực tuyến hàng đầu Đông Nam Á,
                  tiên phong trong việc ứng dụng AI và công nghệ 4.0 vào giáo
                  dục.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Giá trị cốt lõi
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những giá trị định hướng mọi hoạt động của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Đội ngũ lãnh đạo
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những con người tài năng đang dẫn dắt EduCore tiến về phía trước
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200">
              Liên hệ với chúng tôi
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
