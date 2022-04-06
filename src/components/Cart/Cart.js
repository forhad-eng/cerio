import React, { useContext } from 'react'
import { CartContext } from '../../App'

const Cart = () => {
    const [cart] = useContext(CartContext)

    let quantity = 0
    let price = 0
    for (const item of cart) {
        quantity += item.quantity
        price += item.price * item.quantity
    }

    return (
        <div>
            <p>Selected Item(s) : {quantity}</p>
            <p>Total : ${price}</p>
        </div>
    )
}

export default Cart
