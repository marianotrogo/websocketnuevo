const socket = io();
let userName;

Swal.fire({
    title: "Identificate",
    input: "text",
    text: "Ingresa el Usuario",
    inputValidator: (value) =>{
        return !value && "Intruce nombre Usuario";
    },
    allowOutsideClick: false,
}).then((result)=>{
    console.log(result);
    userName = result.value;
})

const chatBox = document.getElementById("input-chat");
chatBox.addEventListener("keyup", (ev)=>{
    if (ev.key === "Enter"){
        const inputMessage = chatBox.value;
        if (inputMessage.trim().lenth > 0){
            socket.emit("chat-message", {userName, message: inputMessage})
        }
    }
})


const messagesPanel = document.getElementById("messages");
socket.on("messages", (data)=>{
    let message = "";
    data.forEach((m)=>{
        messages += `<b>${m.userName}: </b>${m.message}`
    });
    messagesPanel.innerHTML=messages;
})