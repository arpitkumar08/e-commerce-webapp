import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartCount: 0,
    items: [],
    totalPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.cartCount += 1;
      state.totalPrice += parseFloat(product.product_price.replace("$", ""));
    },

    incrementItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.cartCount += 1;
        state.totalPrice += parseFloat(item.product_price.replace("$", ""));
      }
    },

    decrementItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.cartCount -= 1;
        state.totalPrice -= parseFloat(item.product_price.replace("$", ""));
      }
    },

    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.cartCount -= item.quantity;
        state.totalPrice -= item.quantity * parseFloat(item.product_price.replace("$", ""));
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },

    resetCart: (state) => {
      state.cartCount = 0;
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const {
  addToCart,
  incrementItem,
  decrementItem,
  removeItem,
  resetCart
} = cartSlice.actions;

export default cartSlice.reducer;
