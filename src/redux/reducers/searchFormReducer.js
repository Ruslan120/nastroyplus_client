import {SET_IS_SEARCH} from "../types";

const initialState = {
    isSearch: false,
    error: "",
}

function searchFormReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_SEARCH:
            return {
                ...state,
                isSearch: action.payload.isSearch
            };
        default:
            return state;
    }
}

export default searchFormReducer;