import React, { useContext } from 'react';
import '../../components/CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import drop_down from '../../assets/dropdown_icon.png';
import Item from '../Item/Item'; 

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='Shopcategory'>
      <img  className="ShopCategory-banner" src={banner} alt="Category Banner" />
      
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down} alt="" height="20px"/>
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
        
      </div>
      <div className="shopcategory-exploremore">
          Explore More
        </div>
    </div>
  );
};

export default ShopCategory;
