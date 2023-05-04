const express = require("express");
const { PORT } = require("./config/ServerConfig");
require("dotenv").config();
const routers = require("./Routes");
const app = express();

app.use(express.json());
app.use("/api", routers);

// app.get("/", async (req, res) => {
//   res.send("Server is Up & Running");
// });

// getConnection();

app.listen(PORT, () => {
  console.log(`Server is Connected to Port ${PORT}`);
});
