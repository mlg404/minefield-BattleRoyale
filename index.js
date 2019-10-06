const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
  });
  
http.listen(3000, function(){
    console.log('listening on *:3000');
  });