import React from 'react';
import profPic from './images/profPic.JPG'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'


import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'


import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    profilePicture: {
      background: `url(${profPic})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '337px',
      height: '450px'

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      margin: theme.spacing(0),
      color: theme.palette.text.secondary,
    },
    boxBody: {
      display: 'block', 
      marginTop: theme.spacing(8),
    },
    gridBody: {
      padding: theme.spacing(10), 
      paddingBottom: theme.spacing(15), 
      position: 'relative',
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
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
      {/* Homepage title */}
      <Typography className={classes.boxBody} variant="h4" align="center" style={{ color: "white"}}>
        {title}
      </Typography>
      {/* Homepage content */}
      <Grid container className={classes.gridBody}  justify="space-evenly" alignItems="center">
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
      </Grid>
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
