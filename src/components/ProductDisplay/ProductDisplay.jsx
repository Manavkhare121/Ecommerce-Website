import React from 'react'
import "../../components/ProductDisplay/ProductDisplay.css"
import star_icon from '../../assets/star_icon.png'
import dull_star_icon from '../../assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150x"/>
               

            </div>
            <div className="productdisplay-image">
                <img className="productdisplay-main-img"src={product.image} alt="" height="500"/>
            </div>
        </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" height="20px"/>
            <img src={star_icon} alt="" height="20px"/>
            <img src={star_icon} alt="" height="20px"/>
            <img src={star_icon} alt="" height="20px"/>
            <img src={dull_star_icon} alt="" height="22px"/>
            <p>(130)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nihil reprehenderit maxime quos itaque fugiat rerum ab beatae sunt corporis sit iste officiis animi sequi, architecto, repellat id dolores amet?
            </div>
            <div className="productdisplay-right-side">
                <h1>Select size</h1>
                <div className="productdisplay-right-sized">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button className='productdisplay-right-button'>ADD To CART</button>
            <div className="productdisplay-right-category">
                <span>Category:<span>
                    Women ,T-shirt , Crop Top
                </span>
                </span>
                <span>Tags:<span>
                    Modern ,Latest , Trends Short
                </span>
                </span>
            </div>
        
      </div>
    </div>
  )
}

export default ProductDisplay
