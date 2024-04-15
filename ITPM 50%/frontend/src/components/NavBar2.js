import React, { Component } from "react";

export default class NavBar2 extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWr69Pq1zTmSi1texosRDMRnjsaUMnTX_0THzt9Bp6pzRt3kDlUNrOCCrx7jjOoo3Tvss&usqp=CAUl"
                alt="Logo"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </a>
            <form className="form-inline ml-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success ml-2" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex align-items-center">
            <img
              src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
              alt="Logo"
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            />
            <img
              src="https://i.pinimg.com/736x/4f/74/89/4f7489062aa5c4c112943f402d29373c.jpg"
              alt="Logo"
              style={{ borderRadius: "50%", width: "50px", height: "50px" }}
            />
            <img
              src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-logout-vector-icon-png-image_3725442.jpg"
              alt="Logo"
              style={{ borderRadius: "80%", width: "40px", height: "40px" }}
            />
          </div>
        </nav>
      </>
    );
  }
}
