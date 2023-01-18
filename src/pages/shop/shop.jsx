import React from 'react'
import {Product} from "./product"
import {PRODUCTS} from "../../products.js"
import "./shop.css"
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='maintitle'>
            <style> @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,500;1,900&display=swap'); </style>
            <h1>L's Shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product) =>( <Product data={product} />))}

        </div>
    </div>
  )
}
