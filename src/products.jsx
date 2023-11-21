import React from "react"
import Product from "./product"

const Products=React.memo(({products,addToCart})=>{


    return(
      <div className='container'>
      <h1>All Products</h1>
      <div className='allProduct'>
      {products.map(({name,price})=>(
        <Product name={name} price={price} addToCart={addToCart}/>
      ))}
      </div>
      </div>
    )
  })

  export default Products