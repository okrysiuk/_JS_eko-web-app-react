import React from "react";
import { Soky, Ranok, Fresh, Ekosfera, Kviten } from "../../assets/svg/logo.js";
import "./brand-section.css";

const BrandSection = () => {
  return (
    <>
      <h1 className="brand-title">Discover healty life with our juices</h1>
      <div className="brand-section">
        <div className="brand-section-row">
          <div className="brand-card-item">
            <div className="brand-img">
              <Ekosfera />
            </div>
            <div className="brand-description">
              <strong>Choosing a healthy diet</strong>
              <br />
              <p>
                "Ekosphere" juices are made from natural raw materials without
                artificial additives. Each batch undergoes a laboratory control
                and meets environmental standards
              </p>
            </div>
          </div>
          <div className="brand-spacer" />
          <div className="brand-card-item">
            <div className="brand-img">
              <Fresh />
            </div>
            <div className="brand-description">
              <strong>Directly squeezed juices</strong>
              <br />
              <p>
                The juice is prepared without the use of concentrated juices,
                preservatives, flavors, colors and other artificial additives.
                It is a 100% natural product of the highest quality. TM "Fresh"
                embodies the idea of the company "ECO-SPHERE" that high-quality
                products should be available to as many consumers as possible
              </p>
            </div>
          </div>
        </div>
        <div className="brand-section-row">
          <div className="brand-card-item">
            <div className="brand-img">
              <Ranok />
            </div>
            <div className="brand-description">
              <strong>Natural juices every day</strong>
              <br />
              <p>
                "Ranok" is juices of the most popular flavors, mainly from
                Ukrainian fruits and vegetables. Manufactured from own raw
                materials, therefore affordable
              </p>
            </div>
          </div>
          <div className="brand-spacer" />
          <div className="brand-card-item">
            <div className="brand-img">
              <Kviten />
            </div>
            <div className="brand-description">
              <strong>Best price offer</strong>
              <br />
              <p>
                Juices "Kviten" prepared on the basis of natural fruit juices
                and purees. This is a product that allows you to take care of
                your health and save your budget.
              </p>
            </div>
          </div>
        </div>
        <div className="brand-section-row">
          <div className="brand-card-item">
            <div className="brand-img">
              <Soky />
            </div>
            <div className="brand-description">
              <strong>With love for the native land and loved ones</strong>
              <br />
              <p>
                Our lands is famous for its pure nature, mild climate.
                Therefore, fruits are so sweet and ripe, and juices from them
                are tasty and healthy.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------------- */}
    </>
  );
};

export default BrandSection;
