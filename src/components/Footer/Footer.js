import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CSAPLogo from "../.././assets/CSAP.svg";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import logoIcon from "../../assets/CSAP.svg";

export default function Footer() {
  return (
    
    <footer class="footer-section">
      <hr></hr>
    <div class="container">
        <div class="footer-cta pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="cta-text">
                            <h4>Find Us</h4>
                            <span>822 W 32nd St, Los Angeles, CA 90007
</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="fas fa-phone"></i>
                        <div class="cta-text">
                            <h4>Call Us</h4>
                            <span>(213) - 456 - 1448</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                    <div class="single-cta">
                        <i class="far fa-envelope-open"></i>
                        <div class="cta-text">
                            <h4>Email Us</h4>
                            <span>achieve.computerscience@gmail.com </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="/"><img src={CSAPLogo} class="img-fluid" alt="logo"></img> <span></span></a>
                        </div>
                        <div class="footer-text">
                            <p>Here at CSAP, our mission is to expose high school students in underserved communities to the field of Computer Science through experiential learning, hands-on experience, and civic engagement.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Roadmap">Contact</a></li>
                            <li><a href="/Marketplace">Join</a></li>
    
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3>Subscribe</h3>
                        </div>
                        <div class="footer-text mb-25">
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address"></input>
                                <button><i class="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2022, All Right Reserved <a href="/">Computer Science Achievement Program</a></p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div class="footer-menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Join</a></li>
        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
}
