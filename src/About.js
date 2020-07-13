import React, {useEffect, useRef} from "react";
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';
import DrivingState from './DrivingState';
import Nav from './Nav';
import mobile from './images/aboutpage/mobile.png'
import Fade from 'react-reveal/Fade';
import mobileTopWave from './images/aboutpage/mobileTopWave.svg'

import {TimelineLite ,TweenMax, Power3} from 'gsap';
import { useIntersection } from "react-use";
import gsap from "gsap";



import main from './images/aboutpage/Rectangle-1.svg';
import meet from './images/aboutpage/meet/meet.png';
import meet1 from './images/aboutpage/meet/meet1.png';
import meet2 from './images/aboutpage/meet/meet2.png';
import meet3 from './images/aboutpage/meet/meet3.png';

import working from './images/aboutpage/working/working.png';
import working1 from './images/aboutpage/working/working1.png';
import working2 from './images/aboutpage/working/working2.png';
import working3 from './images/aboutpage/working/working3.png';
import working4 from './images/aboutpage/working/working4.png';
import working5 from './images/aboutpage/working/working5.png';
import working6 from './images/aboutpage/working/working6.png';
import arrow from './images/aboutpage/arrow.png';
import pagarrow from './images/aboutpage/pagarrow.png';
import pagarrow1 from './images/aboutpage/pagarrow1.png';



const useStyles = makeStyles({

 topSpace:{
      display: 'none',
    },
 main:{
   '& svg': {
     display: 'none'
   }
 },
  aboutpage: {
    display: 'flex',
    width: '100%'
  },
  positionsTitle:{
    fontWeight: 'normal',
    textAlign: 'center'
  },
  root: {
    width: '100%',
    top: '-350px',
    position: 'absolute',
    zIndex: '-1',
    // backgroundColor: '#1a1a1a',
    // backgroundBlendMode: 'overlay',
    // opacity: '0.6',
  },
  top: {
    marginTop: '10%',
    marginBottom: '10%',
    width: '100%',
    position: 'relative',
    '&::before': {
      position: 'absolute',
      right: 0,
      top: '13%',
      height: '65px',
    },
  },
  describe:{
    color: '#fff',
    marginLeft: '40vh',
    marginRight: '40vh',
    fontSize: '1.1em',
    lineHeight: '20px'  },
  headline: {
    color: colors.white,
    fontSize: '40px',
    lineHeight: '60px',
    marginBottom: 0,
    marginLeft: '17%',
  },
  description: {
    color: colors.white,
    fontSize: '14px',
    lineHeight: '20px',
    marginLeft: '17%',
    marginRight: '20%',
    marginTop: '0',
  },
  button: {
    backgroundColor: colors.orangeRed,
    color: colors.white,
    padding: '13px 25px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '12px',
    lineHeight: '25px',
    marginLeft: '17%',
    marginTop: '40px',
  },
  sub: {
    width: '30%',
    margin: '0 auto',
    position: 'relative',
    top: '350px'
  },
  subNav: {
    marginTop: '0%',
    textAlign: 'center',
    backgroundColor: '#f9f8f8',
    padding: '20px',
    position: 'relative',
    marginBottom: '20px'
    
  },
  subNavA: {
    padding: '20px',
    textDecoration: 'none',
    color: colors.maroon,
    transition: 'all linear 0.3s',
    '&:hover': {
      color: colors.orangeRed,
      textDecoration: 'none',
    },
  },
  meetWrapper: {
    display: 'flex',
    marginTop: '350px',
    marginBottom: '70px',
    position: 'relative',
    top: '50px',
  },
  meetContent: {
    width: '50%',
  },
  meetContentH1: {
    fontSize: '30px',
    marginBottom: '40px',
    color: colors.brown,
    fontWeight: 'normal',
    marginTop: '50px'
  },
  meetContentP: {
    fontSize: '16px',
    color: colors.textColor,
    lineHeight: '30px',
  },
  meetImages: {
    width: '50%',
  },
  meetImage:{
    padding: 5,
  },
  meetImageOne:{
    marginLeft: '40px',
    marginTop: '50px'
  },
  aboutMobileBottomWave:{
    display: 'none'
  },
  aboutMobileTopWave:{
    display: 'none'
  },
  aboutSection: {
    backgroundColor: '#efefefa1',
    // height: 'auto'
    padding: '50px',
    width: '100%'
    
  },
  working: {
    marginTop: '-200px',

    '& h5': {
      marginTop: '50px',
      textAlign: 'center',
      color: colors.brown,
      fontSize: '30px'
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
    textAlign: 'center',
    color: colors.brown,
    fontSize: '35px',
    fontWeight: 'bolder',
    top: '250px',
    // fontWeight: 'normal',
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
        }
      },

      '& img': {
        height: '80px',
      },
      '& h3': {
        color: colors.brown,
        fontSize: '18px',
        fontWeight: 'bolder'
      },
      '& p': {
        color: colors.darkGreyTxt,
        fontSize: '14px',
        lineHeight: '15px',
      },
    },
  },
  workSection:{
    marginTop: '20px'
  },
  positions: {
    marginBottom: '150px',
    marginTop: '100px',
    '& h4': {
      fontSize: '25px',
      marginBottom: '50px',
      color: colors.brown,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    // job:{
    //   display: 'flex',
    //   flexFlow: 'wrap'
    // },
    job:{

    },
    '& section': {
      display: 'flex',
      flexFlow: 'row wrap',
      // flexDirection: 'row',
      // flex: '0 0 33.333333%',
      justifyContent: 'space-between',
      borderRadius: '5px',
      backgroundColor: '#F9F9FA',
      margin: '20px',
      padding: '20px',
      fontSize: '15px',
      
      '&:hover': {
        backgroundColor: colors.orangeRed,
        color: colors.white,
        '& span:first-child': {
          color: colors.white,
        },
        '& img': {
          filter: 'brightness(0) invert(1)',
        },
        
      },

      '& span:first-child': {
        color: colors.darkOrangeRed,
        width: '70%',
      },
      '& span:second-child': {
        textAlign: 'left',
      },
    },
  },
  pagination: {
    // width: '50%',
    margin: 'auto',

    '& a': {
      color: 'black',
      float: 'left',
      padding: '8px 16px',
      textDecoration: 'none',
    },
    '& a.active': {
      color: colors.orangeRed,
    },
    '& a:hover': {
      backgroundColor: colors.orangeRed,
      color: colors.white,
      '& img': {
        filter: 'brightness(0) invert(1)',
      },
    },
  },
  pagText: {
    textAlign: 'center',
    lineHeight: '20px',
    width: '90%',
    fontSize: '15px',
    margin: '0 auto',
    '& span': {
      color: colors.orangeRed,
    },
  },
'@media(min-width: 320px)':{
  aboutDesktopTopWave:{
    display:'none'
  },
  aboutDestopBottomWave:{
    display:'none',
  },
  aboutMobileTopWave:{
      display:'block',
      position: 'relative',
      top: '2px'
  },
  aboutMobileBottomWave:{
    display:'block'
  },
  subNavA: {
    padding: '20px',
    textDecoration: 'none',
    color: colors.maroon,
    transition: 'all linear 0.3s',
    '&:hover': {
      color: colors.orangeRed,
      textDecoration: 'none',
    },
    width: '100%',
    marginLeft: '10px'
  },
  subNav: {
    marginTop: '0%',
    textAlign: 'center',
    backgroundColor: '#f9f8f8',
    // padding: '20px',
    position: 'relative',
    marginBottom: '20px',
    right: '100px'
  },
  meetWrapper:{
    display: 'flex',
    flexReverse: 'row',
    position: 'relative'
  },
  meetContentH1:{
    fontWeightt: 'normal',
    position: 'relative',
    bottom: '150px',
    marginTop: '20px'
  },
  meetContentP:{
    fontWeight: 'normal',
    justifyContent: 'center',
    position: 'relative',
    top: '250px',
  },

  meetContent: {
    width: '100%',
    position: 'relative',
    top: '270px',
    flex: 1
  },
  meetImages:{
    flex: 1,
    Width: '100%',
    position: 'relative',
    bottom: '100px',
    margin: '0px auto'
  },
  meetImage:{
    flex: '15%',
    maxWidth: '45%'
  },
  meetImageOne:{
    marginLeft: '10px'
  }
},
'@media(min-width: 767px)':{
  aboutDesktopTopWave:{
    display: 'block'
  },
  aboutMobileBottomWave:{
    display: 'none'
  },
  aboutMobileTopWave:{
    display: 'none'
  },
  aboutDestopBottomWave:{
    display:'block',
  },
}

});

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
const positions = [
  {
    tagline: 'Full Stack Developer, Florida',
    text: 'Remote',
    image: arrow,
  },
  {
    tagline: 'Marketing Manager, Florida',
    text: 'Full Time',
    image: arrow,
  },
  {
    tagline: 'UI/UX Designer, Florida',
    text: 'Remote',
    image: arrow,
  },
  {
    tagline: 'Customer Service Agent, Florida',
    text: 'Part Time',
    image: arrow,
  },
  {
    tagline: 'Team Member, Florida',
    text: 'Remote',
    image: arrow,
  },
  {
    tagline: 'Trainer, Florida',
    text: 'Remote',
    image: arrow,
  },
  {
    tagline: 'Finance, Florida',
    text: 'Remote',
    image: arrow,
  },
];

export default function About() {

  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  //Animations for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity:1,
      y: -60,
      ease: "power4.out",
      stagger:{
        amount: 0.3
      }
    });
  };

   //Animations for fading Out
   const fadeOut = element => {
    gsap.to(element, 1, {
      opacity:0,
      y: -20,
      // x: 40,
      ease: "power4.out",
    });
  };
  //Animations for increasin Height
  const ZoomOut = element =>{

  };

  //checking to see when the viewport is visible to the user
  intersection && intersection.intersectionRatio < 0.2 
  ? fadeOut(".fadeIn")
  : fadeIn(".fadeIn");





  const classes = useStyles();
  // let app = useRef(null)
  // let images = useRef(null)
  // let content = useRef(null)
  // let tl = new TimelineLite({ delay: .8});

  
  return (
    <>
        <div className={classes.main} >
            
            <div className='top'>
                <div className="top-one">
                    <Nav/>

                    <div className="desc">
                        {/* <div className='info' > */}

                            <h1 className='headline'>Join Our Team!</h1>

                            <p className='describe'>Want to work for an amazing start up with awesome benefits, great growth potential and career development? Well look no further! Here at Pawndr we love to hire the best talent to join our company & community.</p>

                            <button className='button'>View Jobs</button>

                        {/* </div> */}
                    </div>
                    
                </div>
                 
            </div>
          
        </div>

        <div className="main-section">
            <main >

            <section className={classes.sub}>

                <div className={classes.subNav}>
                    <a href="#company" className={classes.subNavA}>
                        Company
                    </a>

                    <a href="#values" className={classes.subNavA}>
                        Values
                    </a>
                    
                    <a href="#jobs" className={classes.subNavA}>
                        Jobs
                    </a>
                </div>

            </section>

            <div className="container">
                
                <div className={classes.company} >
                
                    <div className={classes.meetWrapper} id="company" >
                        
                        <div ref={sectionRef} className={classes.meetContent}>
                            <h1 className={`${classes.meetContentH1} `}>Meet Our Company</h1>
                              <p className={`${classes.meetContentP} `}>
                            Pawndr started as a little humble Miami -based start up that believes
                            in the fair treatment for all lives, both man and animal.{' '}
                            </p><br/><br/>
                            <p className={`${classes.meetContentP}`}>
                            We built are company on strong ethic and moral values that has now 
                            since transformed the way pets, animals and livestock are 
                            transported and cared for. We are a for-profit business with non profit values. {' '}
                            </p>
                        </div>

                        <div className={classes.meetImages} ref={sectionRef}>
                            <img src={meet1} alt=""  className={`${classes.meetImage, classes.meetImageOne} fadeIn`} style={{marginLeft: 20, marginRight: 5}} />
                            <img src={meet2} alt="" className={`${classes.meetImage} fadeIn`} />
                            <img src={meet} alt="" className={`${classes.meetImage} fadeIn`} style={{marginTop:0,position:'relative', width: 250, height: 150  }} />
                            <img src={meet3} alt="" className={`${classes.meetImage} fadeIn`} style={{position: 'relative', left: 25}} />
                        </div>                  

                    </div>

                </div>

             </div>
                {/* style in the index.css */}
                {/* <svg className={classes.aboutTopWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L120,176C240,192,480,224,720,245.3C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
                {/* <div className={classes.aboutMobileTopWave}></div> */}
               <svg className={classes.aboutDesktopTopWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,170.7C640,160,800,192,960,218.7C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>                <svg className={classes.aboutMobileTopWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L120,101.3C240,107,480,117,720,154.7C960,192,1200,256,1320,288L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
               <div className={classes.aboutSection}>
                    <div className={classes.working} id="values">
                    {/* <img src={working} className={classes.workingImage} alt="" /> */}
                        <div className="container">
                            <h1 className={classes.workingHeadline}>About Working Here</h1>
                            
                            <div className={classes.workingContainer}>
                                {workings.map((working, index) => (
                                
                                <Fade bottom up>
                                    <div key={index} className={classes.workSection}>
                                        <img src={working.image} alt="" />
                                        <h3 style={{marginTop: 20, marginBottom: 20, fontWeight: 'bolder'}}>{working.tagline}</h3>
                                        <p>{working.text}</p>
                                    </div>
                                </Fade>
                                ))}
                            </div>
                        </div>

                        <h5>Come join our family</h5>
                </div>


            </div>
            <svg className={classes.aboutMobileBottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,256L120,245.3C240,235,480,213,720,181.3C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <svg className={classes.aboutDestopBottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,128L80,138.7C160,149,320,171,480,149.3C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <div className={classes.positions} id="jobs">
                    <div className="container">
                        <h4 className={classes.positionsTitle}>Open Positions</h4>
                        <div className={classes.job} >
                            {positions.map((position, i) => (
                            <section key={i}>
                                <span>{position.tagline}</span>
                                <span>{position.text}</span>
                                <img src={position.image} alt="" />
                            </section>
                            ))}
                        </div>

                        <div className={classes.pagination}>
                            <a href="!#" alt="">
                                <img src={pagarrow} alt="" />
                            </a>
                            <a href="!#" alt="">
                                1
                            </a>
                            <a href="!#" alt="">
                                2
                            </a>
                            <a href="!#" alt="">
                                3
                            </a>
                            <a href="!#" alt="">
                                4
                            </a>

                            <a href="!#" alt="">
                                ...
                            </a>
                            
                            <a href="!#" alt="">
                                50
                            </a>

                            <a href="!#" alt="">
                                <img src={pagarrow1} alt="" />
                            </a>
                            <br />
                            <br />
                            <br />
                        </div>
                        <p className={classes.pagText} style={{marginTop: 20}}>
                        If your career has been impacted by covid-19 and you don’t see a
                        position that fits what you’re looking for,
                        <br />
                        <span>send your resume.</span>
                        We’ll keep it on file for the future.
                        </p>
                </div>
                </div>
            </main>

        </div>
            </>
  );
}
