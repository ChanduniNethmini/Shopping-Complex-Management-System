import React, { Component } from "react";
import NavBar2 from "./NavBar2";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9" style={{ letterSpacing: "12px" }}>
            Innovative Trade Plaza Mall
          </div>
          <div className="col-3">Need Help? Call Us: (+94) 11111111</div>
          <hr />
        </div>

        <NavBar2 />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/permenentshop_home">
                  Stores
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/temporyshop_home">
                  Stalls
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Book a stall
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/shop">
                    Foods
                  </a>
                  <a class="dropdown-item" href="/shop">
                    Stationary
                  </a>
                  <a class="dropdown-item" href="/shop">
                    Clothes
                  </a>
                  <a class="dropdown-item" href="/shop">
                    Electronics
                  </a>
                </div>
              </li>
            </ul>
            <span class="navbar-text">
              {" "}
              <a class="dropdown-item" href="/login">
                Login
              </a>
            </span>
            <span class="navbar-text">
              <a class="dropdown-item" href="/register">
                Register
              </a>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
