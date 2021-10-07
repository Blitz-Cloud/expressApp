const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log("The server is listening on port 8080");
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static("Pages"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("*", (req, res) => {
  app.render("404");
});
