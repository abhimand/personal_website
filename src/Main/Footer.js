import React from 'react'
import Fade from 'react-reveal/Fade'
// Core
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Grid'
import { blueGrey } from '@material-ui/core/colors'
// Icons
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
    contact: {
      paddingTop: theme.spacing(30)
    },
    icons: {
      color: 'white',
      paddingRight: theme.spacing(),
    },
    footerEnd: {
      background: 'rgb(32,32,32)',
    },
    email: {
      paddingBottom: theme.spacing(30),
    }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box style={{ background: 'radial-gradient(circle, rgba(8,69,116,1) 0%, rgba(21,37,71,1) 100%)'}}>
      
        {/****** Email ******/}
        <Box 
        display="flex" 
        justifyContent="center">
          <Fade top delay={500}>
            <Typography 
              component="h1" 
              className={classes.contact} 
              style={{ color: 'white'}}
              align="center">
                Let's get in touch
            </Typography>
          </Fade>
        </Box>
        <Box className={classes.email}
        display="flex" 
        justifyContent="center">
          <Fade bottom delay={500}>
            <Button
              variant="contained"
              href="mailto:abmand98@gmail.com">
                Email
            </Button>
          </Fade>
        </Box>

        {/*************** Copy, Message, & Icons  *************/}
        <Box className={classes.footerEnd}
        display="flex" 
        alignItems="center" >
          <Box  p={5} flexGrow={1}>
            <Typography 
            style={{ color: 'white'}}>
              <b>Copyright Abhishek E. Mandal 2020</b>
            </Typography>
          </Box>
          <Box  
          component="span" 
          display="flex" 
          flexDirection="row-reverse"
          className={classes.icons}>
            <IconButton href="https://www.facebook.com/abhishek.mandal.75/" >
              <FacebookIcon style={{ fontSize: 40, color: blueGrey[50] }} />
            </IconButton>
            <IconButton href="https://github.com/abhimand/" >
              <GitHubIcon style={{ fontSize: 40, color: blueGrey[50] }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/aemandal/" >
              <LinkedInIcon style={{ fontSize: 40, color: blueGrey[50] }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
  
