import { combineReducers } from "redux";
import appReducer from "./appReducer";
import toastReducer from "./toastReducer";
import loginFormReducer from "./loginFormReducer";
import favoriteReducer from "./favoriteReducer";
import basketReducer from "./basketReducer";
import orderFormReducer from "./orderFormReducer";
import orderReducer from "./orderReducer";
import searchFormReducer from "./searchFormReducer";
import orderDataReducer from "./orderDataReducer";



const rootReducer = combineReducers({
    app: appReducer,
    toast: toastReducer,
    loginForm: loginFormReducer,
    searchForm: searchFormReducer,
    orderForm: orderFormReducer,
    favorites: favoriteReducer,
    basket: basketReducer,
    orders: orderReducer,
    orderData: orderDataReducer,
})

export default rootReducer;