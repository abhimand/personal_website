import React, { useState } from 'react';
// JS Files
import Career from './Career';
import CareerPosts from './CareerPosts';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { flexbox } from '@material-ui/system';

/*
Things I want to implement: 
 - Education: single card compiling major, focuses, and courses
 - Revamp career information (may need to refactor who knows)
 - add list of skills (may be in a interesting format?)
 - add projects (same format as career cards)
 - add leadership (academic advisor/ recruitment director)
 - Collapse functionality for each section
 - 
*/

const useStyles = makeStyles((theme) => ({
    typoHeader: {
        padding: theme.spacing(2),
    },
    root: {
        display: 'flex',
        backgroundColor: 'rgb(180,180,160)',  //beige color
        color: 'white',
        flexDirection: 'column',

    },
    gridPosts: {
        padding: theme.spacing(2),
        position: 'relative',
        // borderBottom: `1px solid ${theme.palette.divider}`, //sets the line below the toolbar
    },
    // details: {
    //     display: 'flex',
    // },
    // content: {
    //     flex: '1 0 auto',
    // },
}));


export default function Resume(props) {
    const classes = useStyles();

    return (
        <div>
            {/* *************************************************************************** */}
            {/* Education Section*/}
            {/* *************************************************************************** */}
            <Box style={{ background: 'rgb(25,39,60)'}}> 
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Education
                </Typography>
            </Box>
            <Grid container 
                direction="column"
                justify="space-between"
                alignItems="center"
                style={{  background: 'lightgrey', //light grey
                            borderColor: 'black',
                        }} 
            >
 
                <Grid   className={classes.gridPosts} 
                        xs={12}
                        md={8}
                        item 
                >
                    <Card className={classes.root}>
                        <div    className={classes.details}
                                display="block" >   
                            <CardHeader className={classes.spacingHeader}
                                        title="Education" 
                                        subheader="test"
                            />
                            <Divider/>
                            <CardContent className={classes.content}>
                                <Box component="div" display="inline" flexGrow={1}>
                                    <Typography className={classes.removeMargin} display="inline" align="right">
                                        Bachelors of Science in Electrical & Computer Engineering
                                    </Typography>
                                    <Typography display="inline" align="right">
                                        2016 - 2020
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Focuses on Software Engineering and Design blah blah blah blah blah blah blah balh
                                    </Typography>
                                </Box>

                                
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            {/* *************************************************************************** */}
            {/* Career Section */}
            {/* *************************************************************************** */}
            

            <Box style={{ background: 'rgb(25,39,60)'}}> 
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Career
                </Typography>
            </Box>
            {/* <Grid container 
                wrap="nowrap"
                direction="column"
                justify="space-evenly"
                alignItems="center"
                fixed
                borderTop={5}
                style={{  background: 'lightgrey', //light grey
                            borderColor: 'black',
                        }} 
            > */}
            <Box style={{ background: 'lightgrey'}}>
                {CareerPosts.map((post) => (
                    <Career key={post.title} 
                            post={post} 
                    />
                ))}
            </Box>
            {/* </Grid> */}

            {/* *************************************************************************** */}
            {/* Skills Section */}
            {/* *************************************************************************** */}
            <Box style={{ background: 'rgb(25,39,60)'}}>
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Skills
                </Typography>
            </Box>
            
            {/* *************************************************************************** */}
            {/* Projects Section */}
            {/* *************************************************************************** */}
            <Box style={{ background: 'rgb(25,39,60)'}}>
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Projects
                </Typography>
            </Box>

        </div>
    );
}