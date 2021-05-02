//Import Dependencies
import React from "react";
import {useEffect} from 'react';
import {Route,Switch,useLocation} from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Join from './components/JoinARoom/Join.js'
import WaitingRoom from './WaitingRoom/WaitingRoom.js';
import Game from './components/Game/Game.js'
import Split from './Split/Split.js';
import Red from "./components/Red.js";
import Green from "./components/Green.js";
import WordInput from './components/WordInput/WordInput.js'
const App= (props)=>{
  useEffect(() => {
    console.log("Started");
  }, []);
  const location = useLocation();

  const addTask = (task) => {
    console.log(task)
  }

    return(
     // transitions.map(({ item: location, props, key }) => (
          <Switch location={location} key={location.pathname}>
          <Route path="/wait/:room_id/:alias" exact component = {WaitingRoom}/>
          <Route path="/split/:room_id/:alias" exact component = {Split}/>
          <Route exact path="/landing" exact component ={Landing} />
          <Route exact path="/join/:alias" exact component ={Join} />
          <Route exact path="/game" exact component ={Game} />
          <Route exact path="/input" exact component ={WordInput} />
          <Route exact path="/game/:room_id/:alias" exact component ={Game} />
          <Route path = '/red' component = {Red}/>
          <Route path = '/green' component = {Green}/>
          
          </Switch>
      )
      //)
 //)
}

export default App;
