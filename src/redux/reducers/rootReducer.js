import { combineReducers } from "redux";
import appReducer from "./appReducer";
import toastReducer from "./toastReducer";
import loginFormReducer from "./loginFormReducer";
import favoriteReducer from "./favoriteReducer";
import basketReducer from "./basketReducer";



const rootReducer = combineReducers({
    app: appReducer,
    toast: toastReducer,
    loginForm: loginFormReducer,
    favorites: favoriteReducer,
    basket: basketReducer,
})

export default rootReducer;