const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const socketio = require('socket.io')
const http = require('http')
const server = http.createServer(app)
require('./')

const publicDirPath = path.join(__dirname, './public')

app.use(express.static(publicDirPath))

const io = socketio(server)

io.on('connection', () => {
    console.log(('Client has connected!'));
})
server.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
})