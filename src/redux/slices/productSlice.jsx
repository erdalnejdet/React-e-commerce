import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    selectedProduct: [],
    loading: false
};

const BASE_URL = 'https://fakestoreapi.com'; 

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
});

export const searchProducts = createAsyncThunk("searchProducts", async (query) => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setselectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(searchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(searchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
    }
});

export const { setselectedProduct } = productSlice.actions;

export default productSlice.reducer;
