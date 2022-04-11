import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.webp'

const Footer = () => {
    const today = new Date()
    const thisYear = today.getFullYear()

    return (
        <footer className="mt-12">
            <section className="grid md:grid-cols-3 gap-5 md:gap-0 items-center px-4 py-8 border-gray-300 border-y-2">
                <div className="flex items-center justify-center md:justify-start border-gray-300 border-r-[1px] md:mr-28 text-gray-900">
                    <FontAwesomeIcon icon={faPaperPlane} className="w-8 h-8" />
                    <p className="uppercase text-lg text-left font-bold ml-8">
                        Sign up <br /> for newsletter
                    </p>
                </div>
                <p className="text-gray-600 md:pr-14 md:text-left">
                    Subscribe to the weekly newsletter for all the latest updates
                </p>
                <div className="w-fit">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        className="bg-gray-100 py-5 px-[62px] text-sm text-left outline-none"
                    />
                    <button className="px-10 py-5 bg-black text-white text-sm uppercase font-bold">Subscribe</button>
                </div>
            </section>

            <section className="grid md:grid-cols-4 gap-6 md:gap-0 px-5 text-left tracking-wide font-semibold py-8 border-b-[1px] border-gray-300">
                <div>
                    <img className="mb-4" src={logo} width="150" alt="" />
                    <div className="text-[14px]">
                        <p className="mb-4 text-gray-500">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima odit odio...
                        </p>
                        <p>Add: Halishahar, Chittagong, Bangladesh</p>
                        <p>Phone: +8801712010000</p>
                        <p>Email: support@cerio.com</p>
                    </div>
                </div>

                <div className="md:mx-auto text-[14px]">
                    <p className="font-bold uppercase border-black border-b-2 mb-6 md:mr-20">About Us</p>
                    <ul className=" text-gray-500">
                        <li className="mb-2">
                            <Link to="/">Career at Cerio</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">About us</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Sustainability</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Press</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Investor Relations</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Corporate Governance</Link>
                        </li>
                    </ul>
                </div>

                <div className="md:mx-auto text-[14px]">
                    <p className="font-bold uppercase border-black border-b-2 mb-6 md:mr-28">Help</p>
                    <ul className=" text-gray-500">
                        <li className="mb-2">
                            <Link to="/">FAQ</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Shipping</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Returns</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Order Status</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Gift Card Balance</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Accessibility</Link>
                        </li>
                    </ul>
                </div>

                <div className="md:mx-auto text-[14px]">
                    <p className="font-bold uppercase border-black border-b-2 mb-6 md:mr-20">Categories</p>
                    <ul className=" text-gray-500">
                        <li className="mb-2">
                            <Link to="/">T-Shirts and Tops</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Sleeveless and Tank Tops</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Graphic Tees</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Shirts and Blouses</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Sweatpants</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/">Packages &amp; Fitouts</Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="flex flex-col md:flex-row md:justify-between md:items-center my-5 px-5">
                <span className="text-[14px] text-gray-500 font-semibold mb-2 md:mb-0">
                    &copy; {thisYear} CERIO By Forhad Uddin, Inspiration{' '}
                    <a className="text-blue-600" target="_blank" href="http://themeocean.net/" rel="noreferrer">
                        themeocean.net
                    </a>
                </span>
                <img src="https://cdn.shopify.com/s/files/1/0578/3116/2029/files/paymet.png?v=1645148803" alt="" />
            </section>
        </footer>
    )
}

export default Footer
