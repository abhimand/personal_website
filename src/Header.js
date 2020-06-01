import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from './images/backgroundImage.jpg'

import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'


const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingBottom: theme.spacing(2),
        borderColor: theme.palette.common.white,
    },
    toolbarTitle: {
        padding: theme.spacing(2), 
        color: theme.palette.common.white,

    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: theme.palette.common.white,
    },
    mainMessage: {
        color: theme.palette.common.white,
        // padding: theme.spacing(40), 
        paddingTop: theme.spacing(50),
        paddingBottom: theme.spacing(50),

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
                style={{ height: "fill", width: "fill", position: "relative"}}
                >
            
                <Toolbar component="nav" variant="dense" className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h5"
                        align="left"
                        noWrap
                        className={classes.toolbarTitle}>
                            {title}
                    </Typography>
                    {sections.map((section) => (
                        <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        className={classes.toolbarLink}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Toolbar>
                <Grow in timeout={4000}>
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