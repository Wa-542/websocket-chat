window.addEventListener("DOMContentLoaded", () => {
    const socket = new WebSocket("ws://192.168.1.100:9999/");
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    input.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            socket.send(input.value);
            input.value = "";
        }
    });

    socket.onmessage = ({ data }) => {
        const li = document.createElement("li");
        li.textContent = data;
        messages.appendChild(li);
    };
});
