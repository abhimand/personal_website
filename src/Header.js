import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/nyc.jpg'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import { flexbox } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingBottom: theme.spacing(2),
        borderColor: theme.palette.common.white,
    },
    toolbarTitle: {
        padding: theme.spacing(2), 
        color: theme.palette.common.white,
        marginRight: 'auto',
    },
    toolbarButton: {
        padding: theme.spacing(2),
        color: theme.palette.common.white,
    },
    mainMessage: {
        color: theme.palette.common.white,
        paddingTop: theme.spacing(40),
        paddingBottom: theme.spacing(60),

    },
    paperImage: {
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: theme.spacing(0),
    },
  }));


export default function Header(props) {
    const {sections, title} = props;
    const classes = useStyles();
    return (
        <React.Fragment className={classes.frag}>
            <Fade in timeout={2500}>
                <Paper
                variant="outlined"
                className={classes.paperImage} 
                square="true"
                style={{ position: "relative"}}
                >
                    <Toolbar component="nav" variant="dense" className={classes.toolbar}>
                        <Typography
                            variant="h5"
                            noWrap
                            className={classes.toolbarTitle}>
                                {title}
                        </Typography>
                        {sections.map((section) => (
                            <Button
                            href={section.url}
                            className={classes.toolbarButton}
                            size="large"
                            >
                                
                                    {section.title}
                                
                            </Button>
                        ))}
                    </Toolbar>
                    <Grow in timeout={6500}>
                        <Typography
                                variant="h2"
                                align="center"
                                color="inherit"
                                className={classes.mainMessage}
                                >
                                    --Under Construction--                
                        </Typography>
                    </Grow>
                </Paper>
            </Fade>
        </React.Fragment>
    )
}