import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Parallax, Card, CardTitle, CardPanel } from "react-materialize";
// import { ParallaxBanner } from "react-scroll-parallax";
import background from "../images/cooltile.jpg";
import tile from "../images/pinktile.jpg";
import computerFace from "../images/computerFace.jpg";
import NavB from "../components/NavB";
import "./About.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <NavB />
        <Parallax imageSrc={background} style={{ width: "100%" }} />

        <div className="section lime lighten-4">
          <Container>
            <Row>
              <Col size="8">
                <h2 className="header">About Me</h2>
              </Col>
            </Row>
            <Row>
              <Col size="5">
                <Card
                  header={
                    <CardTitle reveal image={computerFace} waves="light" />
                  }
                  title="Get in Touch"
                  reveal={
                    <p>
                      <br />
                      <a href="#">LinkedIn</a>
                      <br />
                      <br />
                      <a href="#">GitHub</a>
                      <br />
                      <br />
                      dale.m.padelford@gmail.com
                    </p>
                  }
                >
                  <p>
                    <a href="/portfolio">see my work</a>
                  </p>
                </Card>
              </Col>
              <Col size="6">
                <Row>
                  {/* <Col s={12} m={5}> */}
                  <CardPanel className="teal lighten-4 black-text">
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

        <Parallax imageSrc={background} />
      </div>
    );
  }
}

export default About;
