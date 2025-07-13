import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header currentPage="features" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8">
          <ArrowLeft className="h-5 w-5 mr-1" />
          Quay lại
        </button>

        <div className="space-y-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Tính năng nổi bật
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Khám phá các tính năng đột phá giúp nâng cao hiệu quả quản lý và
              học tập
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Các feature cards có thể thêm ở đây */}
          </div>
        </div>
      </div>
    </div>
  );
}
