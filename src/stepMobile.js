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
      // backgroundColor: 'black',
      backgroundImage: `url(${mobileBackground})`,
      opacity: 1,
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
      <p className={classes.sectionTitle}> How it works?</p>
      <div className="container">
        <Fade bottom>
        <div className={classes.unitContainer}>
          {units.map((unit, i) => (
            <UnitGen key={i} content={unit} />
          ))}
        </div>
        <h3 className={classes.endline}>
          When you book with us we give 25% off to local shelters & rescues on
          transportation.
        </h3>
        </Fade>
      </div>
    </section>
  );
}
