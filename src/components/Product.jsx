import React from 'react'
import defaultImage from '../assets/img/default.png'

function Product({ image, rating, price, title, description, reviews }) {
  return (
    <div className="col-12 col-md-4 mb-4">
        <div className="card h-100">
            <a href="shop-single.html">
                <img 
                    src={image} 
                    className="card-img-top" 
                    alt={title}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultImage;
                    }}
                />
            </a>
            <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                        {[...Array(5)].map((_, index) => (
                            <i key={index} 
                               className={`fa fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}>
                            </i>
                        ))}
                    </li>
                    <li className="text-muted text-right">${price}</li>
                </ul>
                <a href="shop-single.html" className="h2 text-decoration-none text-dark">{title}</a>
                <p className="card-text">
                    {description}
                </p>
                <p className="text-muted">Reviews ({reviews})</p>
            </div>
        </div>
    </div>
  )
}

export default Product 