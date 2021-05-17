import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Marketing.css';

import Mark from '../images/Mark.png';
import Mark2 from '../images/Mark2.png';
import Mark3 from '../images/Mark3.png';
import Mark4 from '../images/Mark4.png';

const useStyles = makeStyles((theme) => ({
  root: {
  
    
  },
 
  title: {
   
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#FFFFFF'}}>
        <Toolbar style={{height:'300px'}}>
             <div className="mark2">
            <img style={{ marginLeft:'190px'}} className="mark1" src={Mark }/>
            <h4 className="text"> FMCG & Marketing</h4>
            </div>
            <div>
            <img style={{ marginLeft:'190px'}}  className="mark1"  src={Mark2}/>
            <h4 className="text">E-Commerce & Retail </h4>
            </div>

            <div>
            <img style={{ marginLeft:'190px'}}  className="mark1"  src={Mark3}/>
            <h4 style={{ marginLeft:'200px'}} className="text">ED Tech</h4>
            </div>
            <div>
            <img style={{ marginLeft:'190px'}}  className="mark1"  src={Mark4}/>
            <h4   style={{ marginLeft:'180px'}} className="text"> Manufacturing</h4>
            </div>
        </Toolbar>
        {/* <Button className="btn" >
        Primarys
      </Button> */}

<Grid item md={12}>
          <Paper className={classes.paper}>
              <Typography align="center">
              <Button variant="contained"  style={{marginTop:'50px', borderRadius:'8px',  display:'inlineBlock', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>SignUp for 30 Days free trial</h3>
</Button> 
              </Typography>
          </Paper>
        </Grid>
      </AppBar>
    </div>
  );
}
