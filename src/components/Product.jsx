import React from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Product({ product }) {
    const { price, id, image, title, category, rating, description } = product;

    const navigate= useNavigate();

    return (
       
    <div className='urun-listesi'>
        <img className='urun-img' src={image} alt="" />
        <p className='h3-title'>
            {title}
        </p>
        <span className='price'>
            {price} ₺
        </span>
       <div className='button'>
       <Button onClick={()=>navigate("/product-details/"+ id)}  variant="contained" color="success">
        Detaya Git
      </Button>
       </div>
    </div>
    );
}

export default Product;
