import React from "react"
import Product from "./product"

const Cart=React.memo(({cart,emptyCart})=>{


    return(
      <>
    <h1>Carts <button onClick={emptyCart}>Clear All</button></h1>
      <div className='cartlar'>
        {cart.map(({name,price})=>(
            <Product name={name} price={price}/>
        ))}
      </div>
      </>
    )
  })
  
  export default Cart