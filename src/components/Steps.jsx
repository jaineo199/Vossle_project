import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
    
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Paper elevation={0} style={{backgroundColor:'#1a3b51'}}>
         
         <h2 style={{color:'#fff'}}> 3 Steps to Create an AR experience in under 1 minute!</h2>
         <p style={{color:'#fff'}}>Vossle is the simplest way to create AR experience and works in just 3 easy steps</p>

         <div> 
             <p style={{color:'#fff'}}>Create free
Vossle Account</p>

<p style={{color:'#fff'}}>Upload content on Vossle Creator studio</p>

<p style={{color:'#fff'}}>Publish, Simply share Vossle link & QR code embed on your website</p>


<Button  style={{marginLeft:'1px', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Start a Free Trial Today</h3>
</Button> 


         </div>
      </Paper>
     
    </div>
  );
}
