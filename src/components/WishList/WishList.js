import { css } from '@emotion/react'
import React, { useContext, useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'
import { CartContext } from '../../App'
import useProducts from '../../hooks/useProducts'
import Product from '../Product/Product'

const override = css`
    display: block;
    position: absolute;
    top: 50%;
    left: 45%;
`

const WishList = () => {
    let [loading] = useState(true)
    const [fetching, setFetching] = useState(true)
    const [products] = useProducts()
    const [, , wish] = useContext(CartContext)

    const wishList = []
    for (const id of wish) {
        const product = products.find(pd => pd.id === id)
        if (product) {
            wishList.push(product)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setFetching(false)
        }, 300)
    }, [])

    return (
        <div className="grid md:grid-cols-4 gap-8 mt-28 md:mt-10">
            {fetching ? (
                <BarLoader loading={loading} css={override} />
            ) : (
                wishList.map(product => <Product key={product.id} product={product} wishlist={true} />)
            )}
        </div>
    )
}

export default WishList
