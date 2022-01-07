import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import Button from '@material-ui/core/Button';
import { Divider, TextField } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),

  },
  EditProfile: {
      float: 'right',
      
      marginTop: 20,
      marginRight: 20,
  }
 
}));

export default function EditProfile() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
     <div>
         <h1>Edit Profile</h1>
     <TextField
          id="outlined-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Enter your Name"
          helperText="You will not be able to change your name before 6 months!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-full-width"
          label="Status"
          style={{ margin: 8 }}
          placeholder="what are you thinking?"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <div>
           <h2  style={{ margin: 12 }}>Social Links</h2>
        <TextField
          required
          id="outlined-required"
          label="Facebook"
          defaultValue="/You.know"
          variant="outlined"
          style={{ margin: 8 }}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Instagram"
          defaultValue="You.knowme"
          variant="outlined"
          style={{ margin: 8 }}
        />
       <TextField
          required
          id="outlined-disabled"
          label="Twitter"
          defaultValue="Youknow12"
          variant="outlined"
          style={{ margin: 8 }}
        />
         <TextField
          required
          id="outlined-disabled"
          label="LinkdIn"
          defaultValue="YouKnow.office"
          variant="outlined"
          style={{ margin: 8 }}
        />
        <h2  style={{ margin: 12 }}>pictures</h2>
        <Button className={classes.Button}><InsertPhotoIcon /> <label for="file-upload" className="custom-file-upload">
    Add Profile
</label></Button>
<Button className={classes.Button}><InsertPhotoIcon /> <label for="file-upload" className="custom-file-upload">
    Add Cover
</label></Button>
      </div>
     </div>
    </div>
  );

  return (
    <div>
      <button className={classes.EditProfile} type="button" onClick={handleOpen}>
        Edit Profile
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}