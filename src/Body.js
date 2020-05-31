import React from 'react';
import profPic from './images/profPic.JPG'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    profilePicture: {
      background: `url(${profPic})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(20),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),

      width: '250px',
      // display: 'block', 
      // margin: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    boxBody: {
      display: 'block', 
      margin: 'auto',
    },
    gridBody: {
      padding: theme.spacing(2), 
      position: 'relative',
    },
}));

export default function Body(props) {
  const {content, title} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.gridBody} style={{ backgroundColor: '#000011'}}  justify="center"ls >
        <Grid item xs={'auto'}>
          <Paper className={classes.profilePicture}/>>
        </Grid>
        <Grid item xs={'auto'} >
          <Box component="span" display="inline">
            <Typography style={{ color: 'white'}} component="h2" variant="h5">
                {title}
            </Typography>
            <Typography style={{ color: 'white'}} variant="subtitle1" paragraph>
              {content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
