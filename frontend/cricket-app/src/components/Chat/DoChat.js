import React, { useState } from 'react';
import './style.css';
import { io } from 'socket.io-client';
import { chatFunction } from './code';
const DoChat = () => {
let num = 0;
  const [btn, setbtn] = useState(num);
  const clickFunc = () => {
    
    num = num + 1;
    setbtn(num);
  };
  console.log('btn value :'+btn);
  return (
    <>
      <div className="app">
        {/* <div className="screen join-screen active">
            <div className="form">
                <h2>Join Chatroom</h2>
                <div className="form-input">
                    <label>Username</label>
                    <input type="text" id="username" placeholder="Username"></input>
                </div>
                <div className="form-input">
                    <button id="join-user">Join</button>
                </div>
            </div>
        </div> */}
        <div className="screen chat-screen active">
          <div className="header">
            <div className="logo">Chatroom</div>
            <button id="exitchat">Exit</button>
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
      {
        btn === 1 && chatFunction(io) ?btn++:num
      }
    </>
  );
};
export default DoChat;
