import {DELETE_BASKET, SET_BASKET_COUNT, SET_BASKETS} from "../types";


const initialState = {
    baskets: [],
};

function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BASKETS:
            return {
                ...state,
                baskets: action.payload.baskets,
            };
        case DELETE_BASKET:
            return {
                ...state,
                baskets: [...state.baskets.filter((basket) => basket.id !== action.payload.basketId)],
            };
        case SET_BASKET_COUNT:
            return {
                ...state,
                baskets: [...state.baskets.map((basket) => {
                    if (basket.id === action.payload.basketId){
                        return {...basket, count: action.payload.count}
                    }
                    else {
                        return basket
                    }
                })]
            }

        default:
            return state;
    }
}

export default favoriteReducer;
