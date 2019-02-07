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
import "./Resume.css";
import { Link } from "react-router-dom";
// import { Document, Page } from "react-pdf";
// import { Document } from "react-pdf/dist/entry.parcel";
import "../images/resume_dalepadelford.pdf";

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <NavB />
        <Parallax
          className="parallax"
          imageSrc={background}
          style={{ width: "100%", height: "50%" }}
        />
        <div>
          <div className="section lime lighten-5">
            <Container>
              <Row>
                <Col size="8">
                  <h5
                    className="header"
                    style={{ fontFamily: "Poiret One, cursive" }}
                  >
                    RESUME
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>

          {/*<Document
            file="resume_dalepadelford.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>*/}
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>

        <Parallax className="parallax" imageSrc={background} />

        <Footer />
      </div>
    );
  }
}

export default Resume;
