import React, { Component } from "react";
import NavBar2 from "./NavBar2";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9" style={{ letterSpacing: "12px" }}>
            <marquee direction="left">Innovative Trade Plaza Mall</marquee>
          </div>
          <div className="col-3">Need Help? Call Us: (+94) 11111111</div>
          <hr />
        </div>

        <NavBar2 />

        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#d9dbde" }}
        >
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/permenentshop_home">
                  Stores
                </a>
              </li>
              {/* <li className="nav-item active">
                <a className="nav-link" href="/temporyshop_home">
                  Stalls
                </a>
              </li> */}
              <li className="nav-item active">
                <a className="nav-link" href="/grid">
                  Book a stall
                </a>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/shop">
                    Foods
                  </a>
                  <a className="dropdown-item" href="/shop">
                    Stationary
                  </a>
                  <a className="dropdown-item" href="/shop">
                    Clothes
                  </a>
                  <a className="dropdown-item" href="/shop">
                    Electronics
                  </a>
                </div>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="nav-link" href="/signin">
                Login
              </a>
            </span>
            <span className="navbar-text">
              <a className="nav-link" href="/signup">
                Register
              </a>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
