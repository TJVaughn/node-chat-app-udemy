const socket = io()
// console.log("Hello");

socket.on('countUpdated', (count) => {
    console.log("Updated Count " + count);
    document.getElementById('count-value').textContent = count
})

socket.on('message', (message) => {
    // console.log("Updated Count " + count);
    document.getElementById('count-value').textContent = message
})

let chatForm = document.querySelector('form')
let chat = document.getElementById('message-input')

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(chat.value)
    socket.emit('chat', chat.value)
})
socket.on('chat', (chat) => {
    // console.log("Updated Count " + count);
    document.getElementById('message-reply').textContent = chat
})


// document.getElementById('plus-btn').addEventListener('click', () => {
//     console.log("clicked");
//     socket.emit('increment')
// })
