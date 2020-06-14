import React from 'react';
import profPic from './images/profPic.JPG'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import pattern2 from './images/patterns/pattern2.jpg'

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

const latestStatuses = [
  { question: 'What am I up to right now?', answer: 'I am currently working on this website' },
  { question: 'What am I watching?', answer: 'Avatar the last Airbender!' },
  { question: 'What am I up to right now?', answer: 'I am currently working on this website' },
  { question: 'What am I up to right now?', answer: 'I am currently working on this website' },
];

const cards = [1, 2, 3];

export default function Body(props) {
  const {content, title} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container styles={{background: `url(${pattern2})`}}>
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
      {/* <Grid container className={classes.gridBody}  justify="space-evenly" alignItems="center">
        <Grid item xs={'auto'} m={0}>
          <Paper m={0} className={classes.profilePicture}/>
        </Grid>
        <Grid item xs={'8'} >
          <Box component="span" display="inline">
            <Typography style={{ color: 'white'}} component="h2" variant="h5">
              {content}
            </Typography>
          </Box>
        </Grid>
      </Grid> */}
      {/* Homepage what-am-i-up=to-currently*/}
      {/* {latestStatuses.map((status) => (
        <Grid container className={classes.gridBody}  justify="space-evenly" alignItems="center">
        <Grid item xs={'auto'} m={0}>
        <Typography style={{ color: 'white'}} component="h2" variant="h4">
            {status.question}
          </Typography>
        </Grid>
        <Grid item xs={'4'} >
          <Box component="span" display="inline">
          <Typography style={{ color: 'white'}} component="h2" variant="h4">
          {status.answer}
          </Typography>
          </Box>
        </Grid>
      </Grid>
      ))} */}

      {/* <Box component="span" display="flex" justifyContent="center">
        <Box component="div" display="inline" justifyContent="flex-start">
          <Typography style={{ color: 'white'}} component="h2" variant="h5">
            What am I up to right now?  
          </Typography>
        </Box>
        <Box component="div" display="inline" justifyContent="center"> 
          <Typography style={{ color: 'white'}} component="h2" variant="h5">
              I'm currently working on this website right now!
          </Typography>
        </Box>
      </Box>
      <Box component="span" display="block" justifyContent="center">
        <Box component="div" display="inline">What am I watching now?</Box>
        <Box component="div" display="inline"> Avatar the Last Airbender!</Box>
      </Box> */}


      {/* Homepage latest posts*/}
      {/* <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container> */}
    </React.Fragment>
  );
}
