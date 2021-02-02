import React from "react";
import "./vacancy-item.css";

const VacancyItem = ({ imgUrl, title, description }) => {
  return (
    <>
      <div className="vacancy-item">
        <div className="vacancy-photo">
          <img src={imgUrl} alt="vacancy item" />
        </div>
        <div className="vacancy-description">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default VacancyItem;
