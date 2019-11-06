import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/NavBar';
import StartPage from './components/StartPage';
import SignUp from './components/SignUp';
import Wifi from './components/Wifi';
import RestMenu from './components/RestaurantMenu'

export default function App() {
  return (
    <>
    <Typography component={'span'}>
      <Router>
        <Navbar />
        
        <Route exact path="/" component={StartPage} />   
        <Route path="/wifi" component={Wifi} /> 
        <Route path="/signup" component={SignUp} /> 
        <Route path="/menu" component={RestMenu} />  
      </Router>

    </Typography>
  </>    
  );
}

