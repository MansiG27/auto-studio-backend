import { actionLogin, actionRegister } from "../BusinessLayer/loginActions";

export const loginAction = (params) => {
  return actionLogin(params);
};
export const registerAction = (payload, params) => {
  return actionRegister(payload, params);
};
