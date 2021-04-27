const http = require('http');
const socketio = require('socket.io');

const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');

//Initialization
const app = express();

//Settings
app.set('PORT', process.env.PORT || 3000);

//Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'views') );
app.engine('html', require('ejs').renderFile);

//Static files
app.use(express.static( path.join( __dirname, 'public') ));

//Routes
app.use('/', routes);

//web socket
const server = http.createServer(app);
const io = socketio.listen(server);
require('./socket/socket')(io);

server.listen(app.get('PORT'), ()=>{
    console.log('Server On Port ', app.get('PORT'));
});