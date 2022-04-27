import {ADD_TOAST, DELETE_TOAST} from "../types";

const initialState = {
    toasts: []
}

function toastReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TOAST:
            return {
                ...state,
                toasts: [...state.toasts, {
                    id: action.payload.id,
                    type: action.payload.type,
                    message: action.payload.message
                }]
            };
        case DELETE_TOAST:
            return {...state, toasts: [...state.toasts.filter((toast) => toast.id !== action.payload.id)]};
        default:
            return state;
    }
}

export default toastReducer;