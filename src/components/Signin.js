import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import {signInWithPopup} from 'firebase/auth'
import {auth,provider} from '../firebaseconfig'
const Signin = () => {
    const dispatch = useDispatch()
    const signIn = async () => {
    signInWithPopup(auth,provider)
    .then((res) =>{
      const user = res.user
      dispatch({
        type: 'SET_USER',
        payload: user
      })
    })
    .catch(err => console.log(err))
  }
  return (
    
    <div>
      <div>
      <button onClick={signIn}>
        <span className='google__logo'><FcGoogle/></span>
        <span className='text'>Signin</span>
      </button>
    </div>
    </div>
  )
}

export default Signin