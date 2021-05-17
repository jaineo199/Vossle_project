import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BackImg from '../images/vossle2.webp'

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
              <Typography variant="h2" style={{fontWeight:'600'}}> 

             <b>Create <br/> WEB AR Experiences in Under <br/>  1 Minute </b> 

              </Typography>

              <Typography> 
             <h3> No Coding Required     No App Downloads  </h3>  
              </Typography>

              <Button variant="contained"  style={{marginLeft:'1px', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Start a Free Trial Today</h3>
</Button> 

          </Paper>
 
        </Grid>
        
      </Grid>
      </div>
    </div>
  );
}
