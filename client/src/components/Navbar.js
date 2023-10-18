import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{ Link} from 'react-router-dom'; 
import styled from "styled-components";

function BasicExample() {
  const navbarStyle = {
    backgroundColor: '#f9c55f', // Set your desired background color
    color: '#ffffff' // Set your desired text color
};
  return (
    <Navbar style={navbarStyle} expand="lg" className="bg-body-tertiary myfuckinburntoragestlye">
      <Container>
        <Navbar.Brand href="#home">EAT THINGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <Link to={"/Home"}>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/SignUp"}>Sign Up</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/ContactUs"}>Contact Us</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/aboutUs"}>About Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const myfuckinburntoragestlye = styled.div`
color: #f9c55f;
`;

export default BasicExample;


// const NavContainer = styled.div `
//   background-color: orange;
//   color: yellow;
//   `;


// Nav.Link = styled.div `
//   color: yellow !important; 
//   `;


// function Nav() {
//   // import Auth from '../../utils/auth';

//   // function showNavigation() {

//   //   if (Auth.loggedIn()) {
//   //     return (
//   //       <ul className="flex-row">
//   //         <li className="mx-1">
//   //           <a href="/" onClick={() => Auth.logout()}>
//   //             Logout
//   //           </a>
//   //         </li>
//   //       </ul>
//   //     );
//   //   } else {
//       return (
       
//       );
//     }
  //}
// }


