import { useEffect, useState } from 'react'
import { getCart } from '../utilities/fakedb'

const useCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const newCart = []
        const storedCart = getCart()
        for (const id in storedCart) {
            const p = products.find(pd => pd.id === id)
            if (p) {
                p.quantity = storedCart[id]
                newCart.push(p)
            }
        }
        setCart(newCart)
    }, [products])

    return [cart, setCart]
}

export default useCart
