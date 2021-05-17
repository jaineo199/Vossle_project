import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import vossle1 from '../images/vossle1.webp'


const useStyles = makeStyles((theme) => ({
  root: {
    border:'none'
    
  },
 
  title: {
   
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{border: 'none'}}>
      <AppBar position="static" style={{backgroundColor:'#FFFFFF'}}>
        <Toolbar>
            <img  src={vossle1}/>
           <Typography align="center" style={{color:'#000000', fontSize:'27px', padding: '30px', display: 'inlineblock', marginLeft:'400px'}}>
              How it works
           </Typography>
           <Typography align="center" style={{color:'#000000', fontSize:'27px', padding: '30px'}}>
              Pricing
           </Typography>
           <Typography align="center" style={{color:'#000000', fontSize:'27px', padding: '30px'}}>
             Blog
           </Typography>
           <Typography align="center" style={{color:'#000000', fontSize:'27px', padding: '30px'}}>
              Contact us
           </Typography>
           <Button variant="outlined" style={{borderColor:'#03a9fc', color:'#0f77ab'}}>
 <b>Login</b>
</Button>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
