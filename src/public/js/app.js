const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Browser ✔");
});

socket.addEventListener("message", (msg) => {
  console.log("Message from Server ===", msg.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from server");
});

setTimeout(() => {
  socket.send("hello Backend from browser 🧡");
}, 5000);
