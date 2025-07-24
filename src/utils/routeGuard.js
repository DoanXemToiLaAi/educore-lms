/**
 * ROUTE GUARD UTILITY
 * Bảo vệ routes dựa trên authentication và role
 */

import authManager from './authManager.js';

class RouteGuard {
  constructor() {
    this.publicRoutes = ['/login', '/register', '/forgot-password', '/'];
    this.init();
  }

  /**
   * Khởi tạo route guard
   */
  init() {
    // Kiểm tra auth khi trang load
    this.checkAuthOnLoad();
    
    // Listen cho navigation events
    window.addEventListener('popstate', () => this.checkCurrentRoute());
    
    // Override pushState và replaceState để catch programmatic navigation
    this.overrideHistoryMethods();
  }

  /**
   * Kiểm tra auth khi trang load
   */
  checkAuthOnLoad() {
    document.addEventListener('DOMContentLoaded', () => {
      this.checkCurrentRoute();
    });
  }

  /**
   * Kiểm tra route hiện tại
   */
  checkCurrentRoute() {
    const currentPath = window.location.pathname;
    const isPublicRoute = this.publicRoutes.includes(currentPath);
    const isAuthenticated = authManager.isAuthenticated();

    console.log('🔍 Route Guard Check:', {
      path: currentPath,
      isPublic: isPublicRoute,
      isAuth: isAuthenticated
    });

    // Nếu là public route và đã đăng nhập -> redirect về dashboard
    if (isPublicRoute && isAuthenticated) {
      const user = authManager.getCurrentUser();
      const redirectUrl = authManager.getRedirectUrl(user.role);
      console.log('↩️ Đã đăng nhập, redirect về:', redirectUrl);
      window.location.replace(redirectUrl);
      return;
    }

    // Nếu là protected route và chưa đăng nhập -> redirect về login
    if (!isPublicRoute && !isAuthenticated) {
      console.log('🚫 Chưa đăng nhập, redirect về login');
      this.redirectToLogin(currentPath);
      return;
    }

    // Kiểm tra quyền truy cập role-based
    if (!isPublicRoute && isAuthenticated) {
      this.checkRolePermission(currentPath);
    }
  }

  /**
   * Kiểm tra quyền truy cập dựa trên role
   * @param {string} path 
   */
  checkRolePermission(path) {
    const user = authManager.getCurrentUser();
    if (!user) return;

    // Định nghĩa quyền truy cập cho từng route pattern
    const rolePermissions = {
      '/dashboard/system-admin': ['SystemAdmin'],
      '/dashboard/school-admin': ['SchoolAdmin', 'SystemAdmin'],
      '/dashboard/teacher': ['Teacher', 'SchoolAdmin', 'SystemAdmin'],
      '/dashboard/student': ['Student', 'Parent', 'Teacher', 'SchoolAdmin', 'SystemAdmin'],
      '/dashboard/parent': ['Parent', 'SystemAdmin'],
      '/dashboard': ['SystemAdmin', 'SchoolAdmin', 'Teacher', 'Student', 'Parent'] // General dashboard
    };

    // Tìm rule phù hợp
    const matchedRule = Object.keys(rolePermissions).find(pattern => {
      return path.startsWith(pattern);
    });

    if (matchedRule) {
      const allowedRoles = rolePermissions[matchedRule];
      if (!allowedRoles.includes(user.role)) {
        console.warn('🚫 Không có quyền truy cập:', {
          path,
          userRole: user.role,
          allowedRoles
        });
        this.redirectToUnauthorized();
        return;
      }
    }

    console.log('✅ Quyền truy cập hợp lệ:', {
      path,
      userRole: user.role
    });
  }

  /**
   * Redirect về trang login với return URL
   * @param {string} returnUrl 
   */
  redirectToLogin(returnUrl) {
    const loginUrl = `/login${returnUrl !== '/' ? `?return=${encodeURIComponent(returnUrl)}` : ''}`;
    window.location.replace(loginUrl);
  }

  /**
   * Redirect về trang unauthorized
   */
  redirectToUnauthorized() {
    // Có thể tạo trang 403 hoặc redirect về dashboard phù hợp
    const user = authManager.getCurrentUser();
    const allowedDashboard = authManager.getRedirectUrl(user.role);
    
    // Hiển thị thông báo lỗi
    this.showUnauthorizedMessage();
    
    setTimeout(() => {
      window.location.replace(allowedDashboard);
    }, 2000);
  }

  /**
   * Hiển thị thông báo không có quyền
   */
  showUnauthorizedMessage() {
    const message = document.createElement('div');
    message.className = 'unauthorized-message';
    message.innerHTML = `
      <div class="unauthorized-content">
        <h2>🚫 Không có quyền truy cập</h2>
        <p>Bạn không có quyền truy cập trang này. Đang chuyển hướng...</p>
      </div>
    `;
    
    // Add styles
    message.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      color: white;
      font-family: var(--font-primary);
    `;
    
    const content = message.querySelector('.unauthorized-content');
    content.style.cssText = `
      text-align: center;
      background: #2d3748;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(message);
  }

  /**
   * Override history methods để catch navigation
   */
  overrideHistoryMethods() {
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = (...args) => {
      originalPushState.apply(history, args);
      setTimeout(() => this.checkCurrentRoute(), 0);
    };
    
    history.replaceState = (...args) => {
      originalReplaceState.apply(history, args);
      setTimeout(() => this.checkCurrentRoute(), 0);
    };
  }

  /**
   * Programmatic navigation với auth check
   * @param {string} path 
   * @param {Object} state 
   */
  navigateTo(path, state = {}) {
    // Kiểm tra quyền trước khi navigate
    const isPublicRoute = this.publicRoutes.includes(path);
    const isAuthenticated = authManager.isAuthenticated();
    
    if (!isPublicRoute && !isAuthenticated) {
      this.redirectToLogin(path);
      return false;
    }
    
    if (!isPublicRoute && isAuthenticated) {
      const user = authManager.getCurrentUser();
      // Kiểm tra role permission logic ở đây nếu cần
    }
    
    history.pushState(state, '', path);
    return true;
  }

  /**
   * Logout và redirect
   */
  logout() {
    authManager.logout();
    // authManager.logout() đã handle redirect
  }
}

// Export singleton
const routeGuard = new RouteGuard();
window.routeGuard = routeGuard;

export default routeGuard;