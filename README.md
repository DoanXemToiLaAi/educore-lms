# EduCore LMS

EduCore LMS là một nền tảng giáo dục trực tuyến tiên tiến, được thiết kế để nâng cao trải nghiệm học tập cho học sinh, giáo viên, phụ huynh và quản trị viên.

## Bắt đầu

Làm theo các bước dưới đây để thiết lập và chạy dự án trên máy tính của bạn:

### Yêu cầu

Đảm bảo bạn đã cài đặt:

- Node.js (phiên bản 16 hoặc cao hơn)
- npm (phiên bản 8 hoặc cao hơn)

### Cài đặt

1. Clone repository:

   ```bash
   git clone https://github.com/DoanXemToiLaAi/educore-lms
   ```

2. Chuyển đến thư mục dự án:

   ```bash
   cd educore-lms
   ```

3. Cài đặt các thư viện phụ thuộc:

   ```bash
   npm install
   ```

### Chạy dự án

1. Tạo file `.env` từ file `.env.example`:

   ```bash
   cp .env.example .env
   ```

2. Thêm giá trị `PORT=3000` vào file `.env`.

3. Khởi động server phát triển:

   ```bash
   npm run dev
   ```

4. Mở trình duyệt và truy cập:

   ```bash
   http://localhost:3000
   ```

### Build cho môi trường sản xuất

Để tạo bản build cho môi trường sản xuất:

   ```bash
   npm run build
   ```

### Lưu ý

- Đảm bảo bạn có kết nối internet ổn định để tải các thư viện phụ thuộc.
- Nếu gặp vấn đề, hãy tham khảo tài liệu hoặc liên hệ với người quản lý dự án.
