import {SET_IS_OPEN} from "../types";

const initialState = {
    isOpen: false,
    error: "",
}

function loginFormReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_OPEN:
            return {
                ...state,
                isOpen: action.payload.isOpen
            };
        default:
            return state;
    }
}

export default loginFormReducer;