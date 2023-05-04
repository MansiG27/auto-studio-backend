const routers = require("express").Router();

const assetRoute = require("./assetRoute");
const userRoute = require("./userRoute");

routers.use("/user-auth", userRoute);
routers.use("/asset", assetRoute);

module.exports = routers;
