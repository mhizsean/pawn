/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from './colors';

import main from './images/Faq/main.png';
import faqHome from './images/Faq/faq.png';
import search from './images/Faq/search.png';
import add from './images/Faq/add.png';
import dog from './images/Faq/dog.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
    top: '-40%',
    position: 'absolute',
    zIndex: '-1',
  },
  intro: {
    marginTop: '100px',
    marginBottom: '15%',
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
        border: 'none',
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
  customer: {
    display: 'flex',
    '& div': {
      width: '50%',
      '& hr': {
        display: 'block',
        height: '1px',
        width: '70%',
        border: '0',
        borderTop: '0.5px solid #ccc',
        margin: '1em 0',
        padding: '0',
      },
      '& p': {
        display: 'flex',
        '& a': {
          textDecoration: 'none',
          fontSize: '12px',
          color: colors.brown,
          '&:hover': {
            color: colors.orangeRed,
          },
          '& span': {
            margin: '50px',
          },
        },
      },
    },
  },
  driver: {
    display: 'flex',
    '& div': {
      width: '50%',
      '& hr': {
        display: 'block',
        height: '1px',
        width: '70%',
        border: '0',
        borderTop: '0.5px solid #ccc',
        margin: '1em 0',
        padding: '0',
      },
      '& p': {
        display: 'flex',
        '& a': {
          textDecoration: 'none',
          fontSize: '12px',
          color: colors.brown,
          '&:hover': {
            color: colors.orangeRed,
          },
          '& span': {
            margin: '50px',
          },
        },
      },
    },
  },
  notFound: {
    borderRadius: '10px',
    color: colors.white,
    padding: '15px 40px',
    marginTop: '30px',
    marginBottom: '30px',
    backgroundColor: colors.orangeRed,
    '& h1': {
      fontSize: '20px',
    },
    '& p': {
      width: '80%',
      fontSize: '15px',
    },
  },
  dog: {
    float: 'right',
  },

  '@media(max-width: 991px)': {
    root: {
      width: '100%',
      height: '140%',
    },
    intro: {
      marginTop: '100px',
      marginBottom: '15%',
      textAlign: 'center',
      '& img': {
        width: '60%',
      },
    },
  },
   '@media(max-width: 767px)': {
     customer:{
       '& div':{
           '& hr':{
             width: '100%'
           },
           '& p':{
             '& a':{
               '& span':{
                 '& img':{
                  float: 'right'
                 }
               }

             }
           }
       }
     },
     driver:{
      '& div':{
          '& hr':{
            width: '100%'
          },
          '& p':{
            '& a':{
              '& span':{
                '& img':{
                 float: 'right'
                }
              }

            }
          }
      }
    }
  },
  '@media(max-width: 575px)': {
    root: {
      width: '100%',
      height: '190%',
    },
    intro: {
      marginTop: '130px',
      marginBottom: '70%',
      textAlign: 'center',
      '& img': {
        width: '100%',
      },
      '& h5': {
        fontSize: '23px',
      },
      '& p': {
        fontSize: '5px',
      },
    },
    search: {
      '& input[type=text]': {
        width: '90%',
        boxSizing: 'border-box',
        border: 'none',
        borderRadius: '5px',
        padding: '15px 20px 15px 40px',
      },
      '& h1': {
        marginTop: '70px',
        marginBottom: '70px',
        color: colors.darkOrangeRed,
      },
      '& p': {
        margin: '0 auto',
        width: '100%',
        fontSize: '15px',
        lineHeight: '20px',
      },
    },
    customer: {
      flexDirection: 'column',
      '& div': {
        width: '100%',
      },
    },
    driver: {
      flexDirection: 'column',
      '& div': {
        width: '100%',
      },
    },
    notFound: {
      textAlign: 'center',
      borderRadius: '15px',
      color: colors.white,
      padding: '15px 40px',
      marginTop: '30px',
      marginBottom: '30px',
      backgroundColor: colors.orangeRed,
      '& h1': {
        marginTop: '50px',
        fontSize: '20px',
      },
      '& p': {
        marginTop: '70px',
        marginBottom: '50px',
        width: '100%',
        fontSize: '15px',
      },
    },
    dog: {
      float: 'none',
    },
  },
});

const customer = [{}, {}, {}, {}];

export default function Faq() {
  const classes = useStyles();
  return (
    <section>
      <img src={main} alt="" className={classes.root} />
      <div className={`${classes.intro} container`}>
        <img src={faqHome} alt="" />

        <div className={classes.search}>
          <input type="text" placeholder="Search your question here" />
          <h1 style={{color: 'brown'}}>What can we help you find?</h1>
          <p>
            Find answers to frequently asked questions on safety, booking,
            policy, and driving with pawner.
          </p>
        </div>
      </div>
      <div className="container">
        <h1 style={{color: 'brown', fontWeight: 'normal'}}>Customers FAQs</h1>
        <div className={`${classes.customer} row`}>
            <div className="col-md-5">
              <p>
                <a
                  href="!#"
                  alt=""
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  className="row"
                >
                  <span className="col-md-10">
                    What does pawndr make to ensure safety
                  </span>
                  <span className="col-md-2">
                    <img src={add} alt="" />
                  </span>

                  <span
                    className="collapse"
                    id="collapseExample"
                    style={{ color: 'black', width: '90%', margin: '0 auto' }}
                  >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </span>
                </a>
              </p>
            <hr />
            <p>
              <a href="!#" alt="">
                Where can  I get a receipt for my booking(s)?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What information does Pawndr Share?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What is pawndr review policy?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                Should I tip a Valet Driver?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                How does booking on pawndr works?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
          </div>

          <div>
            <p>
              <a href="!#" alt="">
                How many states is Pawndr in currently?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What does pawndr does to ensure safety ?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                Can I monitor the process of my booking?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What is your cancellation policy?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What Services does Pawndr Offer?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What does pawndr does to ensure safety ?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
          </div>
        </div>
        <h1>Drivers FAQs</h1>
        <div className={classes.driver}>
          <div>
            <p>
              <a href="!#" alt="">
                What does pawndr make to ensure safety
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                Where can  I get a receipt for my booking(s)?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What information does Pawndr Share?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What is pawndr review policy?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                Should I tip a Valet Driver?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                How does booking on pawndr works?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
          </div>

          <div>
            <p>
              <a href="!#" alt="">
                How many states is Pawndr in currently?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What does pawndr does to ensure safety ?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                Can I monitor the process of my booking?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What is your cancellation policy?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What Services does Pawndr Offer?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
            <hr />
            <p>
              <a href="!#" alt="">
                What does pawndr does to ensure safety ?
                <span>
                  <img src={add} alt="" />
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className={classes.notFound}>
          <img src={dog} alt="" className={classes.dog} />
          <h1>Didn’t find what you’re looking for?</h1>
          <p>
            For any other questions or concerns not answered here please contact
            support at{' '}
            <span style={{ color: colors.darkOrangeRed }}>
              support@gopawndr.com
            </span>{' '}
            for mor information
          </p>
        </div>
      </div>
    </section>
  );
}
