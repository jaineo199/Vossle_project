import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Astronaut from '../images/Astronaut.webp';
import './Astronaut.css';


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
      <Grid container className="bkg" >
        <Grid item md={7} >
          <div className="img">
        <img  className="imgs" src={ Astronaut  } alt="astronaut"/>
        </div>
        </Grid>
        <Grid item md={5}>
       
          <h2 className="side1" > Increase Retention</h2>
          <p className="side2"> Make learning more fun and help <br/> students understand concepts better <br/>  by visualizing in 3D with Vossle. Make <br/>  books interactive and learning <br/>  experience more engaging.</p>
          <Button variant="contained"  style={{marginTop:'90px', marginLeft:'50px', display:'inlineBlock', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Experience Now</h3>
</Button> 
        </Grid>
        
      </Grid>
    </div>
  );
}