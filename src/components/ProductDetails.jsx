import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setselectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Button from '@mui/material/Button';
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {

const [count, setCount] = useState(0);
const increments = () => {
  
  setCount(count + 1); 
}

const decrement = () => {
  if(count <= 0){
    alert('Düşemez')
  }
  else{
    setCount(count - 1); // Decrement count by 1
  }
}




const {id} = useParams();
const dispatch = useDispatch();

const {products , selectedProduct} = useSelector((store)=>store.product)

const { price, image, title, category, rating, description } = selectedProduct;

useEffect(()=>{
  GetProductById();
},[])

const GetProductById = () =>{
  products  && products.map((product)=>{
    if(product.id == id){

      dispatch(setselectedProduct(product));
    }
  })
}

const addBasket = ()=> {
  const payload = {
    id,
    price,
    image,
    title,
    description,
    category,
    rating,
    count
  }
dispatch(addToBasket(payload))
dispatch(calculateBasket())
}

  return (
<div className='card-flex' style={{ display: 'flex', alignItems: 'center', gap:'15px' }}>

      <img src={image} alt="" width={300} height={250} />
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
        <span style={{ fontWeight: 'bold', fontSize:'25px', color:'red' }}>

          {price}
        </span>

        <div style={{marginTop: '15px', display:'flex' , alignItems: 'center',  gap:'5px'}}>
          <CiCircleMinus onClick={decrement} style={{fontSize:'30px', cursor:'pointer'}}/> <span style={{fontSize:'30px'}}>
            {count}
            </span> <CiCirclePlus onClick={increments} style={{fontSize:'30px', cursor:'pointer'}}/>
        
        </div>
        <div>
        <Button onClick={addBasket} style={{marginTop:'25px'}}  variant="contained" color="success">
        Sepete Ekle
      </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
