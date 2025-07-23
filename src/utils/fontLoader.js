/**
 * FONT LOADER UTILITY
 * Utility để load và test font tiếng Việt
 */

class VietnameseFontLoader {
  constructor() {
    this.testString = 'Tiếng Việt: áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ ÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ';
    this.fonts = [
      'Inter',
      'Nunito Sans', 
      'Source Sans Pro',
      'Segoe UI',
      'Roboto'
    ];
  }

  /**
   * Kiểm tra font có hỗ trợ tiếng Việt không
   * @param {string} fontFamily - Tên font cần kiểm tra
   * @returns {Promise<boolean>}
   */
  async checkFontSupport(fontFamily) {
    return new Promise((resolve) => {
      // Tạo canvas để test font
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      // Test với font fallback
      context.font = '16px Arial';
      const fallbackWidth = context.measureText(this.testString).width;
      
      // Test với font cần kiểm tra
      context.font = `16px "${fontFamily}", Arial`;
      const testWidth = context.measureText(this.testString).width;
      
      // Nếu width khác nhau, font được hỗ trợ
      resolve(Math.abs(fallbackWidth - testWidth) > 1);
    });
  }

  /**
   * Load font và kiểm tra hỗ trợ tiếng Việt
   * @param {string} fontFamily - Tên font
   * @returns {Promise<boolean>}
   */
  async loadFont(fontFamily) {
    try {
      // Sử dụng Font Loading API nếu có
      if ('fonts' in document) {
        await document.fonts.load(`16px "${fontFamily}"`);
        return await this.checkFontSupport(fontFamily);
      }
      
      // Fallback method
      return new Promise((resolve) => {
        const testElement = document.createElement('div');
        testElement.style.fontFamily = `"${fontFamily}", Arial`;
        testElement.style.fontSize = '16px';
        testElement.style.position = 'absolute';
        testElement.style.visibility = 'hidden';
        testElement.textContent = this.testString;
        
        document.body.appendChild(testElement);
        
        setTimeout(() => {
          const isSupported = testElement.offsetWidth > 0;
          document.body.removeChild(testElement);
          resolve(isSupported);
        }, 100);
      });
    } catch (error) {
      console.warn(`Lỗi khi load font ${fontFamily}:`, error);
      return false;
    }
  }

  /**
   * Tìm font tốt nhất hỗ trợ tiếng Việt
   * @returns {Promise<string>}
   */
  async findBestFont() {
    for (const font of this.fonts) {
      const isSupported = await this.loadFont(font);
      if (isSupported) {
        console.log(`✅ Font "${font}" hỗ trợ tiếng Việt tốt`);
        return font;
      } else {
        console.warn(`❌ Font "${font}" không hỗ trợ tiếng Việt tốt`);
      }
    }
    
    console.warn('Không tìm thấy font tối ưu, sử dụng system font');
    return 'system-ui';
  }

  /**
   * Áp dụng font tốt nhất cho trang
   */
  async applyBestFont() {
    const bestFont = await this.findBestFont();
    document.documentElement.style.setProperty('--font-primary', `"${bestFont}", var(--font-primary)`);
    
    // Thêm class để báo hiệu font đã load
    document.body.classList.remove('font-loading');
    document.body.classList.add('font-loaded');
    
    return bestFont;
  }

  /**
   * Tạo font test UI
   */
  createFontTestUI() {
    const testContainer = document.createElement('div');
    testContainer.innerHTML = `
      <div class="font-test-container" style="position: fixed; top: 10px; right: 10px; background: white; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 9999; max-width: 400px;">
        <h3>🔤 Font Test - Tiếng Việt</h3>
        <div id="font-test-results"></div>
        <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 5px 10px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Đóng</button>
      </div>
    `;
    
    document.body.appendChild(testContainer);
    
    // Test từng font
    const resultsContainer = document.getElementById('font-test-results');
    this.fonts.forEach(async (font) => {
      const isSupported = await this.checkFontSupport(font);
      const testDiv = document.createElement('div');
      testDiv.className = 'font-test';
      testDiv.style.fontFamily = `"${font}", Arial`;
      testDiv.innerHTML = `
        <strong>${font} ${isSupported ? '✅' : '❌'}</strong><br>
        <span style="font-size: 14px;">${this.testString.substring(0, 50)}...</span>
      `;
      resultsContainer.appendChild(testDiv);
    });
  }
}

// Export để sử dụng
window.VietnameseFontLoader = VietnameseFontLoader;

// Auto-initialize
document.addEventListener('DOMContentLoaded', async () => {
  const fontLoader = new VietnameseFontLoader();
  await fontLoader.applyBestFont();
  
  // Thêm font test UI trong development mode
  if (process.env.NODE_ENV === 'development') {
    // Uncomment dòng dưới để hiển thị font test UI
    // fontLoader.createFontTestUI();
  }
});