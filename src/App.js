// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// JS & CSS Files
import Header from './Main/Header';
import Homepage from './Home/Homepage';
import Footer from './Main/Footer';
// import Resume from './Resume/Resume';
// import Food from './Food/Food';
import './App.css';
// Material-UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Header Images
import flight from './images/backgroundImages/flight.jpg'
import reflectionlake from './images/backgroundImages/reflectionlake.jpg'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'nunito',
    ].join(','),
  }
});


const headerSections = [
    { title: 'Home', url: process.env.PUBLIC_URL + '/' },
    // { title: 'Resume', url: process.env.PUBLIC_URL + '/resume' },
    { title: 'Food', url: process.env.PUBLIC_URL + '/food' },
    // { title: 'Travel', url: process.env.PUBLIC_URL + '/travel' },
];

const aboutMeDescription = 'fill in later';
const aboutMeTitle = 'About me'
const footerMessage = 'Made with React, Material-UI, and a whole lot of frustration...'

function App() {
  return (
  <React.Fragment>
    {/* Setting layouts */}
    <CssBaseline/>
    <ThemeProvider theme={theme}>
    {/* Routes */}
    <BrowserRouter>
      <Switch>
        {/************************* Home Page *************************/}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => 
            <div>
              <Header 
              title="abbyshacky" 
              image={reflectionlake} 
              mainMessage="Hey, I'm Abhi!" 
              sections={headerSections}/>
              <Homepage 
              content={aboutMeDescription} 
              title={aboutMeTitle}/>
            </div>
          }/>
        {/************************* Resume *************************/}
        {/* <Route
          exact
          path={process.env.PUBLIC_URL + "/resume"}
          render={() => 
            <div>
              <Header title="abbyshacky"  
                      image={skyline} 
                      mainMessage="Resume" 
                      sections={headerSections} 
              />
              <Resume />
            </div>
            }
          /> */}
        {/************************* Food *************************/}
        {/* <Route 
          exact
          path={process.env.PUBLIC_URL + "/Food"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Food"  image={cheftable} sections={headerSections} />  
              <Food/>
            </div>
            }
          /> */}
        {/************************* Travel *************************/}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/Travel"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Travel"  image={flight} sections={headerSections} />
            </div>
            }
          />
          {/* Submission */}
          {/* <Route 
          exact
          path={process.env.PUBLIC_URL + "/submission"}
          render={() => 
            <div>
              <Submission title="abbyshacky" sections={headerSections} />
            </div>
            }
          /> */}
      </Switch>
    </BrowserRouter>
      <Footer message={footerMessage} title="Submitted!" />
    </ThemeProvider>
  </React.Fragment>
  );
}

export default App;