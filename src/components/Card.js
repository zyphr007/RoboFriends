import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="design">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
