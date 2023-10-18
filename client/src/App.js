import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Nav from './components/Navbar';
import Header from './components/header';
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Footer from './components/footer';


// import About from './components/About';

function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Header />
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
        <Footer />
      </Router>

    </div>

  );
}

export default App;