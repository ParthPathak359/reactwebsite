import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, Typography ,Button, makeStyles } from "@material-ui/core" 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  


export default function NewNavbarComponent() {
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
        
          <div className="App">
            <AppBar position="sticky" style={{ backgroundColor: "black"}}>

                 <Toolbar>

                  <Typography variant="h5">
                      <Link to="/user">
                      Teachers Dashboard
                      </Link>
                 </Typography>


                 <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<AccountCircleIcon />}
                    component={Link} to={'/profile'}
                    >
                       Profile
                </Button>
                
                </Toolbar>
            </AppBar>
         </div>
        </div>
</>
    )
}
