import React, { useState } from 'react';
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
      paddingTop: theme.spacing(4)
    },
    boxStyles: {
      color: 'white',
      padding: theme.spacing(1)
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
              <Typography className={classes.typo} style={{ color: 'white'}} component="h2" variant="h5">
                  {message}
              </Typography>
            </Fade>
          </Box>
        </VizSensor>
        <Box className={classes.boxStyles} component="span" display="flex" flexDirection="row-reverse" >
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
        {/* <div className="mailing-list-signup-container">
				<div id="mc_embed_signup">
				<form action="//dataskeptic.us9.list-manage.com/subscribe/post?u=65e63d6f84f1d87759105d133&amp;id=dc60d554db" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
				    <div id="mc_embed_signup_scroll">
						<label for="mce-EMAIL">Subscribe to our mailing list</label>
						<input type="input" value={this.state.email} onChange={this.onChange} name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
					    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
				    </div>
				</form>
				</div>
			</div> */}
    </React.Fragment>
  );
}
  
