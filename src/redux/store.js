import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/reducer/CartReducer'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
