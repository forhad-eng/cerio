import { Route, Routes } from 'react-router-dom'
import './App.css'
import BestSellers from './components/BestSellers/BestSellers'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Latest from './components/Latest/Latest'
import Shop from './components/Shop/Shop'
import TopSelling from './components/TopSelling/TopSelling'

function App() {
    return (
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
    )
}

export default App
