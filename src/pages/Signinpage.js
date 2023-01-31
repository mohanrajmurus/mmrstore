import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {signInWithPopup} from 'firebase/auth'
import {auth,provider} from '../firebaseconfig'
import { useDispatch } from 'react-redux'
const Signinpage = () => {
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
    <div >
      <div >
      <button onClick={signIn}>
        <span className='google__logo'><FcGoogle/></span>
        <span className='text'>Signin With Google</span>
      </button>
    </div>
    </div>
  )
}

export default Signinpage