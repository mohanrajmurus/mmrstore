import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartcard from '../components/Cartcard'
import '../css/cart.css'

function Cart() {
const cart = useSelector(state => state.cart)
const [total, setTotal] = useState()
useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=> acc += Math.floor(Number(curr.price))*curr.qty,0))
  
},[cart])
  return (
    <div className='cart__container'>
      {cart.length !== 0 ? 
        <div className='card__container'>
        {cart.map((item,index)=>{
            return <Cartcard item={item} key={index}  />;
        })}
        </div>: <p>No Cart Items</p>}
      <div className='total__price'>
        
        <h3>Total Amount:$ {total}</h3>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart