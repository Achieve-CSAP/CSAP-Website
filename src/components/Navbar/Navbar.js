import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

import logoIcon from "../../assets/CSAP.svg";

export default function Navbar() {
  return (
    <div id="navContainer">
      <Row>
        <Col>
          <span>
            <img id="navIcon" src={logoIcon} alt="CSAP Logo" />
          </span>
          <span id="navLogo">Computer Science Acheivement Program</span>
        </Col>
        <Col>
          <div id="navLinkContainer">
            <NavLink to="/" className="navItem">
              Home
            </NavLink>
            <NavLink to="/about" className="navItem">
              About
            </NavLink>
            <NavLink to="/contact" className="navItem">
              Contact
            </NavLink>
            <NavLink to="/register" className="navItem">
              Join
            </NavLink>
            <NavLink id="registerBtn" to="/donate" className="navItem">
              Donate
            </NavLink>
          </div>
        </Col>
      </Row>
    </div>
  );
}
