import express from "express";
import http from "http";
import WebSocket from "ws";
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

app.get("/*", (req, res) => res.redirect("/"));

// requestListener => http + wss on port 3000
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sockets = [];
wss.on("connection", (socket) => {
  sockets.push(socket);

  socket.on("close", () => console.log("Disconnected from browser"));
  socket.on("message", (message) =>
    sockets.map((socket) => socket.send(message))
  );
});

const handleListen = () => console.log("Listening on ws://localhost:3000/");
// app.listen(3000, handleListen);
server.listen(3000, handleListen);
