import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
                <div>
                    <i className="fa fa-envelope mx-2"></i>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@tamducphat.com">info@tamducphat.com</a>
                    <i className="fa fa-phone mx-2"></i>
                    <a className="navbar-sm-brand text-light text-decoration-none" href="tel:0886-95-9999">0886.95.9999</a>
                </div>
                <div>
                    <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                    <a className="text-light" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                    <a className="text-light" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                    <a className="text-light" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></a>
                </div>
            </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
            <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
                <img src="/src/assets/img/logo.png" width="80" alt="Logo" />
            </Link>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Trang Chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Về Chúng Tôi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Cửa Hàng</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Liên Hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <div className="flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div className="input-group">
                            <input type="text" className="form-control" id="inputMobileSearch" placeholder="Tìm kiếm ..."/>
                            <div className="input-group-text">
                                <i className="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar 