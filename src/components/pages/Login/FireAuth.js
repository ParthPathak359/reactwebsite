import React, { Component } from 'react'
import Login from 'C:/Users/patha/Desktop/reactapp/myapp/src/components/pages/Login/Login.js';

import fire from './fire.js';
import Afterlog from './Afterlog.js';
import SignUp from 'C:/Users/patha/Desktop/reactapp/myapp/src/components/pages/Login/SignUp.js';

class FireAuth extends Component
   {
    constructor(props) {
      super(props);
  
      this.state = {
        user: null,
      };
  
      this.authListener = this.authListener.bind(this);
    };
    
    componentDidMount() {
      this.authListener();
    }
    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        if (user) 
  
        {
          this.setState({ user });
        }
  
        else
        {
          this.setState({ user:null });
        }
      })
  
    }
  
   
     render(){ 
    return(
      <div className="FireAuth">
      {this.state.user ? (<Afterlog/>) : (<Login/>)}
      </div>
      
     
    );  
  };
  }

export default FireAuth;
