import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Parallax, Card, CardTitle, CardPanel, Icon } from "react-materialize";
// import { ParallaxBanner } from "react-scroll-parallax";
import background from "../images/cooltile.jpg";
import tile from "../images/pinktile.jpg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import Dale from "../images/Dale2018Photo.jpg";
import computerFace from "../images/computerFace.jpg";
import NavB from "../components/NavB";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "./About.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <NavB />
        <Parallax
          className="parallax"
          imageSrc={background}
          style={{ width: "100%", height: "50%" }}
        />

        <div className="section lime lighten-4">
          <Container>
            <Row>
              <Col size="8">
                <h2
                  className="header"
                  style={{ fontFamily: "Poiret One, cursive" }}
                >
                  ABOUT ME
                </h2>
              </Col>
            </Row>
            <Row>
              <Col size="5">
                <Card
                  header={
                    <CardTitle reveal image={computerFace} waves="light" />
                  }
                  title="CONTACT"
                  reveal={
                    <p id="reveal">
                      <img id="biopic" src={Dale} />
                      <br />
                      <a href="#">
                        <Icon style={{ fontSize: "30px" }}>work</Icon> Resume
                      </a>
                      <img id="github" src={github} />
                      <a href="#">GitHub</a>
                      <img id="linkedin" src={linkedin} />
                      <a href="#">LinkedIn</a>
                      <br />
                      <Icon style={{ fontSize: "30px" }}>
                        mail_outline
                      </Icon>{" "}
                      dale.m.padelford@gmail.com
                    </p>
                  }
                >
                  <p>
                    <a id="visit" href="/portfolio">
                      VISIT MY WORK
                    </a>
                  </p>
                </Card>
              </Col>
              <Col size="6">
                <Row>
                  {/* <Col s={12} m={5}> */}
                  <CardPanel
                    id="aboutCard"
                    className="teal lighten-4 black-text"
                  >
                    <span>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively. I am similar to what is
                      called a panel in other frameworks.
                    </span>
                  </CardPanel>
                  {/* </Col> */}
                  {/* <Col s={12} m={7}> */}

                  {/* </Col> */}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <Parallax className="parallax" imageSrc={background} />

        <Footer />
      </div>
    );
  }
}

export default About;
