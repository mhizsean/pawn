import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { colors } from "./colors";
import UnitGen from "./UnitGen";
import unit1 from './images/homepage/features/home-booking.svg'
import unit2 from './images/homepage/features/home-gps.svg'
import unit3 from './images/homepage/features/home-insurance.svg'
import unit4 from './images/homepage/features/home-delivery.svg'
import unit5 from './images/homepage/features/home-rates.svg'
import greyPaws from './images/grey-paws.svg'
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles({
  unitContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridTemplateRows: 'repeat(5,1fr)',
    position: 'relative',
    margin: '100px 0',
    paddingBottom: '200px',
    '&::before': {
      content: `url(${greyPaws})`,
      position: 'absolute',
      left: '40%',
      top: '25%',
    },
    '&::after': {
      content: `url(${greyPaws})`,
      position: 'absolute',
      right: '20%',
      bottom: '5%',
      transform: 'scaleX(-1)',
    },
    '& div': {
      minWidth: '250px',
      maxWidth: '100%',
      '&:nth-child(1)': {
        gridColumn: 2,
        gridRow: 1,
        marginLeft: '-20px'
      },
      '&:nth-child(2)': {
        gridColumn: 3,
        gridRow: 2,
        justifySelf: 'end',
        marginRight: '-150px'
      },
      '&:nth-child(3)': {
        gridColumn: '1',
        gridRow: 3,
        justifySelf: 'end',
        marginRight: '-75px'
      },
      '&:nth-child(4)': {
        gridColumn: 3,
        gridRow: 4,
        justifySelf: 'end',
        marginRight: '-150px'
      },
      '&:nth-child(5)': {
        gridColumn: 2,
        gridRow: 5,
        marginLeft: '-25px'
      },
      '& img': {
        width: '110px',
      },
      '& h3': {
        color: colors.brown,
        fontSize: '22px',
        marginBottom: '0'
      },
      '& p': {
        color: colors.brown,
        fontSize: '14px',
        lineHeight: '18px'
      },
    }
  },
  "@media(max-width: 767px)": {
    unitContainer: {
      marginTop:'10px',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      whiteSpace: "nowrap",
      overflow: "hidden",
      '&::after': {
        content: `url(${greyPaws})`,
        position: 'absolute',
        right: '5%',
        bottom: '5%',
        transform: 'scaleX(-1)',
      },
     
      '& div': {
        '&:nth-child(1)': {
          '& p': {
            textAlign: 'center', 
            overflow: 'hidden',
            whiteSpace: "nowrap",
           },
          marginBottom: '70px'
        },
        '&:nth-child(2)': {
          '& p': {
            marginRight: '10px',
            textAlign: 'center', 
            overflow: 'hidden',
            whiteSpace: "nowrap",
           },
           marginBottom: '50px'

        },
        '&:nth-child(3)': {
          '& p': {
            textAlign: 'center', 
            overflow: 'hidden',
            whiteSpace: "nowrap",
            marginRight: '-50px',
           },
           marginBottom: '70px'
          },
          '&:nth-child(4)': {
            '& p': {
              textAlign: 'center', 
              overflow: 'hidden',
              whiteSpace: "nowrap",
              marginRight: '-50px',
             },
             marginBottom: '70px'
            },
        '&:nth-child(5)': {
          '& p': {
            textAlign: 'center', 
            overflow: 'hidden',
            whiteSpace: "nowrap",
            marginRight: '-40px',
           },
           marginBottom: '70px'
          },
      },
      },
      
  },
  "@media(max-width: 575px)": {
    unitContainer: {
      marginTop:'170px',
      gridTemplateColumns: '1fr',

      '&::before': {left: '10%', top: '20%'},
      '& div': {
        width: '220px',
        '& h3': {
          fontSize: '20px',
        },
        '& img': {
          width: '90px'
        },
        '&:nth-child(1)': {
          marginLeft: 0,
          gridColumn: 1,
          justifySelf: 'center',
        },
        '&:nth-child(2)': {
          marginRight: 0,
          gridColumn: 1,
          justifySelf: 'end'
        },
        '&:nth-child(3)': {
          marginRight: 0,
          gridColumn: 1,
          justifySelf: 'start'
        },
        '&:nth-child(4)': {
          marginRight: 0,
          gridColumn: 1
        },
        '&:nth-child(5)': {
          marginLeft: 0,
          gridColumn: 1,
          justifySelf: 'center'
        },
      },
    }
  },
  '@media(max-width: 450px)': {
    unitContainer: {
      '&::before': {
        content: "''"

      }
    }
  },
  '@media(max-width: 360px)': {
    root: {
      // marginTop: '-100px',
    },
    unitContainer: {
      marginTop: '40px',
      marginBottom: '-150px'
      
    },
  }
})

const units = [
  {
    image: unit1,
    tagline: 'Hassle Free Booking.',
    text: 'Book in minutes, gives you time and convenience.'
  },
  {
    image: unit2,
    tagline: 'GPS Tracking.',
    text: 'Get live GPS Tracking of your Pets Whereabouts in Real Time'
  },
  {
    image: unit3,
    tagline: 'Insurance Coverage.',
    text: 'In case of any accident or Loss, we’ve got you covered'
  },
  {
    image: unit4,
    tagline: 'Fast Delivery.',
    text: 'Delivery as soon as same day.'
  },
  {
    image: unit5,
    tagline: 'Affordable Rates.',
    text: 'Great pricing for you, better & equal pay for drivers, it’s a win win!'
  }
]

export default function Features() {
  const classes = useStyles();

  return (
    <section className="container">
      <Fade bottom big>
        <div className={classes.unitContainer}>
          {units.map((unit,i) => (<UnitGen key={i} content={unit} />))}
        </div>
      </Fade>
    </section>
  )
}
