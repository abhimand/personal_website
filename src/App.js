import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import fujtisu from './images/fujitsu.jpg'
import eerc from './images/eerc.jpg'
import deloitte from './images/deloitte.jpg'



import Header from './Header';
import Body from './Body';
import Posts from './Posts';
import Footer from './Footer';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';



// const useStyles = makeStyles((theme) => ({
//   gridApp: {
//     padding: theme.spacing(4),
//   },
  
// }));

const headerSections = [
    // { title: 'Food', url: '#' },
    // { title: 'Thoughts', url: '#' },
    // { title: 'Travel', url: '#' },
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
    image: fujtisu,
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

];

const aboutMeDescription = 'Hello! My name is Abhishek. I was inspired to create this website by my good friend Henry Vuong. I created this website to showcase myself in the best way possible: by bragging. ';
const aboutMeTitle = 'About Me...'

function App() {
  // const classes = useStyles();

  return (
  <React.Fragment>
    <CssBaseline/>
    <header className="App-header">
      <Header title="A. E. Mandal" sections={headerSections} />
    </header>
    <body className="App-header">
      <Body content={aboutMeDescription} title={aboutMeTitle} />
        <Box component="span">
          {posts.map((post) => (
            <Posts key={post.title} post={post} />
          ))}
        </Box>
        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="/__/firebase/7.14.6/firebase-app.js"></script>
        {/* <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries --> */}
        <script src="/__/firebase/7.14.6/firebase-analytics.js"></script>
        {/* Initialize Firebase */}
        <script src="/__/firebase/init.js"></script>
    </body>
    <Footer/>
    </React.Fragment>
  );
}

export default App;