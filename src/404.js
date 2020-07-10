import React from 'react';
import hero from './images/404/3.svg'
import welcomehero from './images/404/4.svg'

import { makeStyles } from '@material-ui/styles';
import Nav from './Nav';
import { colors } from './colors';
import { Link } from "react-router-dom";



const useStyles = makeStyles({
  main:{
      backgroundColor: '#F9F9FA',
      height: '110vh',
      width: '100%',
      position: 'relative',
      bottom: '30px'
  },
  bottomWave:{
      position: 'relative',
      bottom: '30px'
  },
  welcomeHero: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '70px'
  },
  oops:{
      color: colors.brown,
      fontSize: '1.6em',
      textAlign: 'center',
      marginTop:'10px'
  },
  link:{
      color: colors.greyTxt,
      textAlign: "center",
      marginTop:"10px"

  },
  button:{
      backgroundColor: colors.orangeRed,
      width: "150px",
      height: "60px",
      borderRadius: "10px",
      border: `1px solid  ${colors.orangeRed}`,
      color: "#fff",
      textAlign: 'center',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: "10px"
  },
  redirect:{
      '& a': {
          textDecoration: "none"
      },
      marginTop:"30px"
  },
  mobileBottomWave:{
      display: 'none'
  },
  '@media(max-width: 767px)': {
       welcomeHero: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '70px',
      width: "50%"
  },
  bottomWave:{
      display: 'none',
  },
  mobileBottomWave:{
      display: 'block',
      position:'relative',
      bottom: '100px'
  },
  }

 
});

export default function Error() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.main}>
        <Nav/>
      <img className={classes.welcomeHero} src={welcomehero} alt="oops error"/>
     <div className={classes.redirect}>
        <p className={classes.oops}>Oops! we can't find that page</p>
        <p className={classes.link}>The link you followed may be broken or the page may have been removed</p>
        <Link to="/">
            <button className={classes.button}>
                Go to homepage
            </button>
        </Link>
     </div>
    </div>
    <svg className={classes.bottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9FA" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,101.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <svg className={classes.mobileBottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
    </>
  );
}
