import React from 'react';
import { useCallback, useState } from 'react';
import './App.css';
import Cart from './cart';
import Products from './products';


const phones=[
  {name:"Iphone 15",price:3000},
  {name:"Samsung Galaxy S20",price:2500},
  {name:"Xiomi",price:1500},
]

export const App=()=> {

  const [products]=useState(phones)
  const [cart,setCart]=useState([])

  const addToCart=useCallback((product)=>{
    setCart((cart)=>[...cart,product])
  },[])
  const emptyCart=useCallback(()=>{
    setCart([])
  },[])
  return (
    <div className='main'>
    <Products products={products} addToCart={addToCart}/>
    <Cart cart={cart} emptyCart={emptyCart}/>
   </div>
  );
}










