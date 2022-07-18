import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isAuth: false,
    isLoaded: false,
    isFetching: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload
        },
        deleteUserData: (state, action) => {
            state.user = null
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload
        },
    },
})

export const {setUserData, setIsLoaded, deleteUserData, setIsAuth, setIsFetching} = appSlice.actions
export default appSlice.reducer
