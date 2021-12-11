// import modules
const express = require("express");
const Sequelize = require("./models/index").Sequelize;
const cors = require("cors");
const multer = require("multer");

// all routes
const authRoutes = require("./routes/authRoutes");

// server config
const serverConfig = require("./config/databaseCredentials.json");

// initialize express
const server = express();
const port = process.env.PORT || serverConfig.PORT;

// middleWares
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(cors());

// routing starts
server.use("/api/auth", authRoutes.router);
// routing ends

Sequelize.sync({
  force: false,
})
  .then(() => {
    server.listen(port, () => {
      console.log("Server started on :" + port);
    });
  })
  .catch((error) => {
    if (error.message.includes("Unknown database")) {
      console.log("Create Database Manually");
    }
  });
