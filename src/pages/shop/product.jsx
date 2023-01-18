import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const {id,productName, price,ProductImage} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img id='productImage' src={ProductImage} alt="ProductImage" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBtn' onClick={() => addToCart(id)}>Add To Cart {cartItemAmount >0 && <> ({cartItemAmount}) </>}</button>
    </div>
  )
}
