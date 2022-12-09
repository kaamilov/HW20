import React from 'react'
import { useState } from 'react'

const useCounter = (num=0) => {
    

    const [count,setCount]=useState(num)
    
    console.log(count);
  const plus =()=>{
    if(count === 20){
      alert("max num 20")
    }else{
       setCount(count +1)
    }
   
  }
  const minus =()=>{
    if(count < 1){
        return alert("min number 0")
    }else{
        setCount(count - 1)
    }
  }
  const increment =()=>{
    if(count >= 20){
      return alert("max num 20")
    }else{
      setCount(count + 5)
    }
  }
    const decrement =()=>{
      if(count <= 0){
        return alert("min number 0")
      }
      else{
        setCount( count - 5)
      }
    }
  
  const reset =()=>{
    setCount(0)
  }
  return{
    count,
    plus,
    minus,
    reset,
    increment,
    decrement
  }
}

export default useCounter
