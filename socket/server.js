const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(express.static('public'));

io.on('connection', socket => {
    console.log('new user');

    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', reason => {
        io.emit('user exit', `User disconnected: ${reason}`);
    });
});


server.listen(5464, () => {
    console.log('server works on port ', '5464');
});