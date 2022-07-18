import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isFavorite: false,
    isBasket: false,
    productData: {}
};

export const productPageSlice = createSlice({
    name: 'productPage',
    initialState,
    reducers: {
        setIsFavorite: (state, action) => {
            state.isFavorite = action.payload
        },
        setIsBasket: (state, action) => {
            state.isBasket = action.payload
        },
        setProductData: (state, action) => {
            state.productData = action.payload
        },
    },
})

export const {setIsFavorite, setIsBasket, setProductData} = productPageSlice.actions
export default productPageSlice.reducer
