import React, { useContext } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import {userContext} from "./components/providers/UserProvider";
import {SignIn} from "./components/auth/SignIn";
import {Home} from "./components/app/Home";
import {Header} from "./components/sharedUI/Header";

require('dotenv').config()  // how does requrie work here 

function App() {
  const {user, set_user} = useContext(userContext);
  console.log("data is : ", user, set_user);

  return (
    <>
    <Header />
    <Switch>
      {/** user Is not signed in */}
      {!user && <Route component={SignIn}></Route>}
      
      {/** user is signed in */}
      {
        <>
          <Route path='/home' component={Home}></Route>

          <Route component={Home}></Route>  {/** in case of no match al all */}
        </>
      }
    </Switch>

    
    </>
  );
}

export default App;
