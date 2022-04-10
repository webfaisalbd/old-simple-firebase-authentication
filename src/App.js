import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';



function App() {

  const [user,setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  
  const githubProvider = new GithubAuthProvider();


  const handleGithubSignIn = () => {
      signInWithPopup(auth,githubProvider)
      .then(result=>{
        const user=result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error=>{
        setUser({})
        console.log("error: ",error)
      })
  }


  const handleGoogleSignIn = () => {

      signInWithPopup(auth,googleProvider)
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
        user.uid ? <button onClick={handleGoogleSignOut}>Sign Out</button> : <>
        <button onClick={handleGoogleSignIn}>Google Sign In</button> 
        <button onClick={handleGithubSignIn}>Github Sign In</button> 
        </>
      }
      
      
      <h2>name: {user.displayName}</h2>
      <p>email: {user.email}</p>
      <img src={user.photoURL} alt="" />
      

    </div>
  );
}

export default App;
