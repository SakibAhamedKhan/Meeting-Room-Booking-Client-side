import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const GoogleMapCard = ({ data }: any) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const extractCoordinates = (url: string) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = url.match(regex);
    console.log(match)
    if (match) {
      const lat = Number(match[1]);
      const lng = Number(match[2]);
      console.log(lat, lng);
      setCoordinates({ lat, lng });
    } else {
      alert("No coordinates found in the URL");
    }
  };

  useEffect(() => {
    console.log(data);
    extractCoordinates(data?.googleMapURL);

  }, [data?._id]);
  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={10}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapCard;
