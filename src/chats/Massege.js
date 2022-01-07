import Avatar from '@material-ui/core/Avatar';
import './Massege.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:350,
        minWidth:100,
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  export default function Massege() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
        <p className="massege-text">Hye, how are you?</p>
      </div>
    );
  }