import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';

import main from './images/patner/3.png'
import mobile from './images/patner/4.png'
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
        nav:{
            position:'relative',
            marginTop: '20px',
            paddingLeft: '60px'
        },
        partnerSection:{
            backgroundImage: `url(${main})`,
            height: '1220px',
            width: '100%',
            padding: '100px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
            bottom: '100px',
            display: 'block'
        },
        contain:{
            position: 'relative',
            margin: '20px',
            width: 'auto',
            top: '60px'
        },
    
        intro: {
        maxWwidth: '100%',
        position: 'absolute',
        bottom: '70vh',
        },
        headline: {
        color: colors.white,
        fontSize: '50px',
        fontWeight: 'bold',
        lineHeight: '60px',
        marginBottom: 0,
        marginLeft: '150px'
        },
        description: {
        outline:0,
        color: colors.white,
        fontSize: '14px',
        lineHeight: '20px',
        marginLeft: '150px',
        marginRight: '20%',
        marginTop: '50px',
        fontWeight: 'normal'

        },
        form:{
            textAlign: 'center',
            margin: 'auto',
            width: '80%'
        },
        title:{
            textAlign: 'center',

            color: colors.brown,
            fontSize: '25px',
            fontWeight: 'bold'
        },
        subtitle:{
            color: colors.DarkgreyTxt,
        //   marginTop: '15px',
        //   marginBottom: '40px',
        margin: '20px auto',
            width: '50%',
            fontSize: '15px'
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
            flexWrap: 'nowrap', 
            outline:0,
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
        '@media(max-width: 10250px)': {
            contain: {
                marginLeft: '-40px',
            },
            
            headline: {
                marginLeft: '0',

            },
            description: {
                margin: '0 ',
                width: '80%',
            }
            
        },
        '@media(max-width: 767px)': {
            roleSize:{
                display: 'flex',
                flexDirection: 'column',
                // flexWrap: 'wrap',
            '& input':{
                outline:0,
                width: '100%',
                marginBottom: '20px',
                flexBasis: 1,
                height: '6vh',
                flex: '0 0 100%',
                padding: '12px'
            }
            },
            
            topWave:{
                display: 'flex',
                position: 'absolute',
                bottom: '10vh',
                marginTop: 0,

            },
            bottomWave:{
                position: 'relative',
                bottom: '90px'
            },
          nav:{
            position:'absolute',
            top: '5vh',
            },
         partnerSection:{
            // backgroundImage: `url(${mobile})`,
            height: '100vh',
            width: '100%',
            padding: '20px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            // bottom: '1vh',
            display: 'block'
        },
        contain:{
        //    display: 'none'
        },
        nav:{
            // overflow: 'block'
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
                display: 'flex',
                width: '100%',
                position: 'relative',
                bottom: '-5vh',
                flexDirection: 'column'
              },
              headline: {
                color: colors.white,
                fontSize: '2.0em',
                lineHeight: '40px',
                margin: '0 auto',
                fontWeight: 'bolder',
                width: '100%',
                position: 'relative',
                top: '10vh',
                flex: 1,

              },
              description: {
                color: colors.white,
                fontSize: '1.0em',
                lineHeight: '40px',
                fontWeight: 'normal',
                margin: '0 auto',
                width: '100%',
                position: 'relative',
                top: '20vh',
                flex: 1

              },
              title:{
                marginRight: '10px',
                textAlign: 'center',
                // overflow: 'hidden',
                whiteSpace: "nowrap",
              }
        },
        '@media(max-width: 320px)': {
            nav:{
                // backgroundColor: '#fff',
                margin: '-20px',


            },
            partnerSection: {
                // height: '650px',
            }, 
            intro: {
                // marginLeft: '-20px',
                // width: '100%',
                // marginTop: '-60px'
            },
            headline: {
                // top: '20px',
                // width: '260px',
                // marginLeft: '-30px',
                lineHeight: '40px',
                fontSize: '40px',
            },
            description: {
                // marginTop: '20px',
                // top: '50px',
                // width: '250px',
                // padding: '0',
                // marginLeft: '-30px',
                lineHeight: '20px',
                letterSpacing: ''
            },
            title: {
                textAlign:'center',
                margin: '-20px',
            },
            subtitle: {
                width: '240px',
                marginTop: '30px',
                marginLeft: '10px'
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
        axios.post("http://admin.knarlee.com/api/partners",data
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
           
            <main>
                <Loader loading={loading}/>
                <div className={classes.partnerSection} id="header-partner">
                    <div className={classes.contain}>
                        <div className={classes.nav} >
                        <Nav />
                        </div>
                    </div>
                    <div className={classes.intro}>
                        <h1 className={classes.headline}>Partner with Pawndr and Earn <br/>Recurring Revenue</h1>
                        <p className={classes.description}>
                            Pawndr is all about working together to build a better community and all together better world.
                            We are always eager to work with brands that support our causes and values..
                        </p>
                    </div>
                </div>
             
                <div className="container">
                    <div className={classes.form} id="partner-form">
                        <div className={classes.title}>
                            Want to work with us?
                        </div>
                        <div className={classes.subtitle}>
                            <p>Great! Just fill out the form below and someone will reach out to you! </p>
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
