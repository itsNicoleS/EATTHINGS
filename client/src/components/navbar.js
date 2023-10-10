import React from 'react';


// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={{}}>
          <a href="#">Home</a>
        </div>
        <div style={{}}>
          <a href="#">Login</a>
        </div>
        <div style={{}}>
          <a href="#">Register</a>
        </div>
        <div style={{}}>
          <a href="#">About</a>
        </div>
        <div style={{}}>
          <a href="#">Contact</a>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;