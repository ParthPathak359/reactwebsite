import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NewNavbarComponent from './NewNavbar'
import { makeStyles } from '@material-ui/core/styles';
import { Card, ListGroup } from 'react-bootstrap';
import { InputLabel, MenuItem, FormHelperText, FormControl, Select, Button } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LinkIcon from '@material-ui/icons/Link';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },

  all: {
    margin: theme.spacing(2),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(5),
  },

}));

export default function Dashboard() {
    const classes = useStyles();
    const [attendanceLink,setLink] = useState("")
    const [lecture,setLecture] = useState("")
    const [bugject,setBugject] = useState("")
    const [afg,setAfg] = useState(new Date())
    

    

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const generateLink = () => {
    const sub = "&subject=" + bugject;
    const lecname = "?class=" + lecture;
    const avg = "&datetime=" + afg;
    const link = "localhost:3000/attendance" + lecname + sub + avg
    setLink(link)
  }

    return (
       <> 
       
        <NewNavbarComponent />
        <Container fluid>
          
        
         <Card style={{ alignItems: 'center'  }} className="d-flex p-0 col-example">
           <ListGroup variant="flush">
           <ListGroup.Item variant="primary">Welcome:</ListGroup.Item>
           <ListGroup.Item variant="info">step 1= select Date and time of the lecture</ListGroup.Item>
           <ListGroup.Item variant="info">step 2= Select Subject</ListGroup.Item>
           <ListGroup.Item variant="info">step 3= Select Class</ListGroup.Item>
           <ListGroup.Item variant="info">step 4= Click on the "Generate Link" button</ListGroup.Item>
           <ListGroup.Item variant="info">step 5= Copy the link and paste it in the online classroom (Google meet,Zoom etc)</ListGroup.Item>
           </ListGroup>
         </Card> 

          <br/><br/>

         {/*Select Date_Time*/} 
         {/*<MuiPickersUtilsProvider utils={DateMomentUtils}>
            <KeyboardDateTimePicker label="Select Date and Time:" onError={console.log} 
               disablePast value={afg} onChange={e => console.log(e)}
               required className={classes.all} /><br/>
          </MuiPickersUtilsProvider>*/}

         <input type="datetime-local" className={classes.all} onChange={e => setAfg(e.target.value)} /><br/><br/>



          
        {/*Select Subject*/}  
        <FormControl required className={classes.all}>
         <InputLabel id="required-label">Select Subject</InputLabel>
         <Select
          labelId="required-label"
          id="select-required"
          value={bugject}
          onChange={(e) => setBugject(e.target.value)}
          className={classes.selectEmpty}
         >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Business Intelligence"}>Business Intelligence</MenuItem>
          <MenuItem value={"Software Quality Assurance"}>Software Quality Assurance</MenuItem>
          <MenuItem value={"Security in Computing"}>Security in Computing</MenuItem>
          <MenuItem value={"Advanced Mobile Programming"}>Advanced Mobile Programming</MenuItem>
          <MenuItem value={"Geographical Information System"}>Geographical Information System</MenuItem>
         </Select>
         <FormHelperText>Required</FormHelperText>
        </FormControl><br/>


        {/*Select Class*/}
        <FormControl required className={classes.all}>
         <InputLabel id="required-label">Select Class</InputLabel>
         <Select
          labelId="required-label"
          id="select-required"
          value={lecture}
          onChange={(e) => setLecture(e.target.value)}
          className={classes.selectEmpty}
         >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"TYIT-A"}>TYIT A</MenuItem>
          <MenuItem value={"TYIT-B"}>TYIT B</MenuItem>
         </Select>
         <FormHelperText>Required</FormHelperText>
        </FormControl><br/><br/>

        
        <Button
         variant="contained"
         color="secondary"
         className={classes.all}
         startIcon={<LinkIcon />}
         onClick={generateLink}
         >
         Generate Link
        </Button><br/><br/>

        <input className={classes.all} value={attendanceLink} /><br/><br/>


        <Button 
         variant="contained" 
         color="secondary" 
         onClick={handleClick} 
         className={classes.all}
         >
         Click to copy link
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success">
          Link has been copied!
         </Alert>
        </Snackbar>







        </Container>
       </>
    )
}
