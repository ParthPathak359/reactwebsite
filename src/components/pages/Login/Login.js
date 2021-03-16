import React from 'react';
import fire from './fire.js';
import { Avatar, Grid, Paper, Button, TextField, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Ground from './Ground.js';


class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })  
}
  

  render(){
    return (
     
     <>
      <Grid>
      
      <Paper elevation={20} style={{padding: 30, height:'70vh', width:580, margin:"40px auto"}}>
         <Grid align='center'>
            <Avatar style={{backgroundColor: 'green',}}><WorkOutlineIcon/></Avatar>
            <h2 style={{marginTop: '15px'}}>Login/Sign-up</h2>
         </Grid>

<Grid container justify = "center">
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <TextField className={<Ground/>} id="email" label="Email-ID" fullWidth required     />
        </Grid>
      </Grid>


      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <VisibilityIcon style={{cursor: 'pointer'}} />
        </Grid>
        <Grid item >
          <TextField className={<Ground/>} style={{marginTop: '15px'}} id="password" label="Password" type="password" fullWidth required />
        </Grid>
      </Grid>
      </Grid>


        <Button style={{backgroundColor: "#E0FF7B",margin: '10px',marginTop: '25px'}} variant="contained"  onClick={this.login} fullWidth={true} >Login</Button>
        <Button style={{backgroundColor: "#81F768",margin: '10px',marginTop: '25px'}} variant="contained"  onClick={this.signUp} fullWidth={true} >Sign up</Button>
        <h6 style={{align:'center',marginTop: '15px'}}>Don't have a account? <Link to='/Sign' className="linkd" >Sign-Up</Link></h6>
      </Paper>
      </Grid>
     </> 
    )
  }
}

export default Login;