import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    error: "",
}


export const orderFormSlice = createSlice({
    name: 'orderForm',
    initialState,
    reducers: {
        setOrderOpen: (state, action) => {
            state.isOpen = action.payload
        },
    },
})

export const {setOrderOpen} = orderFormSlice.actions
export default orderFormSlice.reducer