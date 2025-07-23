/**
 * LOGIN FORM COMPONENT
 * Component form đăng nhập với validation và error handling
 */

import authManager from '../utils/authManager.js';

class LoginForm {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isLoading = false;
    this.init();
  }

  /**
   * Khởi tạo form
   */
  init() {
    this.render();
    this.bindEvents();
    this.setupValidation();
  }

  /**
   * Render HTML form
   */
  render() {
    this.container.innerHTML = `
      <div class="login-container">
        <div class="login-card">
          <div class="login-header">
            <h1 class="login-title">Đăng nhập EduCore</h1>
            <p class="login-subtitle">Chào mừng bạn quay trở lại</p>
          </div>

          <form id="loginForm" class="login-form" novalidate>
            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="form-label">
                <i class="icon-email"></i>
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                class="form-input" 
                placeholder="Nhập địa chỉ email"
                required
                autocomplete="email"
              >
              <div class="form-error" id="emailError"></div>
            </div>

            <!-- Password Field -->
            <div class="form-group">
              <label for="password" class="form-label">
                <i class="icon-lock"></i>
                Mật khẩu
              </label>
              <div class="password-input-wrapper">
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  class="form-input" 
                  placeholder="Nhập mật khẩu"
                  required
                  autocomplete="current-password"
                >
                <button type="button" class="password-toggle" id="passwordToggle">
                  <i class="icon-eye" id="passwordToggleIcon"></i>
                </button>
              </div>
              <div class="form-error" id="passwordError"></div>
            </div>

            <!-- Remember Me -->
            <div class="form-group form-checkbox">
              <label class="checkbox-label">
                <input type="checkbox" id="rememberMe" name="rememberMe">
                <span class="checkbox-custom"></span>
                Ghi nhớ đăng nhập
              </label>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="login-button" id="loginButton">
              <span class="button-text">Đăng nhập</span>
              <div class="button-loader" id="buttonLoader">
                <div class="spinner"></div>
              </div>
            </button>

            <!-- Error Message -->
            <div class="form-error form-error-general" id="generalError"></div>
          </form>

          <!-- Footer -->
          <div class="login-footer">
            <a href="/forgot-password" class="forgot-link">Quên mật khẩu?</a>
            <div class="signup-link">
              Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Bind events
   */
  bindEvents() {
    const form = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    
    // Form submit
    form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Password toggle
    passwordToggle.addEventListener('click', () => this.togglePassword());
    
    // Real-time validation
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }

  /**
   * Setup validation rules
   */
  setupValidation() {
    this.validationRules = {
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Vui lòng nhập email hợp lệ'
      },
      password: {
        required: true,
        minLength: 6,
        message: 'Mật khẩu phải có ít nhất 6 ký tự'
      }
    };
  }

  /**
   * Validate một field
   * @param {HTMLElement} input 
   * @returns {boolean}
   */
  validateField(input) {
    const { name, value } = input;
    const rules = this.validationRules[name];
    
    if (!rules) return true;

    // Required validation
    if (rules.required && !value.trim()) {
      this.showFieldError(name, `${this.getFieldLabel(name)} là bắt buộc`);
      return false;
    }

    // Pattern validation
    if (rules.pattern && value && !rules.pattern.test(value)) {
      this.showFieldError(name, rules.message);
      return false;
    }

    // Min length validation
    if (rules.minLength && value && value.length < rules.minLength) {
      this.showFieldError(name, rules.message);
      return false;
    }

    this.clearFieldError(input);
    return true;
  }

  /**
   * Validate toàn bộ form
   * @returns {boolean}
   */
  validateForm() {
    const form = document.getElementById('loginForm');
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Hiển thị lỗi field
   * @param {string} fieldName 
   * @param {string} message 
   */
  showFieldError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}Error`);
    const inputElement = document.getElementById(fieldName);
    
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    
    if (inputElement) {
      inputElement.classList.add('error');
    }
  }

  /**
   * Xóa lỗi field
   * @param {HTMLElement} input 
   */
  clearFieldError(input) {
    const errorElement = document.getElementById(`${input.name}Error`);
    
    if (errorElement) {
      errorElement.style.display = 'none';
    }
    
    input.classList.remove('error');
  }

  /**
   * Hiển thị lỗi chung
   * @param {string} message 
   */
  showGeneralError(message) {
    const errorElement = document.getElementById('generalError');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  }

  /**
   * Xóa lỗi chung
   */
  clearGeneralError() {
    const errorElement = document.getElementById('generalError');
    if (errorElement) {
      errorElement.style.display = 'none';
    }
  }

  /**
   * Toggle password visibility
   */
  togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('passwordToggleIcon');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.className = 'icon-eye-off';
    } else {
      passwordInput.type = 'password';
      toggleIcon.className = 'icon-eye';
    }
  }

  /**
   * Set loading state
   * @param {boolean} loading 
   */
  setLoading(loading) {
    this.isLoading = loading;
    const button = document.getElementById('loginButton');
    const buttonText = button.querySelector('.button-text');
    const buttonLoader = document.getElementById('buttonLoader');
    const form = document.getElementById('loginForm');
    
    if (loading) {
      button.disabled = true;
      button.classList.add('loading');
      buttonText.style.opacity = '0';
      buttonLoader.style.display = 'flex';
      form.style.pointerEvents = 'none';
    } else {
      button.disabled = false;
      button.classList.remove('loading');
      buttonText.style.opacity = '1';
      buttonLoader.style.display = 'none';
      form.style.pointerEvents = 'auto';
    }
  }

  /**
   * Handle form submit
   * @param {Event} e 
   */
  async handleSubmit(e) {
    e.preventDefault();
    
    if (this.isLoading) return;

    // Clear previous errors
    this.clearGeneralError();

    // Validate form
    if (!this.validateForm()) {
      return;
    }

    const formData = new FormData(e.target);
    const loginData = {
      email: formData.get('email').trim(),
      password: formData.get('password'),
      rememberMe: formData.get('rememberMe') === 'on'
    };

    try {
      this.setLoading(true);

      // Gọi API đăng nhập
      const response = await this.callLoginAPI(loginData);
      
      // Xử lý response với AuthManager
      const result = await authManager.handleLoginResponse(response);
      
      if (result.success) {
        // Hiển thị thông báo thành công
        this.showSuccessMessage(result.message);
        
        // Redirect sau 1 giây
        setTimeout(() => {
          window.location.href = result.redirectUrl;
        }, 1000);
      }

    } catch (error) {
      console.error('❌ Lỗi đăng nhập:', error);
      this.showGeneralError(error.message || 'Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      this.setLoading(false);
    }
  }

  /**
   * Gọi API đăng nhập
   * @param {Object} loginData 
   * @returns {Promise<Object>}
   */
  async callLoginAPI(loginData) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Hiển thị thông báo thành công
   * @param {string} message 
   */
  showSuccessMessage(message) {
    // Tạo toast notification
    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.innerHTML = `
      <i class="icon-check"></i>
      <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  /**
   * Lấy label của field
   * @param {string} fieldName 
   * @returns {string}
   */
  getFieldLabel(fieldName) {
    const labels = {
      email: 'Email',
      password: 'Mật khẩu'
    };
    return labels[fieldName] || fieldName;
  }
}

// Export để sử dụng
export default LoginForm;

// Auto-initialize nếu có container
document.addEventListener('DOMContentLoaded', () => {
  const loginContainer = document.getElementById('loginFormContainer');
  if (loginContainer) {
    new LoginForm('loginFormContainer');
  }
});