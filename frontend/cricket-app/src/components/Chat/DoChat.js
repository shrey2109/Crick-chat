import React, { useEffect, useState } from "react";
import "./style.css";
import { io } from "socket.io-client";
import { chatFunction } from "./code";

let socket;
const DoChat = () => {
  useEffect(() => {
    console.log("userEffect caled");
    socket = io.connect("http://localhost:5000");
    chatFunction(socket);
  }, []);
  let num = 0;
  const [btn, setbtn] = useState(num);
  const clickFunc = () => {
    num = num + 1;
    setbtn(num);
  };

  console.log("btn value :" + btn);
  return (
    <>
      <div className="app">
        <div className="screen chat-screen active">
          <div className="header">
            <div className="logo">Chatroom</div>
            <button id="exitchat">Clear</button>
          </div>
          <div className="messages"></div>
          <div className="typebox">
            <input type="text" id="message-input" />
            <button id="sendmsg" onClick={clickFunc}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoChat;
