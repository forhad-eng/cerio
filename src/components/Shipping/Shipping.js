import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Shipping = () => {
    const [user] = useAuthState(auth)

    return (
        <section className="max-w-5xl md:w-1/2 p-5 md:mt-5 border-[1px] shadow-lg rounded-lg mx-auto text-left bg-gray-200">
            <p className="text-3xl text-gray-700 font-semibold mb-5 text-center">Shipping Information</p>
            <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            First Name
                        </label>
                        <input
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded border-red-500 text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Last Name
                        </label>
                        <input
                            className="aborder-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Email
                        </label>
                        <input
                            value={user.email}
                            readOnly
                            className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight outline-none"
                        />
                        <p className="text-gray-600 text-xs italic">Your login email</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring ease-linear transition-all duration-150"
                            id="phone"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-city"
                        >
                            City
                        </label>
                        <input
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring ease-linear transition-all duration-150"
                            id="grid-city"
                            type="text"
                            placeholder="Albuquerque"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-state"
                        >
                            District
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring ease-linear transition-all duration-150"
                                id="grid-state"
                                required
                            >
                                <option>Dhaka</option>
                                <option>Chattogram</option>
                                <option>Sylhet</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-zip"
                        >
                            Zip
                        </label>
                        <input
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring ease-linear transition-all duration-150"
                            id="grid-zip"
                            type="text"
                            placeholder="90210"
                            required
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
                    <button className="w-full px-3 py-3 mt-3 bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150">
                        Add Information
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Shipping
