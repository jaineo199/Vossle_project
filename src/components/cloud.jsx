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
              <Typography variant="h3" style={{fontWeight:'600', padding:'0 0 25px', lineHeight:'56px'}}> 

             <b> Vossle <br/>
is the perfect cloud based platform for <br/> agencies & business building web AR <br/> experiences </b> 

              </Typography>

              <Typography> 
              <p style={{fontSize:'20px', padding:' 5px 0px', lineHeight:'32px'}}> Reach million of users instantly. <strong>Vossle </strong>  is completely cloud based solutions work <br/> on every mobile device the moment you publish! No app installs required!</p>
              </Typography>

          </Paper>
 
        </Grid>
        
      </Grid>
      </div>
    </div>
  );
}
