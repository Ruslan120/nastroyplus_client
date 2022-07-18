import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orderData: {
        products: [],
    },
};

export const orderDataSlice = createSlice({
    name: 'orderData',
    initialState,
    reducers: {
        setOrderData: (state, action) => {
            state.orderData = action.payload
        },
    },
})

export const {setOrderData,} = orderDataSlice.actions
export default orderDataSlice.reducer
