import logo from './logo.svg';
import './App.css';
import {SignIn} from "./components/auth/SignIn";
require('dotenv').config()  // how does requrie work here 

function App() {
  return (
    <>
    <SignIn />
    </>
  );
}

export default App;
