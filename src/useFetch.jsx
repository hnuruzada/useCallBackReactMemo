import React, { useEffect } from 'react'

const useFetch = (url,callback) => {

useEffect(()=>{
  try {
  fetch(url).then(response=>response.json()).then(data=>callback(data))
    
  } catch (error) {
    console.log(error);
  }

},[url,callback])
}

export default useFetch