import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { BorderAll } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import Posts from '../Post/Posts';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50,
    },
    large: {
        width: theme.spacing(27),
        height: theme.spacing(27),
        border: '2px solid green',
      },
 
   Name:{
    display:'flex',
    justifyContent: 'center',
   },
   status:{
    display:'flex',
    justifyContent: 'center',
     color: 'gray',
     marginBottom: 10,
     fontSize: '14px'
   },
   cover: {
    maxWidth: 545,
    minHeight: 260,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom:20,
    boxShadow: 'none',
    backgroundImage: "URL('https://source.unsplash.com/random')"
  },
  Profile:{
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginTop: -120,
  

  }
   
  }));
const Profile =  () => {
    const classes = useStyles();
    return(
        <div className="root">
            <Card className={classes.cover} > </Card>
            <div className={classes.Profile}>
            <Avatar alt="Remy Sharp"  src="https://source.unsplash.com/random" className={classes.large} />
            </div>
            <div><h1 className={classes.Name}>Praveen Bhardwaj</h1></div>
            <span className={classes.status}>Doing What i love the most:)</span>

            <Divider />

            <Posts />
        </div>
    )};

export default Profile;