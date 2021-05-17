import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Corn from '../images/corn.webp';
import Button from '@material-ui/core/Button';

import MobileVR from '../images/MobileVR.webp';

import './Mobile.css';


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
      <Grid container style={{backgroundColor:'#dfe8e6'}} >
        <Grid item md={4}  >
          <h2 className="side1" > Increase Retail Conversions </h2>
          <p className="side2"> Help customer visualize products <br/> better before they buy with Vossle. <br/> Increase consumers confidence and <br/> reduce product returns.</p>
          <Button variant="contained"  style={{marginTop:'90px', marginLeft:'50px', display:'inlineBlock', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Experience Now</h3>
</Button>   
        </Grid>
        <Grid item md={8}>
          <img src={ MobileVR  }/>
        </Grid>
        
      </Grid>
    </div>
  );
}
