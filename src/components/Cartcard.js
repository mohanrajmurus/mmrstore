import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'

function Cartcard({item}) {

const dispatch = useDispatch()
  return (
      <div className='cart__items'>
        <div className='item__image'>
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className='item__title'>
        <span >{item.title}</span>
        </div>
        <div className='item__quantity'>
          <button 
            onClick={()=>{
              dispatch({
                type: 'INCREASE_QTY',
                payload: item
              })
            }}
          >+</button>
          <span>{item.qty}</span>
          <button
          disabled={item.qty <= 1}
            onClick={()=>{
            dispatch({
              type: 'DECREASE_QTY',
              payload: item
            })
          }}
          >-</button>
        </div>
        <div className='item__price'>
        <span >$ {Math.floor(Number(item.price))}</span>
        </div>
        <div className='delete__item'>
        <span >
          <MdDelete 
            onClick={()=>{
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: item
              })
            }}
          />
        </span>
        </div>
      </div>
  )
}

export default Cartcard