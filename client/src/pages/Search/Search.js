import React, { Component } from "react";
import Container from "../../components/Grid";
// import React from "react";
import { Header } from "../../header/header";
import { Form } from "../../form/form";
import { NewMovies } from "../../newMovies/newMovies";

export class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Form />
        <NewMovies />
      </div>
    );
  }
}

export default Search;
