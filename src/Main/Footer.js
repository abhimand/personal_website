import React, { useState } from 'react';
// Core
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Grid'
import VizSensor from 'react-visibility-sensor'
import Fade from '@material-ui/core/Fade';
import { blueGrey } from '@material-ui/core/colors';
// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    typo: {
      margin: theme.spacing(0),
      paddingTop: theme.spacing(8)
    },
    boxStyles: {
      color: 'white',
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
}));

export default function Footer(props) {
  const {message} = props; 
  const classes = useStyles();
  let [active, setActive] = useState(false);

  return (
    <React.Fragment>
      <VizSensor 
        partialVisibility
        onChange={(isVisible) => {
            setActive(isVisible); 
        }}
        >
        <Box display="flex" justifyContent="center" >
          <Fade in={active} timeout={3000}>
            <Typography component="h2" 
                        variant="h5"
                        className={classes.typo} 
                        style={{ color: 'white'}}>
                {message}
            </Typography>
          </Fade>
        </Box>
      </VizSensor>
      <Box  component="span" 
            display="flex" 
            flexDirection="row-reverse"
            className={classes.boxStyles}>
        <IconButton href="https://www.facebook.com/abhishek.mandal.75/" >
          <FacebookIcon style={{ fontSize: 50, color: blueGrey[50] }} />
        </IconButton>
        <IconButton href="https://github.com/abhimand/" >
          <GitHubIcon style={{ fontSize: 50, color: blueGrey[50] }} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/aemandal/" >
          <LinkedInIcon style={{ fontSize: 50, color: blueGrey[50] }} />
        </IconButton>
      </Box>

      {/* form control to follow */}
      {/* <form  action="https://getsimpleform.com/messages?form_api_token=ab1cc309b57edc613600e676540b4675" method="post">
        <FormControl> */}
          {/* <!-- the redirect_to is optional, the form will redirect to the referrer on submission --> */}
          {/* <Input type='hidden' name='redirect_to' value='https://www.abbyshacky.com/submission' /> */}
          {/* <!-- all your input fields here.... --> */}
          {/* <Input type="text" name="Name"/>
          <Input type="text" name="Email"/>
          <Input type="text" name="Feedback"/>
          <Input type="submit" name="Submit!"/>
        </FormControl>
      </form> */}
    </React.Fragment>
  );
}
  
