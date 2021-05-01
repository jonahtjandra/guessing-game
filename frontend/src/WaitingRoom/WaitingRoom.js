import React , {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import waitLogo from './waitLogo.png';
import classes from './WaitingRoom.module.css';

export default function WaitingRoom() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
       <img className = {classes.waitLogo} src = {waitLogo}></img>
    </div>
  );
}