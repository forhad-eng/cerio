import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const [signInWithEmailAndPassword, user, , error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()

    if(user){
        navigate('/user')
    }

    const LogInHandler = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }

    return (
        <section>
            <div className="w-full lg:w-6/12 px-4 mx-auto pt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-gray-500 text-sm font-bold">Continue with</h6>
                        </div>
                        <div className="btn-wrapper text-center">
                            <button
                                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                type="button"
                            >
                                <img
                                    alt="..."
                                    className="w-5 mr-1"
                                    src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                                />
                                Github{' '}
                            </button>
                            <button
                                className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                type="button"
                            >
                                <img
                                    alt="..."
                                    className="w-5 mr-1"
                                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                                />
                                Google
                            </button>
                        </div>
                        <hr className="mt-6 border-b-1 border-gray-300" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-blueGray-400 text-center mb-3 font-bold">
                            <small>Or Login with credentials</small>
                        </div>
                        <form onSubmit={LogInHandler} className="text-left">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlfor="grid-password"
                                >
                                    Email
                                </label>
                                <input
                                    onBlur={e => setEmail(e.target.value)}
                                    type="email"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlfor="grid-password"
                                >
                                    Password
                                </label>
                                <input
                                    onBlur={e => setPass(e.target.value)}
                                    type="password"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Password"
                                />
                                {error && <p>{error.message}</p>}
                            </div>

                            <div className="flex justify-between">
                                <label className="inline-flex items-center cursor-pointer">
                                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                        New to CERIO?
                                        <a href="/signup" className="text-pink-500 ml-1">
                                            Create an account
                                        </a>
                                    </span>
                                </label>
                                <Link to="/" className="text-sm font-semibold text-blueGray-600">
                                    Forget password?
                                </Link>
                            </div>

                            <div className="text-center mt-6">
                                <button
                                    className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
