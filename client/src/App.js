import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const sendMessage = () => {
    socket.emit("send_message", { message: "ㅎㅇ요" });
  };

  return (
    <div className="App">
      <input placeholder="Message..." />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;
