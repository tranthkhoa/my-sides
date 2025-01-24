import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const productCategories = [
    { id: 'coffee-beans', name: 'Cà Phê Hạt', path: '/products?category=coffee-beans' },
    { id: 'ground-coffee', name: 'Cà Phê Xay', path: '/products?category=ground-coffee' },
    { id: 'instant-coffee', name: 'Cà Phê Hòa Tan', path: '/products?category=instant-coffee' },
    { id: 'gift-sets', name: 'Hộp Quà', path: '/products?category=gift-sets' },
    { id: 'tea', name: 'Trà', path: '/products?category=tea' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Về Chúng Tôi</h3>
            <p>Công ty TNHH XNK Tâm Đức Phát</p>
            <p>MST: 031xxxxxx</p>
            <p>Địa chỉ: Q25, Đường Số 13, P. Tân Thới Nhất, Quận 12, TP. HCM</p>
          </div>

          {/* Product Categories */}
          <div className="footer-section">
            <h3>Danh Mục Sản Phẩm</h3>
            <ul className="footer-links">
              {productCategories.map(category => (
                <li key={category.id}>
                  <Link to={category.path}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Hỗ Trợ Khách Hàng</h3>
            <ul className="footer-links">
              <li><Link to="/shipping">Chính sách vận chuyển</Link></li>
              <li><Link to="/returns">Chính sách đổi trả</Link></li>
              <li><Link to="/payment">Phương thức thanh toán</Link></li>
              <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Liên Hệ</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-phone"></i>
                <span>Hotline: 0886.95.9999</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>Email: info@tamducphat.vn</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Giờ làm việc: 8:00 - 22:00</span>
              </li>
            </ul>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Tâm Đức Phát. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 