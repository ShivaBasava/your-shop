import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'
import Rating from 'react-rating'

function Productcompo({ product }) {
    return (
        <div className="col-md-3 m-2 card p-2">
            <div>
                <Link to={`product/${product.id}`}>
                    <img src={product.image} className="img-fluid" />
                    <h1>{product.name}</h1>

                    <Rating style={{ color: "orange" }}
                        initialRating={product.rating}
                        fullSymbol="fa fa-star fa-1x"
                        fractions={2}
                        readonly={true} />

                    <h1>Price: {product.price}</h1>
                </Link>
            </div>
        </div>
    )
}

export default Productcompo
