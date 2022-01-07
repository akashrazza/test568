import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Notification from "./Notification/Notification";

const drawerWidth = '24%';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    // width: '100%'
  },
 
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:64,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function RightSideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
      >
        <Notification />
      </Drawer>
    </div>
  );
}
