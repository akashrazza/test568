import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import RemoveIcon from '@material-ui/icons/Remove';

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

export default function PaymentRightNav() {
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
         <ListItem button>
          <ListItemIcon>
            <AddIcon style={{ color: green[500] }}/>
          </ListItemIcon>
          <ListItemText primary="Your account had been credit 20 coin" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AddIcon style={{ color: green[500] }}/>
          </ListItemIcon>
          <ListItemText primary="Your account had been credit 20 coin" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AddIcon style={{ color: green[500] }}/>
          </ListItemIcon>
          <ListItemText primary="Your account had been credit 90 coin" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <RemoveIcon style={{ color: red[500] }}/>
          </ListItemIcon>
          <ListItemText primary="Your account had been debited 20 coin" />
        </ListItem>
        <Divider />
      </Drawer>
    </div>
  );
}
