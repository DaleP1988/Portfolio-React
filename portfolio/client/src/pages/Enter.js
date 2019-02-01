import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Parallax } from "react-materialize";
// import { ParallaxBanner } from "react-scroll-parallax";
import background from "../images/cooltile.jpg";
import Footer from "../components/Footer";
import vr from "../images/computerFace.jpg";
// import tile from "../images/pinktile.jpg";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import "../components/Enter/Enter.css";

class Enter extends Component {
  render() {
    return (
      <div>
        <Parallax imageSrc={background} style={{}} />

        <div className="section grey lighten-2">
          <div className="row container">
            <h2
              className="header"
              style={{ fontFamily: "Poiret One, cursive" }}
            >
              DALE PADELFORD
            </h2>
            <p className="grey-text text-darken-3 lighten-3">WEB DESIGNER +</p>
            <p className="grey-text text-darken-3 lighten-3">
              FRONT END WEB DEVELOPER
            </p>
            <Link to="/about">
              {" "}
              <a
                className="waves-effect waves-light btn-small lime lighten-5"
                style={{ color: "grey" }}
              >
                HAVE A LOOK
              </a>{" "}
            </Link>
          </div>
        </div>

        <Parallax imageSrc={background} id="vr" />
        <Footer />
      </div>
    );
  }
}

export default Enter;
