import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';
import unit1 from './images/homepage/steps/home-step-unit-1.png';
import unit2 from './images/homepage/steps/home-step-unit-2.png';
import unit3 from './images/homepage/steps/home-step-unit-3.png';
import unit4 from './images/homepage/steps/home-step-unit-4.png';
import UnitGen from './UnitGen';
import bottomWave from './images/wave.svg';
import greyPaws from './images/grey-paws.svg';
import mobileBackground from './images/homepage/steps/RectangleMobile.png'
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles({
  root: {
    backgroundColor: colors.orangeRed,
    textAlign: 'center',
    // backgroundImage: " url('./images/homepage/steps/home-step-unit-4.png') ",
    opacity: 1,
    '& svg':{
        display: 'none',
      }
  },
  sectionTitle:{
    display: 'hidden'
  },
  topWave: {
    width: '100%',
    transform: 'scaleY(-1)',
    marginTop: '-0.3vw',
    '@media(max-width:360px)': { marginTop: '-0.6vw' },
  },
  unitContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    position: 'relative',
    marginTop: '170px',
    '&::before': {
      content: "''",
      mask: `url(${greyPaws}) no-repeat`,
      maskSize: 'cover',
      width: '96px',
      height: '91px',
      position: 'absolute',
      left: '5%',
      top: '-33%',
      backgroundColor: '#000',
    },
    '& div': {
      width: '260px',
      maxWidth: '100%',
      '&:nth-child(2)': {
        '@media(min-width: 1441px)': {
          margin: '0 75px',
        },
      },
      '&:nth-last-child(1)': {
        margin: '50px auto 0',
      },
      '& img': {
        width: '110px',
        height: '80px',
      },
      '& h3': {
        color: 'black',
        fontSize: '22px',
        fontWeight: 'normal'
      },
      '& p': {
        color: colors.white,
        fontSize: '14px',
        lineHeight: '18px',
      },
    },
  },
  endline: {
    fontSize: '18px',
    color: colors.white,
    maxWidth: '550px',
    margin: '50px auto 0',
    lineHeight: '33px',
  },
  bottomWave: {
    width: '100%',
    marginTop: '170px',
    marginBottom: '-1vw',
    '@media(max-width:576px)': {
      marginBottom: '-2vw',
    },
  },
  '@media(max-width: 991px)': {
    unitContainer: {
      '& div': {
        '&:nth-last-child(1)': {
          margin: '40px 0 0',
        },
        '&:nth-last-child(2)': {
          marginTop: '40px',
        },
      },
    },
    sectionTitle:{
      color: '#fff',
      fontSize: '1.4em'

    },
    root:{
       '& svg':{
        display: 'none',
      }
    }
  },
  '@media(max-width: 767px)': {
    unitContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      position: 'relative',
      marginTop: '170px',
      '&::before': { content:'""' },
      mask: `url(${greyPaws}) no-repeat`,

      
    },
    root:{
      backgroundColor: '#FE634F',
      // backgroundImage: `url(${mobileBackground})`,
      opacity: 1,
      '&:nth-child(2)': {
        visibility: 'hidden'
      },
      '& svg':{
        display: 'block',
        width: '100%',
        stroke: '#fff',
        strokeWidth: '0px',

        // shapeRendering: 'crispEdges',
      }
    },
    topWave: {
      display: 'none'
    },
    bottomWave: {
      display: 'none'
    },
    sectionTitle:{
      color: '#fff',
      fontSize: '1.4em'
    },
    unitContainer: {
      flexDirection: 'column',
      alignItems: 'center',

      '&::before': {
        top: '-12%',
        left: '7%',
      },
      '& div h3': {
        fontSize: '20px',
      },
      '& div:nth-child(2)': { marginTop: '40px' },
    },
  },
  
  '@media(max-width: 360px)': {
    root: {
      marginTop: '-100px',
    },
    unitContainer: {
      marginTop: '40px'
      
    },
  }
});

const units = [
  {
    image: unit1,
    tagline: 'Book!',
    text:
      'Fill in Booking  Pick Up & Delivery request through the booking app.',
  },
  {
    image: unit2,
    tagline: 'Pay!',
    text:
      'Make a payment, for your convenience we accept almost all the payments methods.',
  },
  {
    image: unit3,
    tagline: 'Relax!',
    text: 'Relax & Wait for A Trusted Valet to Pick Up Your Pet',
  },
  {
    image: unit4,
    tagline: 'Thats it! Good Job!',
    text: 'A Valet will be on the way.',
  },
];

export default function Steps() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,0L60,5.3C120,11,240,21,360,42.7C480,64,600,96,720,122.7C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
    {/* <svg className={classes.waveTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 321"><path fill="#fff" fill-opacity="1" d="M0,64L120,96C240,128,480,192,720,234.7C960,277,1200,299,1320,309.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
    <svg className={classes.waveTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,106.7C960,139,1200,181,1320,202.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <img src={bottomWave} alt="" className={classes.topWave} />
      <p className={classes.sectionTitle}> How it works?</p>
      <div className="container">
      <Fade bottom big>
                <div className={classes.unitContainer}>
          {units.map((unit, i) => (
            <UnitGen key={i} content={unit} />
          ))}
        </div>
      </Fade>
      <Fade bottom big>
        <h3 className={classes.endline}>
          When you book with us we give 25% off to local shelters & rescues on
          transportation.
        </h3>
        </Fade>
      </div>
      <img src={bottomWave} alt="" className={classes.bottomWave} />
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,320L120,304C240,288,480,256,720,234.7C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,320L120,304C240,288,480,256,720,208C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </section>
  );
}
