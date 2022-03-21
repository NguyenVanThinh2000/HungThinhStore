import { SET_LOGIN, SET_LOGOUT, SET_REGISTRY } from "./constants";

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});
export const setLogout = () => ({
  type: SET_LOGOUT,
});
export const setRegistry = (payload) => ({
  type: SET_REGISTRY,
  payload,
});
