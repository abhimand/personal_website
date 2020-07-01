import React, { useState } from 'react';
// JS Files
import FoodPosts from './FoodPosts';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(180,180,160)', //beige - 180,180,160 | grey - 100, 100, 100
        color: 'white',
        padding: theme.spacing(2),
    },
    paragraphSpacing: {
        padding: theme.spacing(2),
    },
}));


export default function Food(props) {
    const classes = useStyles();

    return (
        <div>
            {/* *************************************************************************** */}
            {/* Skills Section */}
            {/* *************************************************************************** */}
            {FoodPosts.map((post) => (
                <Container maxWidth="md">
                    <Box className={classes.root}>
                        <Typography  variant="h5">
                            {post.title}
                        </Typography>
                        <Typography>
                            {post.date}
                        </Typography>
                        {/* {FoodPosts.post.content.map((c) => (
                            <Typography>
                                {c.paragraph}
                            </Typography>
                        ))} */}
                        <Typography>
                            {post.content}
                        </Typography>
                    </Box>
                </Container>
            ))}


        
        </div>
    );
}