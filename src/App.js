import { React, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import JukeBox from "./components/JukeBox";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {

  const [Mode, setMode] = useState('light');

  const toggleDarkMode = () =>{
    if(Mode === 'light') setMode('dark');
    else if(Mode === 'dark') setMode('light');
  }

  return (
    <div>
      <Navbar title = "Check" darkMode = {Mode} toggleDarkMode = {toggleDarkMode}/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Stats/>}></Route>
          <Route path = "/jukebox" element = {<JukeBox />} ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
