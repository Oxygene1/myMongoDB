/**
 * @author ibrahim
 */

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./server/routes/productRoute");
const errorMiddleware = require("./server/middleware/middleware");
app.use(express.json());
// log requests
app.use(errorMiddleware);
app.use(morgan("tiny"));
// parse request to body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/product", productRoute);
dotenv.config({ path: "config.env" });
// set view engine
app.set("view engine", "ejs");
const PORT = process.env.PORT || 8080;
// app.set("views", path.resolve(__dirname, "views/path"))

// connect to mongoDb
const db = process.env.CONNECTION_TO_DB;
mongoose
  .connect(db)
  .then(() => {
    console.log("database working and code connected to mongo db");
  })
  .catch((err) => {
    console.log(err);
  });
// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// link to env

app.get("/", (req, res) => {
  res.render("index.ejs");
});
// post req to /product

app.listen(PORT, () => {
  console.log(`your app is running on local host localhost${PORT}`);
});
