import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = ()=>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}
const writeFromBasketStorage = (basket) =>{
    localStorage.setItem("basket",JSON.stringify(basket))


    
}




const initialState = {
    products : getBasketFromStorage(),
    drawer: false,
    TotalAmount: 0

}





export const  basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{

        addToBasket :(state, action)=>{
        const findProduct =  state.products && state.products.find((product)=> product.id ===  action.payload.id);

        if(findProduct){
          const extractedProducts   =  state.products.filter((product)=> product.id != action.payload.id)
          findProduct.count += action.payload.count;

          state.products = [...extractedProducts, findProduct];
          writeFromBasketStorage(state.products);
        }
        else{
            state.products = [...state.products, action.payload];
            writeFromBasketStorage(state.products);
        }

        },

        setDrawer : (state,action)=>{
            state.drawer = !state.drawer
        },

        calculateBasket : (state)=>{
            state.TotalAmount = 0;
            state.products && state.products.map((product)=>{
                state.TotalAmount += product.price * product.count;
            })
        },
        RemoveProduct : (state,action)=>{
        state.products.filter((product)=> product.id !== action.payload);
        
             writeFromBasketStorage(state.id)
        },


       
        


    }
})

export const { addToBasket, setDrawer, calculateBasket,RemoveProduct} = basketSlice.actions

export default basketSlice.reducer