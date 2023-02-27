import { Button } from '@mui/material'
import React from 'react'
import {auth} from "../firebase"
import firebase from "firebase/compat/app";


export const SignIn = () => {

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}


  return (
    <div className="logIn">
      <h1>Chat App Account</h1>
      <Button variant="outlined" 
              style={{color:"#002",fontSize:"18px",textAlign:"center"}}
              onClick={signInWithGoogle}>
      login
      </Button>
     
    </div>
  )
}


