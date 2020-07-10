import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ios from './images/homepage/main/ios.svg';
import android from './images/homepage/main/android.svg';
import mainPaws from './images/homepage/main/main-paws.svg';
import cat from './images/homepage/main/cat.png';
import dog from './images/homepage/main/dog.png';
import phone from './images/homepage/main/phone-demo.svg';
import { colors } from './colors';

import Steps from './Steps';
import Features from './Features';
import SocialProof from './SocialProof';
import CTA from './CTA';
import Testimonials from './Testimonials';
import Nav from './Nav';

const useStyles = makeStyles({
  root: {
    margin: '100px 0',
    display: 'flex',
    alignItems: 'center',
  },
  intro: {
    // width: '425px',
    width: '50%',
    marginTop: '-40px',
    padding: '20px',
    position: 'relative',
    '&::before': {
      content: `url(${mainPaws})`,
      position: 'absolute',
      // right: 0,
      bottom: '100%',
      height: '65px',
    },
  },
  headline: {
    color: colors.orangeRed,
    fontSize: '50px',
    lineHeight: '60px',
    marginBottom: 0,
  },
  description: {
    color: colors.darkGreyTxt,
    fontWeight: 500,
    lineHeight: '25px',
    marginBottom: '20px'
  },
  images: {
    display: 'flex',
    // width: '80%',
    marginLeft: '-15px',
  },
  ios: {
    marginRight: '12px',
  },
  hero: {
    display: 'flex',
    alignItems: 'baseline',
  },
  cat: {
    marginLeft: '-100px',
    width: '263px',
    minWidth: '110px',
    maxWidth: '80%',
  },
  dog: {
    width: '297px',
    maxWidth: '80%',
    minWidth: '110px',
    marginLeft: '-33px',
  },
  phone: {
    marginLeft: '-30px',
    position: 'absolute',
    top: '40vh',
    // width: '250px',
    right: '50px'
  },
  // '@media(min-width:1441px)': {
  //   cat: {
  //     marginLeft: '-50px',
  //     width: '300px',
  //   },
  //   dog: {
  //     width: '350px',
  //     maxWidth: '80%',
  //     minWidth: '110px',
  //     marginLeft: '-33px',
  //   },
  //   phone: {
  //     marginLeft: '-130px',
  //     position: 'relative',
  //     bottom: '10px',
  //   },
  // },
  '@media(max-width: 991px)': {
    root: { marginTop: '75px', display:'flex', flexdirection: 'row'},
    intro: {
      width: '350px',
      flex: 1
    },
    headline: {
      fontSize: '40px',
      lineHeight: '50px',
    },
    description: {
      fontSize: '14px',
    },
    images: {
      display: 'flex',
      marginLeft: '10px',
    },
    cat: {
      width: '200px',
      height: '250px',
      position: 'relative',
      top: '40px',
      left: '20px'
    },
    dog: {
      width: '250px',
      position: 'relative',
      bottom: '10px',
      left: '20px'
    },
    phone: {
      width: '170px',
      height: '250px',
      position: 'relative',
      right: '50px',
      top:'40px'
    },
    hero:{
      flex: 1,
      '&::before': { content: `url(${mainPaws})`, position: 'absolute', bottom: '80vh', left:'300px'  },

    },
    
  },
  '@media(max-width: 767px)': {
    // container: {
    //   display: 'flex',
    //   flexDirection: 'row'
    // },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
      
    }, images: {
      display: 'flex',
      marginLeft: '10px',
    },

    intro: {
      '&::before': { content:'""' },
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap', 
      marginBottom:'40px'
    },
    hero:{
       '&::before': { content: `url(${mainPaws})`, position: 'relative', bottom: '5px', left:'20px'  },
      width: '100%',
      flexDirection: 'column',
      flexWrap: 'wrap', 
    },
    headline: { fontSize: '38px', width:'100%', marginBottom: '60px', marginTop: '20px' },
    cat: {
      width: '130px',
      height: '220px',
      position: 'relative',
      left: '120px'
    },
    dog: {
      width: '200px',
      position: 'relative',
      left: '130px',
      height: '280px',
      top:'20px'
    },
    phone: { 
      position: 'relative',
      top: '40px',
      left: '30px',
      float: 'right',
      width: "200px",
      height: "240px"
     },
    ios: {
      width: '140px',
      height: '52px',
      marginRight: '5px',
    },
    android: {
      width: '170px',
      height: '82px',
      position: 'relative',
      top: '15px'
    },
    // description:{
    //   width: '100%',
    //   flex: 1,
    // }
   
  },
  
    '@media(max-width: 360px)': {
      phone: { 
        position: 'relative',
        top: '40px',
        left: '65px',
        float: 'right',
        width: "200px",
        height: "180px"
       },
       images: {
         display: 'flex',
         width: '80%',
         marginLeft: '-15px',
       },
       cat: {
        width: '130px',
        height: '180px',
        position: 'relative',
        left: '110px'
      },
      dog: {
        width: '200px',
        position: 'relative',
        left: '130px',
        height: '220px',
        top:'0px'
      },
      headline: { 
        fontSize: '38px', 
        width:'100%', 
        marginBottom: '10px', 
        marginTop: '20px' 
      },

      downloads: {
        width: '80%',
        display: 'flex'
      },
      android: {
        width: '150px',
        height: '82px',
        top: '-15px'
      },
      ios: {
        width: '130px',
        height: '52px',
        // marginRight: '5px',
      },

    }
  ,
  // '@media(max-width: 575px)': {
  //   intro: {
  //     width: '270px',
  //   },
  //   headline: {
  //     whiteSpace: 'nowrap',
  //     fontSize: '35px',
  //   },
  //   description: {
  //     fontSize: '14px',
  //   },
  //   cat: { width: '150px', marginLeft: '-70px' },
  //   dog: { width: '170px' },
  // },
  // '@media(max-width: 450px)': {
  //   intro: {
  //     width: '220px',
  //   },
  //   description: {
  //     width: '90%',
  //   },
  // },
  // '@media(max-width: 360px)': {
  //   intro: {
  //     width: '100%',
  //   },
  //   hero: {
  //     display: 'none',
  //   },
  //   description: {
  //     width: '100%',
  //   },
  // },
});

export default function HomepageMain() {
  const classes = useStyles();

  return (
    <>
    <Nav/>
      <main className={`${classes.root} container`}>
        <div className={classes.intro}>
          <h1 className={classes.headline}>
            Pet Delivery Made Simple.
          </h1>
          <p className={classes.description}>
            Faster Pick Up & Delivery for your pet or livestock from a source
            you can trust. We are the first pet delivery service that picks up
            delivers at your convenience.
          </p>
          <div className={classes.downloads}>
            <a href="http://apple.com">
              <img src={ios} alt="ios app download" className={classes.ios} />
            </a>
            <a href="http://google.com">
              <img
                src={android}
                alt="android app download"
                className={classes.android}
              />
            </a>
          </div>
          
        </div>

        <div className={classes.hero}>
          <div className={classes.images}>
            <img src={cat} alt="cat" className={classes.cat} />
            <img src={dog} alt="dog" className={classes.dog} />
            <img src={phone} alt="phone" className={classes.phone} />
          </div>
        </div>
      </main>
      <Steps />
      <Features />
      <SocialProof />
      <Testimonials />
      <CTA />
    </>
  );
}
