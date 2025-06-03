import React from 'react'
import './Hero.css'
import Hand_icon  from '../../assets/hand_icon.png'
import arrow_icon from'../../assets/arrow_icon.png'
import men_icon from  '../../assets/p8.webp'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Best Deals !  Best Prices !</h2>
            <div className="hand-icon">
            <p>new</p>
            <img src={Hand_icon} height="60px"/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className='hero-latest-btn' >Latest Collection 
             <img src={arrow_icon} alt="" height="20px"/>
        </div>
        </div>
        
        <div className="hero-right">
            <img src={men_icon} alt="" height="500px" />
        </div>
    </div>
  )
}

export default Hero
