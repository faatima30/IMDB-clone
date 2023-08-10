"use client"
import React from 'react'
import { UseEffect } from 'react'

export default function error({error,reset}) {
  UseEffect(()=>{
    console.log(error)
  },[error])
  return (
    <div className='text-center mt-10 '>
      <h1>Something went wrong</h1>
      <button className='hover:text-amber-600' onClick={()=>reset()}>Try Againg</button>
    </div>
  )
}
