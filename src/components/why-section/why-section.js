import React from "react";
import "./why-section.css";

const WhySection = () => {
  return (
    <>
      <p className="why-title">Find out some facts about our company</p>
      <div className="why-section">
        <div className="why-section-row-odd">
          <div className="why-img">
            <img src="./images/why/why-fruits.jpg" alt="why" />
          </div>
          <div className="why-reason">
            <p>
              We use only natural fruits grown with love and without the use of
              harmful fertilizers. Quality control is carried out at all stages
              of production and processing.
            </p>
          </div>
        </div>
        <div className="why-section-row-even">
          <div className="why-img">
            <img src="./images/why/why-modern.jpg" alt="why" />
          </div>
          <div className="why-reason">
            <p>
              We are constantly upgrading and improving our equipment. The use
              of the latest technologies is the key to the consistently high
              level of our company.
            </p>
          </div>
        </div>
        <div className="why-section-row-odd">
          <div className="why-img">
            <img src="./images/why/why-truck.jpg" alt="why" />
          </div>
          <div className="why-reason">
            <p>
              The developed level of logistics communication allows our partners
              to be sure that they will receive our products on time and in
              full.
            </p>
          </div>
        </div>
        <div className="why-section-row-even">
          <div className="why-img">
            <img src="./images/why/why-ecology.jpg" alt="why" />
          </div>
          <div className="why-reason">
            <p>
              Taking care of nature is one of the highest priorities in
              production. The use of renewable energy sources and waste disposal
              gives us the right to be called real ecological friendly company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySection;
