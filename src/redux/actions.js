import {
    ADD_TOAST, DELETE_BASKET, DELETE_FAVORITE,
    DELETE_TOAST,
    DELETE_USER_DATA, SET_BASKET_COUNT, SET_BASKETS, SET_FAVORITES,
    SET_IS_AUTH,
    SET_IS_OPEN,
    SET_IS_SEARCH,
    SET_USER_DATA,
    SET_IS_LOADED, SET_ORDER_OPEN, SET_ORDERS, SET_IS_FETCHING,
} from "./types";
import {v4 as uuidv4} from "uuid";
import AuthService from "../services/AuthService";
import FavoriteService from "../services/FavoriteService";
import BasketService from "../services/BasketService";
import OrderService from "../services/OrderService";

export const addToastTime = (type, message) => {
    return (dispatch) => {
        const id = uuidv4();
        dispatch(addToast(type, id, message));
        setTimeout(() => {
            dispatch(deleteToast(id));
        }, 3000);
    };
};

export const addToast = (type, id, message) => {
    return {
        type: ADD_TOAST,
        payload: {
            id,
            type,
            message,
        },
    };
};

export const deleteToast = (id) => {
    return {
        type: DELETE_TOAST,
        payload: {
            id,
        },
    };
};

export const setLoginForm = (isOpen) => {
    return {
        type: SET_IS_OPEN,
        payload: {
            isOpen,
        },
    };
};
export const setSearchForm = (isSearch) => {
    return {
        type: SET_IS_SEARCH,
        payload: {
            isSearch,
        },
    };
};



export const setUserData = (userData) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userData,
        },
    };
};
export const deleteUserData = () => {
    return {
        type: DELETE_USER_DATA,
    };
};
export const setIsAuth = (isAuth) => {
    return {
        type: SET_IS_AUTH,
        payload: {
            isAuth,
        },
    };
};
export const setIsLoaded = (isLoaded) => {
    return {
        type: SET_IS_LOADED,
        payload: {
            isLoaded: isLoaded,
        },
    };
};

export const setIsFetching= (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        payload: {
            isFetching: isFetching,
        },
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

export const setFavorites = (favorites) => {
    return {
        type: SET_FAVORITES,
        payload: {
            favorites: favorites,
        },
    };
};
export const deleteFavoriteData = (favoriteId) => {
    return {
        type: DELETE_FAVORITE,
        payload: {
            favoriteId: favoriteId,
        },
    };
};

export const getFavorites = () => {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await FavoriteService.myFavorites();
            dispatch(setFavorites(response.data))
            dispatch(setIsFetching(false));

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
            dispatch(setIsFetching(false));
        }
    };
};
export const deleteFavorite = (favoriteId) => {
    return async (dispatch) => {
        try {
            const response = await FavoriteService.deleteFromFavorite(favoriteId)
            dispatch(deleteFavoriteData(favoriteId))

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};


export const setBaskets = (baskets) => {
    return {
        type: SET_BASKETS,
        payload: {
            baskets: baskets,
        },
    };
};
export const deleteBasket = (basketId) => {
    return {
        type: DELETE_BASKET,
        payload: {
            basketId: basketId,
        },
    };
};

export const updateCountBasket = (basketId, count) => {
    return {
        type: SET_BASKET_COUNT,
        payload: {
            basketId: basketId,
            count: count,
        },
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
            dispatch(deleteBasket(basketId))

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};

export const updateBasketCount = (basketId, count) => {
    return async (dispatch) => {
        try {
            const response = await BasketService.updateBasketCount(basketId, count)
            dispatch(updateCountBasket(basketId, count))

        } catch (e) {
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};


export const setOrderForm = (isOpen) => {
    return {
        type: SET_ORDER_OPEN,
        payload: {
            isOpen,
        },
    };
};

export const setOrders = (orders) => {
    return {
        type: SET_ORDERS,
        payload: {
            orders: orders,
        },
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
