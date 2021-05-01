import React , {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import classes from './Split.module.css';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import io from 'socket.io-client';
import { SET_GROUPS } from '../store/actions/types';
let socket;

function Split() {
    const history = useHistory();
    const dispatch = useDispatch();
    const group = useSelector(state => state.reducer.groups);
  const {room_id, alias} = useParams();
  const [group1,setg1] =useState([]);
  const [group2,setg2] =useState([]);
  const ENDPOINT = "http://localhost:8000/";
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

const emitSplitPressed = () => {
  socket.emit("splitGroupsPressed", (error) => {
      if (error) {
          alert(error);
      }
  });
};

useEffect(() => {
  socket.on("showSplittedGroups", (groups) => {
    dispatch({type: SET_GROUPS, payload: groups})
    setg1(groups.group1);
    setg2(groups.group2);
    console.log(group1);
    console.log(group2);
  });
}, []);
    return (
        <div class = {classes.container}>
            <div class = {classes.left}>
                <div class = {classes.teamdivcontainer}>
                    <div class = {classes.teamdiv}>
                        <div class = {classes.title}>Team 1</div>
                        <div class = {classes.memberContainer}>
                        {group1.map(member=>{
                            return(<div class = {classes.textBox}>{member.name}</div>)
                        })}
                        </div>
                    </div>
                    <div class = {classes.teamdiv}>
                        <div class = {classes.title}>Team 2</div>
                        <div class = {classes.memberContainer}>
                        {group2.map(member=>{
                            return(<div class = {classes.textBox}>{member.name}</div>)
                        })}
                        </div>
                    </div>
                </div>
                <div class = {classes.btn} onClick = {()=>{emitSplitPressed()}}>Button</div>
            </div>
            <div class = {classes.line}></div>
            <div class = {classes.right}>
                <div class = {classes.maintitle}>TO PLAY:</div>
                <div class = {classes.textBox}>Team A will be given a randomly generated word. Your job is to answer Team B’s questions about the word with YES/NO answers.</div>
                <div class = {classes.textBox}>Team B's job is to guess the word. You will be given information regarding the length of the word  and be given 5 chances to ask for hints from Team A. Each question must be inputted within 60s!</div>
                <div class = {classes.title}>REMINDERS:</div>
                <div class = {classes.textBox}>Make sure you articulate the questions well since you can only receive YES/NO answers</div>
                <div class = {classes.textBox}>Team B may guess the word anytime before the count runs out</div>
            </div>
        </div>
    )
}

export default Split
