import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart} from 'phosphor-react'
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
            <style> @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,500;1,900&display=swap'); </style>
        <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart"> 
            <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
  )
}
