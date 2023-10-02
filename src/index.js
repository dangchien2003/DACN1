/** @format */

const express = require("express");
const route = require("./routes");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

route(app);

app.listen(3000, () => {
  console.log(`127.0.0.1:3000`);
});
