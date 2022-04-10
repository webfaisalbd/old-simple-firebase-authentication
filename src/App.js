import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';



function App() {

  const [user,setUser] = useState({});

  const provider = new GoogleAuthProvider(); 

  const handleGoogleSignIn = () => {

      signInWithPopup(auth,provider)
      .then(result => {
        const user=result.user;
        setUser(user);
        console.log(user);
        
      })
      .catch(error=> {
        console.log("error: ",error)
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error =>{
      setUser({})
    })
  }

  const auth = getAuth(app);
  
  return (
    <div className="App">
      {
        user.email ? <button onClick={handleGoogleSignOut}>Sign Out</button> : <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }
      
      
      <h2>name: {user.displayName}</h2>
      <p>email: {user.email}</p>
      <img src={user.photoURL} alt="" />
      

    </div>
  );
}

export default App;
