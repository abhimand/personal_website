import React from 'react';
import Image from 'material-ui-image'

//Images
import gradPic from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/gradPic.jpeg'
//Core
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import CardMedia from '@material-ui/core/CardMedia'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors';

import clsx from  'clsx';


//margin is spacing between components
//padding is spacing of component

const useStyles = makeStyles((theme) => ({
    profilePictureSpacing: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(0),
    },
    content: {
      paddingBottom: theme.spacing(4),
    },
    title: {
      padding: theme.spacing(4)
    
    }



    
}));

export default function Body(props) {
  const {content, title} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.title}
      align="center"
      variant="h4">
        {title}
      </Typography>
      {/* Row 1 */}
      <Grid container justify="center" alignItems="center">
          <Grid className={classes.profilePictureSpacing}
          item
          xs="auto">
            <Paper className={classes.profilePicture}
            component="img" 
            width="300" 
            height="450" 
            src={gradPic}/>
          </Grid>
          <Grid xs='6' item>
            <Typography className={classes.content}>
              {content}
            </Typography>
          </Grid>
      </Grid>

      {/* Row 2 */}
      <Grid 
      container 
      direction="row-reverse"
      justify="center" 
      alignItems="center">
          <Grid className={classes.profilePictureSpacing}
          item
          xs="auto">
            <Paper className={classes.profilePicture}
            component="img" 
            width="300" 
            height="450" 
            src={gradPic}/>
          </Grid>
          <Grid xs='6' item>
            <Typography className={classes.content}>
              {content}
            </Typography>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}
