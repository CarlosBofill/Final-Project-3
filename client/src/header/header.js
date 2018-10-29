import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./nav";
import logo from "../logo.svg";
import "./header.css";

export class Header extends React.Component {
  // export class Header extends Component {
  render() {
    return (
      <header>
        <Link to={"/"}>
          <h1>
            <img src={logo} alt="Movie logo" /> Movie Search
          </h1>
        </Link>
        <Nav />
      </header>
    );
  }
}
