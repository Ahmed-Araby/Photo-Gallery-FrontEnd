import React, {useState,
               useEffect,
                useContext} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {ErrorMessage} from "../sharedUI/ErrorMessage";
import { userContext } from '../providers/UserProvider';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)', // put the url for the app Image here.
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function SignIn() {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [errorMessage, set_errorMessage] = useState("");
  const {user, set_user} = useContext(userContext);
  
  console.log("user context is : ", user);
  
  const classes = useStyles();
  const handleSignInClick = (e)=>{
      e.preventDefault();
      fetch(process.env.REACT_APP_SIGNIN_URL_DEV, 
        {
            method:"POST", 
            body:JSON.stringify({
                email:email, 
                password:password,
            }), 
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((resp)=>{
            /** search for how to use, handle errors in this part */
            return resp.json();
        })
        .then((data)=>{
          // here mean I have response from the server
            if(data.success){
                set_user(data);
                if(errorMessage !="") // has no much use as we will redirect the user to home page.
                    set_errorMessage("");
            }
            else{
                set_errorMessage("User Email or Password is inavlid.")
            }
        })
        .catch(err=>{
            set_errorMessage("Server Issue please try Again later. ")
        });
      return ;
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/** this is responsible for the image in the left side */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />  
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e)=> set_email(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=> set_password(e.target.value)}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e)=>handleSignInClick(e)}
            >
              Sign In
            </Button>
            
            {errorMessage!=""?<ErrorMessage message={errorMessage}/> : null}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>

            </Grid>

            <Box mt={5}>
              <Copyright />
            </Box>
          
          </form>
        </div>
      </Grid>
    </Grid>
  );
}