import React, { useState } from 'react';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';



function Header() {

  const [theme, setTheme]=useState(false);
const  dispatch = useDispatch();

  const { products } = useSelector((store)=>store.basket)
 const changeTeheme = () =>{
  const root = document.getElementById("root");

  setTheme(!theme);

  if(theme){
    root.style.backgroundColor ="black";
    root.style.color ="#fff";
  }
  else{
    root.style.backgroundColor ="#fff";
    root.style.color ="black";
  }

}

const openBasketMenu = ()=>{
  dispatch(setDrawer())

}
  return (
    <div className='flex'>
      <div className="logo">
         <a href="">
        Logo
        </a>
      </div>
      <div className="form">
        <input type="text"  placeholder='Ürün Ara'/>
        <div className='icon'>

      

            <Badge onClick={openBasketMenu} badgeContent={products.length} color="primary">
            <CiShoppingBasket className='icon-size'/> 
    </Badge>



        {theme ?  <IoMoonOutline  onClick={changeTeheme} className='icon-size'/> :     <CiLight onClick={changeTeheme} className='icon-size'/>  }
       


   
        
        
        </div>
        
      </div>
      
    </div>
  );
}

export default Header;
