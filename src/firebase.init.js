import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC04XhawLHMEIEMrRcHuIQTtiZCHjeio84',
    authDomain: 'cerio-shop.firebaseapp.com',
    projectId: 'cerio-shop',
    storageBucket: 'cerio-shop.appspot.com',
    messagingSenderId: '1006264188516',
    appId: '1:1006264188516:web:28941b751464164b0d6971'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
