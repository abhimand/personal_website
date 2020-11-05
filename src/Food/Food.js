
import React from 'react';
// JS Files
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown.js';
import Box from '@material-ui/core/Box';
import post1 from './post.1.js';
import post2 from './post.2.js';
import post3 from './post.3.js';
import tiles from './tiles.js';
import { Typography } from '@material-ui/core';
// import { GridList, GridListTile, GridListTileBar, IconButton,  } from '@material-ui/core';

const posts = [post1]
// const posts = []

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(0, 8),
    },
    boxSpacing: {
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(0), 
        paddingRight: theme.spacing(0),
    },
    title: {
        paddingBottom: theme.spacing(10),
    }
  }));


export default function Food(props) {
    const classes = useStyles();
    return (
        <Box className={classes.boxSpacing}
            component="div" 
            flexWrap="wrap" 
            justifyContent="center" 
            style={{background: 'rgb(230,233,240)',  
            backgroundPosition:'center'}}
        >      
        <Typography 
            className={classes.title}
            align="center"
            variant="h3"
        >
            Easy & Healthy Eats
        </Typography>
            {posts.map((post) => (
                <Markdown 
                className={classes.markdown} 
                key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))}
        </Box>   
    );
}