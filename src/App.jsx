import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import PageContainer from './container/PageContainer'
import RouterConfing from './confing/RouterConfing'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux'
import { calculateBasket, setDrawer,RemoveProduct } from './redux/slices/basketSlice'


function App() {
const {products,drawer,TotalAmount} = useSelector((store)=> store.basket)
const dispatch = useDispatch();

useEffect(()=>{
dispatch(calculateBasket());
},[])



const close = ()=>{
  dispatch(setDrawer());

}

const Remove = ()=>{
  dispatch(RemoveProduct());

}

  return (
    <>
    <PageContainer>
    <Loading/>
    <Header/>
    <RouterConfing/>
    <Drawer onClick={close} anchor='right' open={drawer}>
      {
        products && products.map((product)=>{
          return(
            <div  key={product.id}  className='d-basket d-basket-flex'>
              <div className="left-basket">
              <img src={product.image} width={100} height={75} alt="" />
              <p className='price-basket' >
                {product.title}
              </p>
              </div>
              <div className="right-basket">
              <span className='d-block'>
               ({product.count})
              </span>
              <span >
                {product.price  }
              </span>
             
              </div>
              <Button onClick={Remove}  style={{marginTop:'25px'}}  variant="contained" color="error">
                Sil
              </Button>
            </div>
            
          )
        })
      }
      <h2>
        Toplam Tutar :{TotalAmount}
      </h2>
    </Drawer>
    <Loading/>
    </PageContainer>
    </>
  )
}

export default App
