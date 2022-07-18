import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    favorites: [],
};

// function favoriteReducer(state = initialState, action) {
//     switch (action.type) {
//         case SET_FAVORITES:
//             return {
//                 ...state,
//                 favorites: action.payload.favorites,
//             };
//         case DELETE_FAVORITE:
//             return {
//                 ...state,
//                 favorites: [...state.favorites.filter((favorite) => favorite.id !== action.payload.favoriteId)],
//             };
//         default:
//             return state;
//     }
// }
//
// export default favoriteReducer;

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = action.payload.favorites
        },
        deleteFavorite: (state, action) => {
            state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload)
        },
    },
})

export const {setFavorites, deleteFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer
