import { DELETE_USER_DATA, SET_IS_AUTH, SET_USER_DATA,} from "../types";

const initialState = {
  user: {},
  isAuth: false,
};
function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload.userData,
      };
      case DELETE_USER_DATA:
      return {
        ...state,
        user: null,
      };
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
}

export default appReducer;
