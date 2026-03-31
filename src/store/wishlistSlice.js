import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;

      const exists = state.items.find((i) => i.id === item.id);

      if (!exists) {
        state.items.push(item);
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    toggleWishlist: (state, action) => {
      const item = action.payload;

      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        state.items.push(item);
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;
