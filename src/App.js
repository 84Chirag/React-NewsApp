import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
  import Contact from './components/Contact';
  import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,//version updated to ver 6 Switch has been changed to Routes
  Route
} from "react-router-dom";




function App() {
  //this is condition written for theme toggle which we can pass to funtional or class components as 'props'.
  //props means properties which is used to pass data to from this parent component to other component
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode} />
        <div className='container'>
          <Routes> {/* changed from Switch to Routes*/}
            <Route exact path="/contact" element={<Contact mode={mode} togglemode={togglemode} />} />
            <Route exact path="/" element={<Container mode={mode} togglemode={togglemode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
