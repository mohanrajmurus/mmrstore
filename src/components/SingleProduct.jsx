import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

function Card({prod}) {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const cartData = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: prod
    })
  }
  
  return (
    <div className='card' key={prod.id}>
        <img src={prod.thumbnail} alt={prod.title} />
        <h1>{prod.title}</h1>
        <div className='card__detail'>
            <div className='card__detail__price'>
              <h3>$ {Math.floor(Number(prod.price))}</h3>
              <p>{prod.rating} Ratings</p>
            </div>
            <div>
                  {cart.some(p=> p.id === prod.id)? (
              <button 
                className='remove__cart'
                onClick={()=>{

                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod
                  })
                }}
                >Remove From Cart</button>
                ):(
              <button onClick={cartData}>Add  to cart</button>
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Card