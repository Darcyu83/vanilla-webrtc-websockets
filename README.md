# Zoom Clone using WebRTC and Websockets

//Configuring view engine which should be pug
app.set("view engine", "pug");

//Telling express where are going to be our template
app.set("views", \*\*dirname + "/views");

//Creating URL public and share some files with the users
app.use("/public", express.static(\*\*dirname + "/public"));

//Creating only route handler which is rendering home.pug
app.get("/", (req, res) => {
res.render("home");
});
