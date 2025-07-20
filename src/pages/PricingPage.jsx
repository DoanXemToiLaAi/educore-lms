import Header from "../components/common/Header";

export default function PricingPage() {
  const plans = [
    {
      range: "Dưới 300 học sinh",
      price: "3.000.000 VNĐ/tháng hoặc 28.800.000 VNĐ/năm",
      monthlyPrice: "3.000.000",
      yearlyPrice: "28.800.000",
      popular: false,
      description: "Phù hợp cho các trường học nhỏ và trung tâm giáo dục",
      maxStudents: "300",
    },
    {
      range: "301–700 học sinh",
      price: "5.000.000 VNĐ/tháng hoặc 48.000.000 VNĐ/năm (giảm 20%)",
      monthlyPrice: "5.000.000",
      yearlyPrice: "48.000.000",
      popular: true,
      description: "Lựa chọn phổ biến cho các trường trung học",
      maxStudents: "700",
    },
    {
      range: "701–900 học sinh",
      price: "7.000.000 VNĐ/tháng hoặc 67.200.000 VNĐ/năm (giảm 20%)",
      monthlyPrice: "7.000.000",
      yearlyPrice: "67.200.000",
      popular: false,
      description: "Dành cho các trường học lớn và tổ hợp giáo dục",
      maxStudents: "900",
    },
  ];

  const features = [
    {
      title: "Học sinh dùng đầy đủ tính năng không giới hạn",
      icon: "👨‍🎓",
    },
    {
      title: "Giáo viên có toàn quyền tạo đề thi, bài tập và xem báo cáo",
      icon: "👩‍🏫",
    },
    {
      title:
        "Quản trị viên quản lý trường học, dashboard và thống kê tổng quan",
      icon: "📊",
    },
    {
      title: "Phụ huynh truy cập miễn phí bằng mã học sinh",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title:
        "Tích hợp công nghệ mới: AI Tutor, Voice-over, Camera 360, cá nhân hóa lộ trình học",
      icon: "🤖",
    },
  ];

  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
      style={{
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}>
      <Header currentPage="pricing" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20 pb-16">
        <div className="absolute inset-0 bg-[url('./assets/images/grid-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              Bảng giá dịch vụ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Gói dịch vụ linh hoạt
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Các gói dịch vụ được thiết kế phù hợp theo quy mô học sinh của
              trường bạn, đảm bảo hiệu quả và tiết kiệm chi phí.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-green-200 rounded-full"></div>
              <div className="w-24 h-1 bg-green-600 rounded-full"></div>
              <div className="w-12 h-1 bg-green-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-blue-500 shadow-lg dark:border-blue-400 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 scale-105"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-500"
                }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Gói phổ biến
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.range}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {plan.monthlyPrice.toLocaleString()} VNĐ
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    /tháng
                  </div>
                  <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                    {plan.yearlyPrice.toLocaleString()} VNĐ/năm
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    (Tiết kiệm 20% khi thanh toán năm)
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
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
                    Tối đa {plan.maxStudents} học sinh
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
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
                    Không giới hạn giáo viên
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
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
                    Hỗ trợ 24/7
                  </div>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}>
                  Chọn gói này
                </button>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Các tính năng bao gồm
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Tất cả các gói đều bao gồm đầy đủ các tính năng sau
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-2xl mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cần tư vấn thêm?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Liên hệ với chúng tôi để được tư vấn gói dịch vụ phù hợp nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Gọi tư vấn
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Gửi email
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
