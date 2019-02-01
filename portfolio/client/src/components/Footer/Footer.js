import React from "react";
import "./Footer.css";
import { Icon, Input } from "react-materialize";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="page-footer lime lighten-5" id="footer-style">
    <Container>
      <Row>
        <Col size="12">
          <p
            id="footer"
            className="grey-text"
            style={{ fontFamily: " Poiret One, cursive !important" }}
          >
            <i className="far fa-copyright" />
            2019 Dale Mendez Padelford
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
