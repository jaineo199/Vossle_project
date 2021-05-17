import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Building from '../images/Building.png';
import Rocket from '../images/Rocket.png';
import Tick from '../images/tick.svg'
import './months.css';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    // // alignItems: 'baseline',
    // marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Commercial',
    price: '$99',
    description: [' World Tracking Experiences', 'Image Tracking Experiences', 'Tryons', 'Games in AR', 'Green Screen Chroma Key Videos', 'Cloud Editor + Hosting',
   'Create Unlimited Experiences', 'Analytics Dashboard', '10000 views + $0.01 per extra view' 
  ],
    buttonText: 'Start A Free Trial Today',
    buttonVariant: 'outlined',
    img: {Building},
    month: 'PER MONTH'
  },

  {
    title: 'Enterprise Plans',
    price: 'Contact Us',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    img:{Rocket},
    buttonText: 'Contact Us',
    buttonVariant: 'outlined',
  },
];



export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
   
      <Container maxWidth="md" component="main" style={{marginTop:'50px'}}>
        <Grid container spacing={8} alignItems="flex-end">
          {tiers.map((tier) => (
     
            <Grid item key={tier.title} xs={12} md={6}>
              <Card style={{ borderRadius: '25px', padding: '20px'}}>
                <CardHeader
                  title={tier.title}
                  
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                
                //   className={classes.cardHeader}
                />
                 <CardContent>
                  <div className={classes.cardPricing}>
                   <img className="img" src={Building}/>
                  </div>
                
                </CardContent>
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography style={{ fontSize: '60px', color: '#082554'}}>
                      {tier.price}
                    </Typography>
                    <br/>
                
                  </div>
                  <Typography align="center" className="per">
                   PER MONTH
                 </Typography>
                 <div className="hr" style={{backgroundColor: '#d2d2d2', height: '1px'}}>

                 </div>
                  {/* <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line} style={{color:'color: #707070', fontSize:'16px'}}>
                        {line
                      </Typography
                    ))}
                  </ul> */}
                  <ul>
                    <Typography  align="center" style={{color:'#707070', marginTop:'0.9em', marginBottom:'0.9em', fontSize:'16px'}}>
                      <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em',  fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em',  fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em',  fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em',  fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em',  fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em',  fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em', fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                    <Typography  align="center" style={{color:'#707070', marginBottom:'0.9em',  fontSize:'16px'}}>
                    <img style={{ maxWidth:'20px', marginRight:'15px'}} src={Tick}/>
                    World Tracking Experiences
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" style={{fontSize: '18px',backgroundColor:'#2680eb', color:'#fff', padding:'14px 2em'}}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </React.Fragment>
  );
}