import React from 'react';
import "./Login.css";
import logo from './images/logogreen.png';
import { Button } from "@mui/material";
import { auth, provider} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth 
    .signInWithPopup(provider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      });
    })
  }
  return (
    <div className='login'>
      <div className="login_container">
      <img src={logo} alt="Codehub Logo"/>
      <h1>Sign In to Codehub</h1>
      <p>codehub.slack.com</p>
      <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login