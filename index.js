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
  try{
    res.render("projects/projects.ejs");
  }catch{
     res.render("error");
  }
});
// Here are the links for my projects

app.get("/price", (req, res) => {
  res.render("price/price.ejs");
});
app.get("/troll", (req, res) => {
  res.render("price/index.ejs");
});
app.get("/museum_of_candy", (req, res) => {
  res.render("");
});
// 


app.get("*", (req, res) => {
  res.render("error");
});
