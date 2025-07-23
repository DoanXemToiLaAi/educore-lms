import Header from "../components/common/Header";

export default function BlogPage() {
  const tips = [
    {
      title: "5 mẹo giúp học nhanh nhớ lâu",
      summary:
        "Áp dụng kỹ thuật Pomodoro, ghi chú hiệu quả và học xen kẽ để tăng hiệu suất học tập.",
      date: "20/07/2025",
      tag: "Ghi nhớ",
      readTime: "5 phút đọc",
      category: "study-tips",
    },
    {
      title: "Cách tạo môi trường học tập tối ưu",
      summary:
        "Lựa chọn không gian yên tĩnh, ánh sáng phù hợp và công cụ hỗ trợ tốt nhất cho việc học.",
      date: "15/07/2025",
      tag: "Không gian học",
      readTime: "7 phút đọc",
      category: "environment",
    },
    {
      title: "Tự học thông minh: Dùng AI như thế nào?",
      summary:
        "Kết hợp AI tutor, ứng dụng luyện tập thông minh và đánh giá tiến độ để cá nhân hoá việc học.",
      date: "10/07/2025",
      tag: "AI học tập",
      readTime: "10 phút đọc",
      category: "technology",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "study-tips": "bg-blue-100 text-blue-700 border-blue-200",
      environment: "bg-green-100 text-green-700 border-green-200",
      technology: "bg-purple-100 text-purple-700 border-purple-200",
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div
      className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300"
      style={{
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}>
      <Header currentPage="features" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20 pb-16">
        <div className="absolute inset-0 bg-[url('./assets/images/grid-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Blog học tập
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Góc chia sẻ học tập
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chào mừng bạn đến với blog học tập! Cùng khám phá những mẹo, công
              cụ và chiến lược giúp bạn học hiệu quả hơn.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-blue-200 rounded-full"></div>
              <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
              <div className="w-12 h-1 bg-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Bài viết mới nhất
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Khám phá những kiến thức và kỹ năng học tập hữu ích
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                      tip.category
                    )}`}>
                    {tip.tag}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {tip.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {tip.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {tip.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {tip.date}
                  </div>
                  <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Đọc thêm
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
              Xem thêm bài viết
              <svg
                className="w-5 h-5 ml-2"
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
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Đăng ký nhận thông báo
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Nhận những bài viết mới nhất về học tập và giáo dục ngay trong hộp
            thư của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-300">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
