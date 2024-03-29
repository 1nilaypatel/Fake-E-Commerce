import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, image, price, title } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ id, image, price, title, quantity: 1 });
      }
      state.totalItems++;
      state.totalPrice += price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingProductId = state.products.findIndex((product) => product.id === id);
      if (existingProductId !== -1) {
        const removedProduct = state.products[existingProductId];
        removedProduct.quantity--;
        state.totalItems--;
        state.totalPrice -= removedProduct.price;
        if(removedProduct.quantity === 0){
          state.products.splice(existingProductId, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
