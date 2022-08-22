import ACTIONS from "../actions";

const initialState = {
  user: null,
  isLogged: Boolean(localStorage.getItem("isLogged")),
  role: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      localStorage.setItem("isLogged", true);
      return {
        ...state,
        isLogged: true,
      };
    case ACTIONS.GET_USER:
      return {
        ...state,
        user: action.payload,
        role: action.payload.role,
      };
    case ACTIONS.LOGOUT:
      localStorage.removeItem("isLogged", false);
      return {
        ...state,
        user: null,
        isLogged: false,
        role: null,
      };
    default:
      return state;
  }
};

export default authReducer;
