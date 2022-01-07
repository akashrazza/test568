import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import './Post.module.css';
import { Form } from 'react-bootstrap';


const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,

  },
  textarea: {
    minWidth: 445,
    minHeight: 100,
    marginLeft: -16,
    marginTop: -15,
    borderTop: 'white',
    borderLeft: 'white',
    borderRight: 'white',
    outline: 'none',

  },
  options: {
    justifyContent: 'center',

    marginTop: -20,
  },
  Button: {
    backgroundColor: '#3f51b5',
    margin: 10,
    width: 150,
    height: 45,
    color: 'white',
  },

});

export default function CreatePost() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <>
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">

            <Form.Control as="textarea" className={classes.textarea} placeholder="How are You feeling?" />
          </Form.Group>
        </>
      </CardContent>
      <CardActions className={classes.options}>
        <Button className={classes.Button}><EmojiEmotionsOutlinedIcon /> Feelings</Button>
        <Button className={classes.Button}><InsertPhotoIcon /> <label for="file-upload" className="custom-file-upload">
    Add Image
</label></Button>
       
<input id="file-upload" type="file"/>

      </CardActions>
    </Card>
  );
}