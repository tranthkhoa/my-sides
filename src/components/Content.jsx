import React from 'react'
import Product from './Product'
import { useBaseUrl } from '../hooks/useBaseUrl'

function Content() {
  const { getImageUrl } = useBaseUrl();
  
  const featuredProducts = [
    {
      image: getImageUrl("/src/assets/img/feature_prod_01.jpg"),
      rating: 3,
      price: "240.00",
      title: "Gym Weight",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
      reviews: 24
    },
    {
      image: getImageUrl("/src/assets/img/feature_prod_02.jpg"),
      rating: 3,
      price: "480.00",
      title: "Cloud Nike Shoes",
      description: "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
      reviews: 48
    },
    {
      image: getImageUrl("/src/assets/img/feature_prod_03.jpg"),
      rating: 5,
      price: "360.00",
      title: "Summer Addides Shoes",
      description: "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
      reviews: 74
    }
  ];

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
                    src={getImageUrl("/src/assets/img/rang-ca-phe-hat5.jpg")} 
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
                    src={getImageUrl("/src/assets/img/caphebotxay.jpg")} 
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
                    src={getImageUrl("/src/assets/img/hopquacaphe.jpg")} 
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
                    src={getImageUrl("/src/assets/img/caphephingiay.jpg")} 
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
                    src={getImageUrl("/src/assets/img/caphetuiloc.jpg")} 
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
                    src={getImageUrl("/src/assets/img/caphedenhoatanmix.jpg")} 
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
                    src={getImageUrl("/src/assets/img/tratraicayhoatan.jpg")} 
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
                    src={getImageUrl("/src/assets/img/traicay.png")} 
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
                    <Product key={index} {...product} />
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Content 