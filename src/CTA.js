import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { colors } from "./colors";
import UnitGen from "./UnitGen";
import unit1 from './images/homepage/cta/schedule.svg'
import unit2 from './images/homepage/cta/earn.svg'
import unit3 from './images/homepage/cta/travel.svg'
import unit4 from './images/homepage/cta/support.svg'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles({
  link:{
    textDecoration: 'none'
  },
  headline: {
    color: colors.brown,
    textAlign: 'center'
  },
  unitContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: '50px',
    '& div': {
      width: '245px',
      maxWidth: '100%',
      '&:nth-child(2)': {
        '@media(min-width: 1441px)': {
          margin: '0 95px'
        },
      },
      '&:nth-last-child(1)': {
        margin: '50px auto 0'
      },
      '& img': {
        width: '110px',
        height: '95px',
        margin: '0 auto'
      },
      '& h3': {
        color: colors.white,
        fontSize: '22px'
      },
      '& p': {
        color: colors.brown,
        fontSize: '18px',
        lineHeight: '20px'
      },
    }
  },
  ctaBtn: {
    outline: 'none',
    border: 'none',
    backgroundColor: colors.orangeRed,
    padding: '21px 30px',
    color: colors.white,
    fontFamily: 'inherit',
    fontWeight: 'bold',
    borderRadius: '10px',
    display: 'block',
    margin: '50px auto 0',
    '&:hover': {
      backgroundColor: colors.darkOrangeRed,
      cursor: 'pointer',
    }
  },
  '@media(max-width: 991px)': {
    unitContainer: {
      '& div': {
        '&:nth-last-child(1)':{
          margin: '40px 0 0'
        },
        '&:nth-last-child(2)': {
          marginTop: '40px'
        }
      }
    }
  },
  "@media(max-width: 767px)": {
    unitContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      '& div:nth-child(2)': {marginTop: '40px'}
    },
    headline: {textAlign: "center"}
  }
})

const units = [
  {
    image: unit1,
    text: 'Make your own schedule & Be your own boss.'
  },
  {
    image: unit2,
    text: 'Make unlimited earnings with great benefits.'
  },
  {
    image: unit3,
    text: 'Travel While learning Skills.'
  },
  {
    image: unit4,
    text: 'Support yourself, your family & your community.'
  },
]

export default function CTA() {
  const classes = useStyles();

  return (
    <Fade bottom big>
      <section className="container" style={{margin: ' auto'}}>
        <h2 className={classes.headline}>Want to drive?</h2>
        <div className={classes.unitContainer}>
          {units.map((unit,i) => (<UnitGen key={i} content={unit} />))}
        </div>
        <Link to='/drive' className={classes.link}>
          <button className={classes.ctaBtn}>Become A Valet Driver</button>
        </Link>
      </section>

    </Fade>
  )
}
