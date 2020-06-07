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
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '370px',
      height: '500px'

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      margin: theme.spacing(0),
      color: theme.palette.text.secondary,
    },
    boxBody: {
      display: 'block', 
      margin: 'auto',
    },
    gridBody: {
      padding: theme.spacing(5), 
      position: 'relative',
    },
}));

export default function Body(props) {
  const {content, title} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Homepage title */}
      <Grid container style={{ color: 'white'}} className={classes.gridBody} justify="center" >
        <Typography component="h1">
          {title}
        </Typography>
      </Grid>
      {/* Homepage content */}
      <Grid container className={classes.gridBody}  justify="space-evenly">
        <Grid item xs={'auto'} m={0}>
          <Paper m={0} className={classes.profilePicture}/>>
        </Grid>
        <Grid item xs={'8'} >
          <Box component="span" display="inline">
            <Typography style={{ color: 'white'}} component="h2" variant="h5">
              {content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Homepage what-am-i-up=to-currently*/}
      {/* Homepage latest posts*/}

    </React.Fragment>
  );
}
