
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import "./PostSchema.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:40,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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

export default function PostSchema() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [delButton, setDelButton] = useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const actionHandler = () => {
    setDelButton(((prev) => !prev));
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
        <div className="moreOption">
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={actionHandler} />
          </IconButton>
          {delButton && 
            <button className="delButton">
              Delete
            </button>}
        </div>
        }
        title="praveen K Bhardwaj"
        subheader="Jun 22, 2021"
      />

      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider />
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                H
              </Avatar>
            }

            title="Himanshu Zaveri"
            subheader="Jun 22, 2021"
          />
          <Typography variant="body2" color="textSecondary" component="p">
            I am commenting.
          </Typography>
          <Divider />
        </CardContent>
      </Collapse>
    </Card>
  );
}
