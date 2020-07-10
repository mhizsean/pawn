import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { colors } from "./colors";
import usaLogo from './images/homepage/social-proof/usa-today-wide.svg'
import wallsLogo from './images/homepage/social-proof/wsj-logo.svg'
import fastLogo from './images/homepage/social-proof/fast-company-logo.svg'
import foxLogo from './images/homepage/social-proof/foxbusiness-logo.svg'
import britLogo from './images/homepage/social-proof/brit-co-logo.svg'
import logo from "./images/logo.png";
import greyPaws from './images/grey-paws.svg'

const useStyles = makeStyles({
  headline: {
    textAlign: 'center',
    color: colors.brown,
    '& img': {
      verticalAlign: 'bottom',
      marginLeft: '15px'
    },
    fontSize:'2.6em',
    fontWeight: 'normal'
  },
  logos: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '250px',
    position: 'relative',
    marginTop: '50px',
    '&::after': {
      content: `url(${greyPaws})`,
      position: 'absolute',
      left: '20%',
      bottom: '25%'
    }
  },
  story: {
    color: colors.darkGreyTxt,
    fontSize:'1.3em',
    lineHeight: '45px',
    // maxWidth: '780px'
    textAlign: 'center',
    marginLeft: '100px',
    marginRight: '100px',

  },
  '& p': {
    fontWeight:'bolder',
  },
 
  '@media(max-width: 991px)': {
    logos: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      alignItems: 'center',
    },
    story: {
      fontSize:'1.3em',
    },

  },
  '@media(max-width: 767px)': {
    story: {
      textAlign:'center',
      margin: 0,
      '& br':{
        display: 'none'
      },
      fontSize:'0.9em',

    },
    logos:{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      flexFlow: 'wrap'
    },
    logo:{
      marginRight:'2px',
      marginTop: '20px',
      marginBottom: '20px'


    }
  },
  '@media(max-width: 575px)': {
    logos: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  '@media(max-width: 450px)': {
    headline: {textAlign: "center"},
    logos: {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      gap: '40px',
      '&::after': {
        bottom: '15%'
      }
    }
  },
  '@media(max-width: 360px)': {
    aboutpart: {
      marginTop: '-150px'
    }
  }
  
})

export default function SocialProof() {
  const classes = useStyles()
  return (
    <div className="container" style={{margin: ' auto'}}>
      <h2 className={classes.headline}>As seen on</h2>
      <div className={classes.logos}>
        <img src={usaLogo} className={classes.logo} alt="usa today logo" />
        <img src={wallsLogo} className={classes.logo} alt="wall street journal logo" />
        <img src={foxLogo} className={classes.logo} alt="fox business logo" />
        <img src={fastLogo}className={classes.logo}  alt="fast company logo" />
         <img src={britLogo} className={classes.logo} alt="brit+co logo" />
      </div>
      <div className={classes.aboutpart}>
        <h2 className={classes.headline}>About<img src={logo} alt="logo" /></h2>
        <p className={classes.story}>Pawndr Started From Humble Beginnings, delivering across the country, door to door from our very own CEO. 
        Only having a few dollars in her pocket and intense drive to make the world a better place, her service grew and quickly expanded from just the back of her car.
        <br /> <br />Now servicing more than 100 cities across the US with hopes to expand worldwide.
        Pawndr has helped deliver over 400 pets and animals to safety with love and care from rescues, 
        kill shelters, and to new homes. The famous motto is “A dog is a mans best friend” Our Motto is “Moving forward with Paws-itivity, get it?
        </p>
      </div>
      
    </div>
  )
}
