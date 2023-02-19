export const chatFunction=function(io){

    const app = document.querySelector(".app");
    const socket = io.connect('http://localhost:5000');
    const sendmsg = app.querySelector(".chat-screen #sendmsg");
    const exitchat = app.querySelector(".chat-screen #exitchat")

    let uname;
    let num=0;
    sendmsg.addEventListener("click",function(){
        
        console.log(num++);
        let message = app.querySelector(".chat-screen #message-input").value;
        if(message.length == 0){
            return;
        }
        renderMessage("my",{
            username:uname,
            text:message
        });
        socket.emit("chat",{
            username:uname,
            text:message
        });
        app.querySelector(".chat-screen #message-input").value=""
    })

    exitchat.addEventListener("click",function(){
        socket.emit("exituser",uname);
        window.location.href = window.location.href;
    })

    socket.on("udpate",function(update){
        renderMessage("update",update);
    })

    socket.on("chat",function(message){
        renderMessage("other",message);
    })


    function renderMessage(type,message){
        let messageContainer = app.querySelector(".chat-screen .messages");
        if(type == "my"){
            let el = document.createElement("div");
            el.setAttribute("class", "message my-message")
            el.innerHTML = `
                <div>
                    <div class="name">You</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);
        }else if(type == "other"){
            let el = document.createElement("div");
            el.setAttribute("class", "message other-messages")
            el.innerHTML = `
                <div>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
            messageContainer.appendChild(el);
        }else if(type == "update"){
            let el = document.createElement("div");
            el.setAttribute("class", "update")
            el.innerText = message;
            messageContainer.appendChild(el);
        }
        //scroll chat to end
        messageContainer.scrollTop = messageContainer.scrollHeight-messageContainer.clientHeight;
    }

    sendmsg.removeEventListener('click',()=>{
        console.log('Event Listener removed');
    });

};