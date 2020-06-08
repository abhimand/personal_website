import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import VizSensor from 'react-visibility-sensor'
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    gridBody: {
        padding: theme.spacing(10), 
    },
}));

export default function Footer() {
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
        <Grid container className={classes.gridBody} style={{ background: 'linear-gradient(90deg, #000000 50%, #000000 90%)'}} justify="center" >
        <Fade in={active} timeout={3000}>
          <Typography style={{ color: 'white'}} component="h2" variant="h5">
              Made with React, Material-UI, and constant frustration
          </Typography>
          </Fade>
        </Grid>
      </VizSensor>


      
    </React.Fragment>
  );
}
