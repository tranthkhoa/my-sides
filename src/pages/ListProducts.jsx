import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ListProducts() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="h1 text-center">Danh Sách Sản Phẩm</h1>
          </div>
        </div>
        {/* Add your product listing content here */}
      </div>
      <Footer />
    </>
  )
}

export default ListProducts 