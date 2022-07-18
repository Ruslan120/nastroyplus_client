import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toasts: []
}




export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        addToast: (state, action) => {
            state.toasts.push({
                id: action.payload.id,
                type: action.payload.type,
                message: action.payload.message
            })
        },
        deleteToast: (state, action) => {
            state.toasts = state.toasts.filter((toast) => toast.id !== action.payload.id)
        },
    },
})

export const {addToast, deleteToast} = toastSlice.actions
export default toastSlice.reducer