import express from "express";

const app = express();

//Configuring view engine which should be pug
app.set("view engine", "pug");

//Telling express where are going to be our template
app.set("views", __dirname + "/views");

//Creating URL public and share some files with the users
app.use("/public", express.static(__dirname + "/public"));

//Creating only route handler which is rendering home.pug
app.get("/", (req, res) => {
  res.render("home");
});

const handleListen = () => console.log("Listening on http://localhost:3000/");
app.listen(3000);
