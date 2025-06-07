import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../../assets/remove.webp";
import './Cartitems.css'
const CartItems = () => {
  const { getTotalCartAmount,all_product, cartitems, removefromcart } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {all_product.map((e) => {
        if (cartitems[e.id] > 0) {
          return (
            <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className="carticon-product-icon" height="100px" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartitems[e.id]}</button>
              <p>{e.new_price*cartitems[e.id]}</p>
              <img  className="cartitems-remove-icon"src={remove_icon} alt="" height="20px" onClick={()=>removefromcart(e.id)} />
            </div>
            <hr/>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart totals</h1>
          <div className="cartitems-total-items">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cartitems-total-items">
            <p>Shipping Fee</p>
            <p>Fee</p>
          </div>
          <hr/>
          <div className="cartitems-total-items">
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <button>PROCEED TO CHECKOUT</button>
      

        </div>
        <div className="carttems-promocode">
        <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        
      </div>
      
      </div>
    </div>
  );
};

export default CartItems;
