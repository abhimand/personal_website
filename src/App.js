// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// JS & CSS Files
import Header from './Header';
import Body from './Body';
import Career from './Career';
import Footer from './Footer';
import About from './About';
import './App.css';
// Material-UI
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
// Header Images
import nyc from './images/backgroundImages/nyc.jpg'
import eveningRest from './images/backgroundImages/eveningRest.jpg'
import lakegeneva from './images/backgroundImages/lakegeneva.jpg'
import galacticcenter from './images/backgroundImages/galacticcenter.jpg'
import reflectionlake from './images/backgroundImages/reflectionlake.jpg'


// Career Images
import eerc from './images/careerImages/eerc.jpg'
import deloitte from './images/careerImages/deloitte.jpg'
import tamiu from './images/careerImages/tamiu.jpg'
import uhs from './images/careerImages/uhs.jpg'
import fujitsu from './images/careerImages/fujitsu.jpg'


const headerSections = [
    { title: 'Home', url: process.env.PUBLIC_URL + '/' },
    { title: 'About', url: process.env.PUBLIC_URL + '/about' },
    { title: 'Career', url: process.env.PUBLIC_URL + '/career' },
    { title: 'Food', url: process.env.PUBLIC_URL + '/food' },
    { title: 'Travel', url: process.env.PUBLIC_URL + '/travel' },
];

const posts = [
  {
    title: 'Deloitte',
    position: 'Analyst',
    date: 'January 2021',
    location: 'Dallas, TX',
    description: 'I will be joining as a Cyber Risk analyst in the Risk and Financial Advisory division of Deloitte' ,
    image: deloitte,
    imageText: 'Image Text',
  },
  {
    title: 'Fujitsu',
    position: 'Software Engineer Intern',
    date: 'June 2019 - August 2019',
    location: 'Richardson, TX',
    description: 'I worked here as the Software Strategic Planner within the Corporate Planning Team of Fujitsu Network Communications Inc. ',
    image: fujitsu,
    imageText: 'Image Text',
  },
  {
    title: 'Mobile Computing Group',
    position: 'Researcher',
    date: 'May 2018 - August 2018',
    location: 'Austin, TX',
    description: 'I worked here on android applcations for IoT Devices',
    image: eerc,
    imageText: 'Image Text',
  },
  {
    title: 'TAMIU',
    position: 'Researcher',
    date: 'May 2017 - August 2017',
    location: 'Laredo, TX',
    description: 'Worked with Deepak Ganta and his team on optoelectronic technology with textiles',
    image: tamiu,
    imageText: 'Image Text',
  },
  {
    title: 'United High School',
    position: '',
    date: 'Class of 2016',
    location: 'Laredo, TX',
    description: 'Graduated from high school rank 9 out of 1014, was in Robotics, NHS, MUN, and other orgs.',
    image: uhs,
    imageText: 'Image Text',
  },

];

const aboutMeDescription = 'Hello! My name is Abhishek. I was inspired to create this website by my good friend Henry Vuong. I created this website to showcase myself. And perhaps other things as well.';
const aboutMeTitle = 'About Me...'

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
              <Header title="abbyshacky" mainMessage="Home"  image={reflectionlake} sections={headerSections} />
              <Body content={aboutMeDescription} title={aboutMeTitle} />
            </div>
          }
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/about"}
          component={About}
        />
        {/* Career */}
        <Route
          exact
          path={process.env.PUBLIC_URL + "/career"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Career" image={nyc} sections={headerSections} />
              <Box component="div" style={{ background: 'linear-gradient(0deg, #000005 20%, #647695 90%)'}}>
                {posts.map((post) => (
                  <Career key={post.title} post={post} />
                ))}
              </Box>
            </div>
            }
          />
        {/* Home Page */}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => 
            <div>
              <Header title="abbyshacky" mainMessage="Home"  image={nyc} sections={headerSections} />
              <Body content={aboutMeDescription} title={aboutMeTitle} />
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