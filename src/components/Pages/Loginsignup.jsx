import React from 'react'
import '../../components/CSS/LoginSignup.css'
const Loginsignup = () => {
  return (
    <div className='LoginSignup'> 
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
         <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address'/>
        <input type="password" placeholder='Password' />
        <button >Continue</button>
      </div>
      
      <p className="loginsignup-login">
        Already have an account ? <span>Login here</span>
        
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id=""/>
        <p>By consulting, I agree to the term of use & privacy policy.</p>
      </div>
      </div>
     
      
    </div>
  )
}

export default Loginsignup
