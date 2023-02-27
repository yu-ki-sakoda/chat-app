
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import auth from "../firebase"
import { SendMessage } from './SendMessage';
import { SignOut } from './SignOut'


export const Line = () => {
  const [messages, setMessages] = useState([]);

  useEffect( () => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot( (snapshot) => { setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    window.location.href = "#jamp"
  },[messages])




  return (
    <div className='line'>
      <div className="lineback">
      <SignOut />
      <div className="msgs">
        {messages.map(({id,text,photoURL,uid,displayName}) => (
          <div className={`msg ${uid === auth.currentUser.uid ? "sent" : "recieved"}`} key={id} >
              <h3 style={{fontSize:"7px", color:"grey", marginBottom:"0"}}>{displayName}</h3>
            <img src={photoURL} />
            <p>{text}</p>

          </div>
        ))}
      </div>
      <a id="jamp"></a>
      
      </div>

      <SendMessage style={{position:"fixed",bottom:"0"}}  />
      
    </div>
  )
}
