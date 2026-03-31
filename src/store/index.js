import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagSlice from "./bagSlice";
import wishlistSlice from "./wishlistSlice";

const swiftstore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default swiftstore;
