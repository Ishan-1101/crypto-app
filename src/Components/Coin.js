import React from 'react'
import 'animate.css'

function Coin({name, icon, price, symbol}) {
  return (
    <div className='coin'>
        <h1>Name : {name}</h1>
        <div className='animate__animated animate__rotateIn animate__delay-1s'>
        <img src={icon} alt="icon of the coin"/>
        </div>
        <h3>Price : {price}</h3>
        <h3>Symbol : {symbol}</h3>
    </div>
  )
}

export default Coin