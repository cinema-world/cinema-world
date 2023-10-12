import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import LoginButton from '../../login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../../logout';
import logo from "./logo.png";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
let {isAuthenticated, user} = useAuth0();
  return (

    
    
    <Navbar expand="lg" className="bg-dark">
      <Container fluid >
        <Navbar.Brand href="/" id="logo-con" className="text-white" style={{fontSize:"35px", fontWeight:"600"}}>
        <img src={logo} alt="logo" id="logo-img"/>  Cinema World
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", justifyContent:"space-between", gap:"10px" }}
            navbarScroll
            
          >
            <Nav.Link href="/" className="text-white" id="nav-icon">
            <FontAwesomeIcon icon={faHouse}/>
              Home
            </Nav.Link>
            <Nav.Link href="/trend_movie" className="text-white" id="nav-icon">
            <FontAwesomeIcon icon={faStar}/>
              Trending
            </Nav.Link>
            <Nav.Link href="/favorite" className="text-white" id="nav-icon">
            <FontAwesomeIcon icon={faUser} />
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {isAuthenticated ?
          <>
            <img src={user.picture}  style={{border: "2px solid #DCFC35", width: "40px", height: "40px", margin: "0 10px 0 10px" }} />
            <h4 id="auth-h4" style={{margin:"0 30px 0 5px"}}>{user.name}</h4> <LogoutButton /> </> : <LoginButton />}

      </Container>
    </Navbar>
  );
}

export default NavBar;