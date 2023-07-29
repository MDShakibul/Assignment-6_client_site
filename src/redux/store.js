import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from "@/redux/features/addProductSlice";

export default configureStore({
  reducer: {
    addProduct: addProductReducer,
  },
});
