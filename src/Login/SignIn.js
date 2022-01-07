import React from 'react'
import { Grid, Paper, Avatar,TextField,Button,Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const SignIn=({handleChange})=>{

    const paperStyle={padding:20,height:'70vh',width:300,margin:"0 auto"}
    const avatarStyle={backgroundColor:'#6ca3ac'}
    const btnstyle={margin:'8px 0'}
      return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align = 'center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type ='password' fullWidth required/>
                <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button variant="contained"type='submit' color='primary'  style={btnstyle} fullWidth>Sign in</Button>
      <Typography>
         <Link href="#">
         forgot password
         </Link>
      </Typography>
      <Typography>Do you have an account?
         <Link href="#" onClick={()=>handleChange("event",1)}>
         sign up
         </Link>
      </Typography>
            </Paper>
        </Grid>
       
    )
}

export default SignIn;