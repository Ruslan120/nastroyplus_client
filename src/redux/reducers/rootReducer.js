import { combineReducers } from "redux";
import appReducer from "./appReducer";
import toastReducer from "./toastReducer";
import loginFormReducer from "./loginFormReducer";



const rootReducer = combineReducers({
    app: appReducer,
    toast: toastReducer,
    loginForm: loginFormReducer,
})

export default rootReducer;