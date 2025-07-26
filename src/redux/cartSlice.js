import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartCount: 0,
    },
    reducers: {
        addToCart: (state) => {
            state.cartCount += 1;
        },
        resetCart(state) {
            state.cartCount = 0;
            // reset other cart state if needed
        },
    }
})
export const { addToCart, resetCart } = cartSlice.actions
export default cartSlice.reducer