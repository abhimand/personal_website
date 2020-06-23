import React, { useState } from 'react';
import VizSensor from 'react-visibility-sensor'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import { blueGrey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.secondary,    
    },
    spacingHeader: {
        paddingBottom: theme.spacing(0), 
        color: 'white'
    },
    removeMargin: {
        margin: theme.spacing(0),
    },
    root: {
        display: 'flex',
        backgroundColor: 'rgb(180,180,160)',
        color: 'white',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    zeroTypoMargin: {
        margin: theme.spacing(0),
    },
    gridPosts: {
        padding: theme.spacing(2),
        position: 'relative',
        // borderBottom: `1px solid ${theme.palette.divider}`, //sets the line below the toolbar
    },
}));

export default function Posts(props) {
  const classes = useStyles();
  const { post } = props;
  let [active, setActive] = useState(false);
  return (
    <React.Fragment>
        {/* <VizSensor 
        partialVisibility
        onChange={(isVisible) => {
            setActive(isVisible); 
        }}
        > */}
        <Grid className={classes.gridPosts} item xs={12} md={6}>
            <Card className={classes.root}>
                {/* <div display="inline">
                    <Paper 
                        className={classes.paper} 
                        style={{ height: 'auto', width: 225 }} 
                        component='img' 
                        src={post.image}
                    />
                </div> */}
                <div display="block" className={classes.details}>
                    <CardHeader className={classes.spacingHeader}
                                title={post.title} 
                                subheader={post.position + " - " + post.location}
                    />
                    <Divider/>
                    <CardContent className={classes.content}>
                        <Box component="div" display="inline">
                            <Typography className={classes.removeMargin} 
                                        variant="subtitle2" 
                                        paragraph
                            >
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" 
                                        paragraph
                            >
                                {post.description}
                            </Typography>
                        </Box>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    </React.Fragment> 
  );
}

Posts.propTypes = {
  post: PropTypes.object,
};