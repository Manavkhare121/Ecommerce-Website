
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BredCrums from '../BredCrums/BredCrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Description from '../Description/Description';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

const product = all_product.find((e) => e.id.toString() === productId);



  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
