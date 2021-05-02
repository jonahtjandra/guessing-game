import React , {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import waitLogo from './waitLogo.png';
import loader from './loader.png';
import classes from './WaitingRoom.module.css';
import {useParams} from 'react-router-dom';
import io from "socket.io-client";
let socket;

export default function WaitingRoom() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {room_id, alias} = useParams();
  const [users,setUsers] =useState([]);
  const ENDPOINT = "http://18.139.223.6:8000/";
  useEffect(() => {
    const name = alias;
    console.log(name);
    const room = room_id;
    console.log(room);
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, (error) => {
        if (error) {
            alert(error);
        }
    });
}, [ENDPOINT]);

const emitStart = () => {
  socket.emit("startGamePressed", (error) => {
      if (error) {
          alert(error);
      }
  });
};

useEffect(() => {
  socket.on("newUserJoin", (users) => {
    setUsers(users);
  });

  socket.on("gameHasStarted", () => {
    socket.disconnect();
    history.push(`/split/${room_id}/${alias}`)
  });
}, []);
  return (
    <div>
    <div class = {classes.container}>
    <div className = {classes.waitLogo}><img className = {classes.logo} src = {waitLogo}></img></div>
      <div class = {classes.usersContainer}>
        {`Current Players: `} {users.map(user=><div>{` ${user.name},`}</div>)}
      </div>
      <div className = {classes.roomno}>{`Room No: ${room_id}`}</div>
      <div class = {classes.loader}><img class={classes.loading} src = {loader}></img></div>
      <div class = {classes.textBox}>
        <div>Once all your team members are here, click on the button below to get started. </div>
        <div>You will be divided into two separate groups in the game.</div>
      </div>
      <div class = {classes.btn} onClick = {()=>{emitStart()}}>Next </div>
    </div>
    </div>
  );
}