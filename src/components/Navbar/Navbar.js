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
          <span id="navLogo">Computer Science Achievement Program</span>
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
            <a href = "https://www.gofundme.com/f/the-computer-science-achievement-program?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1">
            <button id="donateBtn">Donate</button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
