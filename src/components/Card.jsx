import React from "react";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <Detail content={props.tel} />
        <Detail content={props.email} />
      </div>
    </div>
  );
}

export default Card;
