import React from "react";
import "./Footers.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
// import IconPage from './IconPage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function Footers() {
  // const IconPage = () => {
  return (
    <footer className="footer">
      <Container>
        <Row style={{ justifyContent: "space-between" }}>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" id="logo-img-footer" />
              <h5 id="h5">Cinema World</h5>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">
              <span className="highlight">Contact</span>
            </h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p className="icon-icon" id="p-icon-footer">
                  <FontAwesomeIcon icon={faPhone} />
                  +962781977173
                </p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <i className="fa fa-envelope"></i>
                <p className="icon-icon" id="p-icon-footer">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:support@company.com">amg.amyg@gmail.com</a>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">
              <span className="highlight">Newsletter</span>
            </h5>
            <p className="text">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              <div id="copyright">
                Copyright &copy;
                <script>document.write(new Date().getFullYear())</script> All
                rights reserved to{" "}
                <span className="highlight">Cinema World</span>
              </div>
            </p>
          </Col>
          <Col lg="6" md="6">
            <div
              id="follow"
              className="social__links d-flex align-items-center gap-4 justify-content-end"
            >
              <p className="m-0">
                <span className="highlight">Follow: </span>
              </p>
              <span>
                {/* {" "} */}
                <Link to="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faSquareFacebook} id="follow-icon" />
                </Link>
                {/* {" "} */}
              </span>

              <span>
                {/* {" "} */}
                <Link to="https://www.instagram.com/?hl=en">
                  <FontAwesomeIcon icon={faSquareInstagram} id="follow-icon" />
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
