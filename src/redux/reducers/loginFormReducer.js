import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    error: "",
}

export const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload
        },
    },
})

export const {setIsOpen} = loginFormSlice.actions
export default loginFormSlice.reducer