const { getRecords, createRecord } = require("../Controllers/recordsActions");
const { ApiResponseCls } = require("../utilities/apiResponseCls");

const assetRouter = require("express").Router();

let resStatus = 200;

assetRouter
  .route("/")
  .get((req, res) => {
    const qryParams = req.query.qry;

    let apiResCls = new ApiResponseCls();
    apiResCls.resData = getRecords(qryParams);
    try {
      apiResCls.resData = getRecords(qryParams);
    } catch (error) {
      apiResCls.error = error;
    }
    res.status(resStatus).send(apiResCls);
  })
  .post((req, res) => {
    const qryParams = req.query.qry;
    const bodyData = req.body;

    let apiResCls = new ApiResponseCls();
    apiResCls.resData = createRecord(bodyData, qryParams);
    try {
      apiResCls.resData = getRecords(qryParams);
    } catch (error) {
      apiResCls.error = error;
    }
    res.status(resStatus).send(apiResCls);
  });

module.exports = assetRouter;
