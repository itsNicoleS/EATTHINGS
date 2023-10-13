import React from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

function Nav() {
  //function showNavigation() {

    // if (Auth.loggedIn()) {
    //   return (
    //     <ul className="flex-row">
    //       <li className="mx-1">
    //         <a href="/" onClick={() => Auth.logout()}>
    //           Logout
    //         </a>
    //       </li>
    //     </ul>
    //   );
    // } else {
      return (
        <ul className="flex-row">
          <li className="nvbr-1">
            <Link to="/welcome">Welcome</Link>
          </li>
          <li className="nvbr-1">
            <Link to="/Home">Home</Link>
          </li>
          <li className="nvbr-1">
            <Link to="/SignUp">SignUp</Link>
          </li>

          {/*
               
               <li className="nvbr-1">
            <Link to="/login">Login</Link>
          </li> 
          
           <li className="nvbr-1">
            <Link to="/About">About</Link>
          </li>
          
          */}

          <li className="nvbr-1">
            <Link to="/contactUs">ContactUs</Link>
          </li>
        </ul>
      );
    }
  //}
// }

export default Nav;
