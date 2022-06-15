import {SET_ORDER_DATA} from "../types";

const initialState = {
    orderData: {
        products: [],
    },
};

function orderDataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ORDER_DATA:
            return {
                ...state,
                orderData: action.payload.orderData,
            };
        default:
            return state;
    }
}

export default orderDataReducer;
