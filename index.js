const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
var minefield = require('./game/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('pages'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/pages/index.html'));
})

// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//       });
//   });

const game = io.of('/1');
game.on('connection', function(socket){
  console.log('New user connected');
  game.clients((error,clients) => {
    console.log(clients);
  });
  socket.on('reveal', function(l){
    minefield.setSize(10,10);
    minefield.assetMinefield();
    minefield.plantMines(12);
    console.log(minefield.template);
  });
});

game.emit('reveal', 'e!');


http.listen(3000, function(){
    console.log('listening on *:3000');
  });