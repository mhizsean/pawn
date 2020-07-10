import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';

import main from './images/patner/Rectangle.svg'
import mobile from './images/patner/2.png'
import Nav from './Nav'
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "./Components/utils/loader";

const medium = mobile;
const large = main;

const useStyles = makeStyles({
        root: {
                width: '100%',
                bottom: '165px',
                position: 'relative',
                zIndex: '-1',
                maxHeight: '200vh',
                overflow: 'hidden'
        },
       
        partnerSection:{
            backgroundImage: `url(${main})`,
            height: '180vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            bottom: '90px',
            display: 'block'
        },
          intro: {
            width: '100%',
            position: 'absolute',
            bottom: '70vh',
          },
          headline: {
            color: colors.white,
            fontSize: '50px',
            lineHeight: '60px',
            marginBottom: 0,
            marginLeft: '15%',
            fontWeight: 'normal',

          },
          description: {
            outline:0,
            color: colors.white,
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '15%',
            marginRight: '20%',
            marginTop: '50px',
            fontWeight: 'normal'

          },
          form:{
              textAlign: 'center',
          },
          title:{
              textAlign: 'center',
              color: colors.brown,
              fontSize: '25px',
              fontWeight: 'bold'
          },
          subtitle:{
              color: colors.DarkgreyTxt,
              marginTop: '15px',
              marginBottom: '40px'
          },
          formBox:{
              display: 'flex',
              width: '60%',
              margin: '0 auto',
              flexDirection:'row',
              flexWrap: 'wrap'
                },
          name:{
              paddingLeft:"10px",
              outline:0,
              flex: '0 0 100%',
              width: '100%',
              height: '6vh',
              backgroundColor: '#DCDCDC',
              borderRadius: '5px',
              border: '1px solid #DCDCDC ',
              marginBottom: '20px'
          },
          email:{
              paddingLeft:"10px",
              outline:0,
            flex: '0 0 100%',
            width: '100%',
            height: '6vh',
            backgroundColor: '#DCDCDC',
            borderRadius: '5px',
            border: '1px solid #DCDCDC ',
            marginBottom: '20px'
        },
        company:{
            paddingLeft:"10px",
            outline:0,
            flex: '0 0 100%',
            width: '100%',
            height: '6vh',
            backgroundColor: '#DCDCDC',
            borderRadius: '5px',
            border: '1px solid #DCDCDC ',
            marginBottom: '20px'
        },
        roleSize:{
            display: 'flex',
            width: '100%',
            margin: '0 auto',
            flexDirection:'row',
            flexWrap: 'nowrap'
        },
        role:{
            paddingLeft:"10px",
            outline:0,
            flex: '0 0 55%',
            width: '55%',
            height: '6vh',
            backgroundColor: '#DCDCDC',
            borderRadius: '5px',
            border: '1px solid #DCDCDC ',
            marginBottom: '20px',
            marginRight: '10px',
            marginLeft: '0px',

        },
        size:{
            paddingLeft:"10px",
            outline:0,
            flex: '0 0 42%',
            width: '45%',
            height: '6vh',
            backgroundColor: '#DCDCDC',
            borderRadius: '5px',
            border: '1px solid #DCDCDC ',
            marginBottom: '20px',
            marginRight:0
        },
        message:{
            padding:"10px",
            flex: '0 0 100%',
            width: '100%',
            height: '20vh',
            backgroundColor: '#DCDCDC',
            borderRadius: '5px',
            border: '1px solid #DCDCDC ',
            marginBottom: '20px'
        },
        send:{
            flex: '0 0 100%',
            width: '100%',
            height: '6vh',
            color:colors.white,
            backgroundColor: colors.orangeRed,
            borderRadius: '5px',
            border: '1px solid orangered ',
            marginBottom: '20px',
            fontSize:"14px",
            outline:0,
            fontWeight:"bold"
        },
        '@media(max-width: 767px)': {
         
         partnerSection:{
            backgroundImage: `url(${mobile})`,
            height: '100vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            top: '5vh',
            display: 'block'
        },
            formBox:{
                display: 'flex',
                width: '100%',
                margin: '0 auto',
                flexDirection:'row',
                flexWrap: 'wrap'
                  },
             root: {
                    width: '100%',
                    bottom: '95px',
                    position: 'relative',
                    zIndex: '-1',
                    maxHeight: '200vh'
            },
            intro: {
                width: '100%',
                position: 'absolute',
                bottom: '80vh',
              },
              headline: {
                color: colors.white,
                fontSize: '1.0em',
                lineHeight: '20px',
                marginBottom: 0,
                fontWeight: 'normal',

              },
              description: {
                color: colors.white,
                fontSize: '1.0em',
                lineHeight: '10px',
                marginTop: '10px',
                fontWeight: 'normal'

              },
              title:{
                marginRight: '10px',
                textAlign: 'center',
                overflow: 'hidden',
                whiteSpace: "nowrap",
              }
        }
})

export default function Partner() {
    const classes = useStyles();
    const [data,setData] = useState({name:""});
    const [loading,setLoading] = useState(false);

    const handleInputChange= (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData({...data,[name]:value})
    };

    const handleSubmit= (event)=>{
       event.preventDefault();
        setLoading(true);
        axios.post("http://127.0.0.1:8000/api/partners",data
        )
            .then(res=>{
                Swal.fire({
                    title: 'Message Successful!',
                    text: 'Your message has been been submitted successfully, you will be contacted shortly',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
                setLoading(false);
                document.getElementById("partner-form").reset();
                setData({});
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

        });
    };

    return (
        <>
                        {/* <Nav /> */}
            <main>
                <Loader loading={loading}/>
                {/* <img src={medium} srcset={`${medium} 768w, ${large} 1200w`}  alt="image root" className={classes.root} />
                <div className={classes.partnerSection}>
                    <div className={classes.nav}>
                    </div>
                    <div className={classes.intro}>
                        <h1 className={classes.headline}>Partner with Pawndr and Earn Recurring</h1>
                        <p className={classes.description}>
                            Pawndr is all about working together to build a better community and all together better world.
                            We are always eager to work with brands that support our causes and values..
                        </p>
                    </div>
                </div> */}
                <div className="container">
                    <div className={classes.form}>
                        <div className={classes.title}>
                            Want to work with us?
                        </div>
                        <div className={classes.subtitle}>
                            Great! Just fill out the form below and someone will reach out to you!
                        </div>
                        <form action="" id={"partner-form"} onSubmit={handleSubmit} autoComplete={"off"}>
                            <div className={classes.formBox}>
                                <input value={data.name} type="text" name={"name"} onChange={handleInputChange} required={true} placeholder="Name" className={classes.name}/>
                                <input value={data.email}  type="email" name={"email"} onChange={handleInputChange} required={true} placeholder="Email*" className={classes.email}/>
                                <input value={data.company_name}  type="text" name={"company_name"} onChange={handleInputChange} required={true} placeholder="Company" className={classes.company}/>
                                <div className={classes.roleSize}>
                                    <input value={data.role}  type="text" name={"role"} onChange={handleInputChange} required={true} placeholder="Roles in Company" className={classes.role}/>
                                    <input value={data.company_size}  type="number" name={"company_size"} onChange={handleInputChange} required={true} placeholder="Company size" className={classes.size}/>
                                </div>
                                <textarea value={data.message}   name={"message"} onChange={handleInputChange} required={true} placeholder="Message*" className={classes.message}/>
                                <button type={"submit"} className={classes.send}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
