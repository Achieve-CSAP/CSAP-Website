import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CSAPLogo from "../.././assets/CSAP.svg";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import logoIcon from "../../assets/CSAP.svg";

export default function Footer() {
  return (
    <div id="footerContainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Row>
        <Col>
          <Row>
            <Col>
              {" "}
              <img src={CSAPLogo}></img>
            </Col>
            <Col>Computer Science Achivement Program</Col>
          </Row>
        </Col>
        <Col>
          <ul>
            <li>achieve.computerscience@gmail.com</li>
            <li>csap_official</li>
          </ul>
        </Col>
        <Col>
        <Row>
        <NavLink to="/" className="footerItem">
              Home
            </NavLink>
            <NavLink to="/about" className="footerItem">
              About
            </NavLink>
            <NavLink to="/contact" className="footerItem">
              Contact
            </NavLink>
            <NavLink to="/register" className="footerItem">
              Join
            </NavLink>

        </Row>
        <Row>
            <ul>
            <li><a href="#" className = "social" class="fa fa-instagram"></a> </li>
            <li><a href="#" className = "social" class="fa fa-twitter"></a></li>
            <li><a href="#" className = "social" class="fa fa-linkedin"></a></li>
            </ul>
        </Row>
        </Col>
      </Row>
    </div>
  );
}
