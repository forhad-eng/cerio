import React from 'react'
import useProducts from '../../hooks/useProducts'
import Product from '../Product/Product'

const Latest = () => {
    const [products, setProducts] = useProducts()
    return (
        <div className="grid md:grid-cols-4 gap-8 mt-10">
            {products.slice(0, 8).map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Latest
