// export const apiResponse = (_response, resType) => {
//   const responseData = {
//     resData: {},
//     resError: {},
//   };
//   switch (resType) {
//     case "res":
//       responseData.resData = _response;
//       break;
//     case "error":
//       responseData.resError = _response;
//       break;
//   }
//   return responseData;
// };

class ApiResponseCls {
  constructor() {
    this.resData = null;
    this.error = null;
  }
}

export { ApiResponseCls };
