import React, {useEffect, useRef} from "react";
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';
import DrivingState from './DrivingState';
import Nav from './Nav';
import mobile from './images/aboutpage/mobile.png'
import Fade from 'react-reveal/Fade';

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
    fontWeight: 'normal'
  },
  root: {
    width: '100%',
    top: '-350px',
    position: 'absolute',
    // zIndex: '-1',
    // backgroundColor: '#1a1a1a',
    // backgroundBlendMode: 'overlay',
    // opacity: '0.6',
  },
  intro: {
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
    width: '60%',
  },
  meetImage:{
    padding: 5,
  },
  meetImageOne:{
    marginLeft: '40px',
    marginTop: '50px'
  },
  aboutSection: {
    backgroundColor: '#efefefa1',
    // height: 'auto'
    padding: '50px'
  },
  working: {
    marginTop: '-200px',

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
    marginTop: '200px',
    '& h4': {
      fontSize: '25px',
      marginBottom: '50px',
      color: colors.brown,
      textAlign: 'left',
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
    width: '50%',
    margin: '0 auto',

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

  '@media(max-width: 991px)': {
    root: {
      width: '100%',
      marginTop: '75px',
      top: '-110px',
    },
    intro: {
      marginTop: '0%',
      marginBottom: '15%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      '& h1':{
      fontSize: '50px',
      marginTop: '100px',
      marginLeft: '20px',
      width: '100%',
      flex: 1,
      },
      '& p': {
      fontSize: '18px',
      marginLeft: '20px',
      lineHeight: '30px',
      marginTop: '30px',
      marginRight: '20px',
      marginBottom: '50px',
      width: '100%',
      flex:1,
      },
      '& button':{
        backgroundColor: colors.orangeRed,
        color: colors.white,
        padding: '25px 30px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '15px',
        lineHeight: '25px',
        marginLeft: '20px',
        marginTop: '0',
        width: '25%'
      }


    },
    sub: {
      width: '60%',
      margin: '0 auto',
      position: 'absolute',
      top: '300px'
    },
    subNav: {
      position: 'absolute',
      top: '300px',
      left: '200px'
    },
    meetWrapper: {
      display: 'flex',
      marginTop: '200px',
      width: '100%',
    },
    meetContent: {
      meetContent: {
        width: '100%',
      },
    },
    meetImages: {
      width: '90%',
    },
    meetImage:{
      padding: 5,
    },
    workingHeadline: {
      top: '100px',
    },
    workingContainer: {
      marginTop: '140px',
    },
    workingImage: {
      height: '140%',
    },
    pagination: {
      margin: '0 auto',
      width: '60%',
    },
    pagText: {
      width: '100%',
      fontSize: '15px',
    },
  },
  '@media(max-width: 767px)': {
    aboutSection:{
      // backgroundColor: '#F9F9FA',
      // height: '110vh',
      // width: '100%',
       position: 'relative',
      bottom: '100vh',
      display: 'block',
      marginBottom: '0px'
    },
    describe:{
      display: 'block' ,
      marginLeft: '15px',
      marginRight: '15px',
      lineHeight: '30px'
   
    },
    topSpace:{
      display: 'block',
      position: 'relative',
      bottom: '50px',
    },
    company:{
      position: 'relative',
      bottom: '30vh'
    },
    main:{
  //  '& svg': {
  //    display: 'block',
  //    top: '250px',
  //    position: 'relative',
  //  },
   backgroundImage: `url(${mobile})`,
   height:'130vh',
   width: '100%',
   backgroundRepeat: 'no-repeat',
   objectFit: 'cover',
   position: 'relative',
   bottom: '80px',
   marginRight: '0px',
   backgroundSize: '100%'
 },
    root: {
      // width: '100%',
      // marginTop: '5px',
      // top: '-100px',
      // height: '95%',
      display:'none'
    },
    intro: {
      marginTop: '0%',
      marginBottom: '5%',
      width: '100%',
      position: 'relatve',
      top: '50px'
    },

    headline: {
      fontSize: '45px',
      marginLeft:0,
      position: 'relative',
      right:'10px'
    },
    description: {
      fontSize: '13px',
      lineHeight: '25px',
    },
    button: {
      padding: '15px 20px',
      borderRadius: '5px',
      fontSize: '18px',
      marginTop:'30px',
      width: '150px',
      height: '70px'
    },
    sub: {
      width: '90%',
      marginBottom: '10px',
      position: 'absolute',
      right: '200px',
      top: '100vh',
    },
    subNav:{
      backgroundColor: '#F8F8FF',
    },
   meetWrapper: {
      display: 'flex',
      flexReverse: 'row',
    },
    meetContent: {
      width: '100%',
      position: 'relative',
      top: '270px',
      flex: 1
    },
    meetContentH1: {
      fontWeight: 'normal',
      position: 'relative',
      bottom: '150px',
      marginTop: '20px'
    },
    meetContentP: {
      fontWeight: 'normal',
      justifyContent: 'center',
      position: 'relative',
      top: '250px',
    },
    meetImages: {
      flex: 1,
      maxWidth: '100%',
      position: 'relative',
      bottom: '120px',
      marginRight: '10px',
      marginLeft: '10px'
        },
    meetImage: {
      flex: '15%',
      maxWidth: '45%'
    },
    meetImageOne:{
      marginLeft: 'px'
    },
    working: {
      position: 'relative',
      top: '100vh',
      display: 'flex'
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
    positions: {
      display: 'block',
      position:'relative',
      // top:'1vh',
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
  },
  '@media(max-width: 575px)': {
    intro: {
      width: '100%',
      marginBottom: '5%',
    },
    headline: {
      whiteSpace: 'nowrap',
      fontSize: '35px',
    },
    description: {
      fontSize: '14px',
    },
    sub: {
      width: '100%',
      margin: '0 auto',
    },
    meetWrapper: {
      display: 'block',
      marginTop: '60px',
    },
    meetContent: {
      width: '100%',
    },

    meetImages: {
      width: '100%',
    },
  },
  '@media(max-width: 450px)': {
    intro: {
      width: '100%',
      marginBottom: '50%',
    },
    headline: {
      textAlign: 'center',
      width: '80%',
    },
    description: {
      width: '90%',
    },
    sub: {
      width: '90%',
      margin: '0 auto',
    },
    meetWrapper: {
      display: 'block',
      marginTop: '60px',
    },
    meetContent: {
      width: '100%',
    },

    meetImages: {
      width: '100%',
    },
    workingImage: {
      height: '280%',
    },
    pagination: {
      margin: '0 auto',
      width: '100%',

      '& a': {
        fontSize: '13px',
      },
    },
    pagText: {
      fontWeight: 'bold',
      fontSize: '12px',
    },
  },
  '@media(max-width: 360px)': {
    intro: {
      width: '100%',
      marginBottom: '140%',
    },
    headline: {
      fontSize: '25px',
    },
    description: {
      width: '90%',
    },
    sub: {
      width: '95%',
      margin: '0 auto',
    },
    meetWrapper: {
      display: 'block',
      marginTop: '60px',
    },
    meetContent: {
      width: '100%',
    },

    meetImages: {
      width: '100%',
    },
  },
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

  // useEffect(() => {
  //   const imageOne = images.children[0]; // or children[0]
  //   const imageTwo = images.children[1];
  //   const imageThree = images.children[2];
  //   const imageFour = images.children[3];

  //   TweenMax.to(app, 0, {css: {visibility: 'visible'}})
  //   // console.log(imageOne, imageTwo, imageThree, imageFour)

  //       //Images Animation
  //       tl.from(imageOne, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
  //       .from(imageOne.children[0], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  //       .from(imageTwo, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
  //       .from(imageTwo.children[1], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  //       .from(imageThree, 1.6, {y: 1280, ease: Power3.easeOut}, .2)
  //       .from(imageThree.children[2], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  //       .from(imageFour, 1.8, {y: 1280, ease: Power3.easeOut}, .2)
  //       .from(imageFour.children[3], 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    
  // })
  return (
    <>
          <div className={classes.main} >
             <Nav/>
            {/* <svg className={classes.topSpace} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fill-opacity="1" d="M0,128L0,256L1440,256L1440,320L0,320L0,320Z"></path></svg> */}
            <img src={main} alt="" className={classes.root} />
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L120,197.3C240,203,480,213,720,186.7C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
            <div className={classes.intro}>
              <h1 className={classes.headline}>Join Our Team!</h1>
              <p className={classes.describe}>Want to work for an amazing start up with awesome benefits, great growth potential and career development? Well look no further! Here at Pawndr we love to hire the best talent to join our company & community.</p>
              <button className={classes.button}>View Jobs</button>
            </div>
          
          </div>
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
                        <h3 style={{marginTop: 20, marginBottom: 20, fontWeight: 'normal'}}>{working.tagline}</h3>
                        <p>{working.text}</p>
                      </div>
                    </Fade>
                  ))}
                </div>
                <h5>Come join our family</h5>
              </div>
            </div>
          </div>

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
              <p className={classes.pagText}>
                If your career has been impacted by covid-19 and you don’t see a
                position that fits what you’re looking for,
                <br />
                <span>send your resume.</span>
                We’ll keep it on file for the future.
              </p>
            </div>
          </div>
        </main>
    </>
  );
}
