import { Input } from '@mui/material'
import React, { useState } from 'react'
import firebase from "firebase/compat/app";
import { db } from '../firebase'
import auth from "../firebase"

export const SendMessage = () => {

  
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessage("");
    

    const {uid, photoURL,displayName} = auth.currentUser;

    db.collection("messages").add({
      displayName,
      text:message,
      photoURL,
      uid,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    });
  }



  return (

    <div className='submit'>
  
     <form onSubmit={sendMessage}>
       <div className="sendMsg">
         <Input style={{width:"100%",color:"white",padding:"10px 0 0 10px"}}
          placeholder='ここにメッセージを入力してください'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
       </div>
     </form>
    </div>
  )
}
