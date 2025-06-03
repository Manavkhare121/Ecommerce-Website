import './Navbar.css'
import logo from '../../assets/logo.webp'
import Cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
    const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} height="50px"
            />
            <p>Shopify</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",color:"#626262"}}to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none" ,color:"#626262"}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul> 
        <div className="nav-login-cart">
            <Link to="./Loginsignup"><button >Login</button></Link>
            <Link to='./Cart'><img src={Cart} height="40px"/></Link>
            <div className="nav-cart-login">0</div>
        </div>

        
      
    </div>
  )
}

export default Navbar
