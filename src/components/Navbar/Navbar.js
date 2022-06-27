import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <div>
            <Row>
                <Col>
                    <p>CSAP</p>
                </Col>
                <Col>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/register">
                        Register
                    </NavLink>
                </Col>
            </Row>

        </div>
    )
}