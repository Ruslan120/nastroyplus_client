import {SET_ORDER_OPEN} from "../types";

const initialState = {
    isOpen: false,
    error: "",
}

function orderFormReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ORDER_OPEN:
            return {
                ...state,
                isOpen: action.payload.isOpen
            };

        default:
            return state;
    }
}

export default orderFormReducer;