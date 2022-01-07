import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BlurOnIcon from '@material-ui/icons/BlurOn';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = "19%";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  activeLink: {
    textDecoration: 'none',

    backgroundColor: '#hf3637',

    color: 'tomato !important',

  },
}));

export default function LeftSideBar() {
  const classes = useStyles();

  const iconArray = [<BlurOnIcon />, <ChatIcon />, <PeopleIcon />, <AccountBalanceIcon />];

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >

        <div className={classes.drawerContainer}>
          <List>
            {
              ["Posts", "Chats", "Friends", "Payment"].map((text, index) => (
                <NavLink activeClassName={classes.activeLink} to={`/${text}`} style={{
                  textDecoration: 'none'
                }}>
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {iconArray[index]}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </NavLink>
              ))
            }
          </List>
          <Divider />
          <List>
            <NavLink activeClassName={classes.activeLink} to={'/Profile'} style={{
              textDecoration: 'none'
            }}>
              <ListItem button key={"Profile"}>
                <ListItemIcon>
                <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItem>
            </NavLink>
          </List>
        </div>
      </Drawer>

    </div>
  );
}
