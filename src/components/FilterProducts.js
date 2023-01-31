import React, { useState } from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const FilterProducts = () => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const [price, setPrice] = useState(0)
  return (
    <div className='filter__product__container'>
        <form>
          <p>Filter By Price</p>
          <div>
          <input type='radio' id='low-high' value={'low to high'} name='filter-price' onChange={()=> dispatch({
            type:'SORT_BY_PRICE',
            payload:'lowtohigh'
          })}/>
          <label htmlFor='low-high'>Low to High</label>
          </div>
          <div>
          <input type='radio' id='high-low' value={'high to low'}name='filter-price'onChange={()=> dispatch({
            type:'SORT_BY_PRICE',
            payload:'hightolow'
          })}/>
          <label htmlFor='high-low'>High to Low</label>
          </div>
          <div>
            <p>By Rating</p>
            {[...Array(5)].map((_,i)=>(
              <span key = {i} onClick={()=>{dispatch({
                type:'BY_RATING',
                payload: i+1
              })}}>
                {filter.byRating > i ? <AiFillStar/>:<AiOutlineStar/>}
              </span>
            ))}
          </div>
          <div>
            <input type={'range'} name='price' min={'0'} max='1750'step={'250'} onChange={(e)=> {
              setPrice(Number(e.target.value))
              dispatch({
              type:'BY_PRICE',
              payload: Number(e.target.value)
            })}}/>
            <p>0 to {price}</p>
          </div>
          <button onClick={()=> dispatch({
            type:'CLEAR_FILTER',
            payload: null
          })}>Clear Filter</button>
        </form>
    </div>
  )
}

export default FilterProducts