import React from 'react';
//Images
import profPic from '/Users/abhi.mand/Desktop/Documents/ProgrammingProjects/personal_website/src/images/profPic.JPG'
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
    },
    marginSet: {
      marginTop: theme.spacing(4),
    },
    marginLast: {
      padding: theme.spacing(4), 
    }
}));

export default function Body(props) {
  const {content, title} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        {/* Homepage title */}
        <Typography className={classes.marginSet} variant="h4" align="center" style={{ color: '#606060'}}>
          {title}
        </Typography>
        {/* Homepage content */}
        <Box className={classes.marginSet} component="span" display="flex"  alignItems="center" justifyContent="center">
          <Paper className={classes.profilePicture}/>
        </Box>
        <Box className={classes.marginLast} component="span" display="flex">
          <Typography component="h2" variant="h5" style={{ color: '#808080'}}>
            {content}
          </Typography>
        </Box>
      </Container>
      
    </React.Fragment>
  );
}
