
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router >
        
        <div>

          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" country="in" category='general'/>}></Route>
            <Route exact path="/business" element={<News  key="business"country="in" category='business'/>}></Route>
            <Route exact path="/health" element={<News key="health" country="in" category='health'/>}></Route>
            <Route exact path="/science" element={<News key="science" country="in" category='science'/>}></Route>
            <Route exact path="/sports" element={<News key="sports" country="in" category='sports'/>}></Route>
          </Routes>

        </div>
      </Router>
    )
  }
}






