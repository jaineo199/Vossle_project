import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Corn from '../images/corn.webp';
import Button from '@material-ui/core/Button';

import './corn.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
//background: #ecac81;
  return (
    <div className={classes.root}>
      <Grid container style={{backgroundColor:'#ecac81'}} >
        <Grid item md={5} >
          <h2 className="side1" >Increase Brand <br/> Engagement </h2>
          <p className="side2">Help customers visualize products <br/>  better before they buy with Vossle.<br/>  Increase consumer confidence.</p>
          <Button variant="contained"  style={{marginTop:'90px', marginLeft:'50px', display:'inlineBlock', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Experience Now</h3>
</Button>   
        </Grid>
        <Grid item md={7}>
          <img src={ Corn }/>
        </Grid>
        
      </Grid>
    </div>
  );
}
