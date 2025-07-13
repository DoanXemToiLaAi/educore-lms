"use client";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Target,
  Award,
  Heart,
  Github,
  Linkedin,
} from "lucide-react";
import Header from "../components/common/Header";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import colorVariants from "../assets/styles/colorVariants";
import "../assets/styles/animations.css";

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
      id: 1,
      name: "Nguyễn Văn A",
      role: "CEO & Founder",
      image: "/team-images/team-lead.jpg",
      description: "15 năm kinh nghiệm trong lĩnh vực giáo dục và công nghệ",
      color: "blue",
      delay: 0.1,
    },
    {
      id: 2,
      name: "Trần Thị B",
      role: "CTO",
      image: "/team-images/frontend-lead.jpg",
      description:
        "Chuyên gia công nghệ với nhiều năm kinh nghiệm phát triển sản phẩm",
      color: "purple",
      delay: 0.2,
    },
    {
      id: 3,
      name: "Lê Văn C",
      role: "Giám Đốc Đào Tạo",
      image: "/team-images/backend-lead.jpg",
      description: "Tiến sĩ Giáo dục với 20 năm kinh nghiệm giảng dạy",
      color: "green",
      delay: 0.3,
    },
    {
      id: 4,
      name: "Phạm Thị D",
      role: "Giám Đốc Marketing",
      image: "/team-images/designer.jpg",
      description: "Chuyên gia Marketing Giáo dục với 12 năm kinh nghiệm",
      color: "pink",
      delay: 0.4,
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      role: "Giám Đốc Tài Chính",
      image: "/team-images/fullstack-dev.jpg",
      description:
        "Chuyên gia tài chính với 15 năm kinh nghiệm trong ngành giáo dục",
      color: "indigo",
      delay: 0.5,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header currentPage="about" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group">
              <ArrowLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
              Quay lại
            </button>

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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                Đội ngũ lãnh đạo
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Những người tài năng đang dẫn dắt EduCore tiến về phía trước
              </p>
            </div>

            <TooltipProvider>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
                {team.map((member) => {
                  const variant = colorVariants[member.color];
                  return (
                    <div
                      key={member.id}
                      className={`flex flex-col h-full opacity-0 animate-slide-in`}
                      style={{ animationDelay: `${member.delay}s` }}>
                      <Card className="h-full flex flex-col transition-all duration-300 hover-scale shadow-md hover:shadow-xl border border-gray-100 overflow-hidden">
                        <CardContent className="flex flex-col items-center text-center p-8 h-full">
                          {/* Profile image with ring */}
                          <div
                            className={`mb-5 rounded-full p-1.5 ${variant.light} shadow-lg`}>
                            <div
                              className={`ring-4 ${variant.ring} rounded-full overflow-hidden`}>
                              <Avatar className="w-28 h-28 md:w-32 md:h-32">
                                <AvatarImage
                                  src={member.image}
                                  alt={`${member.name} - ${member.role}`}
                                  className="object-cover w-full h-full"
                                />
                              </Avatar>
                            </div>
                          </div>

                          {/* Name */}
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            {member.name}
                          </h3>

                          {/* Role badge */}
                          <Badge
                            className={`${variant.badge} font-medium px-3 py-1`}>
                            {member.role}
                          </Badge>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6 flex-grow">
                            {member.description}
                          </p>

                          {/* Social buttons */}
                          <div className="flex gap-4 mt-auto">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() =>
                                    window.open("https://github.com", "_blank")
                                  }
                                  className={`bg-gradient-to-r ${variant.bg} ${variant.hover} text-white h-10 w-10 rounded-full flex items-center justify-center`}>
                                  <Github className="h-5 w-5" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Trang GitHub</p>
                              </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() =>
                                    window.open(
                                      "https://linkedin.com",
                                      "_blank"
                                    )
                                  }
                                  className={`bg-gradient-to-r ${variant.bg} ${variant.hover} text-white h-10 w-10 rounded-full flex items-center justify-center`}>
                                  <Linkedin className="h-5 w-5" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Trang LinkedIn</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </TooltipProvider>
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
              className="inline-flex items-center bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200">
              Liên hệ với chúng tôi
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
