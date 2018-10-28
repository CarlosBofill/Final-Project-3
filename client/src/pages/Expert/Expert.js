import React, { Component } from "react";
import MentorCard from "../components/MentorCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import "./MentorsPage.css";

import mentors from "./mentors.json";
// import "./MentorCard.css";

class Expert extends Component {
  state = {
    // expert,
    mentors
  };

  // removeMentor = id => {
  //   // Filter this.state.mentors for mentors with an id not equal to the id being removed
  //   const mentors = this.state.mentors.filter(mentor => mentor.id !== id);
  //   // Set this.state.mentors equal to the new mentors array
  //   this.setState({ mentors });
  // };

  // Map over this.state.mentors and render a MentorCard component for each mentor object

  render() {
    console.log("Props: ", this.props);
    return (
      <Wrapper className="wrapper-main">
        <Title>Expert Page </Title>

        {this.state.mentors.map(mentor => (
          <MentorCard
            // removeMentor={this.removeMentor}
            id={mentor.id}
            key={mentor.id}
            image={mentor.image}
            name={mentor.name}
            department={mentor.department}
            location={mentor.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Expert;
