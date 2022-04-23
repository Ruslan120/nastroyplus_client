import { TEST } from "../types";

const initialState = {
    h1: "Заголовок"
}
function appReducer(state = initialState, action) {
    switch (action.type) {
        case TEST:
            return { ...state, h1: action.value };
        default:
            return state;
    }

}

export default appReducer;