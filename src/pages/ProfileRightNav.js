import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import EditProfile from './EditProfile';

const drawerWidth = '24%';
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    textAlign:"center",
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

export default function ProfileRightNav() {
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
       <h2>Social Links</h2>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
        <ListItemIcon>
            <InstagramIcon style={{ color: red[500] }}/>
          </ListItemIcon>
          <ListItemText>Instagram/<span>Praveen.bhardwaj</span></ListItemText>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <FacebookIcon style={{ color: blue[500] }}/>
          </ListItemIcon>
          <ListItemText>Instagram/<span>Praveen_kbhardwaj</span></ListItemText>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <TwitterIcon style={{ color: blue[600] }}/>
          </ListItemIcon>
          <ListItemText>Twitter/<span>PraveenBhardwaj</span></ListItemText>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <LinkedInIcon style={{ color: blue[400] }}/>
          </ListItemIcon>
          <ListItemText>LinkedIn/<span>PraveenBhardwaj</span></ListItemText>
        </ListItem>
      </List>
      <EditProfile className={classes.EditProfile} />
      </Drawer>
    </div>
  );
}
