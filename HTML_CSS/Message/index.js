const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
    io.emit('user-connected','A user has connected');

    socket.on('chat-message', (msg) =>{
        io.emit('chat-message', msg)
    })
})

server.listen(3000, ()=>{
    console.log("Server listening on *:3000")
})