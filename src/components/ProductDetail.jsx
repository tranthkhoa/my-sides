import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(product.mainImage);

  const handleQuantityChange = (increment) => {
    if (increment) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleImageChange = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="product-detail-container">
      {/* Product Images */}
      <div className="product-image-section">
        <img 
          id="product-detail" 
          src={mainImage} 
          alt={product.name}
        />
        <div className="product-links-wap">
          {product.images.map((image, index) => (
            <a 
              key={index} 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleImageChange(image.src);
              }}
            >
              <img src={image.src} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>

      {/* Product Controls */}
      <div className="product-controls">
        {/* Quantity Controls */}
        <div className="quantity-controls">
          <button 
            id="btn-minus" 
            onClick={() => handleQuantityChange(false)}
          >
            -
          </button>
          <span id="var-value">{quantity}</span>
          <button 
            id="btn-plus" 
            onClick={() => handleQuantityChange(true)}
          >
            +
          </button>
        </div>

        {/* Size Selection */}
        <div className="size-selection">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`btn-size ${selectedSize === size ? 'btn-secondary' : 'btn-success'}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Hidden Form Values */}
        <input 
          type="hidden" 
          id="product-quanity" 
          value={quantity}
        />
        <input 
          type="hidden" 
          id="product-size" 
          value={selectedSize || ''}
        />
      </div>
    </div>
  );
};

export default ProductDetail; 