import React, { useState } from 'react';
import './ProductDetailModal.css';
import defaultImage from '../assets/img/default.png'; // Import the default image

const ProductDetailModal = ({ product, onClose, isOpen }) => {
  const [quantity, setQuantity] = useState(1);
  
  if (!isOpen) return null;

  const handleQuantityChange = (increment) => {
    if (increment) {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }
  };

  // Calculate discount percentage
  const calculateDiscount = () => {
    const retailPrice = parseFloat(product.retail_price.replace(/[^\d]/g, ''));
    const discountedPrice = parseFloat(product.discounted_price.replace(/[^\d]/g, ''));
    return Math.round(((retailPrice - discountedPrice) / retailPrice) * 100);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="product-title">
            <h2>{product.type}</h2>
            <h1>{product.name} ({product.size})</h1>
            <p className="sku">SKU: {product.sku}</p>
          </div>
          <div className="product-price">
            <div className="retail-price">Giá Bán Lẻ: {product.retail_price}</div>
            <div className="sale-price">{product.discounted_price}</div>
            <div className="discount">Chiết Khấu: {calculateDiscount()}%</div>
          </div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="product-grid">
            <div className="product-image-section">
              <div className="main-image">
                <img 
                  src={`/images/products/${product.sku}.jpg`}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = defaultImage; // Set default image
                  }}
                />
              </div>
              
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(false)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(true)}>+</button>
              </div>
              
              <button className="add-to-cart-btn">
                Thêm vào giỏ hàng
              </button>
            </div>
            
            <div className="product-info">
              <div className="info-section">
                <h3>THÔNG TIN SẢN PHẨM</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>LOẠI:</td>
                      <td>{product.type}</td>
                    </tr>
                    <tr>
                      <td>KÍCH THƯỚC:</td>
                      <td>{product.size}</td>
                    </tr>
                    <tr>
                      <td>SỐ LƯỢNG/THÙNG:</td>
                      <td>{product.quantity_per_box} {product.type}</td>
                    </tr>
                    {product.origin && (
                      <tr>
                        <td>XUẤT XỨ:</td>
                        <td>{product.origin}</td>
                      </tr>
                    )}
                    {product.roast && (
                      <tr>
                        <td>RANG:</td>
                        <td>{product.roast}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="info-section">
                <h3>MÔ TẢ</h3>
                <p className="product-description">{product.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal; 