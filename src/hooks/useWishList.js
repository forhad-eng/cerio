import { useEffect, useState } from 'react'
import { getWish } from '../utilities/fakedb'

const useWishList = products => {
    const [wish, setWish] = useState([])

    useEffect(() => {
        let wishlist = []
        const storedWish = getWish()
        for (const id of storedWish) {
            const pd = products.find(product => product.id === id)
            if (pd) {
                wishlist.push(pd.id)
            }
        }
        setWish(wishlist)
    }, [products])

    return [wish, setWish]
}

export default useWishList
