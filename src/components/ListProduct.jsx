import React from 'react';
import './ListProduct.css';
import defaultImage from '../assets/img/default.png'; // Import the default image

const ListProduct = ({ products, onProductClick }) => {
  // Function to calculate discount percentage
  const calculateDiscount = (retail, discounted) => {
    const retailPrice = parseFloat(retail.replace(/[^\d]/g, ''));
    const discountedPrice = parseFloat(discounted.replace(/[^\d]/g, ''));
    return Math.round(((retailPrice - discountedPrice) / retailPrice) * 100);
  };

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div 
          key={product.sku} 
          className="product-card"
          onClick={() => onProductClick(product)}
        >
          <div className="product-image">
            <img 
              src={`/images/products/${product.sku}.jpg`} 
              alt={product.name}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = defaultImage; // Set default image
              }}
            />
            <div className="discount-badge">
              -{calculateDiscount(product.retail_price, product.discounted_price)}%
            </div>
          </div>
          
          <div className="product-info">
            <div className="product-type-size">
              <span className="product-type">{product.type}</span>
              <span className="product-size">{product.size}</span>
            </div>
            
            <h3 className="product-name">{product.name}</h3>
            
            <div className="product-prices">
              <span className="retail-price">{product.retail_price}</span>
              <span className="discounted-price">{product.discounted_price}</span>
            </div>
            
            <p className="product-notes">{product.notes}</p>
            
            <div className="product-details">
              {product.origin && (
                <div className="origin">
                  <span>Xuất xứ:</span> {product.origin}
                </div>
              )}
              {product.roast && (
                <div className="roast">
                  <span>Rang:</span> {product.roast}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct; 