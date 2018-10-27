import React from "react";
import "./MentorCard.css";

const MentorCard = props => (
  <div className="card">
    {/* <a href="http://google.com">
      link */}
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <button type="button" class="btn btn-success">
        Check Me Out
      </button>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Department:</strong> {props.department}
        </li>
        {/* <li>
          <strong>Location:</strong> {props.location}
        </li> */}
      </ul>
      <div className="card-block">
        <p className="card-text">
          {" "}
          as convallis ut turpis vitae facilisis. Morbi eu augue vel quam
          efficitur rhoncus vitae eget lectus. Cras
        </p>
        <p className="card-text">
          {" "}
          as convallis ut turpis vitae facilisis. Morbi eu augue vel quam
          efficitur rhoncus vitae eget lectus. Cras
        </p>
      </div>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
    {/* </a> */}
  </div>
);

export default MentorCard;

/*
In your Mentors.js page file, You need to add a nested route

So something like

<Switch>
    <Route path="/mentors/:id" component={SingleMentorPage} />
</Switch>

Then you need to create the SingleMentorPage component to render a single mentor

Then you need to pass the mentor's ID as a prop to MentorCard from the Mentors.js page

and change the "name: {props.name}" to "name: <Link to={`/mentors/${props.id}`}>{props.name}</Link>"
*/
