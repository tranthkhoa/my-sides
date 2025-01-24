import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import ListProduct from '../components/ListProduct';
import Footer from '../components/Footer';
import ProductDetailModal from '../components/ProductDetailModal';
import productsData from '../data/product.json';
import './Products.css';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define product categories
  const categories = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'coffee-beans', name: 'Cà Phê Hạt' },
    { id: 'ground-coffee', name: 'Cà Phê Xay' },
    { id: 'instant-coffee', name: 'Cà Phê Hòa Tan' },
    { id: 'gift-sets', name: 'Hộp Quà' },
    { id: 'tea', name: 'Trà' }
  ];

  // Filter products based on active tab
  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') return productsData.products;

    return productsData.products.filter(product => {
      switch (activeTab) {
        case 'coffee-beans':
          return product.name.toLowerCase().includes('hạt rang');
        case 'ground-coffee':
          return product.name.toLowerCase().includes('bột xay');
        case 'instant-coffee':
          return product.name.toLowerCase().includes('hòa tan');
        case 'gift-sets':
          return product.name.toLowerCase().includes('hộp quà');
        case 'tea':
          return product.name.toLowerCase().includes('trà');
        default:
          return true;
      }
    });
  }, [activeTab]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="products-page">
      <Navbar />
      
      <main className="products-main">
        <div className="products-container">
          <h1 className="products-title">Sản Phẩm</h1>
          
          {/* Categories Tabs */}
          <div className="categories-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
                <span className="product-count">
                  ({category.id === 'all' 
                    ? productsData.products.length 
                    : filteredProducts.length})
                </span>
              </button>
            ))}
          </div>

          {/* Products List */}
          <ListProduct 
            products={filteredProducts}
            onProductClick={handleProductClick}
          />
        </div>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Products; 