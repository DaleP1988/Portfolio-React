import React from "react";
import { Link } from "react-router-dom";
import "./NavB.css";
import backdrop from "../../images/adultFace.jpg";

// import logo from "../../images/logo.png";

const NavB = () => (
  //   <div id="header" backgroundImg={backdrop} className="lime lighten-5">
  //     <Link to="/">
  //       <h1 className="center black-text" id="Dale Padelford">
  //         Dale Padelford
  //       </h1>
  // </Link>
  <div>
    <nav className="white z-depth-1 lime lighten-5" role="navigation">
      <div className="nav-wrapper container lime lighten-5">
        <ul className=" hide-on-med-and-down">
          <li className="left">
            <Link to="/" className="tab waves-effect waves-light black-text">
              <h5 id="name">DALE PADELFORD</h5>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="tab waves-effect waves-light black-text"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="tab waves-effect waves-light black-text"
            >
              PORTFOLIO + CONTACT
            </Link>
          </li>
          {/* <li>
            <Link
              to="/contact"
              className="tab waves-effect waves-light black-text"
            >
              CONTACT
            </Link>
          </li> */}
          {/* <li><Link to="/beauty" className="tab waves-effect waves-light black-text">BEAUTY</Link></li>
                    <li><Link to="/topshelf" className="tab waves-effect waves-light black-text">TOP SHELF</Link></li>
                    <li><Link to="/store" className="tab waves-effect waves-light black-text">TRISTAN+ISOLDE</Link></li>
                    <li><Link to="/about" className="tab waves-effect waves-light black-text">ABOUT</Link></li> */}
        </ul>
        {/* <ul id="nav-mobile" class="sidenav">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
      </div>
    </nav>
  </div>
);
export default NavB;
