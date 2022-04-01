import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRightIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <div className="w-4/5 h-[520px] mx-auto flex-column mt-10 mb-20 md:mt-0 md:mb-0 md:flex md:justify-around md:items-center">
            <div className="text-left mb-10 md:mb-0">
                <p className="text-xl uppercase font-semibold">Sale up to 30% off</p>
                <p className="text-6xl font-semibold">
                    Spring <br />
                    Collection
                </p>
                <Link to="/shop">
                    <button className="w-40 h-12 mt-8 bg-red-500 text-white text-sm uppercase font-semibold flex items-center justify-center">
                        Discover <ArrowRightIcon className="w-5 h-5 ml-1" />
                    </button>
                </Link>
                <div className="mt-3">
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
    )
}

export default Home
