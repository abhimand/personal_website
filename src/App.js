// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// JS & CSS Files
import Header from './Main/Header';
import Homepage from './Home/Homepage';
import Footer from './Main/Footer';
import Resume from './Resume/Resume';
import Food from './Food/Food';
import Submission from './Main/Submission'
import './App.css';
// Material-UI
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Header Images
import skyline from './images/backgroundImages/skyline.jpg'
import cheftable from './images/backgroundImages/cheftable.jpg'
import flight from './images/backgroundImages/flight.jpg'
import reflectionlake from './images/backgroundImages/reflectionlake.jpg'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});


const headerSections = [
    { title: 'Home', url: process.env.PUBLIC_URL + '/' },
    { title: 'Resume', url: process.env.PUBLIC_URL + '/resume' },
    { title: 'Food', url: process.env.PUBLIC_URL + '/food' },
    { title: 'Travel', url: process.env.PUBLIC_URL + '/travel' },
];

const aboutMeDescription = 'Hello! My name is Abhishek. I was inspired by one of my closest friends Henry Vuong to set out and create a website, although the task seemed to be more tedious than I had expected. To be honest, I am not sure what kind of content I will be posting. Whatever it may be, I hope it will provide some insightful commentary, personal mistakes of mine you can learn from, and maybe inpsire passion in you to set out and do your own good in the world.';
const aboutMeTitle = 'Jack of all Trades - Master of None'
const footerMessage = 'Made with React, Material-UI, and constant frustration'

function App() {
  return (
  <React.Fragment>
    {/* Setting layouts */}
    <CssBaseline/>
    <ThemeProvider theme={theme}>
    {/* Routes */}
    <BrowserRouter>
      <Switch>
        {/* Home Page - FINISHED */}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => 
            <div>
              <Header title="abbyshacky" 
                      image={reflectionlake} 
                      mainMessage="Under Construction" 
                      sections={headerSections} 
              />
              <Box  component="div" 
                    borderTop={5}
                    style={{ background: 'lightgrey', 
                            backgroundPosition: 'center', 
                            borderColor:'black', 
                            }}>  
                <Homepage content={aboutMeDescription} 
                          title={aboutMeTitle} />
              </Box>
            </div>
          }
        />
        {/* Resume */}
        <Route
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
          />
        {/* Food */}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/Food"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Food"  image={cheftable} sections={headerSections} />
              <Box  component="div" 
                    borderTop={5}
                    flexWrap="wrap" 
                    justifyContent="center" 
                    style={{ backgroundColor: 'rgb(180,180,160)', 
                            backgroundPosition: 'center', 
                            borderColor:'black', 
                            }}>  
                <Food/>
              </Box>
            </div>
            }
          />
        {/* Travel */}
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
    <Box style={{ background: 'rgb(25,39,60)'}}>
      <Footer message={footerMessage} title="Submitted!" />
    </Box>
    </ThemeProvider>
  </React.Fragment>
  );
}

export default App;