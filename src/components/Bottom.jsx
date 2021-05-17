import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import vossle1 from '../images/vos.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import Instagram from '../images/instagram.svg';
import Facebook from '../images/facebook.svg';
import Linkd from '../images/Linkd.png';
import Ball from '../images/Ball1.png';
import Typography from '@material-ui/core/Typography';

import './Bottom.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  roots: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:'120px'}}>
      <Grid container className="footer">
        <Grid item md={2}>
    <img className="vos" src={vossle1} alt="ok" style={{ marginLeft:'60px'}}/>
        </Grid>
        <Grid item md={6}>
         <ul className="ul" >
             <li className="list"> How It Works</li>
             <li className="list"> Marketing </li>
             <li className="list">FMCGs</li>
             <li className="list">Contact Us</li>
             <li className="list">Blog</li>
         </ul>
      
         <ul className="ul" >
             <li className="list"> Terms and Conditions</li>
             <li className="list"> Privacy Policy</li>
             <li className="list">Refund Policy</li>
           
         </ul>
        </Grid>
        <Grid item md={4}>
            <div className={classes.roots}>
           <img className="imgs2" src={Instagram} />
           <img className="imgs2" src={Facebook} />
           <img className="imgs2" src={Linkd } />
           <Button   variant="outlined" color="primary" href="#outlined-buttons" disableElevation style={{marginBottom:'65px'}} className="btn2">
<b style={{color:'#1280b0'}}> Login</b>
</Button>
      </div>
        </Grid>

        <Grid md={12}>
          <img src={Ball} style={{ width:'100%'}}/>
        </Grid>

        <Grid md={12}>
          <Typography align="center"  className="text">

          All right reserved 2020 <strong>  Vossle </strong>
          </Typography>
     
        </Grid>


 
      </Grid>
    </div>
  );
}
