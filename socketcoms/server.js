import http from 'http';
import express from 'express';
import * as socketio from 'socket.io';
import cors from 'cors';

import { addUser, removeUser, getUser, getUsersInRoom } from './controllers.js'

import router from './router.js'

const app = express();

app.use(cors());


const server = http.createServer(app);

const io= new socketio.Server();

io.attach(server,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

app.use(router);

String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

// Change this part to make the functions
io.on('connect', (socket) => {
    //Join Event Handler
  socket.on('join', ({name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    
    socket.join(user.room);//Go in room
    const usersinroom = getUsersInRoom(user.room);
    console.log(usersinroom);

    io.to(user.room).emit('newUserJoin',usersinroom);//Object with {id, name, room and group} frontend needs to update and add that new user

    callback();
  });

  socket.on('startGamePressed', (callback) => {
    const user = getUser(socket.id);
    console.log(user);
    if(user){
      io.to(user.room).emit('gameHasStarted');//To redirect to next page where they have to press a split groups button
    }
    callback();
  });

  socket.on('splitGroupsPressed', (callback) => {
    const user = getUser(socket.id);
    if(user){
      //Implement group splitting here
      var finishedgroups = {
        group1:[], group2:[]
      }
      const allUsers = getUsersInRoom(user.room);
      accum = 0;
      for(i = 1;i<=allUsers.length;i++){
        accum*=10;
        accum+=i;
      }
      randomizer = String(accum).shuffle();
      for(i = 0;i<randomizer.length;i++){
        if(i < parseInt(randomizer.length)/2){
          finishedgroups.group1[i] = allUsers[parseInt(randomizer[i])];
        }else{
          finishedgroups.group2[(i-(parseInt(randomizer.length)/2))] = allUsers[parseInt(randomizer[i])];
        }
      }
       //Implement the word selection here

      io.to(user.room).emit('showSplittedGroups',finishedgroups);
    }
    callback();
  });

  //GameWide Broadcast
  socket.on('roundTimerEnds', (callback) => {
    const user = getUser(socket.id);
    if(user){
      //Setup the values for the redux state, guess to null, and answer to null
      io.to(user.room).emit('passToNextRound');
    }
    callback();
  });

  

  //Group Specific Broadcast Functions
  socket.on('userTypeGuessBox', (group,guess,callback) => {
    const user = getUser(socket.id);
    if(user){
      io.to(user.room).emit('changeGroupGuessBox',group,guess);
    }
    callback();
  });

  socket.on('userTypeQuestionBox', (group,question,callback) => {
    const user = getUser(socket.id);
    if(user){
      io.to(user.room).emit('changeGroupQuestionBox',group,question);
    }
    callback();
  });
  socket.on('userTypeWordBox', (group, wordBoxIndex, letter, callback) => {
    const user = getUser(socket.id);
    if(user){
      io.to(user.room).emit('changeGroupWordBox',group,wordBoxIndex,letter);
    }
    callback();
  });

  
  socket.on('groupSubmitGuess', (group,guess,question, callback) => {
    const user = getUser(socket.id);
    if(user){
      io.to(user.room).emit('evaluateGroupGuess',group,guess,question);//This will push if it is a correct guess or not
    }
    callback();
  });

  socket.on('correctAnswerGuessed', (group, callback) => {
    const user = getUser(socket.id);
    if(user){
      //Broadcast the winning group to everybody and ask to move to the loser dare page
      io.to(user.room).emit('passToDare',group);
    }
    callback();
  });

  socket.on('wrongAnswerGuessed', (group, callback) => {
    const user = getUser(socket.id);
    if(user){
      //Broadcast the winning group to everybody and ask to move to the loser dare page
      io.to(user.room).emit('passToOtherGroup',group);
    }
    callback();
  });


//Chatbox Component Actions
socket.on('sentMessage', (group,message, callback) => {
  const user = getUser(socket.id);
  if(user){
    //Broadcast the winning group to everybody and ask to move to the loser dare page
    io.to(user.room).emit('broadcastMessagetoGroup',group);
  }
  callback();
});

});

server.listen(process.env.PORT || 8000, () => console.log(`Server has started.`));