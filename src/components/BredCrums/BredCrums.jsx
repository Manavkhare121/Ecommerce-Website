 import React from 'react';
import "../../components/BredCrums/BredCrums.css";
import arrow_icon from "../../assets/arrow_icon.png";

const BredCrums = ({ product }) => {
  return (
    <div className='bredcrum'>
      Home <img src={arrow_icon} alt="arrow" height="10px" />
      Shop <img src={arrow_icon} alt="arrow" height="10px" />
      {product.category} <img src={arrow_icon} alt="arrow" height="10px" />
      {product.name}
    </div>
  );
};

export default BredCrums;


