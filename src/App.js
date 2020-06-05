import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import eerc from './images/eerc.jpg'
import deloitte from './images/deloitte.jpg'
import tamiu from './images/tamiu.jpg'
import uhs from './images/uhs.jpg'
import fujitsu from './images/fujitsu.jpg'
import Header from './Header';
import Body from './Body';
import Posts from './Posts';
import Footer from './Footer';
import About from './About';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

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
    <Header title="abbyshacky" sections={headerSections} />
    <BrowserRouter>
      <Switch>
        {/* Home Page */}
        <Route 
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() => 
            <div>
              <Body content={aboutMeDescription} title={aboutMeTitle} />
            </div>
            }
          />
        {/* Career */}
        <Route
          exact
          path={process.env.PUBLIC_URL + "/career"}
          render={() => 
            <div>
              <Box component="div" style={{ background: 'linear-gradient(45deg, #999999 20%, #ffffff 90%)'}}>
                {posts.map((post) => (
                  <Posts key={post.title} post={post} />
                ))}
              </Box>
            </div>
            }
          />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/about"}
          component={About}
          />
      </Switch>
    </BrowserRouter>
    <Footer/>
  </React.Fragment>
  );
}

export default App;