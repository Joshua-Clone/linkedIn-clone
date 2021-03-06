import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from "react-redux"; 
import { login, logout, selectUser } from "./features/userSlice"
import Header from './Header'; 
import Sidebar from "./Sidebar"
import Feed from './Feed'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import Login from './Login'
import Widgets from './Widgets'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch(); 

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => { 
      if (userAuth) { 
        // user is logged in 
        dispatch(
          login({
            email: userAuth.email, 
            uid: userAuth.uid, 
            displayName: userAuth.displayName, 
            photoUrl: userAuth.photoURL
          })
        ); 
      } else { 
        // user is logged out
        dispatch(logout()); 
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )} 
    </div>
  );
}

export default App;


// When You are ready to deploy App run the following in the terminal: 

  //firebase login 
  //firebase init 
      // Choose Hosting 
      // Choose this clone project as an option 
      // You can add your GitHub but I did not 
  // npm run build 
  // firebase deploy 