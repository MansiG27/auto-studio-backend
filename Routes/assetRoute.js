const assetRouter = require("express").Router();

assetRouter
  .route("/")
  .get((req, res) => {
    const qryParams = req.query.qry;
    console.log(qryParams);
    res.status(200).send("Login Route is Working" + " " + qryParams["name"]);
  })
  .get((req, res) => {
    res.status(200).send("Login Route is Working");
  });

module.exports = assetRouter;
