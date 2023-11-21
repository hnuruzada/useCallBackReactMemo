import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

export const Test = () => {
const [list,setList]=useState([])
const [status,setStatus]=useState(true)


  const url="https://northwind.vercel.app/api/categories"

  const Callback=(data)=>{
    if(status){
      setList(data)
      setStatus(false)
    }
    
  }

  useFetch(url,Callback)
  //const useFetch = (url,callback) => {
console.log("1",list);
  return (
    <>
 
    {list && list.map((item)=>(
      <ul key={item.id}>
        <li>{item.name}--{item.description}</li>
      </ul>
    ))}
    </>
  )
}
