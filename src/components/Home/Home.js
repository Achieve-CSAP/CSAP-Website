import React from "react";
import "./Home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import studentsWorking from "../../assets/studentsWorking.png";
import shapesImage from "../../assets/Shapes.jpg";
import orthoLogo from "../../assets/orthoLogo.png"
import aslaLogo from "../../assets/uscmae.png"
import stellaLogo from "../../assets/stellaLogo.png"
import jmLogo from "../../assets/jmLogo.png"
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

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
          <a href = "/about"> <button id="learnMoreBtn">Learn More</button></a>
    
    <Link
          to="names"
          spy={true}
          smooth={true}
          offset={-180}
          duration={500}
        ><button id="schoolsBtn">Schools</button></Link>
  <a href = "/contact"> <button id="donateBtn">Connect With Us</button></a>
          
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

      <section id = "names" className="logo-list">
    <div className="container">
      <h1 > A Huge Thank You to Our Partners! </h1>
      <h2 className = "partners">At CSAP, we believe that our most valuable partners are our students. Without them, we would not be able to create such an impact on the future generation of tech.</h2>
        <br></br>
        <div className="row">
            <div className=" col-sm-6">
                <a target = "_blank" ><img src={jmLogo} id = "jmLogo" className="img-fluid" alt="jm logo"></img></a> <br></br>
              
            </div>
            <div className="col-sm-6">
                <a target = "_blank" ><img src={stellaLogo} id = "stellaLogo" className="img-fluid" alt="stella logo"></img></a> <br></br>
                
            </div>
        </div>
        <div className="row">
            <div className=" col-sm-6">
                <a target = "_blank" href=""><img src={aslaLogo} id = "aslaLogo" className="img-fluid" alt=" asla logo"></img></a> 
                 <br></br>
                
            </div>
            <div className=" col-sm-6">
                <a target = "_blank"><img src={orthoLogo} id = "orthoLogo" className="img-fluid" alt=" ortho logo"></img></a> <br></br>
               
            </div>
          </div>
    </div>
</section>

    </div>
  );
}
