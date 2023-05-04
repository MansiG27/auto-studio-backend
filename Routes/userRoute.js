const {
  userAuthActions,
  loginAction,
  registerAction,
} = require("../Controllers/user-authActions");
const { ApiResponseCls } = require("../utilities/apiResponseCls");

const userRouter = require("express").Router();

let resStatus = 200;

userRouter
  .route("/")
  .get((req, res) => {
    let apiResCls = new ApiResponseCls();

    const qryParams = req.query;

    try {
      apiResCls.resData = loginAction(qryParams);
    } catch (err) {
      apiResCls.error = err;
      resStatus = 500;
    }
    res.status(resStatus).send(apiResCls);
  })
  .post((req, res) => {
    let apiResCls = new ApiResponseCls();

    const bodyData = req.body;
    const qryParams = req.query;

    try {
      apiResCls.resData = registerAction(bodyData, qryParams);
    } catch (error) {
      apiResCls.error = error;
    }
    res.status(200).send("Register Route is Working");
  });

module.exports = userRouter;

//FOR QRY PARAMS
// In HTTP, the query string is usually a string of key-value pairs appended to the end of a URL. Query parameters can only be strings, and so you cannot send a JavaScript object directly as a query parameter. However, you can convert the object into a query string format using methods like JSON.stringify() and then append it to the URL.
// For example, if you have an object person like this:
// Copy code
// const person = { name: 'John', age: 30 };
// You can convert it to a query string like this:
// const qs = new URLSearchParams(person).toString();
// // qs is now "name=John&age=30"
// Then, you can append the query string to a URL and make an HTTP request:
// const url = `http://example.com/api?${qs}`;
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));
// On the server side, you can access the query parameters using req.query in Express:
// app.get('/api', (req, res) => {
//   const name = req.query.name;
//   const age = req.query.age;
//   // ...
// });
