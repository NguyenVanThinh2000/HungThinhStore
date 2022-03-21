import { SET_LOGIN, SET_LOGOUT, SET_REGISTRY } from "./constants";

const initState = {
  isAuth: "0",
  userAuth: {
    name: "",
    email: "",
    image: "",
    address: "",
    phoneNumber: "",
  },
  cart: [],
  order: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isAuth: "1",
        userAuth: {
          name: action.payload.name,
          email: action.payload.email,
          image: "",
          address: action.payload.address,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    case SET_LOGOUT:
      return initState;
    case SET_REGISTRY:
      return {
        ...state,
        isAuth: "1",
        userAuth: {
          name: action.payload.name,
          email: action.payload.email,
          image: "",
          address: action.payload.address,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    default:
      throw new Error("Invalid action");
  }
}
export { initState };
export default reducer;
