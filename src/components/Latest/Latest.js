import { css } from '@emotion/react'
import React, { useState } from 'react'
import { BarLoader } from 'react-spinners'
import useProducts from '../../hooks/useProducts'
import Product from '../Product/Product'

const override = css`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
`

const Latest = () => {
    const [products, setProducts] = useProducts()
    let [loading, setLoading] = useState(true)

    return (
        <div className="grid md:grid-cols-4 gap-8 mt-10">
            {products.length === 0 ? (
                <BarLoader loading={loading} css={override} />
            ) : (
                products.slice(0, 8).map(product => <Product key={product.id} product={product} />)
            )}
        </div>
    )
}

export default Latest
