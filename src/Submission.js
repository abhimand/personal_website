import React from 'react';
import SideDrawer from './SideDrawer';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Typography'

import Toolbar from '@material-ui/core/Toolbar'
import blueGrey from '@material-ui/core/colors/blueGrey'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingBottom: theme.spacing(2),
    },
    toolbarTitle: {
        padding: theme.spacing(1), 
        color: blueGrey[50],
        marginRight: 'auto',
    },
    toolbarButton: {
        padding: theme.spacing(2),
        color: blueGrey[50],
    },
    mainMessage: {
        color: theme.palette.common.white,
        paddingTop: theme.spacing(45),
        paddingBottom: theme.spacing(60),

    },
    paperImage: {
        margin: theme.spacing(60),
    },
  }));


export default function Submission(props) {
    const {sections, title} = props;
    const classes = useStyles();
    return (
        <React.Fragment className={classes.frag}>
            <Toolbar component="nav" variant="dense" disableGutters className={classes.toolbar} style={{ background: 'rgb(25,39,60)'}}>
                <Typography
                    variant="h5"
                    className={classes.toolbarTitle}>
                        {title}
                </Typography>
                <SideDrawer sections={sections}/>
            </Toolbar>
            <Paper className={classes.paperImage}>
                    Submitted
                </Paper>
        </React.Fragment>
    )
}