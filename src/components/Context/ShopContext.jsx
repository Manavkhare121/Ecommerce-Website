import react,{createContext, useState} from "react"
import all_product from "../../assets/all_product"
import Item from "../Item/Item";
import Product from "../Pages/Product";
export const ShopContext=createContext(null)
 const getDefaultcart=()=>{
        let cart={};
        for(let index=0;index<all_product.length+1;index++){
            cart[index]=0;

        }
        return cart;
    }
const ShopContextProvider=(props)=>{
    const [cartitems,setCartitems]=useState(getDefaultcart())
    
    const addtocart=(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartitems)
    }
    const removefromcart=(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

   const getTotalCartAmount = () => {
  let totalamount = 0;
  for (const item in cartitems) {
    if (cartitems[item] > 0) {
      let iteminfo = all_product.find(
        (Product) => Product.id === Number(item)
      );
      totalamount += iteminfo.new_price * cartitems[item];
    }
  }
  return totalamount;
};
const getTotalCartItems = () => {
  let totalitems = 0;
  for (const item in cartitems) {
    if (cartitems[item] > 0) {
      
        (Product) => Product.id === Number(item)
      
      totalitems += cartitems[item];
    }
  }
  return totalitems;
};

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartitems,addtocart,removefromcart}
    
   
    return(
        <ShopContext.Provider value={contextValue}>
{props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider