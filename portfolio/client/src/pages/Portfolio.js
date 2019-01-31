import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Parallax } from "react-materialize";
import background from "../images/cooltile.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NavB from "../components/NavB";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <NavB />
        <Parallax imageSrc={background} />
        <div className="section lime lighten-5">
          <h2 className="header">Portfolio</h2>

          <Container>
            <Row>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Crystals Collector
                  </a>{" "}
                </Link>
              </Col>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Giphtastic
                  </a>{" "}
                </Link>
              </Col>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Train Scheduler
                  </a>{" "}
                </Link>
              </Col>
            </Row>
            <Row>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    React NY Times
                  </a>{" "}
                </Link>
              </Col>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Save My Asana UI
                  </a>{" "}
                </Link>
              </Col>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Subr App UI
                  </a>{" "}
                </Link>
              </Col>
            </Row>
            <Row>
              {/* <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Book an Instructor
                  </a>{" "}
                </Link>
              </Col>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Book an Instructor
                  </a>{" "}
                </Link>
              </Col>
              <Col size="4">
                <Link to="/booking">
                  {" "}
                  <a className="waves-effect waves-light btn-small">
                    Book an Instructor
                  </a>{" "}
                </Link>
              </Col> */}
            </Row>
          </Container>
        </div>
        <Parallax imageSrc={background} />
        <Footer />
      </div>
    );
  }
}
export default Portfolio;
