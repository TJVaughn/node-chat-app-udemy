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

// document.getElementById('plus-btn').addEventListener('click', () => {
//     console.log("clicked");
//     socket.emit('increment')
// })
