import React from 'react'
import Zoom from 'react-reveal/Zoom' // Importing Zoom effect
import Slide from 'react-reveal/Slide' // Importing Zoom effect
import Fade from 'react-reveal/Fade' // Importing Zoom effect
import Pdf from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/Home/AEM_Resume.pdf'
//Images
import gradPic from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/gradPic.jpeg'
import group from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/group.jpeg'
import pair from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/pair.JPG'
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
                  width="330" 
                  height="360"/>
              </Slide>
            </Grid>
            <Grid  
            item
            md="5">
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
                width="360" 
                height="270" 
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
                  <Link href={Pdf} target = "_blank">
                    Here is a link to my resume if you're interested 
                  </Link>                
                </Fade>
              </Typography>
            </Grid>
        </Grid>

        <Divider variant="middle"/>
        
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
            <Grid 
            md="5" 
            item>
            <Typography  variant="h5" className={classes.content}>
              <Fade bottom delay={500}>
                  I am a sci-fi enthusiast, a huge pasta fanatic, and a decent programmer.
                  My good friend Henry inspired me to create this website for myself (you 
                  can check out his website in the link down below). I am not sure what kind of 
                  content I will be sharing here. Whatever it may be, I do hope that I can provide 
                  some introspection or inspiration for yourself. Or you could stalk me, that works too. 
                </Fade>
              </Typography>
              <Typography  variant="h5" className={classes.content}>
                <Fade bottom delay={500}>
                  <Link href="https://henryvuong.com/"> 
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
