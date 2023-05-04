export const actionLogin = (_params) => {
  return "Hello From Login Route Sayyam" + " From " + ` ${_params || ""}`;
};
export const actionRegister = (_payload, _params) => {
  return "Hello From Register Route Sayyam" + " From " + ` ${_params || ""}`;
};
