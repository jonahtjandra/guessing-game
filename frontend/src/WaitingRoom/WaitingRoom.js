import React , {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import waitLogo from './waitLogo.png';
import classes from './WaitingRoom.module.css';
import { SET_GROUP_MEMBER } from '../store/actions/types';

export default function WaitingRoom() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user1 = useSelector(state => state.reducer.groups)

  const setgroupmember = (groupmember)=>{
    dispatch({type:SET_GROUP_MEMBER,payload:"stri"});
  }
  return (
    <div>
       <img className = {classes.waitLogo} src = {waitLogo}></img>
    </div>
  );
}