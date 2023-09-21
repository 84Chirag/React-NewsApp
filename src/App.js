import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,//version updated to ver 6 Switch has been changed to Routes
  Route
} from "react-router-dom";

const App = () => {
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
  const apikey = process.env.REACT_APP_NEWS_API
  return (
    <div>
      <Router>
        <Navbar mode={mode} togglemode={togglemode}/>
        <Routes>
          <Route exact path='/' element={<News mode={mode} togglemode={togglemode} key="general" pageSize={5} country="in" category="general" apikey={apikey} />} />
          <Route exact path='/general' element={<News mode={mode} togglemode={togglemode} key="general" pageSize={5} country="in" category="general" apikey={apikey} />} />
          <Route exact path='/business' element={<News mode={mode} togglemode={togglemode} key="business" pageSize={5} country="in" category="business" apikey={apikey} />} />
          <Route exact path='/entertainment' element={<News mode={mode} togglemode={togglemode} key="entertainment" pageSize={5} country="in" category="entertainment" apikey={apikey} />} />
          <Route exact path='/health' element={<News mode={mode} togglemode={togglemode} key="health" pageSize={5} country="in" category="health" apikey={apikey} />} />
          <Route exact path='/science' element={<News mode={mode} togglemode={togglemode} key="science" pageSize={5} country="in" category="science" apikey={apikey} />} />
          <Route exact path='/sports' element={<News mode={mode} togglemode={togglemode} key="sports" pageSize={5} country="in" category="sports" apikey={apikey} />} />
          <Route exact path='/technology' element={<News mode={mode} togglemode={togglemode} key="technology" pageSize={5} country="in" category="technology" apikey={apikey} />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App;