import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartCount : 0,
    },
    reducers: {
        addToCart: (state) => {
            state.cartCount += 1;
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer