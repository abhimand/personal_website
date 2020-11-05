import React from 'react';
// JS Files
import Career from './Career';
import CareerPosts from './CareerPosts';
import Project from './Project';
import ProjectsPost from './ProjectsPost';
import SkillsPosts from './SkillsPosts';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    typoHeader: {
        padding: theme.spacing(2),
    },
    containerResume: {
        padding: theme.spacing(2), 
        background: 'lightgrey',
    },
    root: {
        backgroundColor: 'rgb(180,180,160)', //beige - 180,180,160 | grey - 100, 100, 100
        color: 'white',
        padding: theme.spacing(2),
    },
    header: {
        color: 'white',
        paddingBottom: theme.spacing(1),
    },
    degree: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        color: grey[700],
    }
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
            <Box style={{ background: 'lightgrey'}}>
                <Container  className={classes.containerResume}
                            maxWidth="md">
                    <Box className={classes.root}
                            boxShadow={4}
                            borderRadius={8}>
                        
                        <Grid   justify="space-between"
                                container
                                className={classes.header}>
                            <Typography display="inline" 
                                        variant="h5"
                                        align="left">
                                    University of Texas at Austin
                            </Typography>

                            <Typography display="inline"
                                        variant="h6"
                                        align="right">
                                    2016 - 2020  
                            </Typography>
                        </Grid>
                        <Divider/>
                        <Typography className={classes.degree} 
                                    variant="h6">
                            Bachelors of Science in Electrical & Computer Engineering
                        </Typography>
                        <Typography variant="body1">
                                        Focuses:
                        </Typography>
                        <Typography>
                            <ul>
                                <li>Software Engineering</li>
                                <li>Product Management</li>
                            </ul>
                        </Typography>
                        <Typography>
                            Courses:
                        </Typography>
                        <Typography>
                            <ul>
                                <li>Discrete Math</li>
                                <li>Vector Calculus</li>
                                <li>Matrices and Matrix Calculations</li>
                                <li>Probability & Random Processes</li>
                                <li>Circuit Theory</li>
                                <li>Linear Systems & Signals</li>
                                <li>Embedded Systems</li>
                                <li>Software Design & Implementation I & II</li>
                                <li>Algorithms</li>
                                <li>Info. Security & Privacy</li>
                                <li>Software Architecture</li>
                                <li>Technology Marketing & Advertising</li>
                                <li>New Media Entrepreneurialism</li>
                                <li>Entrepreneurialism in Communication</li>
                            </ul>  
                        </Typography>
                    </Box>
                </Container>
            </Box>
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
            <Box    display="flex" 
                    justifyContent="flex-start" 
                    flexWrap="wrap" 
                    style={{ background: 'lightgrey'}}>
                {SkillsPosts.map((skill) => (
                    <Container  className={classes.containerResume}
                    maxWidth="xs">
                        <Box className={classes.root}
                                boxShadow={4}
                                borderRadius={8}>
                            <Typography align="center" variant="h5">
                                {skill.name}
                            </Typography>
                        </Box>
                    </Container>
                ))}
            </Box>
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
            <Box style={{ background: 'lightgrey'}}>
                {CareerPosts.map((post) => (
                    <Career key={post.title} 
                            post={post} 
                    />
                ))}
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
            <Box style={{ background: 'lightgrey'}}>
                {ProjectsPost.map((post) => (
                    <Project key={post.title} 
                            post={post} 
                    />
                ))}
            </Box>           
        </div>
    );
}