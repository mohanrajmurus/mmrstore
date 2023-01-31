import React, { useState } from 'react';
import SingleProduct from '../components/SingleProduct';
import '../css/product.css'
import {useSelector} from 'react-redux'

function Products() {
 const [page, setPage] = useState(1)
 const products = useSelector(state => {
  return state.product})
  const searchQuery = useSelector(state => state.filter.searchQuery)
  const rating = useSelector(state => state.filter.byRating)
  const price = useSelector(state => state.filter.price)
  console.log(price);
const sort = useSelector(state => state.filter.sort)
  const pageHandler = (selectPage)=>{
    if (
      selectPage >= 1 &&
      selectPage <= Math.ceil(transformProducts().length / 10) &&
      selectPage !== page
    )
      setPage(selectPage);
  }
  const transformProducts = ()=>{
    let transproducts = products;
    if(sort){
      transproducts = transproducts.sort((a,b)=> sort === 'lowtohigh' ? a.price - b.price : b.price - a.price)
    }
    if(searchQuery){
      transproducts = transproducts.filter(product => product.title.toLowerCase().includes(searchQuery))
    }
    if(rating){
      transproducts = transproducts.filter(product => product.rating >= rating)
    }
    if(price){
      transproducts = transproducts.filter(product => product.price <= price)
    }
    return transproducts;
  }
  console.log(transformProducts().length);
  return (
     <div>
      <div className='product__container'>
        <div className='product__card__container'>
          {transformProducts().slice(page*10-10,page*10).map((prod,index) => {
              return <SingleProduct prod={prod} key={index}/>
            })}
        </div>
      </div>
      {transformProducts().length > 0 && (
        <div className='pagination'>
          <span 
             onClick={() => pageHandler(page - 1)}
             className={page > 1 ? "" : "pagination__disable"}
          >⬅️</span>
          {[...Array(Math.ceil(transformProducts().length / 10))].map((_,i)=>{
            return (
              <span key={i}
              className={page === i + 1 ? "pagination__selected" : ""}
              onClick={() => pageHandler(i + 1)}
              >{i+1}</span>
            )
          })
            }
          <span
             onClick={() => pageHandler(page + 1)}
             className={page < Math.ceil(transformProducts().length / 10) ? "" : "pagination__disable"}

          >➡️</span>
        </div>
      )}
    
     </div>
   
  )
}

export default Products