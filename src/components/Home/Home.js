import React from "react";
import "./Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import studentsWorking from "../../assets/studentsWorking.png";
import shapesImage from "../../assets/Shapes.jpg";
import orthoLogo from "../../assets/orthoLogo.png"
import aslaLogo from "../../assets/aslaLogo.png"
import stellaLogo from "../../assets/stellaLogo.png"
import jmLogo from "../../assets/jmLogo.png"

export default function Home() {
  return (
    <div>
      <Row>
        <Col>
          <div class="introContainers">
            <h3 id="homeTextIntro">Building the future</h3>
            <h1 id="mainHomeText">
              Experiential learning, hands-on experience, and civic engagement.
            </h1>
            <p>
              We are a non-profit on a mission to expose high school students in
              underserved communities to the field of{" "}
              <span id="csText">Computer Science.</span>
            </p>
          </div>
          <div class="introContainers">
            <button id="learnMoreBtn">Learn More</button>
            <button id="schoolsBtn">Schools</button>
            <button id="donateBtn">Connect With Us</button>
          </div>
          <img
            class="introContainers"
            id="shapesImage"
            src={shapesImage}
            alt="Shapes"
          />
        </Col>
        <Col>
          <img
            id="keyImage"
            src={studentsWorking}
            alt="Students being productive"
          />
        </Col>
      </Row>

      <Row>
        <h1>Our Partners</h1>
        <h3>At CSAP, we believe that our most valuable partners
          are our students. Without them, we would not be able to
          create such an impact on the future generation of tech.
        </h3>
        <Row>
          <Col>
            <img className = "partnerLogo" src = {orthoLogo}/>
          </Col>
          <Col>
            <img className = "partnerLogo" src = {aslaLogo}/>
          </Col>
          <Col>
            <img className = "partnerLogo"  src = {stellaLogo}/>
          </Col>
          <Col>
            <img className = "partnerLogo"  src = {jmLogo}/>
          </Col>
          <Col>

          </Col>
        </Row>

      </Row>
    </div>
  );
}
