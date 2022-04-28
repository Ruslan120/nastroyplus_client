import {ADD_TOAST, DELETE_TOAST, SET_IS_OPEN} from "./types";
import {v4 as uuidv4} from 'uuid';


export const addToastTime = (type, message) => {
    return dispatch => {
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
            message
        }
    }
}

export const deleteToast = (id) => {
    return {
        type: DELETE_TOAST,
        payload: {
            id
        }
    }
}

export const setLoginForm = (isOpen) => {
    return {
        type: SET_IS_OPEN,
        payload: {
            isOpen
        }
    }
}