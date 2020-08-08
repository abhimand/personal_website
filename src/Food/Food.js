import React, { useState } from 'react';
// JS Files
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown.js';
import Box from '@material-ui/core/Box';
import post1 from './post.1.js';
import post2 from './post.2.js';
import post3 from './post.3.js';

const posts = [post1, post2, post3]

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
        paddingBottom: theme.spacing(20),
    },
    boxSpacing: {
        paddingLeft: theme.spacing(45), 
        paddingRight: theme.spacing(45),
    },
  }));


export default function Food(props) {
    const classes = useStyles();
    return (
        <Box className={classes.boxSpacing}>       
            {posts.map((post) => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))}
        </Box>
    );
}