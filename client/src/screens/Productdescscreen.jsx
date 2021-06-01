import React from 'react'
import products from '../products'

function Productdescscreen({match}) {
    const productid = match.params.id
    const product = products.find(product => product.id == productid)
    return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        
                        <div className="card p-2 m-3">
                            
                            <h1 className="row justify-content-center">{product.name}</h1>
                            
                            <img src={product.image} className="im-fluid m-3"/> {/**/}
                            
                            <p>{product.description}</p>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-6 text-start">
                        <div className="m-2">
                            <hr/>
                            
                            <h1 className="text-center">Other details of this product</h1>
                            <hr/>
                            <h1>Category: {product.category}</h1>
                            <h1>Price: {product.price} /-</h1>
                            
                            <hr/>

                            <h1>Select Quantity</h1>
                            <select>
                                {[...Array(product.countInStock).keys()].map((x, i) => {
                                return <option value={i+1}> {i+1} </option>
                            })}
                            </select>

                            <button className="btn btn-dark p-1 m-2">ADD TO CART</button>

                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Productdescscreen
