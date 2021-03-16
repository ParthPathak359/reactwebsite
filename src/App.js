import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import FireAuth from './components/pages/Login/FireAuth';
import Afterlog from './components/pages/Login/Afterlog';

const App = () => {
  return(
    <Router> 
     <Navbar/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login-in' component={FireAuth} />
        <Route path='/sign' component={FireAuth} />
        <FireAuth/>
        <Afterlog/>
     </Switch>
     <Footer />
    </Router>
  )
}
export default App;