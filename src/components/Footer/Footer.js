import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer className="my-5">
            <section className="grid md:grid-cols-3 gap-5 md:gap-0 items-center p-4">
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
        </footer>
    )
}

export default Footer
