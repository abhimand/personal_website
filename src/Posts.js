import React, { useState } from 'react';
import VizSensor from 'react-visibility-sensor'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,
    },
    gridPosts: {
        padding: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`, //sets the line below the toolbar
    },
}));

export default function Posts(props) {
  const classes = useStyles();
  const { post } = props;
  let [active, setActive] = useState(false);
  return (
    <React.Fragment>
        <VizSensor onChange={(isVisible) => {
            setActive(isVisible); 
        }}
        >
            <Grid container className={classes.gridPosts} style={{ backgroundColor: 'lightgrey'}} justify="center" alignContent="center">
                <Grid item xs={'auto'} md={3}>
                    <Grow in={active} timeout={3000}>
                        <Paper className={classes.paper} style={{ height: 175, width: 250, position: "relative" }} component='img' src={post.image}/> 
                    </Grow>
                </Grid>
                <Grid item xs={'auto'} md={3} justify="center">
                    <Box component="span" display="inline">
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        
                        <Typography variant="subtitle1" color="textSecondary">
                            {post.position}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.location}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </VizSensor>
    </React.Fragment> 
  );
}

Posts.propTypes = {
  post: PropTypes.object,
};