//Import Dependencies
import React from "react";
import {useEffect} from 'react';
import {Route,Switch,useLocation} from 'react-router-dom';
import WaitingRoom from './WaitingRoom/WaitingRoom.js';
import Landing from './components/Landing.js';
const App= (props)=>{
  useEffect(() => {
    console.log("Started");
  }, []);
  const location = useLocation();

    return(
     // transitions.map(({ item: location, props, key }) => (
          <Switch location={location} key={location.pathname}>
          <Route path="/wait/:room_id/:alias" exact component = {WaitingRoom}/>
          <Route exact path="/landing" exact component ={Landing} />
          </Switch>
      )
      //)
 //)
}

export default App;
