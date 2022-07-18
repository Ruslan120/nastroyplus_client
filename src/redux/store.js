import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";
import toastReducer from "./reducers/toastReducer";
import loginFormReducer from "./reducers/loginFormReducer";
import searchFormReducer from "./reducers/searchFormReducer";
import orderFormReducer from "./reducers/orderFormReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import basketReducer from "./reducers/basketReducer";
import orderReducer from "./reducers/orderReducer";
import orderDataReducer from "./reducers/orderDataReducer";
import productPageReducer from "./reducers/productPageReducer";


const store = configureStore({
        reducer: {
            app: appReducer,
            toast: toastReducer,
            loginForm: loginFormReducer,
            searchForm: searchFormReducer,
            orderForm: orderFormReducer,
            favorites: favoriteReducer,
            basket: basketReducer,
            orders: orderReducer,
            orderData: orderDataReducer,
            productPage: productPageReducer,
        }
    }
)

export default store;