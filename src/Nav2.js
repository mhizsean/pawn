import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { colors } from './colors';
import menu from './images/menu.svg';
import clsx from 'clsx';
import close from './images/close.svg';
import pagearrow1 from './images/aboutpage/pagarrow1.png';



const useStyles = makeStyles({
  root: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  burger: { display: 'none' },
  navLinks: {
    display: 'flex',
    marginLeft: 'auto',
    listStyle: 'none',
    alignItems: 'center',
  },
  arrow:{
    display: 'none'
  },
  '& li':{
    'hr': {
      display: 'hidden'
    },
  },
  link: {
    '& hr':{
      display: 'none'
    },
    marginRight: '45px',
    '&:nth-last-child(2)': {
      padding: '12px 27px',
      border: `1px solid ${colors.orangeRed}`,
      backgroundColor: colors.orangeRed,
      borderRadius: '10px',
      '& a': { color: 'white' },
      '&:hover': {
        backgroundColor: colors.white,
        '& a': { color: colors.orangeRed },
      },
      arrow:{
        display: 'hidden'
      }
    },
    '&:nth-last-child(1)': {
      padding: '12px 27px',
      // width: '100%',
      border: `1px solid ${colors.brown}`,
      borderRadius: '10px',
      backgroundColor: colors.white,
      marginRight: 0,
      marginLeft: '0px',
      '& a': { color: colors.brown },
      '&:hover': {
        backgroundColor: colors.white,
        '& a': { color: colors.orangeRed }
      },
    },
    '& a': {
      color: colors.brown,
      textDecoration: 'none',
      '&:hover': {
        color: colors.orangeRed,
      },
    },
  },

  '@media(max-width:991px)': {
    navLinks: { display: 'none' },
    burger: { display: 'block', marginLeft: 'auto' },
    showMobNav: {
      opacity: 0.9,
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      right: '15px',
      top: '50px',
      width: '50.72%',
      backgroundColor: colors.white,
      padding: '50px 30px',
      borderRadius: '0px',
      zIndex: '111',
      // boxShadow: '0px 6px 24px -6px rgba(0,0,0,0.75)',
    },
    arrow:{
      display: 'inline-block',
      float: 'right',
    },
    '&:nth-last-child(1)':{
      arrow:{
        display: 'none',
      }
    },
    link: {
      alignItems: 'center',
      width:'100%',
      marginRight: 0,
      marginBottom: '25px',
      '& hr':{
        display:'block'
      },
      '&:nth-last-child(1)': {
        margin: 0,
        backgroundColor: colors.white,
        '&:hover': {
          backgroundColor: '#9e2010',
        },
        textAlign: 'center',
        '& hr':{
          display:'none'
        },
      },
      '&:nth-last-child(2)': {
        textAlign: 'center',
        marginLeft: '15px',
        marginRight: '15px',
        '& hr':{
          display:'none'
        },

      },
      '& a': {
        color: colors.white,
        textDecoration: 'none',
        '&:hover': {
          color: colors.white,
        },
      },
    },
  },
  
  '@media(max-width:767px)': {
    showMobNav: { width: 'calc(100% - 0px)' },
    '&:nth-last-child(2)': {
      textAlign: 'center',
      '& hr': { visibility: 'hidden'}
    },
    
      '&:nth-last-child(1)': {
        textAlign: 'center',
       
      },
   

      showMobNav: {
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '15px',
        top: '50px',
        width: '100%',
        height: '700px',
        backgroundColor: colors.white,
        padding: '50px 30px',
        borderRadius: '0px',
        zIndex: '111',
        // boxShadow: '0px 6px 24px -6px rgba(0,0,0,0.75)',
      },
      arrow:{
        display: 'inline-block',
        float: 'right',
      },
      
    
  },
});

export default function Nav(props) {
  const {fontColor } = props;
  const classes = useStyles();

  const [showMobNav, setShowMobNav] = useState(false);

  const navLink = [
    ['Pricing', '/pricing'],
    ['Locations', '/locations'],
    ['About', '/about'],
    ['Log in', '/login'],
    ['Drive with us', '/drive']
  ];

  const handleClick = () => {
    showMobNav ? setShowMobNav(false) : setShowMobNav(true);
  };

  return (
    <nav className={`${classes.root} container`}>
     <Link to="/">
      <img src={logo} alt="logo" />
     </Link>
      <img
        src={showMobNav ? close : menu}
        alt="burger menu icon"
        onClick={handleClick}
        className={classes.burger}
      />
      <ul className={clsx(classes.navLinks, showMobNav && classes.showMobNav)}>
        {navLink.map((link, i) => (
          <li className={classes.link} key={i}>
            <Link to={link[1]}>{link[0]} <img className={classes.arrow} src={pagearrow1}/></Link>
            <hr className={classes.hr}/>
          </li>
        ))}
      </ul>
    </nav>
  );
}
