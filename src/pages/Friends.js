
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Devider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Input } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
    minHeight: 590,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,

  },
  Search: {
    maxWidth: 445,
    minHeight: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom:20,

  },
  input: {
    maxWidth: 445,
    minWidth:445,
    minHeight: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:0,
    borderBottom: 'none',

  },

  Button: {
    width: 60,
    height: 34,
    marginRight: 6,
    float: 'right',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: 25,
  },
  Reject: {
    backgroundColor: 'Red',

    width: 130,
    height: 35,
    color: 'white',
  },

  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Friends() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.Search}>
    <Input type="search" placeholder="Search your Friends" className={classes.input}></Input>

      </Card>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Button className={classes.Reject}>Remove</Button>
            </IconButton>
          }
          title="praveen K Bhardwaj"
          subheader="Jun 22, 2021"
        />
        <Devider />


      </Card>
    </div>
  );
}
