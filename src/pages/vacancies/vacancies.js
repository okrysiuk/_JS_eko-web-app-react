import React from "react";
import LandingSection from "./../../components/landing-section";

const Vacancies = () => {
  return (
    <>
      <LandingSection
        title="Vacancies"
        titleColor="white"
        imgUrl="./images/vacancies.jpg"
        isButtons={false}
      />
      <div className="vacancies-container"></div>
    </>
  );
};

export default Vacancies;
