import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import AboutUsPhoto from "../../assets/csclub.png";
import GetInvolvedPhoto from "../../assets/codingimage.jpeg";
import Hackathon from "../../assets/hackathon.jpg";
import scrolldown from "../../assets/scrolldown.svg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <div>
      <div id="sectionOne">
      
        <Row>
          <Col id="imageCol">
            <img src={AboutUsPhoto} id="aboutUsPhoto" alt="CSAP Foundeer" />
            <span className="circleOne" />
            <span className="circleTwo" />
          </Col>
          <Col>
            <h1 id="sectionHeading"> Who Are We?</h1>
            <p id="whoAreWe">
              The <span>Computer Science Achievement Program</span>, otherwise
              referred to as CSAP, is a nonprofit, educational, student lead
              highschool outreach program dedicated to serving students of all
              backgrounds through achievement in core computer science concepts.
              We aim to unite schools throughout Los Angeles schools to come
              together and develop future technological leaders through
              education and teamwork.
            </p>
          </Col>
        </Row>

        <Link
          to="sectionTwo"
          spy={true}
          smooth={true}
          offset={-180}
          duration={500}
        >
          <img src={scrolldown} className="scroll" alt="scrollbtn"></img>
        </Link>
      </div>
      <div id="sectionTwo">
        <Row className = "involveRow">
          <Col>
            <h1 id="sectionHeading"> Get Involved </h1>
            <p id="getInvolved">
              By joining us, students will have the opportunity to start a CSAP
              chapter at their school. CSAP will provide students with our core
              curriculum, mainly focused on the computer science topic provided
              for our competition at the end of the school year. Interested in
              starting a CSAP club at your school?  <NavLink to="/register" className="navItem">
              Join Today!
            </NavLink>
            </p>
          </Col>
          <Col id="imageColTwo">
            <img
              src={GetInvolvedPhoto}
              id="getInvolvedPhoto"
              alt="Highschooler coding"
            />
            <span className="circleThree" />
            <span className="circleFour" />
            <span className="circleFourTwo" />
            <span className="circleFourThree" />
          </Col>
        </Row>
        <Link
          to="sectionThree"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={scrolldown} className="scroll" alt="scrollbtn"></img>
        </Link>
      </div>
      <div id="sectionThree">
        <Row>
          <Col id="imageCol">
            <img src={Hackathon} id="competitionPhoto" alt="CSAP Foundeer" />
            <span className="circleFive" />
            <span className="circleSix" />
          </Col>
          <Col>
            <h1 id="sectionHeading"> The Annual Competition</h1>
            <p id="competition">
              Every year, CSAP holds its Annual Competition where every school
              under our program will compete to become a CSAP Scholar. The
              competition consists around solving a specific important community
              issue. The prompt of the community issue to solve is decided every
              year, along with what types of languages/software to use in order
              for students to learn new topics every year at CSAP.
            </p>
          </Col>
        </Row>
        <Link
          to="sectionOne"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
        >
          <img src={scrolldown} className="scrollUP" alt="scrollbtn"></img>
        </Link>
      </div>
    </div>
  );
}
