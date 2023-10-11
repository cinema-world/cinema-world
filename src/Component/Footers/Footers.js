import React from "react";
import "./Footers.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Footers() {
  return (
    <footer className="footer">
      <Container>
        <Row style={{justifyContent:"space-between"}}>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start" >
            <img src={logo} alt="logo" id="logo-img-footer"/>
              <h5 id="h5">Cinema World</h5>

            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className="footer__title"><span className="highlight" >Contact</span></h5>
            <ListGroup className="deliver__time-list">
             
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p class="icon-icon">+962781977173</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <i class="fa fa-envelope"></i>
                <p class="icon-icon"><a href="mailto:support@company.com">amg.amyg@gmail.com</a></p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title"><span className="highlight" >Newsletter</span></h5>
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
              <div id="copyright">
                Copyright &copy;
                <script>document.write(new Date().getFullYear())</script> All
                rights reserved to <span className="highlight" >Cinema World</span>
              </div>
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0"><span className="highlight" >Follow: </span></p>
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
