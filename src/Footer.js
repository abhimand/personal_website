import React from 'react';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    gridBody: {
        padding: theme.spacing(2), 
    },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Grid container className={classes.gridBody} style={{ backgroundColor: '#000011'}} justify="center" >
        <Typography style={{ color: 'white'}} variant="subtitle1" paragraph>
              Made with React, Material-UI, and lots of love
        </Typography>
    </Grid>
    </React.Fragment>
  );
}
