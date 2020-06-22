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
        backgroundColor: 'rgb(180,180,160)',
        color: 'white',
        flexDirection: 'column',

    },
    details: {
        display: 'flex',
    },
    content: {
        flex: '1 0 auto',
    },
}));


export default function Resume(props) {
    const classes = useStyles();

    return (
        <div>
            {/* Education Section*/}
            <Box style={{ background: 'rgb(25,39,60)'}}>
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Education
                </Typography>
            </Box>

            <Card className={classes.root}>
                <div display="block" className={classes.details}>
                    <CardHeader className={classes.spacingHeader}
                                title="Education" 
                    />
                    <Divider/>
                    <CardContent className={classes.content}>
                        <Box component="div" display="inline">
                            <Typography className={classes.removeMargin} variant="subtitle2" paragraph>
                            Bachelors of Science in Electrical & Computer Engineering
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Focuses on Software Engineering and Design
                            </Typography>
                        </Box>
                    </CardContent>
                </div>
            </Card>
            {/* Career Section */}
            <Box style={{ background: 'rgb(25,39,60)'}}>
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Career
                </Typography>
            </Box>
            <Grid container 
                direction="column"
                justify="space-evenly"
                alignItems="center"
                borderTop={5}
                style={{  background: 'lightgrey',
                            borderColor: 'black',
                        }} 
            >
            {CareerPosts.map((post) => (
                <Career key={post.title} 
                        post={post} 
                />
            ))}
            </Grid>


            <Box style={{ background: 'rgb(25,39,60)'}}>
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Skills
                </Typography>
            </Box>

            <Box style={{ background: 'rgb(25,39,60)'}}>
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Projects
                </Typography>
            </Box>

            <Box style={{ background: 'rgb(25,39,60)'}}>
                <Typography style={{ color: 'white'}}
                            className={classes.typoHeader}  
                            variant="h4"
                            align="center"
                >
                    Education
                </Typography>
            </Box>
        </div>
    );
}