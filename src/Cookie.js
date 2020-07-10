import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';
import Nav from './Nav'

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      marginTop: '70px',
      marginBottom: '50px',
      '& h1': {
        fontSize: '30px',
        color: colors.brown,
        marginBottom: '20px'
      },
      '& h2': {
        fontSize: '25px',
        color: colors.brown,
        marginBottom: '20px'
      },
      '& h3': {
        fontSize: '20px',
        color: colors.brown,
        marginBottom: '20px'
  
      },
      '& p': {
        width: '100%',
        fontSize: '14px',
        marginBottom: '20px',
        color: colors.greyTxt,

  
      },
      '& ul': {
        fontSize: '14px',
        marginBottom: '20px'
  
      },
      '& ol': {
        fontSize: '14px',
        marginBottom: '10px',
        color: `${colors.orangeRed}`
  
      },
      '& a': {
        width: '100%',
        textDecoration: 'none',
        color: colors.orangeRed,
      },
      '& span': {
        margin: '0 auto',
        width: '80%',
      },
    },
    lastUpdated:{
        color: `${colors.greyTxt}`,
        marginBottom: '10px'
    }
  });

    export default function Cookie() {
        const classes = useStyles();
        return (
            <>
            <Nav/>
            <section>
                <div className={`${classes.root} container`}>
                        <h1>COOKIE POLICY</h1>
                        <div className={classes.lastUpdated}>Last updated July 1 2020</div>
                        <h2>INTRODUCTION</h2>
                        <p>Pawndr, Inc may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website pawndr.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”) to help customize the Site and improve your experience.</p>
                        <p>We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>
                        <p>You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted. </p>
                        <h2>USE OF COOKIES</h2>
                        <p>A “cookie” is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience. 

                        </p>
                        <h1>TYPES OF COOKIES</h1>
                        <p>The following types of cookies may be used when you visit the Site:</p>
                        <h2>Advertising Cookies</h2>
                        <p>Advertising cookies are placed on your computer by advertisers and ad servers in order to display advertisements that are most likely to be of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites, alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer and do not gather any personal information about you. </p>
                        <h2>Analytics Cookies</h2>
                        <p>Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know what features on the Site are working the best and what features on the Site can be improved. </p>
                        <h2>Our Cookies</h2>
                        <p>Our cookies are “first-party cookies”, and can be either permanent or temporary. These are necessary cookies, without which the Site won’t work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser, but may affect the functionality of the Site.</p>
                        <h2>Personalised Cookies</h2>
                        <p>Personalization cookies are used to recognize repeat visitors to the Site. We use these cookies to record your browsing history, the pages you have visited, and your settings and preferences each time you visit the Site. </p>
                        <h2>Security Cookies</h2>
                        <p>Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from unauthorized parties.</p>
                        <h2>Site Management Cookies</h2>
                        <p>Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any information you enter is retained from page to page. These cookies cannot be turned off individually, but you can disable all cookies in your browser.</p>
                        <h2>Third Party Cookies</h2>
                        <p>Third-party cookies may be place on your computer when you visit the Site by companies that run certain services we offer. These cookies allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser. </p>
                        <h1>CONTROL OF COOKIES</h1>
                        <p>Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser’s settings. Please be aware that such action could affect the availability and functionality of the Site. 
                        </p>
                        <p>For more information on how to control cookies, check your browser or device’s settings for how you can control or reject cookies, or visit the following links:</p>
                        
                        <ul>
                            <ol>Apple Safari</ol>
                            <ol>Googe Chrome</ol>
                            <ol>Microsoft Edge</ol>
                            <ol>Microsoft Internet Explorer</ol>
                            <ol>Mozilla Firefox</ol>
                            <ol>Opera</ol>
                            <ol>Android (Chrome)</ol>
                            <ol>Blackberry</ol>
                            <ol>Iphone or Ipad (Chrome)</ol>

                        </ul>
                        <h1>OTHER TRACKING TECHNOLOGIES</h1>
                        <p>In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and improve your experience. A “web beacon” or “pixel tag” is tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.</p>
                        <h1>PRIVACY POLICY</h1>
                        <p>For more information about how we use information collected by cookies and other tracking technologies, please refer to our Privacy Policy [CLICK HERE]/posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.</p>
                        <h1>CONTACT US</h1>
                        <p>If you have questions or comments about this Cookie Policy, please contact us at:</p>
                        <p>
                            Pawndr, Inc<br/>
                            78 SW 7th St.<br/>
                            Miami, FL 33130<br/>
                            <ul>
                                <ol>hello@gopawndr.com</ol>
                            </ul>
                        </p>
                </div>
            </section>
            </>

        );
      }