const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const socketio = require('socket.io')
const http = require('http')
const server = http.createServer(app)

const publicDirPath = path.join(__dirname, './public')
app.use(express.static(publicDirPath))

const io = socketio(server)

const user = 'User'
// let count = 0
io.on('connection', (socket) => {

    socket.emit('message', `Welcome ${user}!`)
    socket.on("chat", (chat) => {
        // console.log(chat);
        io.emit('chat', chat)
    })
    // console.log('New client');
    // socket.emit('countUpdated', count)

    // socket.on("increment", () => {
    //     count++
    //     // socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)
    // })
})



server.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
})