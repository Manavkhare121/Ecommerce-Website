import React from 'react'
import './Offers.css'
import Exclusive_image from '../../assets/exclu.webp'
const Offers = () => {
  return (
    <div className='offer'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={Exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
