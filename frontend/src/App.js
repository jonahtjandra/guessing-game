//Import Dependencies
import React from "react";
import {useEffect} from 'react';
import {Route,Switch,useLocation} from 'react-router-dom';
import Homepage from './Homepage/Homepage.js';
import Landing from './components/Landing.js';
const App= (props)=>{
  useEffect(() => {
    console.log("Started");
  }, []);
  const location = useLocation();

    return(
     // transitions.map(({ item: location, props, key }) => (
          <Switch location={location} key={location.pathname}>
          <Route exact path="/home" exact component = {Homepage}/>
          <Route exact path="/landing" exact component ={Landing} />
          </Switch>
      )
      //)
 //)
}

export default App;
