import { types } from "../types/types";

// El estado que quiero tener si el usuario esta autenticado
// const state = {
//   name: "yeison",
//   logged: true,
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
