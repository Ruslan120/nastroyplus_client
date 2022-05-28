import { combineReducers } from "redux";
import appReducer from "./appReducer";
import toastReducer from "./toastReducer";
import loginFormReducer from "./loginFormReducer";
import favoriteReducer from "./favoriteReducer";
import basketReducer from "./basketReducer";
import orderFormReducer from "./orderFormReducer";
import orderReducer from "./orderReducer";



const rootReducer = combineReducers({
    app: appReducer,
    toast: toastReducer,
    loginForm: loginFormReducer,
    orderForm: orderFormReducer,
    favorites: favoriteReducer,
    basket: basketReducer,
    orders: orderReducer,
})

export default rootReducer;