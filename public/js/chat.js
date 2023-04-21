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
    socket.emit("new-user", userName);
});

const chatInput = document.getElementById("input-chat");
chatInput.addEventListener("keyup", (ev)=>{
    if (ev.key === "Enter"){
        const message = chatInput.value;
        if (message.trim().length > 0){
            socket.emit("new-message", {userName, message: inputMessage})
            chatInput.value = "";
        }
    }
})


const panel = document.getElementById("panel");
socket.on("messages", (data)=>{
    let messages = "";
    data.forEach((m)=>{
        messages += `<b>${m.userName}: </b>${m.message}</br>`;
    });
    panel.innerHTML=messages;
})

socket.on("new-user", (userName)=>{
    Swal.fire({
        title:`${userName} se ha unido al chat`,
        toast: true,
        position: "top-end",
    });
});