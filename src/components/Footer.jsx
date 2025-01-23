import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo"><img src="assets/img/logo.png" width="80" /> </h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            Q25, Đường Số 13, P. Tân Thới Nhất, Quận 12, TP. HCM
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:0886-95-9999">0886.95.9999</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:info@tamducphat.com">info@tamducphat.com</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Danh Mục Sản Phẩm</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        {/* ... Footer product categories ... */}
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Thông Tin Thêm</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        {/* ... Footer additional info links ... */}
                    </ul>
                </div>
            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright &copy; 2024 Tâm Đức Phát 
                            | Designed by <a rel="sponsored" href="#" target="_blank">K</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer 