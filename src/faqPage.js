import React from "react";
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';
import main from './images/Faq/main.png';
import faqHome from './images/Faq/faq.png';
import search from './images/Faq/search.png';
import Customerfaq from './Customerfaqs.js';
import DriverFaq from './DriversFaq.js';
import Nav from './Nav';
import dog from './images/dog.png'

import { AppContext } from "./App";
import { useContext } from "react";


const useStyles = makeStyles({
  supportContent:{
    display: 'flex',
    flexFlow: 'row wrap',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',

  },
  supportSectionOne:{
    width: '70%',
    '& h2':{
      color: '#fff',
      marginTop: '20px',
      fontSize: '1.8em'

    },
    '& h6':{
      color: '#fff',
      fontWeight: 'normal',
      marginTop: '20px',
      lineWidth: '40px',
      fontSize: '1.0em'
    }
  },
  supportSectionTwo:{
    width: '20%',
    float: 'right',
    marginTop: '20px',
    marginLeft: '70px'
  },
  mainSection:{
    backgroundColor: '#F9F9FA',
      height: '110vh',
      width: '100%',
      position: 'relative',
      bottom: '30px',
      marginBottom: '0px'
  },
    bottomWave:{
      position: 'relative',
      bottom: '50px',
      marginBottom: '0px',
      overflow: 'hidden'
  },
  mobileBottomWave:{
    display: 'none',
  },
  nav:{
    position: 'relative',
    top: '40vh'
  },
  
  hero:{
    position: 'relative',
    top: '60px'
  },
    root: {
        width: '100%',
        top: '-40%',
        position: 'absolute',
        zIndex: '-1',
      },
      supportBox:{
        width: '100%',
        height: '20vh',
        backgroundColor: '#FE634F',
        borderRadius: '10px',
        position: 'relative',
        bottom: '400px'
      },
      intro: {
        marginTop: '30px',
        marginBottom: '0px',
        textAlign: 'center',
        '& img': {
          width: '60%',
        },
      },
      search: {
        '& input[type=text]': {
          width: '40%',
          boxSizing: 'border-box',
          border: 'none',
          borderRadius: '5px',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          backgroundImage: `url(${search})`,
          backgroundPosition: '10px 10px',
          backgroundRepeat: 'no-repeat',
          padding: '15px 20px 15px 40px',
          '&:focus': {
            border:  `ipx solid red`,
          },
        },
        '& h1': {
            color: colors.darkGreyTxt,
            fontWeight: 'normal'
          },
          '& p': {
            margin: '0 auto',
            width: '55%',
            fontSize: '13px',
            color: colors.GreyTxt,
          },
    },
    
    tagline:{
      marginTop:"70px",
    },
    support:{
      width: '60%',
      height: '20vh',
      borderRadius: '10px',
      backgroundColor: colors.orangeRed,
      marginLeft: '300px',
      marginTop: '40px',
      display: 'flex',
      '& :first-child':{
        marginTop: '40px',
        marginBottom: '20px',
        color: '#fff',
        fontSize: "20px",
        fontWeight: 'bold'
      },
       faqSection:{
         marginTop: 0
       }
    },
    '@media(max-width: 991px)': {
      mainSection:{
        backgroundColor: '#F9F9FA',
          height: '600px',
          width: '100%',
          position: 'relative',
          bottom: '30px',
          marginBottom: '0px'
      },
      supportContent:{
        display: 'flex',
        flexFlow: 'row wrap',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      supportSectionOne:{
        width: '70%',
        '& h2':{
          color: '#fff',
          marginTop: '20px',
          fontSize: '1.4em'
    
        },
        '& h6':{
          color: '#fff',
          fontWeight: 'normal',
          marginTop: '20px',
          lineWidth: '40px',
          fontSize: '1.0em'
        }
      },
      supportSectionTwo:{
        width: '20%',
        float: 'right',
        marginTop: '20px',
        marginLeft: '30px'
      },
      intro: {
        marginTop: '30px',
        marginBottom: '0px',
        textAlign: 'center',
        '& img': {
          width: '80%',
        },
      },
      faqSection:{
        position: 'relative',
        top:'5px'
      },
      supportBox:{
        width: '100%',
        height: '15vh',
        backgroundColor: '#FE634F',
        borderRadius: '10px',
        position: 'relative',
        bottom: '5px'
      },
    },
    '@media(max-width: 767px)': {
      supportContent:{
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'column-reverse'
    
      },
      supportSectionOne:{
        width: '100%',
        '& h2':{
          color: '#fff',
          marginTop: '20px',
          fontSize: '1.8em',
          textAlign: 'center'
    
        },
        '& h6':{
          color: '#fff',
          fontWeight: 'normal',
          marginTop: '20px',
          lineWidth: '40px',
          fontSize: '1.0em',
          textAlign: 'center'
        }
      },
      supportSectionTwo:{
        width: '100%',
        marginTop: '0 auto',
        textAlign: 'center',
        position: 'relative',
        right: '20px'
        
      },
     
       backgroundColor: '#F9F9FA',
      height: '90vh',
      width: '100%',
      position: 'relative',
      bottom: '30px',
      
      faqSection:{
        position: 'relative',
        top: '10px'
      },
      supportBox:{
        width: '100%',
        height: '50vh',
        backgroundColor: '#FE634F',
        borderRadius: '10px',
        position: 'relative',
        bottom: '100px'
      },
      intro: {
        '& img': {
          width: '100%',
        },
        '& h2':{
          textAlign: 'center',
          marginBottom: '40px'
        },
        '& p': {
          margin: '0 0',
          width: '100%',
          fontSize: '13px',
          color: colors.GreyTxt,
          lineHeight: '20px',
          textAlign: 'center'
        },
       
      },
      search: {
        '& input[type=text]': {
          width: '100%',
          boxSizing: 'border-box',
          border: 'none',
          borderRadius: '5px',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          backgroundImage: `url(${search})`,
          backgroundPosition: '10px 10px',
          backgroundRepeat: 'no-repeat',
          padding: '15px 20px 15px 40px',
          '&:focus': {
            border:  `ipx solid red`,
          },
        },
      }
    },
     mobileBottomWave:{
      display: 'block',
      position:'relative',
      bottom: '150px'
  },
  '@media(max-width: 320px)': {
    supportContent:{
      // display: 'flex',
      // flexFlow: 'row wrap',
      // width: '100%',
      marginTop: '200px',
 
    },
  }  
  
  
});

export default function FaqPage() {
  const appContext = useContext(AppContext);
  const { changeFAQSearch } = appContext;
  const classes = useStyles();

  const searchFAQChangeHandler = (event) => {
    changeFAQSearch(event.target.value);
  };




    return (
      <>
      <div className={classes.mainSection}>
      
      <Nav className={classes.nav}/>
          {/* <img src={main} alt="" className={classes.root} /> */}
          <div className={`${classes.intro} container`} style={{marginBottom: 5, position: 'relative', top: '40px'}}>
              <img clasName={classes.hero} src={faqHome} alt="" />

              <div className={classes.search}>
              <input 
              className={classes.searchBox}
              type="text"
              placeholder="Search your question here" 
              onChange={searchFAQChangeHandler}
              />
              <h2 style={{color: 'brown', marginTop: 30}}>What can we help you find?</h2>
              <p className={classes.tagline} style={{marginTop: 25}}>
                  Find answers to frequently asked questions on safety, booking,
                  policy, and driving with pawner.
              </p>
              </div>
          </div>
      </div>
      <svg style={{marginBottom: 0}} className={classes.bottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9FA  " fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,101.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      {/* <svg className={classes.mobileBottomWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F9FA" fill-opacity="1" d="M0,256L1440,128L1440,320L0,320Z"></path></svg> */}
      <svg className={classes.mobileBottomWave}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L1440,0L1440,320L0,320Z"></path></svg>
       <div className={`${classes.faqSection} container`}style={{marginTop: 0,position: 'relative', bottom: 500}} >
          <h1 className="container" style={{color: 'brown', fontWeight: 'normal'}}>Customers FAQs</h1>
          <Customerfaq className={classes.faq} />
          <h1 className="container" style={{color: 'brown', fontWeight: 'normal', marginTop: 20}}>Drivers FAQs</h1>
          <DriverFaq/>
        </div>
      {/* <section className={classes.support}>
        <p>
        Didn't find what you where looking for?</p><br/>
        <p>
        <br/>
        For any other questions or concerns not answered here please contact support</p>
      </section> */}
      <div className="container">
          <div className={classes.supportBox}>
            <div className={classes.supportContent}>
              <div className={classes.supportSectionOne} >
                <h2>Didn't find what you're looking for?</h2>
                <h6>For any other questions or concerns not answered here please contact support at <span style={{color: 'yellow'}}>support@gopawndr.com </span>for more</h6>
              </div>
              <div className={classes.supportSectionTwo}>
                <img  src={dog} alt="The pawndr doggy"/>
              </div>
            </div>
            </div>
      </div>
      </>

    );
}