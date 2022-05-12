import {DELETE_FAVORITE, SET_FAVORITES} from "../types";

const initialState = {
    favorites: [],
};

function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FAVORITES:
            return {
                ...state,
                favorites: action.payload.favorites,
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites.filter((favorite) => favorite.productId !== action.payload.productId)],
            };
        default:
            return state;
    }
}

export default favoriteReducer;
