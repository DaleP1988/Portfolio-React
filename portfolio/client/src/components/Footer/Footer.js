import React from "react";
import "./Footer.css";
import { Icon, Input } from "react-materialize";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="page-footer lime lighten-5" id="footer-style">
    <Container>
      <Row>
        <Col size="4">
          <h2
            className="grey-text"
            style={{ fontFamily: " Poiret One, cursive !important" }}
          >
            Contact
          </h2>
        </Col>
      </Row>
      <Row>
        <Col size="10">
          <Row>
            <Input placeholder="Placeholder" s={8} label="Name" />
          </Row>
          <Row>
            <Icon className="medium grey" style={{ font: "grey" }}>
              edit
            </Icon>{" "}
            <p>Message</p>
          </Row>
          <Row>
            <Input type="email" label="" s={12} />
          </Row>
          <Row>
            <Icon className="medium grey" style={{ font: "grey" }}>
              email
            </Icon>{" "}
            <p>Where can I reach you?</p>
          </Row>

          <Input type="email" label="" s={12} />
        </Col>
      </Row>

      <Row>
        <p id="footer">
          <i className="far fa-copyright" />
          2019 Dale Mendez Padelford
        </p>
      </Row>
    </Container>
  </div>
);

export default Footer;
