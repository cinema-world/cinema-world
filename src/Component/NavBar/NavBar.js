import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white">
          Cinema World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
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
      </Container>
    </Navbar>
  );
}

export default NavBar;
