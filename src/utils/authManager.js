/**
 * GIẢI PHÁP 2: XỬ LÝ AUTHENTICATION FRONTEND
 * Auth Manager - Quản lý authentication an toàn
 */

class AuthManager {
  constructor() {
    this.TOKEN_KEY = 'educore_access_token';
    this.USER_KEY = 'educore_user_data';
    this.REFRESH_TOKEN_KEY = 'educore_refresh_token';
    
    // Cấu hình role-based routing
    this.roleRoutes = {
      'SystemAdmin': '/dashboard/system-admin',
      'SchoolAdmin': '/dashboard/school-admin', 
      'Teacher': '/dashboard/teacher',
      'Student': '/dashboard/student',
      'Parent': '/dashboard/parent'
    };

    // Khởi tạo interceptors
    this.setupAxiosInterceptors();
  }

  /**
   * Xử lý response đăng nhập
   * @param {Object} response - Response từ API login
   * @returns {Promise<Object>}
   */
  async handleLoginResponse(response) {
    try {
      // Validate response structure
      if (!this.validateLoginResponse(response)) {
        throw new Error('Response không hợp lệ');
      }

      const { metadata } = response;
      const { accessToken, user } = metadata;

      // Lưu trữ token và user data an toàn
      await this.storeAuthData(accessToken, user);

      // Log successful login
      console.log('✅ Đăng nhập thành công:', {
        email: user.email,
        role: user.role,
        timestamp: new Date().toISOString()
      });

      // Redirect dựa trên role
      const redirectUrl = this.getRedirectUrl(user.role);
      
      return {
        success: true,
        user,
        redirectUrl,
        message: response.message
      };

    } catch (error) {
      console.error('❌ Lỗi xử lý đăng nhập:', error);
      throw new Error(`Lỗi đăng nhập: ${error.message}`);
    }
  }

  /**
   * Validate cấu trúc response đăng nhập
   * @param {Object} response 
   * @returns {boolean}
   */
  validateLoginResponse(response) {
    const requiredFields = ['status', 'code', 'metadata'];
    const requiredMetadata = ['accessToken', 'user'];
    const requiredUser = ['email', 'role'];

    // Kiểm tra các field bắt buộc
    for (const field of requiredFields) {
      if (!response[field]) {
        console.error(`❌ Thiếu field bắt buộc: ${field}`);
        return false;
      }
    }

    // Kiểm tra metadata
    for (const field of requiredMetadata) {
      if (!response.metadata[field]) {
        console.error(`❌ Thiếu metadata: ${field}`);
        return false;
      }
    }

    // Kiểm tra user data
    for (const field of requiredUser) {
      if (!response.metadata.user[field]) {
        console.error(`❌ Thiếu user data: ${field}`);
        return false;
      }
    }

    // Kiểm tra status và code
    if (response.status !== 'success' || response.code !== 200) {
      console.error(`❌ Status không hợp lệ: ${response.status}, Code: ${response.code}`);
      return false;
    }

    return true;
  }

  /**
   * Lưu trữ auth data an toàn
   * @param {string} accessToken 
   * @param {Object} user 
   */
  async storeAuthData(accessToken, user) {
    try {
      // Mã hóa token trước khi lưu (optional - có thể sử dụng crypto-js)
      const encodedToken = btoa(accessToken); // Base64 encoding đơn giản
      
      // Lưu vào localStorage (có thể chuyển sang sessionStorage nếu cần bảo mật cao hơn)
      localStorage.setItem(this.TOKEN_KEY, encodedToken);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      
      // Set token expiry (giả sử token có thời hạn 24h)
      const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
      localStorage.setItem(`${this.TOKEN_KEY}_expiry`, expiryTime.toString());

      // Cập nhật axios headers
      this.setAuthHeader(accessToken);

    } catch (error) {
      console.error('❌ Lỗi lưu trữ auth data:', error);
      throw new Error('Không thể lưu trữ thông tin đăng nhập');
    }
  }

  /**
   * Lấy access token
   * @returns {string|null}
   */
  getAccessToken() {
    try {
      const encodedToken = localStorage.getItem(this.TOKEN_KEY);
      if (!encodedToken) return null;

      // Kiểm tra token expiry
      const expiryTime = localStorage.getItem(`${this.TOKEN_KEY}_expiry`);
      if (expiryTime && new Date().getTime() > parseInt(expiryTime)) {
        console.warn('⚠️ Token đã hết hạn');
        this.logout();
        return null;
      }

      return atob(encodedToken); // Decode base64
    } catch (error) {
      console.error('❌ Lỗi lấy access token:', error);
      return null;
    }
  }

  /**
   * Lấy thông tin user
   * @returns {Object|null}
   */
  getCurrentUser() {
    try {
      const userData = localStorage.getItem(this.USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('❌ Lỗi lấy user data:', error);
      return null;
    }
  }

  /**
   * Kiểm tra trạng thái đăng nhập
   * @returns {boolean}
   */
  isAuthenticated() {
    const token = this.getAccessToken();
    const user = this.getCurrentUser();
    return !!(token && user);
  }

  /**
   * Lấy URL redirect dựa trên role
   * @param {string} role 
   * @returns {string}
   */
  getRedirectUrl(role) {
    return this.roleRoutes[role] || '/dashboard';
  }

  /**
   * Đăng xuất
   */
  logout() {
    try {
      // Xóa tất cả auth data
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
      localStorage.removeItem(this.REFRESH_TOKEN_KEY);
      localStorage.removeItem(`${this.TOKEN_KEY}_expiry`);

      // Xóa auth header
      this.removeAuthHeader();

      console.log('✅ Đăng xuất thành công');
      
      // Redirect về trang login
      window.location.href = '/login';
      
    } catch (error) {
      console.error('❌ Lỗi đăng xuất:', error);
    }
  }

  /**
   * Set Authorization header cho axios
   * @param {string} token 
   */
  setAuthHeader(token) {
    if (window.axios) {
      window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  /**
   * Remove Authorization header
   */
  removeAuthHeader() {
    if (window.axios) {
      delete window.axios.defaults.headers.common['Authorization'];
    }
  }

  /**
   * Setup axios interceptors để tự động xử lý token
   */
  setupAxiosInterceptors() {
    if (!window.axios) return;

    // Request interceptor - tự động thêm token
    window.axios.interceptors.request.use(
      (config) => {
        const token = this.getAccessToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - xử lý token hết hạn
    window.axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.warn('⚠️ Token không hợp lệ hoặc đã hết hạn');
          this.logout();
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Kiểm tra quyền truy cập dựa trên role
   * @param {string|Array} allowedRoles 
   * @returns {boolean}
   */
  hasPermission(allowedRoles) {
    const user = this.getCurrentUser();
    if (!user) return false;

    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
    return roles.includes(user.role);
  }

  /**
   * Refresh token (nếu API hỗ trợ)
   * @returns {Promise<boolean>}
   */
  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem(this.REFRESH_TOKEN_KEY);
      if (!refreshToken) {
        throw new Error('Không có refresh token');
      }

      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken })
      });

      if (response.ok) {
        const data = await response.json();
        await this.storeAuthData(data.metadata.accessToken, data.metadata.user);
        return true;
      }

      throw new Error('Refresh token thất bại');
      
    } catch (error) {
      console.error('❌ Lỗi refresh token:', error);
      this.logout();
      return false;
    }
  }
}

// Export singleton instance
const authManager = new AuthManager();
window.authManager = authManager;

export default authManager;