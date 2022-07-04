import React from "react";
import './Home.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kevinHeadshot from "../../assets/kevinHeadshot.png"

export default function Home() {
    
    return (
    <div>
        <div id = "heroSection">
        </div>
        <Row>
            <Col>
            <img src = {kevinHeadshot}/>
            </Col>
            <Col>
            <div>
                <h1>Experiential learning, hands-on experience,
                     and civic engagement.</h1>
                <p>We are a nonprofit with a mission to expose 
                    high school students in underserved communities 
                    to the field of Computer Science.</p>
                <button>Learn More</button>
            </div>
            </Col>
        </Row>
    </div>
    )
}