import { combineReducers } from "redux";
import appReducer from "./appReducer";
import toastReducer from "./toastReducer";



const rootReducer = combineReducers({
    app: appReducer,
    toast: toastReducer,
})

export default rootReducer;