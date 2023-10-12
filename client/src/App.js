// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Card from './components/card.js';

// import Contact from './components/Contact';
// import SignUp from './components/SignUp';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/card" element={<Card id="stuff" />} />
          {/*
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={SignUp} /> */}

        </Routes>
      </Router>
    </div>

  );
}

export default App;
