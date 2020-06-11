// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// JS & CSS Files
import Header from './Header';
import Homepage from './Homepage';
import Career from './Career';
import Footer from './Footer';
import CareerPosts from './CareerPosts'
import './App.css';
// Material-UI
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
// Header Images
import skyline from './images/backgroundImages/skyline.jpg'
import cheftable from './images/backgroundImages/cheftable.jpg'
import flight from './images/backgroundImages/flight.jpg'
import reflectionlake from './images/backgroundImages/reflectionlake.jpg'

const headerSections = [
    { title: 'Home', url: process.env.PUBLIC_URL + '/' },
    { title: 'Career', url: process.env.PUBLIC_URL + '/career' },
    { title: 'Food', url: process.env.PUBLIC_URL + '/food' },
    { title: 'Travel', url: process.env.PUBLIC_URL + '/travel' },
];

const aboutMeDescription = 'Hello! My name is Abhishek. I was inspired by one of my closest friends Henry Vuong to set out and create a website, although the task seemed to be more tedious than I had expected. To be honest, I am not sure what kind of content I will be posting. Whatever it may be, I hope it will provide some insightful commentary, personal mistakes of mine you can learn from, and maybe inpsire passion in you to set out and do your own good in the world.';
const aboutMeTitle = 'Jack of all Trades - Master of None'

function App() {

  return (
  <React.Fragment>
    <CssBaseline/>
    <BrowserRouter>
      <Switch>
        {/* Home Page */}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => 
            <div>
              <Header title="abbyshacky" image={reflectionlake} mainMessage="Under Construction" sections={headerSections} />
              <Box component="div" borderTop={5}  style={{ background: 'linear-gradient(to top, #5f8c9e 30%, #132a4f 70%)', borderColor:'black'}}>
                <Homepage content={aboutMeDescription} title={aboutMeTitle} />
              </Box>
            </div>
          }
        />
        {/* Career */}
        <Route
          exact
          path={process.env.PUBLIC_URL + "/career"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Career" image={skyline} sections={headerSections} />
              <Box component="div" style={{ background: 'linear-gradient(0deg, #000005 20%, #647695 90%)'}}>
                {CareerPosts.map((post) => (
                  <Career key={post.title} post={post} />
                ))}
              </Box>
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
            </div>
            }
          />
          {/* Food */}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/Travel"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Travel"  image={flight} sections={headerSections} />
            </div>
            }
          />
      </Switch>
    </BrowserRouter>
    <Footer/>
  </React.Fragment>
  );
}

export default App;