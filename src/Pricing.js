import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';
import greyPaws from './images/grey-paws.svg'
import mobileBackground from './images/pricing/pricingMobileBackground.svg'

import main from './images/pricing/main.png';
import icon from './images/pricing/icon.png';
import icon1 from './images/pricing/icon1.png';
import DrivingState from './DrivingState';
import Swing from 'react-reveal/Swing';
import Nav from './Nav';



const useStyles = makeStyles({
  body:{
    margin: 0,
    padding:0
   },
   mobileBackground:{
      display: 'none'
   },
  root: {
    width: '100%',
    bottom: '20%',
    position: 'absolute',
    zIndex: '-1',
  },
  intro: {
    marginBottom: '10%',
    marginTop: '15%',
    '& h3': {
      color: colors.darkOrangeRed,
      fontSize: '25px',
      textAlign: 'center',
    },
    '&::before': {
      content: `url(${greyPaws})`,
      position: 'absolute',
      right: 0,
      left: '20%',
      height: '65px',
    },
  },
  pricingContainer: {
    width: '70%',
    margin: '0 auto',
  },
  pricingCard: {
    marginTop: '50px',
    display: 'flex',
    margin: '0 auto',
  },
  pricingCard1: {
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundColor: colors.orangeRed,
    color: colors.white,
    borderRadius: '15px',
    width: '50%',
    height: '400px',
    margin: '10px',
    padding: '10px',
    '& p': {
      fontSize: '13px',
    },
  },
  pricingCardBest: {
    textAlign: 'center',
    fontSize: '13px',
    color: colors.orangeRed,
    width: '100%',
    marginBottom: '8px',
    position: 'absolute',
    top: '30px',
    zIndex: '1',
    '& span': {
      backgroundColor: '#FED31C',
      borderRadius: '5px',
      padding: '12px',
      position: 'relative',
      bottom: '30px'
    },
    '& div':{
        backgroundColor: '#FED31C',
        borderRadius: '5px',
        padding: '12px',
        position: 'relative',
        bottom: '20px', 
        left: '140px'    
       },
    fontWeight: 'bold',
   
  },
  paneOne:{
    position:'relative',
    top: '20px'
  },
  triangle:{
   display: 'flex',
    height: '20px',
    width: '20px',
    backgroundColor: 'inherit',
    border: 'inherit',
    position: 'absolute',
    top: '-40px',
    left: '170px',
    // left: 'calc(50% -50px)',
    clipPath: 'polygon(0% 0% , 100% 100%, 0% 100%)',
    transform: 'rotate(-45deg)',
    borderRadius: '0 0 0 0.25em'
  },
  pricingCardButtonOne:{
    textAlign: 'center',
    marginTop: '70px',
    
    '& a': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      textDecoration: 'none',
      color: colors.brown,
      fontSize: '10px',
      backgroundColor: colors.white,
      padding: '20px 30px',
      borderRadius: '5px',
      postion: 'relative',
    top: '100px',
      '&:hover': {
        color: colors.orangeRed,
      },
    },
    '&::before': {
      content: `url(${greyPaws})`,
      position: 'absolute',
      right: 0,
      left: '20%',
      height: '500%',
    },
  },
  pricingCardButton: {
    textAlign: 'center',
    marginTop: '70px',
    postion: 'relative',
    '& a': {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      textDecoration: 'none',
      color: colors.brown,
      fontSize: '10px',
      backgroundColor: colors.white,
      padding: '20px 30px',
      borderRadius: '5px',
      '&:hover': {
        color: colors.orangeRed,
      },
    },
    '&::before': {
      content: `url(${greyPaws})`,
      position: 'absolute',
      right: 0,
      left: '20%',
      height: '500%',
    },
  },
  pricingCard2: {
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundColor: colors.white,
    color: colors.brown,
    borderRadius: '15px',
    width: '50%',
    height: '400px',
    margin: '10px',
    padding: '30px',
    '& p': {
      fontSize: '13px',
    },
  },
  '@media(max-width: 991px)': {
    root: {
      width: '100%',
      bottom: '50%',
      position: 'absolute',
      zIndex: '-1',
    },
    pricingContainer: {
      width: '90%',
    },
    pricingCard1: {
      '& p': {
        fontSize: '13px',
      },
    },
    pricingCard2: {
      '& p': {
        fontSize: '13px',
      },
    },
    triangle:{
      display: 'block',
      height: '20px',
      width: '20px',
      backgroundColor: 'inherit',
      border: 'inherit',
      position: 'absolute',
      top: '-40px',
      left: '105px',
      clipPath: 'polygon(0% 0% , 100% 100%, 0% 100%)',
      transform: 'rotate(-45deg)',
      borderRadius: '0 0 0 0.25em'
    },
  },
  '@media(max-width: 767px)': {
    pricingCard1: {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      backgroundColor: colors.orangeRed,
      color: colors.white,
      borderRadius: '15px',
      width: '50%',
      height: '400px',
      margin: '10px',
      padding: '5px',
      '& p': {
        fontSize: '13px',
      },
    },
    mobileBackground:{
      display: 'block',
      height:'200vh',
   },
    pricingContainer: {
      width: '100%',
    },
    pricingCard: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    pricingCardBest: {
      textAlign: 'center',
      fontSize: '13px',
      color: colors.orangeRed,
      width: '100%',
      marginBottom: '8px',
      position: 'absolute',
      top: '30px',
      right: '10px',
      zIndex: '1',
      '& span': {
        backgroundColor: '#FED31C',
        borderRadius: '5px',
        padding: '12px',
        position: 'relative',
        bottom: '30px',
      },
      '& div':{
        backgroundColor: '#FED31C',
        borderRadius: '5px',
        padding: '12px',
        position: 'relative',
        bottom: '25px', 
        left: '130px' ,   
       },
      fontWeight: 'bold',
     
    },
    pricingCardButtonOne:{
      textAlign: 'center',
      marginTop: '70px',
      
      '& a': {
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textDecoration: 'none',
        color: colors.brown,
        fontSize: '10px',
        backgroundColor: colors.white,
        padding: '20px 30px',
        borderRadius: '5px',
        postion: 'relative',
        top: '100px',
        '&:hover': {
          color: colors.orangeRed,
        },
      },
      '&::before': {
        content: `url(${greyPaws})`,
        position: 'absolute',
        right: 0,
        left: '20%',
        height: '500%',
      },
    },
    
    // pricingCardBest: {
    //   textAlign: 'center',
    //   fontSize: '13px',
    //   color: colors.orangeRed,
    //   width: '100%',
    //   marginBottom: '8px',
    //   position: 'relative',
    //   left: '0px',
    //   zIndex: '1',
    //   '& span': {
    //     backgroundColor: '#FED31C',
    //     borderRadius: '5px',
    //     // padding: '12px',
    //     position: 'relative',
    //     bottom: '30px'
    //   },
    //   fontWeight: 'bold',
     
    // },
    intro: {
      '&::before': {
        content: `"''"`,
        position: 'absolute',
        right: 0,
        left: '2s0%',
        height: '65px',
      },
      '& h3' :{
            marginRight: '100px',
            marginLeft: '50px',
            textAlign: 'center', 
            overflow: 'hidden',
            whiteSpace: "nowrap",
      }
    },
    body: {
      '& img' : {
        display: 'inline-block'
      },
      
      // backgroundImage: `url(${mobileBackground})`
    },
    triangle:{
      display: 'flex',
      height: '20px',
      width: '20px',
      backgroundColor: 'inherit',
      border: 'inherit',
      position: 'absolute',
      top: '-35px',
      left: '240px',
      clipPath: 'polygon(0% 0% , 100% 100%, 0% 100%)',
      transform: 'rotate(-45deg)',
      borderRadius: '0 0 0 0.25em'
    },
    mainSection:{
      backgroundColor: '#F9F9FA',
      // height: "90vh",
      position:'relative',
      bottom: "30px"
  },
 
  },
  '@media(max-width: 575px)': {
    intro: {
      '& h3': {
        fontSize: '22px',
        marginBottom: '80px',
      },
    },
    pricingContainer: {
      width: '100%',
    },
    pricingCard: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    pricingCard1: {
      borderRadius: '10px',
      width: '80%',
      margin: '20px',
      padding: '30px',
      '& p': {
        fontSize: '13px',
      },
    },
    pricingCard2: {
      borderRadius: '10px',
      width: '80%',
      margin: '20px',
      padding: '30px',
      '& p': {
        fontSize: '13px',
      },
    },
  },
  '@media(max-width: 450px)': {
    intro: {
      '& h3': {
        fontSize: '20px',
      },
    },
    pricingContainer: {
      width: '100%',
    },
    pricingCard: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    pricingCard1: {
      borderRadius: '10px',
      width: '80%',
      margin: '8px',
      padding: '30px',
      '& p': {
        fontSize: '13px',
      },
    },
    pricingCard2: {
      borderRadius: '10px',
      width: '80%',
      margin: '8pc',
      padding: '30px',
      '& p': {
        fontSize: '13px',
      },
    },
  },
  '@media(max-width: 320px)': {
    pricingContainer: {
      width: '100%',
    },
    pricingCard: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    pricingCardBest: {
      textAlign: 'center',
      fontSize: '13px',
      color: colors.orangeRed,
      width: '100%',
      marginBottom: '8px',
      position: 'absolute',
      top: '30px',
      right: '10px',
      zIndex: '1',
      '& span': {
        backgroundColor: '#FED31C',
        borderRadius: '5px',
        padding: '12px',
        position: 'relative',
        bottom: '30px',
      },
      '& div':{
        backgroundColor: '#FED31C',
        borderRadius: '5px',
        padding: '12px',
        position: 'relative',
        bottom: '25px', 
        left: '130px' ,   
       },
      fontWeight: 'bold',
     
    },
    pricingCardButtonOne:{
      textAlign: 'center',
      marginTop: '17px',
      
      '& a': {
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textDecoration: 'none',
        color: colors.brown,
        fontSize: '10px',
        backgroundColor: colors.white,
        padding: '20px 30px',
        borderRadius: '5px',
        postion: 'relative',
        top: '100px',
        '&:hover': {
          color: colors.orangeRed,
        },
      },
      '&::before': {
        content: `url(${greyPaws})`,
        position: 'absolute',
        right: 0,
        left: '20%',
        height: '500%',
      },
    },
    pricingCardButton: {
      // textAlign: 'center',
      marginTop: '45px',
      
        
    },
    
  },
});

export default function Pricing() {
  const classes = useStyles();
  return (
    <>
    {/* <svg className={classes.mobileBackground}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,320L1440,192L1440,0L0,0Z"></path></svg> */}
    <Nav/>
    <section className={classes.body}>
      <img src={main} alt="" className={classes.root} />
      <div className= "container" >
        <div className={classes.intro}>
          <h3>Join the Pawndr Valet Subscription!</h3>
          <p style={{ textAlign: 'center' }}>
            Subscribe now and receive 
            <span style={{ color: colors.darkOrangeRed, marginLeft: 5 }}>
               3 Day Free Trial
            </span>
          </p>
          <div className={classes.pricingContainer}>
            <div className={classes.pricingCard}>
              <Swing>
                <div className={classes.pricingCard1}>
                  <div className={classes.pricingCardBest} >
                    <span>BEST VALUE</span>
                    <div className={classes.triangle}></div>
                  </div>
                  <div className={classes.paneOne}>
                      <p style={{ textAlign: 'center', fontSize: '25px', marginTop: '30px' }}>Yearly</p>
                      <p
                        style={{
                          textAlign: 'center',
                          fontSize: '35px',
                          lineHeight: '0',
                          marginTop: '25px'
                        }}
                      >
                        <sup style={{ fontSize: '20px' }}>$ </sup>149.99
                      </p>
                      <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px' }}>
                        Per year
                      </p>
                      <p style={{marginTop: '10px'}}>
                        <img src={icon} alt="" />
                        {'  '}
                        <span>Unlimited bookings per week</span>
                      </p>
                      <p style={{marginTop: '10px'}}>
                        <img src={icon} alt="" />
                        {'  '}
                        <span>Increase monthly income</span>
                      </p>
                      <p style={{marginTop: '10px'}}>
                        <img src={icon} alt="" />
                        {'  '}
                        <span>Real time alerts and notifications</span>
                      </p>
                      <p style={{marginTop: '10px', }}>
                        <img src={icon} alt="" />
                        {'  '}
                        <span>Save 60% off</span>
                      </p>
                      <br/>
                      <br/>
                  </div>
                  <div className={classes.pricingCardButtonOne}>
                    <a href="!#" alt="">
                      Start 3 Day Trial
                    </a>
                  </div>
                </div>
              </Swing>
              <Swing>
                  <div className={classes.pricingCard2}>
                    <p style={{ textAlign: 'center', fontSize: '25px', marginTop:'30px'}}>Monthly</p>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '35px',
                        lineHeight: '0',
                        marginTop: '25px'
                      }}
                    >
                      <sup style={{ fontSize: '20px' }}>$ </sup>19.99
                    </p>
                    <p style={{ textAlign: 'center', fontSize: '12px' ,marginTop: '20px'}}>
                      Per month
                    </p>

                    <p style={{marginTop: '10px'}}>
                      <img src={icon1} alt="" />
                      {'  '}
                      <span>Unlimited bookings per week</span>
                    </p>
                    <p style={{marginTop: '10px'}}>
                      <img src={icon1} alt="" />
                      {'  '}
                      <span>Increase monthly income</span>
                    </p>
                    <p style={{marginTop: '10px'}}>
                      <img src={icon1} alt="" />
                      {'  '}
                      <span>Real time alerts and notifications</span>
                    </p>
                    <p>
                      <br />
                      <br />
                      <br />
                    </p>
                    <div className={classes.pricingCardButton}>
                      <a href="!#" alt="">
                        Start 3 Day Trial
                      </a>
                    </div>
                  </div>

              </Swing>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
