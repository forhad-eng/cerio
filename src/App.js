import { createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BestSellers from './components/BestSellers/BestSellers'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Latest from './components/Latest/Latest'
import Shop from './components/Shop/Shop'
import TopSelling from './components/TopSelling/TopSelling'
import useCart from './hooks/useCart'
import useProducts from './hooks/useProducts'

export const CartContext = createContext([])

function App() {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    return (
        <CartContext.Provider value={[cart, setCart]}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="latest" element={<Latest />} />
                        <Route path="top" element={<TopSelling />} />
                        <Route path="best" element={<BestSellers />} />
                    </Route>
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </div>
        </CartContext.Provider>
    )
}

export default App
