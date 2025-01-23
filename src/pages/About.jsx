import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Navbar />
      
      {/* About Hero Section */}
      <section className="bg-success py-5">
        <div className="container">
            <div className="row align-items-center py-5">
                <div className="col-md-8 text-white">
                    <h1>Về Chúng Tôi</h1>
                    <p>
                        Công ty TNHH TM XNK Tâm Đức Phát chuyên cung cấp các sản phẩm cà phê chất lượng cao, 
                        được chọn lọc kỹ càng từ những vùng nguyên liệu nổi tiếng. Chúng tôi cam kết mang đến 
                        cho khách hàng những sản phẩm chất lượng nhất với giá cả hợp lý nhất.
                    </p>
                </div>
                <div className="col-md-4">
                    <img src="/src/assets/img/logo.png" alt="About Hero" className="img-fluid"/>
                </div>
            </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <div className="container py-5">
        <div className="row">
            <div className="col-12">
                <h2 className="text-center mb-4">Vị Trí Của Chúng Tôi</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe 
                            width="100%" 
                            height="500" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=Q25,%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BB%91%2013,%20P.%20T%C3%A2n%20Th%E1%BB%9Bi%20Nh%E1%BA%A5t,%20Qu%E1%BA%ADn%2012,%20TP.%20HCM&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Company Info Section */}
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
            <div className="col-lg-6 m-auto">
                <h2>Thông Tin Liên Hệ</h2>
                <p>Liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-map-marker-alt fa-lg"></i></div>
                    <h2 className="h5 mt-4 text-center">Địa Chỉ</h2>
                    <p className="text-center">Q25, Đường Số 13, P. Tân Thới Nhất, Quận 12, TP. HCM</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-phone fa-lg"></i></div>
                    <h2 className="h5 mt-4 text-center">Điện Thoại</h2>
                    <p className="text-center">0886.95.9999</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-envelope fa-lg"></i></div>
                    <h2 className="h5 mt-4 text-center">Email</h2>
                    <p className="text-center">info@tamducphat.com</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About 