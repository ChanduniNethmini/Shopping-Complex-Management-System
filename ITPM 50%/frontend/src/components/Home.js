import React, { Component } from "react";
import NavBar from "./NavBar";
import SlideShow from "./slideShow";
import Cards from "./cards";
import Footer from "./footer";
import CardDeals from "./CardDeals";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SlideShow />

        <Cards />
        <CardDeals />
        <Footer />
      </>
    );
  }
}
