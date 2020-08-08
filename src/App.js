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
import utaustin from './images/backgroundImages/utaustin.jpeg'
import skyline from './images/backgroundImages/skyline.jpg'
import cheftable from './images/backgroundImages/cheftable.jpg'
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
    // { title: 'Food', url: process.env.PUBLIC_URL + '/food' },
    // { title: 'Travel', url: process.env.PUBLIC_URL + '/travel' },
];

const aboutMeDescription = 'SHORT ABOUT ME what would happen if i just keep typing and maybe inpsire passion in you to set out and do your own good in the world.';
const aboutMeTitle = 'About me'
const footerMessage = 'Made with React, Material-UI, and a whole lot of frustration...'
// 
// section of what i am currently watching, video game
// section of what i am up to
//


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
              mainMessage="Hey! I'm Abhi" 
              sections={headerSections}/>
              <Homepage 
              content={aboutMeDescription} 
              title={aboutMeTitle}/>
            </div>
          }/>
        {/************************* Resume *************************/}
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
        {/************************* Food *************************/}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/Food"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Food"  image={cheftable} sections={headerSections} />
              <Box  component="div" 
                    flexWrap="wrap" 
                    justifyContent="center" 
                    style={{  
                            backgroundPosition: 'center', 
                            }}>  
                <Food/>
              </Box>
            </div>
            }
          />
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