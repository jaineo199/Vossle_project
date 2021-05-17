import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BackImg from '../images/vossle2.webp'

import './cloud2.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // backgroundImage: `url(${BackImg})`
    // backgroundColor:'blue'
   
   
  },
  img:{
      maxWidth:'100%',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div >
      <Grid container spacing={3}>
        <Grid item md={12}>
         
           
          <Paper className={classes.paper}>
              <Typography className="welcome"> 

            <h3> Leverage the power of Augmented  Reality </h3>

              </Typography>

              <Typography> 
              <p className="welcome2"> 

Augmented reality helps you to engage with your user in powerful and <br/> interactive ways.
</p>
              </Typography>

          </Paper>
 
        </Grid>
        
      </Grid>
      </div>
    </div>
  );
}
