import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Mobile1 from '../images/mobile.webp'
import Mobile2 from '../images/mobile2.webp'
import Mobile3 from '../images/mobile3.webp'

import './GridSteps.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
  
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
//padding: 150px 0 100px;
  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{backgroundColor:'#1a3b51', }} >
        <Grid item md={12}>
        <h2 style={{color:'#fff', margin:'0px', padding:'10px 0', fontWeight:'600', fontSize:'40px'}}> 3 Steps to Create an AR experience in under 1 <br/> minute!</h2>
         <p style={{color:'#fff', fontWeight:'500', fontSize:'20px' }}>Vossle is the simplest way to create AR experience and works in just 3 easy steps</p>

        
        </Grid>
        <Grid item md={4}>
        <p style={{color:'#fff', padding:'30px 0 0 85px', display: 'inlineBlock', fontSize:'17px', fontWeight:'600'  }}> <span style={{ width:'40px', borderRadius:'50px', float: 'left', margin: '0 20px 25px 0', textAlign:'center', lineHeight: '40px', backgroundColor:'#f6c7a8', color:'#000'}}> 1</span> Create free <br/>
Vossle Account</p>

<p style={{color:'#fff', padding:'30px 0 0 85px', display: 'inlineBlock', fontSize:'17px', fontWeight:'600' }}>  <span style={{ width:'40px', borderRadius:'50px', float: 'left', margin: '0 20px 25px 0', textAlign:'center', lineHeight: '40px', backgroundColor:'#f6c7a8', color:'#000'}}> 2</span> Upload content on Vossle Creator studio</p>

<p style={{color:'#fff', padding:'30px 0 0 85px', display: 'inlineBlock', fontSize:'17px' , fontWeight:'600'}}>  <span style={{ width:'40px', borderRadius:'50px', float: 'left', margin: '0 20px 25px 0', textAlign:'center', lineHeight: '40px', backgroundColor:'#f6c7a8', color:'#000'}}> 3</span> Publish, Simply share Vossle link & QR code embed on your website</p>
<Button variant="contained"  style={{marginLeft:'1px', backgroundColor:'#2680eb', color:'#FFFFFF', height:'60px'}}>
  <h3>Start a Free Trial Today</h3>
</Button>        
        </Grid>
        <Grid item md={8}>
           <ul style={{ listStyleType:'none', margin:'-32px', padding:'-32px', overflow:'hidden' }}>
               <li style={{float: 'left'}}>
                   <img style={{ width:'100%'}} src={Mobile1}  alt="ok"/>
               </li>
               <li  style={{float: 'left'}}>
               <img  style={{ width:'100%'}}  src={Mobile2}  alt="ok"/>
               </li>
               <li  style={{float: 'left'}}>
               <img style={{ width:'100%'}}  src={Mobile3}  alt="ok"/>
               </li>
              
           </ul>

           <a className="steps" href="#" > View more Vossle Resources and Tutorials</a>


          
        </Grid>
        
      </Grid>
    </div>
  );
}
