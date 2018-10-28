import React from "react";

const MentorProfile = props => (
  <div>
    >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <div className="img-container">
        // // <img alt={props.name} src={props.image} />
        // //{" "}
      </div> */}
    <div>
      <p>{props.id}</p>
      {/* <p>{props.image}</p> */}
      <p>{props.name}</p>
      {/* <p>{props.location}</p>
    <p>{props.department}</p> */}
      <button onClick={props.goBack}>Go Back</button>
    </div>
  </div>
);

export default MentorProfile;
