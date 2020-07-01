// React
import React from 'react';
import PropTypes from 'prop-types';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    careerContainer: {
        padding: theme.spacing(2), 
    },
    root: {
        backgroundColor: 'rgb(180,180,160)', //beige - 180,180,160 | grey - 100, 100, 100
        color: 'white',
        padding: theme.spacing(2),
    },
    contentSpacing: {
        paddingTop: theme.spacing(1),
    }
}));

export default function Posts(props) {
  const classes = useStyles();
  const { post } = props;
  return (
    <React.Fragment>
        <Container className={classes.careerContainer}
                    maxWidth="md">
            <Box className={classes.root}
                    boxShadow={4}
                    borderRadius={8}>
                <Typography variant="h5">
                    {post.title}  
                </Typography>
                <Divider/>
                <Typography className={classes.contentSpacing}
                            variant="body1"
                            paragraph>
                    {post.content}  
                </Typography>
            </Box>
        </Container>
    </React.Fragment> 
  );
}

Posts.propTypes = {
  post: PropTypes.object,
};