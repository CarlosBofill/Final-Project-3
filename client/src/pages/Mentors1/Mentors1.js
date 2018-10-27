import React, { Component } from "react";
// import API from "../utils/API";
// import Alert from "../components/Alert";
import Container from "../../components/Container";
import Row from "../../components/Row";
import mentors from "./mentors.json";
import MentorCard from "../../components/MentorCard";

class Mentor extends Component {
  state = {
    mentors
  };

  render() {
    // console.log("Props: ", this.props);
    return (
      <Container>
        <div>
          <h1 className="text-center">This is not what I want to see</h1>
        </div>
        <div>
          <Row>
            <div className="card-deck">
              {this.state.mentors.map(mentors => (
                <MentorCard
                  removeFriend={this.removeFriend}
                  id={mentors.id}
                  key={mentors.id}
                  name={mentors.name}
                  image={mentors.image}
                  occupation={mentors.occupation}
                  location={mentors.location}
                />
              ))}
            </div>
          </Row>
          {/* <Card
            image={this.state.clickCard}
            handleBtnClick={this.handleBtnClick}
          /> */}
        </div>
      </Container>
    );
  }
}

export default Mentor;
