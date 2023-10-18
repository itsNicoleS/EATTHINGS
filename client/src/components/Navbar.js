import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{ Link} from 'react-router-dom'; 

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EAT THINGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <Link to={"/Home"}>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/SignUp"}>Sign Up</Link></Nav.Link>
            <Nav.Link href="#link"><Link to={"/ContactUs"}>Contact Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

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


