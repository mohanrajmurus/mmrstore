import './App.css';
import Products from './pages/Products';
import Navbar from './components/Navbar'
import {Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
// import Signinpage from './pages/Signinpage'
// import Home from './pages/Home';

import { useDispatch } from 'react-redux';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch()
    useEffect(()=>{
        const fetchData = async () =>{
          try {
            const res = await fetch('https://dummyjson.com/products?limit=100')
            const prod = await res.json()
            dispatch({
              type: 'SET_PRODUCTS',
              payload: prod.products
            })
          } catch (error) {
            console.log(error);
          }
        }
        fetchData()
      },[dispatch])
  return (
    <div className="container">      
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          {/* <Route path='/signin' element={<Signinpage/>}/> */}
          <Route path='/cart' element={<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;
