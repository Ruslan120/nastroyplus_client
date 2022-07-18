import {v4 as uuidv4} from "uuid";
import AuthService from "../services/AuthService";
import FavoriteService from "../services/FavoriteService";
import BasketService from "../services/BasketService";
import OrderService from "../services/OrderService";
import {deleteUserData, setIsAuth, setIsFetching, setUserData} from "./reducers/appReducer";
import {addToast, deleteToast} from "./reducers/toastReducer";
import {deleteFavorite, setFavorites} from "./reducers/favoriteReducer";
import ProductService from "../services/ProductService";
import {setIsBasket, setIsFavorite, setProductData} from "./reducers/productPageReducer";
import {deleteBaskets, setBasketCount, setBaskets} from "./reducers/basketReducer";
import {setOrders} from "./reducers/orderReducer";
import {setOrderData} from "./reducers/orderDataReducer";

export const addToastTime = (type, message) => {
    return (dispatch) => {
        const id = uuidv4();
        dispatch(addToast({type, id, message}));
        setTimeout(() => {
            dispatch(deleteToast({id}));
        }, 3000);
    };
};


export const loginAction = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setIsAuth(true));
            dispatch(setUserData(response.data.user));
            dispatch(addToastTime("success", "Успешная авторизация"));
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};
export const registrationAction = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setIsAuth(true));
            dispatch(setUserData(response.data.user));
            dispatch(addToastTime("success", "Успешная регистрация"));
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};
export const logoutAction = () => {
    return async (dispatch) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token")
            dispatch(setIsAuth(false));
            dispatch(deleteUserData());
            dispatch(addToastTime("success", "Вы вышли с аккаунта"));
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};


export const getFavorites = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await FavoriteService.myFavorites();
            const payload = {favorites: response.data}
            dispatch(setFavorites(payload))
            dispatch(setIsFetching(false));

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
            dispatch(setIsFetching(false));
        }
    };
};
export const deleteFavoriteById = (favoriteId) => {
    return async (dispatch) => {
        try {
            const response = await FavoriteService.deleteFromFavorite(favoriteId)
            dispatch(deleteFavorite(favoriteId))

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};


export const getBaskets = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await BasketService.myBaskets();
            dispatch(setBaskets(response.data))
            dispatch(setIsFetching(false));

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
            dispatch(setIsFetching(false));
        }
    };
};
export const deleteBasketData = (basketId) => {
    return async (dispatch) => {
        try {
            const response = await BasketService.deleteFromBasket(basketId)
            dispatch(deleteBaskets(basketId))

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};

export const updateBasketCount = (basketId, count) => {
    return async (dispatch) => {
        try {
            const response = await BasketService.updateBasketCount(basketId, count)
            const payload = {basketId, count}
            dispatch(setBasketCount(payload))
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};


export const getOrders = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await OrderService.getOrders();
            dispatch(setOrders(response.data))
            dispatch(setIsFetching(false));

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
            dispatch(setIsFetching(false));
        }
    };
};


export const getOrderData = (orderId) => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await OrderService.getOrderData(orderId);
            dispatch(setOrderData(response.data))
            dispatch(setIsFetching(false));
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
            dispatch(setIsFetching(false));
        }
    };
};

export const getProductData = (productId) => {
    return async (dispatch) => {
        try {
            const response = await ProductService.getProductById(productId)
            dispatch(setProductData(response.data))

            const isBasket = await BasketService.isBasket(productId)
            dispatch(setIsBasket(isBasket.data));

            const isFavorite = await FavoriteService.isFavorite(productId)
            dispatch(setIsFavorite(isFavorite.data));
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};

export const addToFavorite = (productId) => {
    return async (dispatch) => {
        try {
            const response = await FavoriteService.addToFavorite(productId)
            dispatch(addToastTime("success", "Товар успешно добавлен в избранное!"));
            dispatch(setIsFavorite(true))
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};
export const addToBasket = (productId) => {
    return async (dispatch) => {
        try {
            const response = await BasketService.addToBasket(productId)
            dispatch(addToastTime("success", "Товар успешно добавлен в корзину!"));
            dispatch(setIsBasket(true))
        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};
