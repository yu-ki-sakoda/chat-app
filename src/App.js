import React from 'react' 
import "./App.css";
import { Line } from './components/Line';
import { SignIn } from "./components/SignIn";
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth"


export const App = () => {
  
  const [user] = useAuthState(auth);


  return (
    <div>
     {user ? <Line /> : <SignIn/>}
    </div>

  );
}

export default App;
