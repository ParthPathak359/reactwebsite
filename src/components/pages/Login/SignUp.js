import React from 'react';
import fire from './fire.js';
import { Avatar, Grid, Paper, Button, TextField, makeStyles } from '@material-ui/core';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Ground from './Ground.js';


class SignUp extends React.Component {

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

 
  

  render(){
    return (
     
     <>
      <Grid>
      
      <Paper elevation={20} style={{padding: 30, height:'70vh', width:580, margin:"40px auto"}}>
         <Grid align='center'>
            <Avatar style={{backgroundColor: 'green',}}><WorkOutlineIcon/></Avatar>
            <h2 style={{marginTop: '15px'}}>Sign-up</h2>
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


        <Button style={{backgroundColor: "#81F768",margin: '10px',marginTop: '25px'}} variant="contained"  onClick={this.signUp} fullWidth={true} >Sign up</Button>
      </Paper>
      </Grid>
     </> 
    )
  }
}

export default SignUp;