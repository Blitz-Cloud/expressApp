const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log("The server is listening on port 443");
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/projects", (req, res) => {
  res.render("pages/projects.ejs");
});

app.get("/projects/price", (req, res) => {
  res.render("pages/price");
});
app.get("/projects/candyM", (req, res) => {
  res.render("pages/candy");
});
app.get("/projects/troll", (req, res) => {
  res.render("pages/troll/button");
});
app.get("/projects/troll/nvc", (req, res) => {
  res.render("pages/troll/nvc");
});


