import { createSlice } from "@reduxjs/toolkit";

import ProductData from "../assets/data.json";

const productSlice = createSlice({
  name: "product",
  initialState: {
    intialData: ProductData.data,
    data: ProductData.data,
  },
  reducers: {
    sortByPriceHigh: (state) => {
      state.data = state.data.slice().sort((a, b) => a.price - b.price);
    },
    sortByPriceLow: (state) => {
      state.data = state.data.slice().sort((a, b) => b.price - a.price);
    },
    showSearch: (state, action) => {
      console.log("Action Payload:", action.payload);
      state.data = state.intialData.filter((item) => {
        if (item.name && typeof item.name === "string") {
          return item.name.toLowerCase() === action.payload.toLowerCase();
        } else {
          return "Not Found";
        }
      });
      console.log("Filtered Data:", state.data);
    },
    showCategory: (state, action) => {
      if (action.payload === "All") {
        state.data = state.intialData;
      } else {
        state.data = state.intialData.filter((item) => {
          return item.category === action.payload;
        });
      }
    },
  },
});

export const { sortByPriceHigh, sortByPriceLow, showCategory, showSearch } =
  productSlice.actions;

export default productSlice.reducer;
