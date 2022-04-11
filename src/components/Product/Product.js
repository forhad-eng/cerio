import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { CartContext } from '../../App'
import { addToDb, addToWish } from '../../utilities/fakedb'

const Product = ({ product }) => {
    const { name, price, picture } = product
    const [open, setOpen] = useState(false)
    const [cart, setCart, wish, setWish] = useContext(CartContext)

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
                <div className="flex gap-2 absolute bottom-24 left-[40%] md:left-[35%] transition-all">
                    <button
                        data-tip="Add To Cart"
                        onClick={() => addToCartHandler(product)}
                        className="flex justify-center items-center h-12 w-12 bg-white rounded-full p-3 outline-none hover:text-red-600"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} className="h-7 w-7" />
                    </button>

                    <button
                        data-tip="Add To Wishlist"
                        onClick={() => addToWishHandler(product)}
                        className="flex justify-center items-center h-12 w-12 bg-white rounded-full p-3 outline-none hover:text-red-600"
                    >
                        <FontAwesomeIcon icon={faHeart} className="h-7 w-7" />
                    </button>
                    <ReactTooltip effect="solid" />
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Product
