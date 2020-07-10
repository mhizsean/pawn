import React, {useState} from 'react'
import { makeStyles } from "@material-ui/styles";
import { colors } from "./colors";
import client1 from './images/homepage/testimonials/client1.png'
import client2 from './images/homepage/testimonials/client2.png'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import rightArrow from './images/right-arrow.svg'
import longRightArrow from './images/long-right-arrow.svg'

const useStyles = makeStyles({
  dots: {
    width: '30px',
    height: '5px',
    backgroundColor: colors.orangeRed
  },
  headline: {
    color: colors.brown,
    marginBottom: '50px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  slider: {
    width: '70%',
    alignItems: 'center',
    position: 'relative',
    '& .swiper-container': {position:'static !important'},
    '& .swiper-pagination': {
      textAlign: 'left',
      bottom: '-40px',
      '& .swiper-pagination-bullet': {
        width: '35px',
        height: '6px',
        borderRadius: '5px',
      },
      '& .swiper-pagination-bullet-active': {
        background: colors.orangeRed,
        width: '70px'
      }
    },
    '@media(max-width:767px)' :{
      width: '70%',
      alignItems: 'center',
      position: 'relative',
      '& .swiper-container': {position:'static !important'},
    '& .swiper-pagination': {
      textAlign: 'center',
      bottom: '-40px',
      '& .swiper-pagination-bullet': {
        width: '35px',
        height: '6px',
        borderRadius: '5px',
        alignItems: 'center',
      },
      '& .swiper-pagination-bullet-active': {
        background: colors.orangeRed,
        width: '70px'
      }
    },
    }
  },
  testimonial: {
    textAlign: 'center',
    display: 'inline-block'
  },
  userImg: {
    width: '80px',
    borderRadius: '50%'
  },
  text: {
    color: colors.brown,
    fontWeight: 'bold',
    margin: '20px 0'
  },
  userName: {
    color: colors.darkGreyTxt
  },
  nextSlide: {
    border: `1px solid ${colors.orangeRed}`,
    borderRadius: '10px',
    width: '102px',
    height: '64px',
    outline: 'none',
    color: 'white',
    backgroundColor: colors.orangeRed,
    backgroundImage: `url(${rightArrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    '&:hover': {
      backgroundColor: colors.darkOrangeRed,
      backgroundImage: `url(${longRightArrow})`,
      cursor: 'pointer',
    }
  },
  '@media(max-width:575px)': {
    container: {
      flexDirection: 'column',
    },
    slider: {
      '& .swiper-pagination': {
        bottom: '-110px',
      }
    },
    testimonial: {display: 'block'}
  },
  '@media(max-width:767px)': {
     '& button':{
       visibility: 'hidden'
     },
     nextSlide: {
       display: 'none'
     }
  },
  '@media(max-width: 360px)': {
    slider: {
      '& .swiper-pagination': {
        bottom: '-10px',
      }
    }
  }
})
const testimonials = [
  {
    img: client1,
    text: '“Best Service By Far Created”',
    user: 'Las Vegas, Cedric'
  },
  {
    img: client2,
    text: '“This is a real game changer for the pet industry! Keep up the good work”',
    user: 'Alisha , Los Angeles, California'
  },{
    img: client1,
    text: '“Best Service By Far Created”',
    user: 'Las Vegas, Cedric'
  },
  
]
export default function Testimonials() {
  const classes = useStyles()
  const sliderParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
    }
  }
  const [swiper, updateSwiper] = useState(null);
  
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  return (
    <div className="container" style={{paddingBottom: '100px'}}>
      <h2 className={classes.headline}>Client Testimonials</h2>
      <div className={classes.container}>
        <div className={classes.slider}>
          <Swiper {...sliderParams} getSwiper={updateSwiper}>
            {testimonials.map((testimonial,i) => (
              <div key={i}>
                <div className={classes.testimonial}>
                  <img src={testimonial.img} alt="" className={classes.userImg} />
                  <h4 className={classes.text}>{testimonial.text}</h4>
                  <p className={classes.userName}>{testimonial.user}</p>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
        <button onClick={goNext} className={classes.nextSlide}></button>
      </div>
    </div>
  )
}
