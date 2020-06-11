import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from '@material-ui/icons/Home';
import FlightIcon from '@material-ui/icons/Flight';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 200,
        color: 'white',
    },
    paper: {
        background: "linear-gradient(to top, #1F1E1F 10%, #3F3F3F 70%)",
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
      onKeyDown={toggleDrawer(anchor, false)}   
    >
      <List >
        {sections.map((section) => (
          <ListItem button key={section.title} component="button" href={section.url} className={classes.buttonSpacing}>
            <ListItemIcon>
              {section.title === "Home" ? <HomeIcon /> : section.title === "Career" ? <PersonIcon/> : section.title === "Food" ? <EmojiFoodBeverageIcon/> : <FlightIcon/>}
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
                    <DehazeIcon/> 
                </IconButton>
                <SwipeableDrawer
                    classes={{ paper: classes.paper }}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
        ))}
    </div>
    );
}
