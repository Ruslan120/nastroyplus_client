import {
    ADD_TOAST,
    DELETE_TOAST,
    DELETE_USER_DATA,
    SET_IS_AUTH,
    SET_IS_OPEN,
    SET_USER_DATA,
} from "./types";
import {v4 as uuidv4} from "uuid";
import AuthService from "../services/AuthService";
import {type} from "@testing-library/user-event/dist/type";
import ProductService from "../services/ProductService";

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

export const loginAction = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setIsAuth(true));
            dispatch(setUserData(response.data.user));
            dispatch(addToastTime("success", "Успешная авторизация"));
        } catch (e) {
            console.log(e.response?.data?.message);
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};
export const registrationAction = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setIsAuth(true));
            dispatch(setUserData(response.data.user));
            dispatch(addToastTime("success", "Успешная регистрация"));
        } catch (e) {
            console.log(e.response?.data?.message);
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};
export const logoutAction = () => {
    return async (dispatch) => {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem("token")
            dispatch(setIsAuth(false));
            dispatch(deleteUserData());
            dispatch(addToastTime("success", "Вы вышли с аккаунта"));
        } catch (e) {
            console.log(e.response?.data?.message);
            dispatch(addToastTime("error", e.response.data.message));
        }
    };
};
