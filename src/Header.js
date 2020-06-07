import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'
import blueGrey from '@material-ui/core/colors/blueGrey'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingBottom: theme.spacing(2),
    },
    toolbarTitle: {
        padding: theme.spacing(1), 
        color: blueGrey[700],
        marginRight: 'auto',
    },
    toolbarButton: {
        padding: theme.spacing(2),
        color: blueGrey[700],
    },
    mainMessage: {
        color: theme.palette.common.white,
        paddingTop: theme.spacing(45),
        paddingBottom: theme.spacing(60),

    },
    paperImage: {
        border: theme.spacing(0),
    },
  }));


export default function Header(props) {
    const {sections, title, image, mainMessage} = props;
    const classes = useStyles();
    return (
        <React.Fragment className={classes.frag}>
            <Fade in timeout={2500}>
                <Paper
                variant="outlined"
            
                className={classes.paperImage} 
                square="true"
                style={{    background: `url(${image})`, backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'}}
                >
                    <Toolbar component="nav" variant="dense" disableGutters className={classes.toolbar}>
                        <Typography
                            variant="h5"
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
                                   {mainMessage}              
                        </Typography>
                    </Grow>
                </Paper>
            </Fade>
        </React.Fragment>
    )
}