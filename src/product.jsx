import React from "react"

const Product=React.memo(({name,price,addToCart})=>{

    return(
    <div className='product'>
    <h2>{name}</h2>
    <p>{price}</p>
    {addToCart && <button onClick={()=>addToCart({name,price})}>Add</button>}
    </div>
    )
  })

  export default Product