// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import card from '.card.js';
// import Contact from './components/Contact';
// import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
       
          <Route path="/welcome" component={Welcome} />
          {/* <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={SignUp} /> */}

     
      
        
      </div>
    </Router>
  );
}

export default App;
