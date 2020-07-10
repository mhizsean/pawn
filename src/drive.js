import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';
import Nav from './Nav'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import HeroTwo from './images/drive/heroTwoMask.png';
import ios from './images/drive/ios.png';
import android from './images/drive/android.png';
import phone from './images/drive/phone.png';

import paw from './images/drive/paw.png'

import hero from './images/drive/1.png';
import backgroundHero from './images/drive/RectangleOne.svg';
import working from './images/aboutpage/working/working.png';
import working1 from './images/aboutpage/working/working1.png';
import working2 from './images/aboutpage/working/working2.png';
import working3 from './images/aboutpage/working/working3.png';
import working4 from './images/aboutpage/working/working4.png';
import working5 from './images/aboutpage/working/working5.png';
import working6 from './images/aboutpage/working/working6.png';

const useStyles = makeStyles({
    root: {
        width: '75%',
        marginTop: '50px',
      },
    title: {
        color: colors.orangeRed,
        textAlign: 'left',
        marginTop: '50px',
        marginBottom: '20px',
        marginLeft: '290px',
        paddingRight: '30px',
        fontSize: '2.5em',
        lineHeight: '50px'
    },
    button: {
        backgroundColor: colors.orangeRed,
        height: '50px',
        width: '120px',
        borderRadius: '10px',
        color: 'white',
        border: `1px solid ${colors.orangeRed}`,
        marginLeft: '290px',     
        marginBottom: '30px',
        marginTop: '30px',
        '& a':{
          textDecoration: 'none',
          color: '#fff'  
        }
    },
    hero: {
        display: 'flex',
    },
    mainSection:{
        backgroundColor: '#F9F9FA',
        height: "90vh",
        position:'relative',
        bottom: "20px"
    },
    bottomWave:{
        position:"relative",
        bottom: "50px"
    },
    heroSectionOne:{
        width: '60%',
        marginTop: '70px'
    },
    mobileBottomWave:{
        display: 'none',
    },
    heroSectionTwo:{
        width: '40%',
        marginTop: '100px'
    },
    
    tagline:{
        color: `${colors.darkGreyTxt}`,
         marginLeft: '290px',
         fontWeight: 'bold'
    },
    aboutMain:{
        color: `${colors.brown}`,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: '1.8em',
        marginTop: '10px'
    },
    about:{
        '& p' : {
           fontSize:'1.0em',
            lineHeight: '45px',
            textAlign: 'center',
            marginLeft: '100px',
            marginRight: '100px',
    }
    },
    working: {
    '& h5': {
      marginTop: '50px',
      textAlign: 'center',
      color: colors.brown,
    },
  },
  workingImage: {
    width: '100%',
    height: '950px',
    position: 'absolute',
    zIndex: '-1',
    marginTop: '150px'
  },
  workingHeadline: {
    position: 'relative',
    textAlign: 'left',
    color: colors.brown,
    fontSize: '25px',
    top: '250px',
    fontWeight: 'normal',
  },
  workingContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textAlign: 'center',
    position: 'relative',
    marginTop: '300px',
    
    '& div': {
      width: '260px',
      maxWidth: '100%',
      '&:nth-child(2)': {
        '@media(min-width: 1441px)': {
          margin: '0 75px',
        },
        tagline:{
          marginTop: '20px',
          marginBottom: '20px'
        },
        
      },

      '& img': {
        height: '80px',
      },
      '& h3': {
        color: colors.brown,
        fontSize: '18px',
      },
      '& p': {
        color: colors.darkGreyTxt,
        fontSize: '14px',
        lineHeight: '15px',
        width: '260px',
        maxWidth: '100%',
        textAlign:'center',
        marginLeft: 'auto'
      },
    },
  },
  workSection:{
    marginTop: '20px'
  },
  
  heroTwoSection:{
    backgroundImage: `url(${HeroTwo})`,
    height:'70vh'
  },
 
  heroTwoContent:{
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: '5px',
    marginBottom: '30px'
  },
  heroTwoContentOne:{
    marginTop:'40px',
    width: '60%',
    '& h1': {
      color: colors.orangeRed,
      fontSize: '1.9em',
      marginTop: '20px',
      fontWeight: 'normal',

    },
    '& p': {
      marginLeft: 0,
      textAlign: 'left',
      marginTop: '40px',
      lineHeight: '1.6em',
      fontSize: '1.0em',
      marginRight: '50px'
    }
  },
  appLinkSection:{
    marginTop:'40px',
    marginBottom: '40px'
  },
  heroTwoContentTwo:{
    width: '40%',
    '&::before': {
      content: `url(${paw})`,
      position: 'absolute',
      bottom: '420px',
      right: '600px',
      height: '35px',
    },
    
  },
  heroTwoPhone:{
    height:'75vh',
    marginLeft: '150px',
    
  },

  '@media(max-width: 991px)': {
    root: {
      width: '100%',
      // marginTop: '50px',
    },
  title: {
      color: colors.orangeRed,
      textAlign: 'left',
      marginTop: '50px',
      marginBottom: '20px',
      marginLeft: '50px',
      paddingRight: '30px',
      fontSize: '2.5em',
      lineHeight: '50px'
  },
  button: {
      backgroundColor: colors.orangeRed,
      height: '50px',
      width: '120px',
      borderRadius: '10px',
      color: 'white',
      border: `1px solid ${colors.orangeRed}`,
      marginLeft: '290px',     
      marginBottom: '30px',
      marginTop: '30px',
      '& a':{
        textDecoration: 'none',
        color: '#fff'  
      }
  },
  hero: {
      display: 'flex',
      flexDirection: 'row'
  },
  mainSection:{
      backgroundColor: '#F9F9FA',
      height: "60vh",
      position:'relative',
      bottom: "20px"
  },
  bottomWave:{
      position:"relative",
      bottom: "40px"
  },
  heroTwoSection:{
    backgroundImage: `url(${HeroTwo})`,
    height:'30vh'
  },
  heroSectionOne:{
      width: '50%',
      marginTop: '100px',
      '& button':{
        marginLeft: '50px'
      }
  },
   heroSectionTwo:{
      width: '50%',
      marginTop: '10vh'
  },
  mobileBottomWave:{
      display: 'none',
  },
  heroTwoContent:{
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: '5px',
    marginBottom: '30px',
    width: '100%'
  },
  heroTwoContentOne:{
    marginLeft: 0,
    marginTop: '40px',
    width: '70%',
    '& h1':{
      fontSize: '1.5em',
      marginTop: '20px',
      marginLeft: '5px',
      textAlign: 'center',
    },
    '& p': {
      width: '100%',
      position: 'relative',
      right: '40px',
      textAlign: 'left',
      marginLeft:'40px'
    }
  },
 
  appLinkSection:{
    marginTop:'40px',
    marginBottom: '20px'
  },
  heroTwoContentTwo:{
    width: '30%',
    position: 'relative',
    bottom: '20px',
    right: '100px',
    '&::before': {
      content: `url(${paw})`,
      position: 'absolute',
      bottom: '280px',
      right: '300px',
      height: '35px',
    },
    
  },
  heroTwoPhone:{
    height:'35vh'
  },
  
  tagline:{
      color: `${colors.darkGreyTxt}`,
       marginLeft: '50px',
       fontWeight: 'bold'
  },
  aboutMain:{
      color: `${colors.brown}`,
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: '1.8em',
      marginTop: '90px'
  },
  about:{
      '& p' : {
         fontSize:'1.0em',
          lineHeight: '45px',
          textAlign: 'center',
          marginLeft: '150px',
          marginRight: '150px',
          marginTop: '30px'
  }
  },
  working: {
  '& h5': {
    marginTop: '50px',
    textAlign: 'center',
    color: colors.brown,
  },
},
workingImage: {
  width: '100%',
  height: '950px',
  position: 'absolute',
  zIndex: '-1',
  marginTop: '150px'
},
workingHeadline: {
  position: 'relative',
  textAlign: 'left',
  color: colors.brown,
  fontSize: '25px',
  top: '250px',
  fontWeight: 'normal',
},
workingContainer: {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  textAlign: 'center',
  position: 'relative',
  marginTop: '300px',
  
  '& div': {
    width: '260px',
    maxWidth: '100%',
    '&:nth-child(2)': {
      '@media(min-width: 1441px)': {
        margin: '0 75px',
      },
      tagline:{
        marginTop: '20px',
        marginBottom: '20px'
      },
      
    },

    '& img': {
      height: '80px',
    },
    '& h3': {
      color: colors.brown,
      fontSize: '18px',
    },
    '& p': {
      color: colors.darkGreyTxt,
      fontSize: '14px',
      lineHeight: '15px',
      width: '260px',
      maxWidth: '100%',
      textAlign:'center',
      marginLeft: 'auto'
    },
  },
},
workSection:{
  marginTop: '20px'
},
  
  },
   '@media(max-width: 767px)': {
     mainSection:{
        backgroundColor: '#F9F9FA',
        height: "120vh",
        position:'relative',
        bottom: "20px"
    },
    bottomWave:{
        display: 'none'
    },
        root: {
        width: '100%',
      },
        title: {
        color: colors.orangeRed,
        textAlign: 'center',
        marginLeft: 'auto',
        fontSize: '2.0em',
        lineHeight: '50px'
    },
     mobileBottomWave:{
        display: 'block',
        position: 'relative',
        bottom: '70px'
    },
    button: {
        backgroundColor: colors.orangeRed,
        height: '50px',
        width: '120px',
        borderRadius: '10px',
        color: 'white',
        border: `1px solid ${colors.orangeRed}`,
        display: 'block',
        textAlign: 'center',
        '& a':{
          textDecoration: 'none',
          color: '#fff'  
        },
        position: 'relative', 
        left: '100px',
    },
        hero: {
        display: 'block',
    },
    heroSectionOne:{
        width: '100%',
        marginTop: '10px',
        flex: 1,
        '& button':{
          marginLeft: '40px'
        }
    },
    heroSectionTwo:{
        width: '100%',
        flex: 1
    },
    
    tagline:{
        color: `${colors.darkGreyTxt}`,
         marginLeft: 'auto',
         fontWeight: 'bold',
         textAlign: 'center'
    },
         aboutMain:{
        color: `${colors.brown}`,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: '1.8em',
        marginTop: '10px'
    },
         about:{
           marginLeft: '10px',
           marginRight: '10px',
        '& p' : {
           fontSize:'1.0em',
            lineHeight: '30px',
            textAlign: 'center',
            margin: '0px'
    }
    },
    working: {
      position: 'relative',
      display: 'flex',
      bottom: '10vh'
    },
    workingImage:{
      // position: 'relative',
      // bottom: '40px',
      height: '300px'
    },
    workingContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    workSection:{
        marginBottom: '50px'
    },
    positions: {
      display: 'flex',
      position:'relative',
      top:'40vh',
      marginBottom: '150px',
      '& h4': {
        fontSize: '25px',
        marginBottom: '50px',
        color: colors.brown,
        textAlign: 'center',
      },
      '& div': {},
      '& section': {
        margin: '15px',
        padding: '15px',
        fontSize: '12px',
      },
    },
    pagination: {
      width: '100%',

      '& a': {
        color: 'black',
        float: 'left',
        padding: '8px 16px',
        textDecoration: 'none',
      },
    },
    pagText: {
      marginTop: '20px',
      textAlign: 'center',
      lineHeight: '15px',
      width: '100%',
      fontSize: '13px',
    },
    heroTwoSection:{
      display: 'none'
    }
  },
 
});

export default function Drive() {
    const classes = useStyles();
   
const workings = [
  {
    id: 1,
    image: working1,
    tagline: 'Strong Core Values',
    text:
      'We believe in the fair treatment of life. Period. You’ll be apart of a great team with like minded individuals and safe and fun work environment.',
  },
  {
    id: 2,
    image: working2,
    tagline: 'Growth ',
    text:
      'Promoting from within is what we do best! We offer great opportunities to grow and move up in our company. Build a rewarding career with us for life.',
  },
  {
    id: 3,
    image: working3,
    tagline: 'Great Benefits',
    text:
      'We offer great benefits like : health & dental insurance , 401k retirement , team member emergency fund, and PTO (Paid Time Off) just to name a few.',
  },
  {
    id: 4,
    image: working4,
    tagline: 'Bring your dog to work',
    text: 'Yeah we said it. Bring your dog to work day is everyday.',
  },
  {
    id: 5,
    image: working5,
    tagline: 'Education Opportunities',
    text:
      'Learn skills through our Education learning portal to help build up your skills and knowledge for a better life and career.',
  },
  {
    id: 6,
    image: working6,
    tagline: 'Equal & Fair Pay',
    text:
      'We believe in equal and fair pay for all individuals regardless of gender. We offer great earning opportunities.',
  },
];

    return (
      <>
      <div className={classes.mainSection}>
      <br/>
        <Nav/>
            <section className={classes.hero}>
                <div className={classes.heroSectionOne}>
                    <h2 className={classes.title}>Drive, earn and help the community</h2>
                    <p className={classes.tagline} >Love animals? Want to be your own boss? Perfect! Love serving your community? Great!</p>
                    <button  className={classes.button}>
                        <Link to='/MainForm'> 
                            Sign up Now
                        </Link>
                    </button>
                </div>
                <div className={classes.heroSectionTwo}>
                    <img className={classes.root} src={hero} alt="Sign up to drive for pawndr"/>
                </div>
            </section>
      </div>
      <svg className={classes.bottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9FA" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,101.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <svg className={classes.mobileBottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg>
        <section className={classes.about}>
            <div className={classes.aboutMain}>
                About Pawndr
            </div>
            <p>
                Pawndr Started From Humble Beginnings, delivering across the country, door to door from our very own CEO. 
                Only having a few dollars in her pocket and intense drive to make the world a better place, her service grew and quickly 
                expanded from just the back of her car.<br/> <br/> Now servicing more than 100 cities across the US with hopes to expand worldwide. 
                Pawndr has helped deliver over 400 pets and animals to safety with love and care from rescues, kill shelters, and to new homes.
                 The famous motto is “A dog is a mans best friend” Our Motto is “Moving forward with Paws-itivity, get it?
            </p>
            <div className={classes.working} id="values">
            <div className="container">
              <h1 style={{textAlign: 'center'}} className={classes.workingHeadline}>Why Pawndr?</h1>
             <Fade bottom big>
                <div className={classes.workingContainer}>
                  {workings.map((working, index) => (
                    <div key={index} className={classes.workSection} style={{marginBottom: 30}}>
                      <img src={working.image} alt="" />
                      <h3 style={{marginTop: 20, marginBottom: 20, fontWeight: 'normal'}}>{working.tagline}</h3>
                      <p>{working.text}</p>
                    </div>
                  ))}
                </div>
                <h5>Come join our family</h5>

             </Fade>
            </div>
          </div>

        </section>
        <section className={classes.heroTwoSection} style={{marginBottom: 20}}>
          {/* <img src={HeroTwo} alt=""/> */}
          <div className="container">
            <div className={classes.heroTwoContent}>
                  <div className={classes.heroTwoContentOne}>
                      <h1>Pet Delivery</h1>
                      <p>Faster Pick Up & Delivery for your pet or livestock from a source you can trust. We are the first pet delivery service that picks up delivers at your convenience.</p>
                      <div className={classes.appLinkSection}>
                        <Link to='/'>
                          <img src={ios} alt="" style={{marginRight: 5}}/>
                        </Link>
                        <Link to='/'>
                          <img src={android} alt=""/>
                        </Link>
                      </div>
                  </div>  
                  <div className={classes.heroTwoContentTwo}>
                   <img src={phone} alt="" className={classes.heroTwoPhone}/> 
                  </div>       
            </div>
          </div>
        </section>

      </>

    );
}