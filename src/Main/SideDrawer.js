import React from "react";
// import clsx from "clsx";
// Cores
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import IconButton from '@material-ui/core/IconButton';
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { blueGrey } from '@material-ui/core/colors';
// Icons
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import FlightIcon from '@material-ui/icons/Flight';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 300,
        color: 'white',
        justifyContent: 'center',
    },
    listInner: {
      marginTop: theme.spacing(30),
      marginBottom: theme.spacing(30),

    },
    paper: {
        background: "linear-gradient(0deg, rgba(0,11,28,1) 0%, rgba(19,49,87,1) 100%)",
    },
    buttonSpacing: {
        paddingTop: theme.spacing(2), 
        paddingBottom: theme.spacing(2), 
    },
}));

export default function SideDrawer(props) {
    const {sections} = props;
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false
    });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List className={classes.listInner}>
        {sections.map((section) => (
          <ListItem button 
                    key={section.title} 
                    component="button" 
                    href={section.url} 
                    className={classes.buttonSpacing}>
            <ListItemIcon>
              {section.title === "Home" ? <HomeIcon style={{ fontSize: 35, color: blueGrey[50]}}/> : section.title === "Resume" 
                                        ? <PersonIcon style={{ fontSize: 35, color: blueGrey[50]}}/> : section.title === "Food" 
                                        ? <EmojiFoodBeverageIcon style={{ fontSize: 35, color: blueGrey[50]}}/> : <FlightIcon style={{ fontSize: 35, color: blueGrey[50]}}/>}
            </ListItemIcon>
            <ListItemText primary={section.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
        {["right"].map(anchor => (
            <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)} > 
                    <DehazeIcon style={{ fontSize: 50, color: 'white'}}/> 
                </IconButton>
                <SwipeableDrawer
                    classes={{ paper: classes.paper }}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
        ))}
    </div>
    );
}
