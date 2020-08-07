import React from 'react'
import Zoom from 'react-reveal/Zoom' // Importing Zoom effect
import Slide from 'react-reveal/Slide' // Importing Zoom effect
import Fade from 'react-reveal/Fade' // Importing Zoom effect

//Images
import gradPic3 from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/gradPic3.jpeg'
import profPic from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/profPic.JPG'
import group from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/group.jpeg'
import group2 from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/group2.JPG'
import hatSolo from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/hatSolo.jpg'
//Core
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

import clsx from  'clsx';


//margin is spacing between components
//padding is spacing of component

const useStyles = makeStyles((theme) => ({
    content: {
      paddingBottom: theme.spacing(2),
    },
    title: {
      padding: theme.spacing(4),
    },
    gridSpacing: {
      paddingBottom: theme.spacing(10),
    }
}));

export default function Body(props) {
  const {content, title} = props;
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <Box style={{background: 'rgb(230,233,240)'}}>
        {/*Title*/}
        <Zoom delay={500}>
          <Typography className={classes.title}
          align="center"
          variant="h3"
          component="div"
          style={{color: 'rgb(0,51,102)'}}>
            <Box fontWeight={1000} >
              {title}
            </Box>
          </Typography>
        </Zoom>

        {/************************ Row 1 ************************/}
        <Grid className={classes.gridSpacing} 
        container 
        justify="space-evenly" 
        alignItems="center">
            <Grid 
            item
            xs="auto">
              <Slide left duration={500}>
                <Paper 
                  src={gradPic3}
                  component="img" 
                  width="330" 
                  height="360"/>
              </Slide>
            </Grid>
            <Grid  
            item
            xs="6">
              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  <Box fontStyle="oblique" fontWeight="fontWeightBold">
                    I like meeting new folks, exploring new habits, and stepping outside of my comfort zone...
                  </Box>
                </Fade>
              </Typography>
            </Grid>
        </Grid>

        {/************************ Row 2 ************************/}
        <Grid className={classes.gridSpacing} 
        container 
        direction="row-reverse"
        justify="space-evenly"
        alignItems="center">
            <Grid 
            item
            xs="auto">
            <Slide right duration={500}>
              <Paper
                component="img" 
                width="360" 
                height="270" 
                src={group2}/>
            </Slide>
            </Grid>
            <Grid 
            xs="6" 
            item>
              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  Graduated from the University of Texas at Austin (hook 'em!) with a degree in Electrical & 
                  Computer Engineering.
                </Fade>
              </Typography>
              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  Incoming analyst at Deloitte Risk & Financial Advisory.
                </Fade>
              </Typography>

              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  <Link href="https://www.dropbox.com/s/2eha3y4f3mt49su/Abhishek%20Emil%20Mandal_Resume.pdf?dl=0">
                    Here is a link to my resume if you're interested 
                  </Link>                
                </Fade>
              </Typography>
            </Grid>
        </Grid>

        {/************************ Row 3 ************************/}
        <Grid className={classes.gridSpacing} 
        container 
        direction="row"
        justify="space-evenly" 
        alignItems="center">
            <Grid 
            item
            xs="auto">
              <Slide left duration={500}>
                <Paper
                component="img" 
                width="375" 
                height="300" 
                src={group}/>
              </Slide>
            </Grid>
            <Grid xs="6" item>
            <Typography  variant="h5" className={classes.content}>
              <Fade bottom delay={500}>
                  I am a sci-fi enthusianst, a huge pasta fanatic, and a decent programmer.
                  I was inspired by my good friend Henry to create this website for myself (you 
                  can check out his website in the link down below). I am not sure what kind of 
                  content I will be sharing here. Whatever it may be, I do hope that I can provide 
                  some introspection or inspiration for yourself, or maybe some humor to pass the time.
                </Fade>
              </Typography>
              <Typography  variant="h5" className={classes.content}>
                <Fade bottom delay={500}>
                  <Link href="https://mistersquiish.github.io/personal-website-v2/"> 
                    Henry's Inferior Website 
                  </Link>
                </Fade>
              </Typography>
            </Grid>
        </Grid>


      </Box>
    </React.Fragment>
  );
}
