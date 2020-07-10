import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import footerLogo from './images/footer-logo.png'
import wave from './images/footer-wave.svg'
import {colors} from './colors'
import axios from "axios";
import Loader from "./Components/utils/loader";
import Swal from 'sweetalert2'

const useStyles = makeStyles({
  wave: {
    display: 'block',
    width: '100%',
    marginBottom: '-5px'
  },
  root: {
    backgroundColor: colors.greyBg,
    color: colors.greyTxt,
    padding: '100px 0',
    '& h2': {
      color: 'white',
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      color: colors.greyTxt,
      textDecoration: 'none',
      marginTop: '20px',
      '&:hover': {
        color: colors.orangeRed,
        transform: 'translateX(5px)',
        transition: 'transform .15s ease-in'
      }
    }

  },
  contact: {
    '& a': {
      color: colors.greyTxt,
      textDecoration: 'none',
    }

  },
  contactLinks: {
    display: 'flex',
    flexDirection: 'column',
    '& a:nth-child(1)': {
      marginTop: '4px',
      marginBottom: '20px'
    },
    '& a:hover': {
      color: colors.orangeRed,
      transform: 'translateX(5px)',
      transition: 'transform .15s ease-in'
    }
  },
  email: {
    border: '1px solid white',
    borderRadius: '10px',
    padding: '27px 20px',
    backgroundColor: colors.greyBg,
    outline: 'none',
    color: 'white',
    fontFamily: 'inherit',
    marginRight: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    height: '30px'
  },
  submit: {
    border: `1px solid ${colors.orangeRed}`,
    borderRadius: '10px',
    padding: '15px',
    backgroundColor: colors.orangeRed,
    outline: 'none',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '16px',
    height: '56px',
    '&:hover': {
      backgroundColor: colors.darkOrangeRed,
      cursor: 'pointer'
    },
    // height: '30px'

  },
  copyright: {
    color: 'white',
    marginTop: '70px'
  },
  updated:{
    '& form' : {
      display: 'flex',
      position: 'relative',
      right: '60px'
    }
  },
  form:{
      position: 'relative',
      left: '5px'
  },
  '@media(max-width: 767px)': {
      updated:{
    '& form' : {
      display: 'flex',
      position: 'relative',
      right: '80px'
    } 
  },
  container:{
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  // navlinks:{
  //   flex:1
  // },
  // contact:{
  //   flex: 1
  // },
  // updated:{
  //   flex:1
  // },
  },
  '@media(max-width: 991px)': {
    updated: {
      marginTop: '30px'
    }
  },
  "@media(max-width: 575px)": {
    container: {
      flexDirection: 'column'
    },
    contact: {
      marginTop: '30px'
    },
    email: {
      width: '170px'
    }
  },
  '@media(max-width: 320px)': {
    
    email: {
      width: '180px'
    }
  }
});

export default function Footer() {
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const navLink = [
    ["About Us", "/about"],
    ["Gifting", "/gifting"],
    ["Become a partner", "/partner"],
    ["FAQ", "/faq"],
    ["Become a Pawndr Driver", "/drive"],
    ["Download the app", "/download"],
    ["Privacy Policy", "/privacy"],
    ["Term of Service", "/tos"],
    ["Cookie Policy", "/cookie"],
  ];

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    axios.post("http://admin.knarlee.com/api/subscribe",{email})
        .then(res=>{

          Swal.fire({
            title: 'Subscription Successful!',
            text: 'You have successfully subscribed to our newsletter',
            icon: 'success',
            confirmButtonText: 'Close'
          });
          setLoading(false);
          setEmail("");
        }).catch(err=> {
      setLoading(false);
      if(err.response===undefined)
      {
        Swal.fire({
          title: 'Error!',
          text: "Could not connect to the internet",
          icon: 'error',
          confirmButtonText: 'Okay'
        });
        return;
      }
      const data = err.response.data;
      if(typeof data.errors === "object")
      {
        Swal.fire({
          title: 'Error!',
          text: data.errors["email"][0],
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }else{
        Swal.fire({
          title: 'Error!',
          text: data.errors,
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor:"orangered"
        });
      }
      this.setState({loading:false})

    });
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  return (
    <footer style={{display: 'block'}}>
      <Loader loading={loading}/>
      <img src={wave} alt="" className={classes.wave} />
      <div className={classes.root}>
        <div className={`${classes.container} container`}>
          <div className={classes.navLinks}>
            {navLink.map((link, i) => (
              <Link key={i} to={link[1]}>
                {link[0]}
              </Link>
            ))}
          </div>
          <div className={classes.contact}>
            <h2 style={{marginBottom: '10px'}}>Contact us</h2>
            <p>Office Hours: 7am-10pm Sunday-Friday</p>
            <div className={classes.contactLinks}>
              <Link to="/press">Press</Link>
              <Link to="/help">Help</Link>
            </div>
          </div>
          <div className={classes.updated}>
            <h2 style={{marginBottom: '10px'}}>Stay Updated</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
              <input type="email" onChange={handleEmail} required={true} value={email} placeholder="Email address" className={classes.email} />
              <button className={classes.submit}>Submit</button>
            </form>
          </div>
        </div>
        <div className={`${classes.copyright} container`}>
          <img src={footerLogo} alt="logo"/>
          <p>&copy; 2020 pawndr, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
