// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import "./App.css";
import Textarea from "./components/Textarea";
import { useState } from "react";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";

function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.Color = "white";
      document.body.style.backgroundColor = "#343a40";
      document.title = "TextEditor-Dark Mode";

      // Dynamically Title Change Code 
      // setInterval(()=>{
      //   document.title = 'TextEditor is Free Services please appriciate'
      // },1000)
      // setInterval(()=>{
      //   document.title = 'TextEditor Use as much as you want'
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextEditor";
    }
  };
  return (
    <>
      <Router>
      <Navbar title="TextEditor" mode={mode} togglemode={togglemode} />
      <div className="container">
      <Routes>
          <Route path="/" element={

        <Textarea mode={mode}/>
          }>
          </Route>
          <Route path="/about" element={

        <About mode={mode}/>
          }>
          </Route>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
