import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
// Files
// import SideDrawer from './SideDrawer';
// import '/Users/abhi.mand/Desktop/Documents/ProgrammingProjects/personal_website/src/App.css';
// Core
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingBottom: theme.spacing(2),
    },
    toolbarTitle: {
        padding: theme.spacing(1), 
        // color: blueGrey[700],
        color: theme.palette.common.white,
        marginRight: 'auto',
    },
    toolbarButton: {
        padding: theme.spacing(2),
        // color: blueGrey[700],
        color: theme.palette.common.white,
    },
    mainMessage: {
        color: theme.palette.common.white,
        paddingTop: theme.spacing(30),
        paddingBottom: theme.spacing(50),

    },
    paperImage: {
        border: theme.spacing(0),
    },
  }));


export default function Header(props) {
    const {title, mainMessage, image} = props; // removed sections

    const classes = useStyles();
    return (
        <React.Fragment className={classes.frag}>
                <Paper className={classes.paperImage} 
                variant="outlined"
                square="true"
                // style={{    background: 'radial-gradient(circle, rgba(35,59,96,1) 0%, rgba(25,39,60,1) 100%)', 
                style={{    backgroundImage: `url(${image})`, 

                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'}}>
                    <Toolbar component="nav" 
                             variant="dense" 
                             disableGutters 
                             className={classes.toolbar}>
                        
                        <Typography className={classes.toolbarTitle}
                        variant="h4">
                            <Slide top>
                                <Link 
                                href="/" 
                                underline="none" 
                                color="inherit">
                                    {title}
                                </Link>
                            </Slide>
                        </Typography>
                        {/* <SideDrawer sections={sections}/> */}
                    </Toolbar>
                    <Fade bottom timeout={1500}>
                        <Typography className={classes.mainMessage}
                        variant="h1"
                        align="center"
                        color="inherit">
                            {mainMessage}              
                        </Typography>
                    </Fade>
                </Paper>
        </React.Fragment>
    )
}