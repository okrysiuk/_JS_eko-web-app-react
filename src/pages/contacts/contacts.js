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
            ECOSPHERE Ltd. <br /> Juice production company.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="address-wrapper">
        <h4>Kalinovka, Ivana Mazepy 45 st.</h4>
      </div>
    </div>
  );
};

export default Contacts;
