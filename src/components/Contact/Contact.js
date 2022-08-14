import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import AboutUsPhoto from "../../assets/csclub.png";
import GetInvolvedPhoto from "../../assets/codingimage.jpeg";
import Hackathon from "../../assets/hackathon.jpg";
import scrolldown from "../../assets/scrolldown.svg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Mail from "../../assets/newsletter-icon.svg";

export default function Contact() {
  return (
    <div>
      <div className="headerDiv">
        <h1 className="contactTitle">Contact Us </h1>
      </div>

      <div className="container">
        <h2>Any questions about CSAP? Please don't hesitate to contact us!</h2>
        <hr></hr>
        <Row className = "contactRow">
        <Col className = "form-col">
        <form id="contact-form">
          <div className="form-group">
            <Col>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value=""
                required
              />
            </Col>
          </div>
          <div className="form-group">
            <Col>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value=""
                required
              />
            </Col>
          </div>
          <Col>
            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>
          </Col>
          <Col className = "submitBtn">
            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                Send
              </div>
            </button>
          </Col>
        </form>
        </Col>
        <Col className = "contact-info">
            <p className = "contactDesc"> If you would like to keep in contact with us and continue communication, email us at our email
              and follow our Instagram!
            </p>
            <img className = "mailImg"src = {Mail}></img>
        </Col>
        </Row>
      </div>
    </div>
  );
}
