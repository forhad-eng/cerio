import { createContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BestSellers from './components/BestSellers/BestSellers'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Latest from './components/Latest/Latest'
import Login from './components/Login/Login'
import RequireAuth from './components/RequireAuth/RequireAuth'
import ReviewCart from './components/ReviewCart/ReviewCart'
import Shipping from './components/Shipping/Shipping'
import Shop from './components/Shop/Shop'
import SignUp from './components/SignUp/SignUp'
import TopSelling from './components/TopSelling/TopSelling'
import UserProfile from './components/UserProfile/UserProfile'
import WishList from './components/WishList/WishList'
import useCart from './hooks/useCart'
import useProducts from './hooks/useProducts'
import useWishList from './hooks/useWishList'

export const CartContext = createContext([])

function App() {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const [wish, setWish] = useWishList(products)

    return (
        <CartContext.Provider value={[cart, setCart, wish, setWish]}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Latest />} />
                        <Route path="latest" element={<Latest />} />
                        <Route path="top" element={<TopSelling />} />
                        <Route path="best" element={<BestSellers />} />
                    </Route>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/review" element={<ReviewCart />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/shipping"
                        element={
                            <RequireAuth>
                                <Shipping />
                            </RequireAuth>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<UserProfile />} />
                </Routes>
                <Footer />
                <Toaster />
            </div>
        </CartContext.Provider>
    )
}

export default App
