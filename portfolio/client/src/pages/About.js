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

        <div className="section lime lighten-5">
          <Container>
            <Row>
              <Col size="8">
                <h5
                  className="header"
                  style={{ fontFamily: "Poiret One, cursive" }}
                >
                  ABOUT ME
                </h5>
              </Col>
            </Row>
            <Row>
              <Col size="5">
                <Card
                  header={
                    <CardTitle reveal image={computerFace} waves="light" />
                  }
                  style={{ height: "400px" }}
                  title="CONTACT"
                  reveal={
                    <p id="reveal">
                      <img id="biopic" src={Dale} />
                      <br />
                      <img id="github" src={github} />
                      <a className="label" href="#">
                        {/* GitHub */}
                      </a>
                      {/* <br /> */}
                      <img id="linkedin" src={linkedin} />
                      <a className="label" href="#">
                        {/* LinkedIn */}
                      </a>
                      <br />
                      <a id="resume" href="#">
                        <Icon
                          className="medium material-icons"
                          style={{
                            fontSize: "70px !important",
                            marginRight: "15px"
                          }}
                        >
                          work
                        </Icon>
                        {/* Resume */}
                      </a>
                      {/* <br /> */}
                      <Icon
                        className="medium material-icons"
                        style={{ fontSize: "70px" }}
                      >
                        mail_outline
                      </Icon>{" "}
                      {/* dale.m.padelford@gmail.com */}
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
                    style={{ height: "400px", width: "500px" }}
                    className="teal lighten-4 black-text"
                  >
                    <span style={{ fontFamily: "Poiret One, cursive" }}>
                      <p>I'm a Web Designer and Front-End Web Developer.</p>
                      <p />
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
