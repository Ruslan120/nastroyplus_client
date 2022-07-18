import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    baskets: [],
};
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBaskets: (state, action) => {
            state.baskets = action.payload
        },
        deleteBaskets: (state, action) => {
            state.baskets = state.baskets.filter((basket) => basket.id !== action.payload)
        },
        setBasketCount: (state, action) => {
            state.baskets = state.baskets.map((basket) => {
                if (basket.id === action.payload.basketId) {
                    return {...basket, count: action.payload.count}
                } else {
                    return basket
                }
            })
        },
    },
})

export const {setBaskets, deleteBaskets, setBasketCount} = basketSlice.actions
export default basketSlice.reducer

