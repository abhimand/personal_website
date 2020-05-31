import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,
    },
    gridPosts: {
        padding: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`, //sets the line below the toolbar
    },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (

    <React.Fragment>

        <Grid container className={classes.gridPosts} style={{ backgroundColor: 'lightgrey'}} justify="center" alignContent="center">
            <Grid item xs={'auto'} md={3}>
                <Paper className={classes.paper} style={{ height: 150, width: 225, position: "relative"}} component='img' src={post.image}/> 
            </Grid>
            <Grid item xs={'auto'} md={3}>
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
    </React.Fragment> 
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};