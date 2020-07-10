import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Objectivity from './fonts/Objectivity-Regular.ttf';
import ObjectivityMedium from './fonts/Objectivity-Medium.ttf';
import ObjectivityBold from './fonts/Objectivity-Bold.ttf';
import  { Breakpoint, BreakpointProvider } from 'react-socks';


import Nav from './Nav';
import Footer from './Footer';
import HomepageMain from './HomepageMain';
import About from './About';
import Pricing from './Pricing';
import faqPage from './faqPage';
import Tos from './tos';
import Privacy from './Privacy';
import DrivingState from './DrivingState';
import Partner from './Partner';
import Drive from './drive';
import MainForm from './Components/MainForm';
import Error from './404.js'
import Cookie from './Cookie'

import { useState } from "react";
import { useEffect } from "react";



const useStyles = makeStyles({
  '@global': {
    '@font-face': [
      {
        fontFamily: "'Objectivity'",
        fontStyle: 'normal',
        fontWeight: 700,
        src: `local('Objectivity'), url(${ObjectivityBold}) format('truetype')`,
      },
      {
        fontFamily: "'Objectivity'",
        fontStyle: 'normal',
        fontWeight: 500,
        src: `local('Objectivity'), url(${ObjectivityMedium}) format('truetype')`,
      },
      {
        fontFamily: "'Objectivity'",
        fontStyle: 'normal',
        fontWeight: 400,
        src: `local('Objectivity'), url(${Objectivity}) format('truetype')`,
      },
    ],
    body: {
      fontFamily: 'Objectivity',
      fontWeight: 'normal',
      margin: 0,
      overflowX: 'hidden',
    },
    '.container': {
      maxWidth: '100%',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      '@media(min-width: 576px)': {
        maxWidth: '540px',
      },
      '@media (min-width: 768px)': {
        maxWidth: '720px',
      },
      '@media (min-width: 992px)': {
        maxWidth: '940px',
      },
      '@media (min-width: 1441px)': {
        maxWidth: '1140px',
      },
    },
    'img-fluid': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
});

export const AppContext = React.createContext();

function App() {
  useStyles();
  const [faqSearch, setFAQSearch] = useState("");
  useEffect(() => {
    console.log(faqSearch);
  }, [faqSearch]);

  const changeFAQSearch = (faqSearch) => {
    setFAQSearch(faqSearch.toLowerCase());
  };
  return (
    <AppContext.Provider
      value={{
        faqSearch,
        changeFAQSearch,
      }}
    >
    <div>
          <Router>
            {/* <Nav /> */}
            <Switch>
              <Route exact path="/" component={HomepageMain} />
              <Route exact path="/about" component={About} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/faq" component={faqPage} />
              <Route exact path="/tos" component={Tos} />
              <Route exact path="/partner" component={Partner} />
              <Route exact path="/drive" component={Drive} />
              <Route exact path="/MainForm" component={MainForm} />
              <Route exqact path="/Cookie" component={Cookie}/>
              <Route exact path="/404" component={Error} />
              <Route path="*" component={Error} />
            </Switch>
            <DrivingState/>
            <Footer />
          </Router>
    </div>
        </AppContext.Provider>

  );
}

export default App;
