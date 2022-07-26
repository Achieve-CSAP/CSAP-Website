import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import AboutUsPhoto from "../../assets/Manuel_Headshot.jpeg";
export default function About() {
  return (
    <div>
      <div id="sectionOne">
        <Row>
          <h4 id="pageHeader">About </h4>
        </Row>
        <Row>
          <Col id="imageCol">
            <img src={AboutUsPhoto} id="aboutUsPhoto" alt="CSAP Foundeer" />
            <span className="circleOne" />
            <span className="circleTwo" />
          </Col>
          <Col>
            <h1 id="sectionHeading"> Who Are We?</h1>
            <p id="whoAreWe">
              The Computer Science Achievement Program, otherwise referred to as
              CSAP, is a nonprofit, educational, student lead highschool
              outreach program dedicated to serving students of all backgrounds
              through achievement in core computer science concepts. We aim to
              unite schools throughout Los Angeles schools to come together and
              develop future technological leaders through education and
              teamwork.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
