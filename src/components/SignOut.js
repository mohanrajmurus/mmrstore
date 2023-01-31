import React, { useState } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebaseconfig'
import { useDispatch,useSelector } from 'react-redux'
import '../css/sign.css'
const SignOut = () => {
  const [submenu, setSubmenu] = useState(false)

  const user = useSelector(state => state.user)
    const dispatch = useDispatch()

  return (
    <div>
      <ul className='profile__menu'>
        <li>
          <img src={user.photoUrl} alt={user.dispalyName} onClick={()=> setSubmenu(!submenu)}/>
          <ul className={submenu?' active sub-menu': 'sub-menu'}>
            <li>Profile</li>
            <li>My Orders</li>
            <li>
              <button onClick = {()=>{
            signOut(auth).then(()=> {
                alert('Signout Sucessfull')
                dispatch({
                    type: 'REMOVE_USER',
                    
                  })
            }).catch(err => console.log(err))
            
        }}>SignOut</button>
            </li>
          </ul>
        </li>
      </ul>
        
    </div>
  )
}

export default SignOut