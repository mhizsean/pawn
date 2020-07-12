
  '@media(max-width: 991px)': {
    root: {
      width: '100%',
      marginTop: '75px',
      top: '-110px',
    },
    intro: {
      marginTop: '0%',
      marginBottom: '15%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      '& h1':{
      fontSize: '50px',
      marginTop: '100px',
      marginLeft: '20px',
      width: '100%',
      flex: 1,
      },
      '& p': {
      fontSize: '18px',
      marginLeft: '20px',
      lineHeight: '30px',
      marginTop: '30px',
      marginRight: '20px',
      marginBottom: '50px',
      width: '100%',
      flex:1,
      },
      '& button':{
        backgroundColor: colors.orangeRed,
        color: colors.white,
        padding: '25px 30px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '15px',
        lineHeight: '25px',
        marginLeft: '20px',
        marginTop: '0',
        width: '25%'
      }


    },
    sub: {
      width: '60%',
      margin: '0 auto',
      position: 'absolute',
      top: '300px'
    },
    subNav: {
      position: 'absolute',
      top: '300px',
      left: '200px'
    },
    meetWrapper: {
      display: 'flex',
      marginTop: '200px',
      width: '100%',
    },
    meetContent: {
      meetContent: {
        width: '100%',
      },
    },
    meetImages: {
      width: '90%',
    },
    meetImage:{
      padding: 5,
    },
    workingHeadline: {
      // top: '70px',
    },
    workingContainer: {
      // marginTop: '100px',
    },
    workingImage: {
      height: '140%',
    },
    pagination: {
      margin: '0 auto',
      width: '60%',
    },
    pagText: {
      width: '100%',
      fontSize: '15px',
    },
  },
  '@media(max-width: 767px)': {
    aboutSection:{
      // backgroundColor: '#F9F9FA',
      // height: '110vh',
      // width: '100%',
       position: 'relative',
      bottom: '100vh',
      display: 'block',
      marginBottom: '0px'
    },
    describe:{
      display: 'block' ,
      marginLeft: '15px',
      marginRight: '15px',
      lineHeight: '30px'
   
    },
    topSpace:{
      display: 'block',
      position: 'relative',
      bottom: '50px',
    },
    company:{
      position: 'relative',
      bottom: '30vh'
    },
    main:{
  //  '& svg': {
  //    display: 'block',
  //    top: '250px',
  //    position: 'relative',
  //  },
   backgroundImage: `url(${mobile})`,
   height:'130vh',
   width: '100%',
   backgroundRepeat: 'no-repeat',
   objectFit: 'cover',
   position: 'relative',
   bottom: '80px',
   marginRight: '0px',
   backgroundSize: '100%'
 },
    root: {
      // width: '100%',
      // marginTop: '5px',
      // top: '-100px',
      // height: '95%',
      display:'none'
    },
    intro: {
      marginTop: '0%',
      marginBottom: '5%',
      width: '100%',
      position: 'relatve',
      top: '50px'
    },

    headline: {
      fontSize: '45px',
      marginLeft:0,
      position: 'relative',
      right:'10px'
    },
    description: {
      fontSize: '13px',
      lineHeight: '25px',
    },
    button: {
      padding: '15px 20px',
      borderRadius: '5px',
      fontSize: '18px',
      marginTop:'30px',
      width: '150px',
      height: '70px'
    },
    sub: {
      width: '90%',
      marginBottom: '10px',
      position: 'absolute',
      right: '200px',
      top: '100vh',
    },
    subNav:{
      backgroundColor: '#F8F8FF',
    },
   meetWrapper: {
      display: 'flex',
      flexReverse: 'row',
    },
    meetContent: {
      width: '100%',
      position: 'relative',
      top: '270px',
      flex: 1
    },
    meetContentH1: {
      fontWeight: 'normal',
      position: 'relative',
      bottom: '150px',
      marginTop: '20px'
    },
    meetContentP: {
      fontWeight: 'normal',
      justifyContent: 'center',
      position: 'relative',
      top: '250px',
    },
    meetImages: {
      flex: 1,
      maxWidth: '100%',
      position: 'relative',
      bottom: '120px',
      marginRight: '10px',
      marginLeft: '10px'
        },
    meetImage: {
      flex: '15%',
      maxWidth: '45%'
    },
    meetImageOne:{
      marginLeft: 'px'
    },
    working: {
      position: 'relative',
      top: '100vh',
      display: 'flex'
    },
    workingImage:{
      // position: 'relative',
      // bottom: '40px',
      height: '300px'
    },
    workingContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    positions: {
      display: 'block',
      position:'relative',
      // top:'1vh',
      marginBottom: '150px',
      '& h4': {
        fontSize: '25px',
        marginBottom: '50px',
        color: colors.brown,
        textAlign: 'center',
      },
      '& div': {},
      '& section': {
        margin: '15px',
        padding: '15px',
        fontSize: '12px',
      },
    },
    pagination: {
      width: '100%',

      '& a': {
        color: 'black',
        float: 'left',
        padding: '8px 16px',
        textDecoration: 'none',
      },
    },
    pagText: {
      marginTop: '20px',
      textAlign: 'center',
      lineHeight: '15px',
      width: '100%',
      fontSize: '13px',
    },
  },
  '@media(max-width: 575px)': {
    intro: {
      width: '100%',
      marginBottom: '5%',
    },
    headline: {
      whiteSpace: 'nowrap',
      fontSize: '35px',
    },
    description: {
      fontSize: '14px',
    },
    sub: {
      width: '100%',
      margin: '0 auto',
    },
    meetWrapper: {
      display: 'block',
      marginTop: '60px',
    },
    meetContent: {
      width: '100%',
    },

    meetImages: {
      width: '100%',
    },
  },
  '@media(max-width: 450px)': {
    intro: {
      width: '100%',
      marginBottom: '50%',
    },
    headline: {
      textAlign: 'center',
      width: '80%',
    },
    description: {
      width: '90%',
    },
    sub: {
      width: '90%',
      margin: '0 auto',
    },
    meetWrapper: {
      display: 'block',
      marginTop: '60px',
    },
    meetContent: {
      width: '100%',
    },

    meetImages: {
      width: '100%',
    },
    workingImage: {
      height: '280%',
    },
    pagination: {
      margin: '0 auto',
      width: '100%',

      '& a': {
        fontSize: '13px',
      },
    },
    pagText: {
      fontWeight: 'bold',
      fontSize: '12px',
    },
  },
  '@media(max-width: 360px)': {
    intro: {
      width: '100%',
      marginBottom: '140%',
    },
    headline: {
      fontSize: '25px',
    },
    description: {
      width: '90%',
    },
    sub: {
      width: '95%',
      margin: '0 auto',
    },
    meetWrapper: {
      display: 'block',
      marginTop: '60px',
    },
    meetContent: {
      width: '100%',
    },

    meetImages: {
      width: '100%',
    },
  },