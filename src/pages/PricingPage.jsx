import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/common/Header";

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header currentPage="pricing" />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="h-5 w-5 mr-1" />
            Quay lại
          </button>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Bảng giá dịch vụ
          </h1>
          {/* Thêm nội dung trang Pricing ở đây */}
        </div>
      </main>
    </div>
  );
}
