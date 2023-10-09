import React from "react";
import "./Footers.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <h5>Cinema World</h5>

              <p>Lorem ipsum</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <a className="footer__title" href="/Home">
              {" "}
              Home
            </a>
            <br />
            <a className="footer__title" href="/Favorites">
              {" "}
              Favorites
            </a>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0"></ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Amman jordan</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone:(962)788-334765</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: info@cinemaworld.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p className="text">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              <div id="copyright" className="text-center">
                Copyright &copy;
                <script>document.write(new Date().getFullYear())</script> All
                rights reserved to Cinema World
              </div>
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {/* {" "} */}
                <Link to="https://www.facebook.com/">
                  <i className="ri-facebook-line"></i>
                </Link>
                {/* {" "} */}
              </span>

              <span>
                {/* {" "} */}
                <Link to="https://www.youtube.com/">
                  <i className="ri-youtube-line"></i>
                </Link>
                {/* {""} */}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footers;