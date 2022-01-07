import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";




const useStyles = makeStyles({
  root: {
    maxWidth: 445,
   marginRight:10,
    marginTop:25,
    
  },
  textarea: {
    minWidth:445,
    minHeight:100,
    marginLeft: -16,
    marginTop:-15,
    borderTop:'white',
    borderLeft:'white',
    borderRight:'white',
    outline: 'none',
    
  },
  options: {
    justifyContent: 'center',
   
    marginTop: -20,
  },
  Button: {
    backgroundColor: 'blue',
    margin: 10,
    width:130,
    height:35,
    color: 'white',
  },
  Reject: {
    backgroundColor: 'Red',
    margin: 10,
    width:130,
    height:35,
    color: 'white',
  },
});

export default function CreatePost() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
       
        title="Safquat Nawaz"
        // subheader="Jun 22, 2021"
      />
      <CardActions className={classes.options}>
        <Button className={classes.Reject}>Reject</Button>
        
        <Button className={classes.Button}> Add Friend
       </Button>
       
      </CardActions>
    </Card>
  );
}