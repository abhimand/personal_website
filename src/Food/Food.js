import React, { useState } from 'react';
// JS Files
import FoodPosts from './FoodPosts';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown.js';


import post1 from './post.1.js';
import post2 from './post.2.js';
import post3 from './post.3.js';
const posts = [post1, post2, post3]


// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: 'rgb(180,180,160)', //beige - 180,180,160 | grey - 100, 100, 100
//         color: 'white',
//         padding: theme.spacing(2),
//     },
//     paragraphSpacing: {
//         padding: theme.spacing(2),
//     },
// }));

const useStyles = makeStyles((theme) => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  }));


export default function Food(props) {
    const classes = useStyles();

    return (
        <div>
            {posts.map((post) => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                {post}
                </Markdown>
            ))}
        </div>
    );
}