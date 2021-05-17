import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './plans.css';

const useStyles = makeStyles((theme) => ({
 
  paper: {
    padding: theme.spacing(7),
    textAlign: 'center',
    
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Paper className={classes.paper}>
             <h1 className="plans">Pricing Plans</h1>
             <h3 className="subs">Choose Your Subscription Plan</h3>
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
