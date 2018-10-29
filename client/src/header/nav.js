import React, { Component } from "react";

export class Nav extends React.Component {
  // export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar">
          <li>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* API: The Movie Database */}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
