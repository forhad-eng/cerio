import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../App'
import { addToDb, addToWish } from '../../utilities/fakedb'

const Product = ({ product }) => {
    const { name, price, picture } = product
    const [open, setOpen] = useState(false)
    const [cart, setCart, wish, setWish] = useContext(CartContext)
    console.log(wish)

    const addToCartHandler = product => {
        let newCart = []
        let pd = cart.find(item => item.id === product.id)
        if (pd) {
            pd.quantity += 1
            const rest = cart.filter(item => item.id !== pd.id)
            newCart = [...rest, pd]
        } else {
            product.quantity = 1
            const rest = cart.filter(item => item.id !== product.id)
            newCart = [...rest, product]
        }
        setCart(newCart)
        addToDb(product.id)
    }

    const addToWishHandler = product => {
        let newWish = []
        if (!wish.includes(product.id)) {
            const rest = wish.filter(item => item !== product.id)
            newWish = [...rest, product.id]
            setWish(newWish)
        }
        addToWish(product.id)
    }

    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative">
            <img src={picture} alt="" />
            <p className="font-semibold">{name}</p>
            <p className="text-red-600 font-bold">${price}</p>
            {open ? (
                <div className="absolute bottom-24 left-1/2 transition-all">
                    <button onClick={() => addToCartHandler(product)} className="outline-none hover:text-red-600">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-7 w-7" />
                    </button>

                    <button onClick={() => addToWishHandler(product)} className="outline-none hover:text-red-600">
                        <FontAwesomeIcon icon={faHeart} className="h-7 w-7 ml-2" />
                    </button>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Product
