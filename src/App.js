import React, { useContext } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import {userContext} from "./components/providers/UserProvider";
import {SignIn} from "./components/auth/SignIn";
import {SignUp} from "./components/auth/SignUp";
import {Home} from "./components/app/Home";
import {Header} from "./components/sharedUI/Header";
import {Album} from "./components/app/Album";

require('dotenv').config()  // how does requrie work here 

function App() {
  const {user, set_user} = useContext(userContext);

  return (
    <>
    <Header />

    <Switch>
      
      {!user && 
        <>
        <Switch>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}/>
          <Route component={SignIn}></Route>
        </Switch>
        </>
      }
      
      
      
      { user &&
        
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path="/album" component={Album}></Route>
            
            <Route component={Home}></Route> 

        </Switch>
        
      }
    </Switch>

    
    </>
  );
}

export default App;
