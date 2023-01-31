import React from 'react';
import FilterProducts from '../components/FilterProducts';
import Products from './Products';
import '../css/Home.css'

const Home = () => {
    
  return (
    <div className='home__container'>
        <FilterProducts/>
        <Products/>
    </div>
  )
}

export default Home