import React from 'react'
import Product from './Product'
import { useBaseUrl } from '../hooks/useBaseUrl'
import productsData from '../data/product.json'

function Content() {
  const { getImageUrl } = useBaseUrl();

  // Sort products by discounted price in descending order and get the top 3
  const featuredProducts = productsData.products
    .sort((a, b) => parseFloat(b.discounted_price.replace(/[^\d]/g, '')) - parseFloat(a.discounted_price.replace(/[^\d]/g, '')))
    .slice(0, 3);

  return (
    <>
      <section className="container py-5">
        <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Danh Mục Sản Phẩm</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/rang-ca-phe-hat5.jpg")} 
                    className="rounded-circle img-fluid border" 
                    alt="Cà Phê Hạt Rang"
                  />
                </a>
                <h5 className="text-center mt-3 mb-3">Cà Phê Hạt Rang</h5>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/caphebotxay.jpg")} 
                    className="rounded-circle img-fluid border" 
                    alt="Cà Phê Bột Xay"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Cà Phê Bột Xay</h2>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/hopquacaphe.jpg")} 
                    className="rounded-circle img-fluid border" 
                    alt="Hộp Quà Cà Phê"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Hộp Quà Cà Phê</h2>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/caphephingiay.jpg")} 
                    className="rounded-circle img-fluid border" 
                    alt="Cà Phê Phin Giấy"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Cà Phê Phin Giấy</h2>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/caphetuiloc.jpg")} 
                    className="rounded-circle img-fluid border" 
                    alt="Cà Phê Túi Lọc"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Cà Phê Túi Lọc <br/></h2>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/caphedenhoatanmix.jpg")} 
                    className="rounded-circle img-fluid border" 
                    alt="Cà Phê Tan Đen & Mix"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Cà Phê Tan Đen & Mix</h2>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/tratraicayhoatan.jpg")} 
                    className="rounded-circle img-fluid border" 
                    alt="Trà Trái Cây Nhiệt Đới Hoà Tan"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Trà Trái Cây Nhiệt Đới Hoà Tan</h2>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
            <div className="col-12 col-md-3 p-5 mt-3">
                <a href="#">
                  <img 
                    src={getImageUrl("/assets/img/traicay.png")} 
                    className="rounded-circle img-fluid border" 
                    alt="Trái Cây Sấy Giòn"
                  />
                </a>
                <h2 className="h5 text-center mt-3 mb-3">Trái Cây Sấy Giòn <br/></h2>
                <p className="text-center"><a className="btn btn-success">Đặt Hàng</a></p>
            </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Sản Phẩm Tiêu Biểu</h1>
                </div>
            </div>
            <div className="row">
                {featuredProducts.map((product, index) => (
                    <Product 
                        key={index} 
                        image={getImageUrl(`/src/assets/img/${product.sku}.jpg`)}
                        rating={product.rating} 
                        price={product.discounted_price} 
                        title={product.name} 
                        description={product.notes} 
                        reviews={Array.isArray(product.reviews) ? product.reviews.length : 0}
                    />
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Content 