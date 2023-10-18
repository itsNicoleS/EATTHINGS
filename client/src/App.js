import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Nav from './components/Navbar';
import Header from './components/header';
import Welcome from './pages/Welcome';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Footer from './components/footer';
import AboutUs from './components/aboutUs';

function App() {
  
const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div className="App">
      <Router>
        <Nav />
        <Routes>

          <Route
            path="/"
            element={<Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
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
          />*/}

          <Route
            path="/About"
            element={<AboutUs />}
          />



          <Route
            path="/ContactUs"
            element={<ContactUs />}
          />

        </Routes>
        <Footer />
      </Router>

    </div>

  );
}

export default App;