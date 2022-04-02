import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Product = ({ product }) => {
    const { name, price, picture } = product
    const [open, setOpen] = useState(false)
    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative">
            <img src={picture} alt="" />
            <p className="font-semibold">{name}</p>
            <p className="text-red-600 font-bold">${price}</p>
            {open ? (
                <div className="absolute bottom-24 left-1/2 transition-all">
                    <button className="outline-none hover:text-red-600">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-7 w-7" />
                    </button>
                    <button className="outline-none hover:text-red-600">
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
