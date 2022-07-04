import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div id = "navContainer">
            <Row>
                <Col>
                    <p id = "navLogo">Computer Science Acheivement Program</p>
                </Col>
                <Col>
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
                        Register
                    </NavLink>
                </Col>
            </Row>
        </div>
    )
}