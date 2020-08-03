import React from 'react';
//Images
import Image from 'material-ui-image'

import profPic from '/Users/abhi.mand/Documents/ProgrammingProjects/personal_website/src/images/profPic.JPG'
//Core
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    profilePicture: {
        background: `url(${profPic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '337px',
        height: '450px',
        margin: theme.spacing(5), 
      },
      typo: {
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
      },
      picturePosition: {
        float: 'right'
      },
}));

export default function Body(props) {
  const {content, title} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.picturePosition} display="flex" justifyContent="center" alignItems="flex-end" style={{ width: 'auto' }}>
        <Paper className={classes.profilePicture}/>
      </Box>
      <Box  component="div" display="flex" justifyContent="center" alignItems="center" style={{ width: 'auto' }}>
        <Typography className={classes.typo} variant="h6" style={{ color: '#606060'}}>
          {content}
        </Typography>
      </Box>
    </React.Fragment>
  );
}
