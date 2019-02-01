import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Parallax, CardPanel } from "react-materialize";
import background from "../images/cooltile.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NavB from "../components/NavB";
import Contact from "../components/Contact";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <NavB />
        <Parallax className="parallax" imageSrc={background} />
        <div className="section lime lighten-5">
          <CardPanel className="teal lighten-4 black-text">
            <span>
              <h2
                className="header"
                style={{ fontFamily: "Poiret One, cursive" }}
              >
                PORTFOLIO
              </h2>
            </span>
          </CardPanel>

          <Container>
            <Row>
              <Col size="4">
                <CardPanel className="teal lighten-4 black-text">
                  <Link to="/booking">
                    {" "}
                    <a
                      className="waves-effect waves-light btn-small lime lighten-5"
                      style={{ color: "gray" }}
                    >
                      Crystals Collector
                    </a>{" "}
                  </Link>
                </CardPanel>
              </Col>
              <Col size="4">
                <CardPanel className="teal lighten-4 black-text">
                  <Link to="/booking">
                    {" "}
                    <a
                      className="waves-effect waves-light btn-small lime lighten-5"
                      style={{ color: "gray" }}
                    >
                      Giphtastic
                    </a>{" "}
                  </Link>
                </CardPanel>
              </Col>
              <Col size="4">
                <CardPanel className="teal lighten-4 black-text">
                  <Link to="/booking">
                    {" "}
                    <a
                      className="waves-effect waves-light btn-small lime lighten-5"
                      style={{ color: "gray" }}
                    >
                      Train Scheduler
                    </a>{" "}
                  </Link>
                </CardPanel>
              </Col>
            </Row>
            <Row>
              <Col size="4">
                <CardPanel className="teal lighten-4 black-text">
                  <Link to="/booking">
                    {" "}
                    <a
                      className="waves-effect waves-light btn-small lime lighten-5"
                      style={{ color: "gray" }}
                    >
                      React NY Times
                    </a>{" "}
                  </Link>
                </CardPanel>
              </Col>
              <Col size="4">
                <CardPanel className="teal lighten-4 black-text">
                  <Link to="/booking">
                    {" "}
                    <a
                      className="waves-effect waves-light btn-small lime lighten-5"
                      style={{ color: "gray" }}
                    >
                      Save My Asana UI
                    </a>{" "}
                  </Link>
                </CardPanel>
              </Col>
              <Col size="4">
                <CardPanel className="teal lighten-4 black-text">
                  <Link to="/booking">
                    {" "}
                    <a
                      className="waves-effect waves-light btn-small lime lighten-5"
                      style={{ color: "gray" }}
                    >
                      Subr App UI
                    </a>{" "}
                  </Link>
                </CardPanel>
              </Col>
            </Row>
            <Row />
          </Container>
          <Container />
        </div>
        <Parallax className="parallax" imageSrc={background} />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default Portfolio;
