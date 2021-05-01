import React , {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import io from "socket.io-client";
import Key from '../Keyboard/Key.js'
import './Game.css'
import AnswerBox from '../AnswerBox/AnswerBox.js'
let socket;

const Game = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const group = useSelector(state => state.reducer.groups);
  const {room_id, alias} = useParams();
  const [word, setWord] = useState(String("Hey").split(''));
  const [users,setUsers] =useState([]);
  const [userGroup, setUserGroup] = useState();
  const [currentIdx, setIdx] = useState(0);
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

useEffect(() => {
    socket.on("newUserJoin", (users) => {
      setUsers(users);
      users.forEach(user=>{
          if(user.name == alias){
              setUserGroup(user.group);
          }
      })
    })
    socket.on("changeGroupWordBox", (group,wordBoxIndex,letter) => {
        if(userGroup == group){
            let ids = [...word];     // create the copy of state array
            ids[wordBoxIndex] = letter;               //new value
            setWord(ids);   
        }
      })
},[])

const emitPressLetter = (group,index, letter) => {
    console.log(index);
  socket.emit("userTypeWordBox", {group,index,letter},(error) => {
      if (error) {
          alert(error);
      }

  });
};
    return (
        <div class = "thecontainer">
        <div className="toolbar">
        <p className="text">Time Left: {}</p>
        <p className="text">Question Count: {}</p>
        <button className="question-btn">Ask A Question</button>
        <button className="quit-btn">Quit</button>
        </div>
        <div class="grid-container-answer">
        {word.map((letter,index)=>{
            return( <div className='box'>
            <label className='letter' onClick={()=>{setIdx(Number(index));console.log(currentIdx);}}>{letter}</label>
                </div>)
        })}
        </div>
        <div class="grid-container">
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'a')}}><Key chars='a'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'b')}}><Key chars='b'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'c')}}><Key chars='c'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'d')}}><Key chars='d'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'e')}}><Key chars='e'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'f')}}><Key chars='f'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'g')}}><Key chars='g'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'h')}}><Key chars='h'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'i')}}><Key chars='i'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'j')}}><Key chars='j'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'k')}}><Key chars='k'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'l')}}><Key chars='l'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'m')}}><Key chars='m'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'n')}}><Key chars='n'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'o')}}><Key chars='o'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'p')}}><Key chars='p'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'q')}}><Key chars='q'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'r')}}><Key chars='r'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'s')}}><Key chars='s'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'t')}}><Key chars='t'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'u')}}><Key chars='u'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'v')}}><Key chars='v'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'w')}}><Key chars='w'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'x')}}><Key chars='x'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'y')}}><Key chars='y'/></div>
        <div class="grid-item"onClick= {()=>{emitPressLetter(userGroup,currentIdx,'z')}}><Key chars='z'/></div>
        </div>
        </div>
    )
}

export default Game
