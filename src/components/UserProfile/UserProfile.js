import { LogoutIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const UserProfile = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    console.log(user)

    const signOutHandler = () => {
        signOut(auth)
        navigate('/login')
    }

    return (
        <>
            {user && (
                <div>
                    <img src={user.photoURL} alt="" />
                    <h3>User: {user.displayName}</h3>
                    <h4>Email: {user.email}</h4>
                    <button
                        onClick={signOutHandler}
                        className="bg-red-600 flex mx-auto px-3 py-2 rounded mt-1 text-white uppercase"
                    >
                        Logout
                        <LogoutIcon className="w-6 h-6 ml-1" />
                    </button>
                </div>
            )}
        </>
    )
}

export default UserProfile
