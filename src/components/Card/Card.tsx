import React from "react";
import "./Card.scss";
import { ImageUrl } from "../../constants/ImageUrl";

const Card = ( data: any) => {
  
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={ImageUrl?.card1}
            alt="Samplephoto"
            className="img-fluid"
            style={{
              borderTopLeftRadius: ".25rem",
              borderBottomLeftRadius: ".25rem",
            }}
          />
          <div className="content">
            <p>{data?.cardData?.name}</p>
          </div>
        </div>
        <div className="card-back">
        <img
            src={ImageUrl?.card1}
            alt="Samplephoto"
            className="img-fluid"
            style={{
              borderTopLeftRadius: ".25rem",
              borderBottomLeftRadius: ".25rem",
            }}
          />
          <div className="content">
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
