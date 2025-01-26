import { createSlice } from "@reduxjs/toolkit";
import { ProductDetails } from "../components/ProductDetails/utils/productDetailsInterface";

interface ProductDetailsState {
  productDetails: ProductDetails;
  isLoading: boolean;
  errorMsg: string | null;
}

const initialState: ProductDetailsState = {
  productDetails: {
    id: "",
    title: "",
    image: "",
    subtitle: "",
    brand: "",
    reviews: [],
    retailer: "",
    details: [],
    tags: [],
    sales: [],
  },
  isLoading: false,
  errorMsg: null,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

export const { setProductDetails, setIsLoading, setErrorMsg } =
  productDetailsSlice.actions;
export default productDetailsSlice.reducer;
