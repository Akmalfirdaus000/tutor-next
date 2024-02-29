'use client'
import React from 'react'

export default function Button() {
    const HandleClick = ()=>{
        alert('jangann mass')
    }
  return (
    <div>
        <button onClick={HandleClick}>touch me</button>
    </div>
  )
}
