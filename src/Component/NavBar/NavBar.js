import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from '../../login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../../logout';

function NavBar() {
let {isAuthenticated, user} = useAuth0();
  return (

    
    
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white" style={{fontSize:"35px", fontWeight:"600"}}>
          Cinema World
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", justifyContent:"space-between" }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/trend_movie" className="text-white">
              Trending
            </Nav.Link>
            <Nav.Link href="/favorite" className="text-white">
              Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {isAuthenticated ?
          <>
            <img src={user.picture} style={{width: "35px", height: "35px", margin: "0 10px 0 10px" }} />
            <h4 style={{margin:"0 30px 0 5px"}}>{user.name}</h4> <LogoutButton /> </> : <LoginButton />}

      </Container>
    </Navbar>
  );
}

export default NavBar;