import React, { Component } from "react";
import NavBar from "./NavBar";
import SlideShow from "./slideShow";
import Cards from "./cards";
import Footer from "./footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SlideShow />
        <Cards />
        <Footer />
      </>
    );
  }
}
