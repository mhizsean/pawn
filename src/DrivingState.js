import React from "react";
import { makeStyles } from "@material-ui/styles";
import bg from "./images/stateBg.png";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const useStyles = makeStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: '-100px',
    paddingBottom: '300px'
  },
    headline: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: '100px',
    marginBottom: '40px'
  },
  allStates: {
    color: 'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(115px,1fr))',
    columnGap: '30px',
    rowGap:'10px',
    fontSize: '12px',
    // lineHeight: '5px',
    '@media(min-width: 1441px)': {
      fontSize: '16px'
    }
  },
  mobileWave:{
    display: 'none'
  },
  
  '@media(max-width: 767px)': {
    mobileWave:{
      display: 'block',
    },
    
  },
  '@media(max-width: 991px)': {
    mobileWave:{
      display: 'none'
    },
  }

});
export default function DrivingState() {
  const classes = useStyles();

  return (
    <section className={classes.root} id="locations">
    {/* <svg className={classes.mobileTopWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="red" fill-opacity="1" d="M0,96L120,85.3C240,75,480,53,720,58.7C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
    <svg className={classes.mobileWave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="red" fill-opacity="1" d="M0,96L120,80C240,64,480,32,720,42.7C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <div style={{height: '150px', overflow: 'hidden'}}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{height: '100%', width: '100%'}}
        >
          <path className={classes.extra}
            d="M-1.97,23.19 C272.29,-26.14 288.66,23.19 500.27,91.28 L500.00,0.00 L0.00,0.00 Z"
            style={{stroke: 'none', fill: "#fff"}}
          ></path>
        </svg>
      </div>
      <div className="container">
        <h2 className={classes.headline}>Driving in a state</h2>
        <div className={classes.allStates}>
          {states.map((state, i) => (
            <p key={i}>{state}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
