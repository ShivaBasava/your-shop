import React from 'react'
import Productcompo from '../components/Productcompo'
import products from "../products"

function Homescreen() {
    return (
        <div>
            <div className="row justify-content-center">
                {products.map(product=>{
                    return <Productcompo product={product}/>
                })}
            </div>
        </div>
    )
}

export default Homescreen
