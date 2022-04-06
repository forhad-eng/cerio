import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { CartContext } from '../../App'
import { removeItem } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import './ReviewCart.css'

const ReviewCart = () => {
    const [cart] = useContext(CartContext)

    return (
        <div className="review-cart">
            <div className="grid grid-cols-1 gap-5 mx-auto">
                {cart.map(item => (
                    <Review key={item.id} product={item}></Review>
                ))}
            </div>
            <Cart />
        </div>
    )
}

const Review = ({ product }) => {
    const [cart, setCart] = useContext(CartContext)
    const { name, price, picture, quantity } = product

    const itemHandler = product => {
        const newCart = cart.filter(item => item.id !== product.id)
        setCart(newCart)
        removeItem(product.id)
    }

    return (
        <div className="review-card flex justify-between items-center shadow-md border-[1px] rounded-lg p-2">
            <div className="flex items-center">
                <img src={picture} alt="" />
                <div className="text-left ml-2">
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <button
                onClick={() => itemHandler(product)}
                className="text-red-700 bg-red-300 rounded-full w-[50px] h-[50px] text-[22px] mr-2"
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    )
}

export default ReviewCart
