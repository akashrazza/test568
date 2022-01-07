import Avatar from '@material-ui/core/Avatar';
import './Massege.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:240,
        minWidth:240,
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
   
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  
  }));
  export default function MassegeRight() {
    const classes = useStyles();
  
    return (
      <div id="Massege" className={classes.root}>
           <p className="massege-text-right">I am fine, how are you? I am fine, how are you?</p>
        {/* <Avatar alt="PK" src="/static/images/avatar/1.jpg" className={classes.small} /> */}
       
      </div>
    );
  }