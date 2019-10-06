const server = require('http').createServer();

const io = require('socket.io')(server, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});
io.on('connection', function(socket){
    console.log('connected');
    
  });
server.listen(3000, ()=>console.log('listening...'));