## steps:

- 1. Create a Firebase project 
- 2. Register your app
- 3. npm install firebase
- 4. Initialize Firebase in your app
- 5. export default app;
- 6. const auth = getAuth(app); in App.js 
- 7. import { getAuth } from "firebase/auth";
- 8. import app from './firebase.init';

#### create button and also set an onClick event handle function with handleGoogleSignIn function.

- 9. go Authentication and sign in method, enable sign in option
- 10. create a button 
- 10. add event handler `onClick`
- 10. create handleGoogleSignIn function
- 11. const provider = new GoogleAuthProvider(); 
- 12. import { GoogleAuthProvider } from "firebase/auth";
- 13. signInWithPopup(auth,provider) ---> inside the handleGoogleSignIn function
- 14. .then(result => {
        console.log(result.user);
      })
- 15. .catch(error=> {
        console.log("error: ",error)
      })

