import React from "react";
import "./Contact.css";
import { Icon, Input } from "react-materialize";
import { Col, Row, Container } from "../Grid";

const Contact = () => (
  <div className="section lime lighten-5" id="contact">
    <Container>
      <Row>
        <Col size="4">
          <h2
            className="grey-text"
            style={{
              fontFamily: " Poiret One, cursive !important",
              fontSize: "30px",
              color: "black   !important"
            }}
          >
            CONTACT
          </h2>
        </Col>
      </Row>
      <Row>
        <Col size="10">
          <Icon className="small " style={{}}>
            person
          </Icon>{" "}
          <Row>
            <Input placeholder="Name" s={8} label="" />
          </Row>
          <Row>
            <Icon className="small " style={{}}>
              edit
            </Icon>{" "}
            <form>
              <label className="label">
                <input type="text" placeholder="Message" name="name" />
              </label>
            </form>
          </Row>
          <Row>
            <Col size="5">
              <Icon className="small " style={{}}>
                email
              </Icon>{" "}
              <form>
                <label className="label">
                  <input type="text" placeholder="Email" name="name" />
                </label>
              </form>
            </Col>
            <Col size="5">
              <Icon className="small " style={{}}>
                phone
              </Icon>{" "}
              <form>
                <label className="label">
                  <input type="text" placeholder="Phone" name="name" />
                </label>
              </form>
            </Col>
            <Col size="2">
              <input
                className="waves-effect waves-light btn-small lime lighten-5"
                type="submit"
                value="Submit"
                style={{ marginTop: "35px", color: "gray" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
