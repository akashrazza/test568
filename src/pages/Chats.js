
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Devider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { red } from "@material-ui/core/colors";
import { Form } from 'react-bootstrap';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Massege from "../chats/Massege";
import MassegeRight from "../chats/MassegeRight";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
    minHeight:590,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
   textarea: {
    minWidth:370,
    minHeight:65,
    marginTop:250,
    marginLeft:6,
    borderRadius:50,
    outline: 'none',
    
  },
  Button:{
    width:60,
    height:34,
    marginTop:267,
    marginRight:6,
    float: 'right',
    backgroundColor: 'blue',
    color:'white',
    border: 'none',
    borderRadius:25,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Chats() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="praveen K Bhardwaj"
        subheader="Jun 22, 2021"
      />
     <Devider></Devider>
     <Massege />
     <Massege /><MassegeRight />
     <Form.Group className="d-flex" controlId="exampleForm.ControlTextarea1">
   
    <Form.Control as="textarea" className={classes.textarea} placeholder="Type Your Massege"/>
    <Button className={classes.Button} type="submit">Send</Button>
  </Form.Group>
    </Card>
  );
}
