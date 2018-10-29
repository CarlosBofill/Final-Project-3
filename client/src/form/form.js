import React from "react";
import { FormResults } from "./formResults";
import search from "../pages/Search/Search";
import "./form.css";

export class Form extends React.Component {
  // export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById("results").className = "formResults";
    let val = document.getElementById("searchInput").value;

    if (val === "") {
      document.getElementById("results").className = "noDisplay";
    }

    // const key = "f3e9f7d1677c7aa63c9ab526381eeceb";
    const key = "341cde8270743ac8527d209abb9593e5";

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log("Error: " + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })

      .catch(err => {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        {/* <img src={search} alt="search icon" className="searchIcon" /> */}
        <input
          onKeyUp={this.handleKeyUp}
          id="searchInput"
          className="searchBar"
          type="text"
          placeholder="Search a movie"
          required
        />
        <FormResults results={this.state.results} />
      </form>
    );
  }
}
