import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Corn from '../images/corn.webp';
import Button from '@material-ui/core/Button';
import Astronaut from '../images/Astronaut.webp';
import Machine from '../images/Machine.webp';
import './Machine.css';


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
      <Grid container  >
        <Grid item md={8} >
          <div >
        <img className="imgs"  src={ Machine  }/>
        </div>
        </Grid>
        <Grid item md={4}>
       
          <h2 className="side1" > Better Product <br/> Support </h2>
          <p className="side2"> Offer your customer and field staff <br/>interactive user manuals and product <br/> explainers with. Users never need to <br/> carry or search for manuals again.</p>
          {/* <Button variant="contained"  style={{marginTop:'90px', marginLeft:'50px', display:'inlineBlock', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Start Your Free Trial Today</h3>
</Button>  */}
        </Grid>

       
        
      </Grid>
    </div>
  );
}