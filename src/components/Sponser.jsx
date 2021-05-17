import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import vossle1 from '../images/vossle1.webp';
import vossle3 from '../images/vossle3.png'
import vossle4 from '../images/vossle4.png'
import vossle5 from '../images/vossle5.png'
import vossle6 from '../images/vossle6.png'


const useStyles = makeStyles((theme) => ({
  root: {
  
    
  },
 
  title: {
   
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#FFFFFF'}}>
        <Toolbar style={{backgroundColor:'#f6f6f6', height:'300px'}}>
          
            <img style={{ width:'200px', height:'100px', padding:'45px', marginLeft:'30px' }}  src={vossle3}/>
            <img style={{ width:'200px', height:'100px', padding:'45px',  }}  src={vossle4}/>
            <img style={{ width:'200px', height:'100px', padding:'45px',  }}  src={vossle5}/>
            <img style={{ width:'200px', height:'100px', padding:'45px', }} src={vossle6}/>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}
