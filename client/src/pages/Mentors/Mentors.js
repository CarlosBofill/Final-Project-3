import React, { Component } from "react";
import MentorCard from "../../components/MentorCard";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import "./MentorsPage.css";

import mentors from "./mentors.json";
import MentorProfile from "../../components/MentorProfile/MentorProfile";

// import "./MentorCard.css";

class Mentor extends Component {
  state = {
    mentors,
    profile: {}
  };

  goToMentorProfile = mentor => {
    //alert(" Testing : " + mentor.id);
    this.setState({
      profile: mentor
    });
  };

  goBack = () => {
    this.setState({
      profile: {}
    });
  };

  render() {
    console.log("Props: ", this.props);
    return (
      <Wrapper className="wrapper-main">
        <Title>Our Mentors </Title>

        {this.state.profile.id ? (
          <MentorProfile
            // id={this.state.profile.id}
            image={this.state.profile.image}
            name={this.state.profile.name}
            // department={this.state.profile.department}
            // location={this.state.profile.location}
            goBack={this.goBack}
          />
        ) : (
          this.state.mentors.map(mentor => (
            <div>
              <MentorCard
                // removeMentor={this.removeMentor}
                id={mentor.id}
                key={mentor.id}
                image={mentor.image}
                name={mentor.name}
                department={mentor.department}
                location={mentor.location}
                knownFor={mentor.knownFor}
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.goToMentorProfile(mentor)}
              >
                Go To Expert Page>
              </button>
            </div>
          ))
        )}
      </Wrapper>
    );
  }
}

export default Mentor;
