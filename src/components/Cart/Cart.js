import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'
import './Cart.css'

const Cart = () => {
    const [cart] = useContext(CartContext)

    let quantity = 0
    let price = 0
    for (const item of cart) {
        quantity += item.quantity
        price += item.price * item.quantity
    }

    return (
        <div className="cart bg-orange-300 p-2">
            <p className="text-xl font-semibold">Selected Item(s): {quantity}</p>
            <div className="text-left text-lg md:pl-5 pt-5">
                <p className="">Total: ${price}</p>
                <p>Tax: ${(price * 0.15).toFixed(2)}</p>
                <p>Grand Total: ${price + price * 0.15}</p>
            </div>
            <Link to="/shipping">
                <button className="w-44 h-12 mx-auto mt-5 rounded-md bg-red-500 text-white text-sm uppercase font-semibold flex items-center justify-center">
                    Proceed Shipping <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </button>
            </Link>
        </div>
    )
}

export default Cart
