import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRightIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'
import OurServices from '../OurServices/OurServices'

const Home = () => {
    const [model, setModel] = useState('./model1.jpg')

    const modelHandler = index => {
        if (index === 0) {
            setModel('./model1.jpg')
        } else if (index === 1) {
            setModel('./model2.jpg')
        } else {
            setModel('./model3.jpg')
        }
    }

    return (
        <div>
            <div className="w-4/5 h-[520px] mx-auto flex-column mt-10 mb-20 md:mt-0 md:mb-0 md:flex md:justify-around md:items-center">
                <div className="text-left mb-5 md:mb-0">
                    <p className="text-xl uppercase font-semibold">Sale up to 30% off</p>
                    <p className="text-6xl font-semibold">
                        Spring <br />
                        Collection
                    </p>
                    <CustomLink to="/shop" className="inline-block mt-6">
                        <button className="w-40 h-12 bg-red-500 text-white text-sm uppercase font-semibold flex items-center justify-center">
                            Discover <ArrowRightIcon className="w-5 h-5 ml-1" />
                        </button>
                    </CustomLink>
                    <div className="mt-3 md:mt-10">
                        <button onClick={() => modelHandler(0)} className="mr-2 outline-none">
                            <FontAwesomeIcon
                                icon={faCircleDot}
                                className="h-3 w-3 text-white hover:text-black border-2 border-black rounded-xl"
                            />
                        </button>
                        <button onClick={() => modelHandler(1)} className="mr-2 outline-none">
                            <FontAwesomeIcon
                                icon={faCircleDot}
                                className="h-3 w-3 text-white hover:text-black border-2 border-black rounded-xl"
                            />
                        </button>
                        <button onClick={() => modelHandler(2)} className="outline-none">
                            <FontAwesomeIcon
                                icon={faCircleDot}
                                className="h-3 w-3 text-white hover:text-black border-2 border-black rounded-xl"
                            />
                        </button>
                    </div>
                </div>
                <div>
                    <img src={model} className="md:w-[540px] rounded-lg" alt="" />
                </div>
            </div>

            <div className="mb-10">
                <div className="relative block md:inline-block md:w-[494px]">
                    <img src="./images/banner1.jpg" className="hover:scale-95 hover:transition-all h-[330px]" alt="" />
                    <div className="absolute top-1/3 left-[30px] text-left">
                        <p className="text-xl uppercase font-semibold ">
                            <small className="text-[#828282]">staff choice</small>
                        </p>
                        <p className="text-4xl font-semibold ">New arrivals</p>
                        <Link to="/shop" className="font-semibold border-b-2 border-black">
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="relative block md:inline-block md:w-[360px]">
                    <img src="./images/banner2.jpg" className="hover:scale-95 hover:transition-all h-[330px]" alt="" />
                    <div className="absolute top-1/3 left-[120px] md:left-[65px] text-center block md:inline-block">
                        <p className="text-xl uppercase font-semibold ">
                            <small className="text-[#828282]">up to 30% off</small>
                        </p>
                        <p className="text-4xl font-semibold">Hot Collection</p>
                        <Link to="/shop" className="font-semibold border-b-2 border-black">
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="relative block md:inline-block md:w-[494px]">
                    <img src="./images/banner3.jpg" className="hover:scale-95 hover:transition-all h-[330px]" alt="" />
                    <div className="absolute top-1/3 right-[30px] text-right">
                        <p className="text-xl uppercase font-semibold">
                            <small className="text-[#828282]">Hand picked</small>
                        </p>
                        <p className="text-4xl font-semibold">Trending Now</p>
                        <Link to="/shop" className="font-semibold border-b-2 border-black">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>

            <section className="mb-10">
                <p className="text-3xl uppercase font-bold">best seller</p>
                <hr className="border-red-500 w-14 mx-auto mt-3" />
                <div className="md:w-1/2 mx-auto mt-7 grid gap-y-2 md:grid-cols-3 items-center">
                    <Link to="latest">
                        <button className="text-lg uppercase font-bold border-2 border-black p-2 outline-none">
                            latest products
                        </button>
                    </Link>
                    <Link to="top" className="hover:border-2 border-black p-2">
                        <button className="text-lg text-[#828282] uppercase font-bold outline-none">top rating</button>
                    </Link>
                    <Link to="best" className="hover:border-2 border-black p-2">
                        <button className="text-lg text-[#828282] uppercase font-bold outline-none">
                            best sellers
                        </button>
                    </Link>
                </div>
                <Outlet />
            </section>
            <OurServices />
        </div>
    )
}

export default Home
