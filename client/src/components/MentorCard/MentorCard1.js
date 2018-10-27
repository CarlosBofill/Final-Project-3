import React from "react";
import React, { Component } from "react";
import "./MentorCard.css";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

const MentorCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
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
  </div>
);

export default MentorCard;
