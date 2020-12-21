import React from 'react'
import Zoom from 'react-reveal/Zoom' // Importing Zoom effect
import Slide from 'react-reveal/Slide' // Importing Zoom effect
import Fade from 'react-reveal/Fade' // Importing Zoom effect
import Pdf from './AEM_Resume.pdf'
//Images
import gradPic from '../images/IMG_5361.jpeg'
import group from '../images/group.jpeg'
import pair from '../images/pair.JPG'
//Core
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

//margin is spacing between components
//padding is spacing of component

const useStyles = makeStyles((theme) => ({
    content: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(0),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    title: {
      paddingTop: theme.spacing(4),
    },
    gridSpacing: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    }
}));

export default function Body(props) {
  const {title} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box style={{background: 'rgb(230,233,240)'}}>
        {/************************* Title *************************/}
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
                  src={gradPic}
                  component="img" 
                  width="350" 
                  height="325"/>
              </Slide>
            </Grid>
            <Grid  
            item
            md="5">
              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  Graduated from the University of Texas at Austin (hook 'em!) with a degree in Electrical & 
                  Computer Engineering. I specialized in Software Engineering and Product Management during my 4 years at the 40 acres. 
                </Fade>
              </Typography>
              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  I will be working remotely as an analyst at Deloitte within the Cyber & Strategic Risk division in January. 
                </Fade>
              </Typography>

              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  <Link href={Pdf} target = "_blank">
                    Check out my LinkedIn account for more about my professional experience, or click on this link for my resume.  
                  </Link>                
                </Fade>
              </Typography>
            </Grid>
        </Grid>
 
        <Divider variant="middle"/>
      

        {/************************ Row 2 ************************/}
        <Grid className={classes.gridSpacing} 
        container 
        direction="row-reverse"
        justify="space-evenly"
        alignItems="center">
            <Grid 
            item
            xs="auto">
            <Slide left duration={500}>
              <Paper
                component="img" 
                width="390" 
                height="300" 
                src={pair
              }/>
            </Slide>
            </Grid>
            <Grid 
            md="5" 
            item>
              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  I am a self-proclaimed amateur chef, fitness enthusiast, and avid Duolingo user (currently learning spanish and ranked top 4% world wide!)
                  I am always moving, learning, and exploring, seeking new hobbies and knowledge from other folks. I spend most of my time solving solutions to 
                  problems I encounter often - this can be seen by my personal projects below. 
                </Fade>
              </Typography>
              <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  If you have any book, podcast, or movie recommendations, I would absolutely love to check them out! Otherwise, I listed some of my recommendations below. 
                </Fade>
              </Typography>
            </Grid>
        </Grid>
        <Divider variant="middle"/>

        {/************************* Title *************************/}
        <Zoom delay={500}>
          <Typography className={classes.title}
          align="center"
          variant="h3"
          component="div"
          style={{color: 'rgb(0,51,102)'}}>
            <Box fontWeight={1000} >
              Personal Projects
            </Box>
          </Typography>
        </Zoom>
        {/************************ Row 3 ************************/}

        <Grid className={classes.gridSpacing} 
        container 
        direction="row"
        justify="space-evenly" 
        alignItems="center">
            <Grid 
            md="5" 
            item>
            <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  <b>Recipe Rotator</b> Script that randomly outputs a meal with list of steps and ingredients based on cuisine preference. 
                </Fade>
              </Typography>
              <Typography className={classes.content} 
              variant="h5">
                 <Fade bottom delay={500}>
                  <b>Mint Analytics</b> Utilizes personal transactional data from Mint app that presents metrics and analysis. [Currently working on this]
                </Fade>
              </Typography>
            </Grid>
        </Grid>

        <Divider variant="middle"/>

        

          {/************************* Title *************************/}
          <Zoom delay={500}>
          <Typography className={classes.title}
          align="center"
          variant="h3"
          component="div"
          style={{color: 'rgb(0,51,102)'}}>
            <Box fontWeight={1000} >
              My Recommendations
            </Box>
          </Typography>
        </Zoom>
        {/************************ Row 4 ************************/}
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
                width="385" 
                height="310" 
                src={group}/>
              </Slide>
            </Grid>
            <Grid 
            md="5" 
            item>
            <Typography className={classes.content} 
              variant="h5">
                <Fade bottom delay={500}>
                  <b>Movies</b> Interstellar, Fargo, Parasite
                </Fade>
              </Typography>
              <Typography className={classes.content} 
              variant="h5">
              <Fade bottom delay={500}>
                  <b>TV Shows</b> Fraiser, West Wing, Dark
                </Fade>
              </Typography>
              <Typography className={classes.content} 
              variant="h5">
                 <Fade bottom delay={500}>
                  <b>Podcasts</b> Hardcore History
                </Fade>
              </Typography>
              <Typography className={classes.content} 
              variant="h5">
                 <Fade bottom delay={500}>
                  <b>Books</b> How to Win Friends and Influence People, Atomic Habits
                </Fade>
              </Typography>
            </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
