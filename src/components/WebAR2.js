import React from "react";
import './WebAR2.css';
import Vossle from '../images/vossle2.webp';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './WebAR2.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
     
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
     
     
     
    },
    img:{
        maxWidth:'100%',
    }
  }));

function App() {
    const classes = useStyles();
  return (
    <div style={{ backgroundImage: `url(${Vossle})` ,height:'165vh', maxWidth: '100%', border:'none'}}>
           
      <Typography  variant="h2" align="center" style={{fontWeight:'600', marginTop:'30px'}}> 

<b className="ar" >Create <br/> WEB AR Experiences in Under <br/>  1 Minute </b> 

 </Typography>

 <Typography align="center"> 
             <h3 className="coding"> No Coding Required     No App Downloads  </h3>  
              </Typography>
              
              <Typography align="center" style={{ marginTop: "50px" }}>
              <Button variant="contained"  style={{marginLeft:'1px', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Start a Free Trial Today</h3>
</Button> 
  </Typography>

    </div>
  );
}

export default App;