import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./contacts.css";

const Contacts = () => {
  const position = [49.4776, 28.5211];
  return (
    <div className="contacts-main-wrapper">
      <MapContainer
        className="map"
        center={position}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            ECOSPHERE LLC <br /> Juice production company.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="address-wrapper">
        <div className="address-kalynivka">
          <h4>ECOSPHERE LLC</h4>
          <p>Mazepy Str. 45 Kalynivka,</p>
          <p>Vinnytsia region, Ukraine,</p>
          <p>UA-22400</p>
        </div>
        <div className="bank-details">
          <h4>Bank details</h4>
          <p>Beneficiary bank: JSB</p>
          <p>UKRGASBANK, Ukraine</p>
          <p>SWIFT code: UGASUAUK</p>
        </div>
        <div className="phone-numbers">
          <h4>Phone numbers</h4>
          <p>+38(04333)2-21-32</p>
          <p>+38(04333)2-12-98</p>
          <p>+38(04333)4-05-50</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
