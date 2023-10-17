import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Mynav from './components/Mynav';
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';
import Home from './pages/Home';
import SignUp from './pages/SignUp';


// import About from './components/About';

function App() {
  return (

    <div className="App">

      <Mynav />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Welcome />}
          />
          <Route
            path="/Home"
            element={<Home />}
          />
          <Route
            path="/SignUp"
            element={<SignUp />}
          />

          {/* 
    <Route
            path="/logIn"
            element={<logIn />}
          />

          <Route
            path="/About"
            element={<About />}
          /> 
          
          */}

          <Route
            path="/ContactUs"
            element={<ContactUs />}
          />

        </Routes>
      </Router>
    
    </div>

  );
}

export default App;