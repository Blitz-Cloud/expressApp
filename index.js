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

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/project", (req, res) => {
  res.render("projects/projects.ejs");
});

app.get("*", (req, res) => {
  res.render("error");
});
