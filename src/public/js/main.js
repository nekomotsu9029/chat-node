const socket = io();

// Obtain DOMs Elements from Interface
const chat = $('#chat');
const messageForm = $('#message-form');
const messageBox = $('#message');

// Events
messageForm.submit( e => {
    e.preventDefault();
    socket.emit('send message', messageBox.val());
    messageBox.val('');
});

socket.on('new message', function(data, testing){
    chat.append(data + testing + '<br>');
});