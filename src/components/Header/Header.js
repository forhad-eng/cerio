import { HeartIcon, MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/solid'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'
import CustomLink from '../CustomLink/CustomLink'
import logo from '../images/logo.webp'
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(true)
    const [cart, , wish] = useContext(CartContext)

    const cartReducer = (pre, cur) => cur.quantity && pre + cur.quantity
    const total = cart.reduce(cartReducer, 0)

    const handleIcon = () => {
        setOpen(!open)
    }

    return (
        <header>
            <div onClick={handleIcon} className="md:hidden h-8 w-8 absolute top-4 left-3">
                {open ? <MenuIcon /> : <XIcon />}
            </div>
            <nav className="w-full flex justify-evenly items-center md:justify-between p-4 md:p-7 md:static">
                <div className="w-1/2 ml-auto md:w-full md:flex md:justify-around">
                    <Link to="/">
                        <img width="120" src={logo} className="ml-5 md:ml-0" alt="" />
                    </Link>
                    <div
                        className={`md:flex md:items-center pl-5 p-3 md:pl-16 md:p-0 gap-5 font-semibold text-lg md:static absolute text-left duration-200 ease-in bg-red-500 md:bg-white w-full ${
                            !open ? 'left-0' : 'left-[-1200px]'
                        }`}
                    >
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/shop">Shop</CustomLink>
                        <CustomLink to="/review">Review Cart</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                    </div>
                </div>
                <div className="flex gap-5 relative">
                    <SearchIcon className="h-6 w-6" />
                    <UserIcon className="h-6 w-6" />
                    <Link to="/wishlist">
                        <div class="cart-box">
                            <HeartIcon className="h-6 w-6" />
                            <span class="cart-counter">{wish.length}</span>
                        </div>
                    </Link>
                    <Link to="/review">
                        <div class="cart-box">
                            <ShoppingCartIcon className="h-6 w-6" />
                            <span class="cart-counter">{total}</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
