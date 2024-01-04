import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Define the async thunk
export const fetchItems = createAsyncThunk(
  'Cart/fetchItems',
  async () => {
    const response = await axios.get('https://dummyjson.com/products'); // replace 'API_URL' with your API endpoint
    console.log(response.data.products)
    return response.data.products;
  }
);

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
    allProducts: [],
  },
  reducers: {
    ADDTOCART: (state, action) => {
        
        // Check if the item is already in the cart
        const itemExistsInCart = state.cartItems.some(item => item.id === action.payload.id);

        // If the item is not in the cart, add it
        if (!itemExistsInCart) {
          state.cartItems.push(action.payload);
        }
    },
    REMOVEFROMCART:(state,action) => {
        state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
    },
    RESETCART:(state,action) => {
        state.cartItems = [];
        alert("items have been checkout out");
        
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  }
});

export const { ADDTOCART, REMOVEFROMCART,RESETCART } = CartSlice.actions;

export default CartSlice.reducer;