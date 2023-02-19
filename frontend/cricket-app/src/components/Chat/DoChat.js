import React from "react";
import "./style.css";

const DoChat = () =>{
    return(
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
            <div className="messages">
            </div>
            <div className="typebox">
                <input type="text" id="message-input"/>
                <button id="sendmsg">Send</button>

            </div>
        </div>
    </div>

    <script type="text/javascript" src="socket.io/socket.io.js"></script>
    <script type="text/javascript" src="code.js"></script>
        </>
    );
}
export default DoChat;