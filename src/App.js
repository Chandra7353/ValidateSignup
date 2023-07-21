import {BrowserRouter, Route, Routes, }  from "react-router-dom"; 
import './App.css';
import Signup from "./Components/Signup";
import Loginpage from "./Components/Loginpage";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
