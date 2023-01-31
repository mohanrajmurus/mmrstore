import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDvCWqPYM6RbREjw7UoIcZ5qIlc-VPwpRU",
    authDomain: "mmr-store.firebaseapp.com", 
    projectId: "mmr-store",
    storageBucket: "mmr-store.appspot.com",
    messagingSenderId: "738190056105",
    appId: "1:738190056105:web:996c85c973041ae50727b8"
  };
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const provider =new GoogleAuthProvider()

export {auth,provider}

