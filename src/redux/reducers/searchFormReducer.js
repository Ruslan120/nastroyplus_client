import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isSearch: false,
    error: "",
}


export const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: {
        setIsSearch: (state, action) => {
            state.isSearch = action.payload
        },
    },
})

export const {setIsSearch} = searchFormSlice.actions
export default searchFormSlice.reducer