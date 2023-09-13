import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,//version updated to ver 6 Switch has been changed to Routes
  Route
} from "react-router-dom";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/general' element={<News key="general" pageSize={5} country="in" category="general" apikey={this.apikey} />} />
            <Route exact path='/business' element={<News key="business" pageSize={5} country="in" category="business" apikey={this.apikey} />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={5} country="in" category="entertainment" apikey={this.apikey} />} />
            <Route exact path='/health' element={<News key="health" pageSize={5} country="in" category="health" apikey={this.apikey} />} />
            <Route exact path='/science' element={<News key="science" pageSize={5} country="in" category="science" apikey={this.apikey} />} />
            <Route exact path='/sports' element={<News key="sports" pageSize={5} country="in" category="sports" apikey={this.apikey} />} />
            <Route exact path='/technology' element={<News key="technology" pageSize={5} country="in" category="technology" apikey={this.apikey} />} />
          </Routes>
        </Router>


      </div>
    )
  }
}

