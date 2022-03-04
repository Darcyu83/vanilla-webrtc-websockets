const msgList = document.querySelector("ul");
const msgForm = document.querySelector("form");

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Browser ✔");
});

socket.addEventListener("message", (msg) => {
  if (msg.data instanceof Blob) {
    const reader = new FileReader(msg.data);
    reader.onload = () => console.log("reader ===", reader.result);
    reader.readAsText(msg.data);
  } else {
    console.log("Message from Server ===", msg.data);
  }
});

socket.addEventListener("close", () => {
  console.log("Disconnected from server");
});

function handleSubmit(e) {
  e.preventDefault();
  const input = msgForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

msgForm.addEventListener("submit", handleSubmit);
