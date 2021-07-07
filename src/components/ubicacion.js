import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const geolocalizar = (setState) => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      });
    },
    function (error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    },
    {
      enableHighAccuracy: true
    }
  );
};

const GeoData = ({ state }) => {
  console.log(state);
  var a = state.latitude;
  var b = state.longitude;
  if (a != 0 && b != 0) {
    return (
      <>
        <p>Geolocation</p>
        <p>Latitude: {a}</p>
        <p>longitude: {b}</p>
      </>
    );
  } else {
    return <div></div>;
  }
};

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0
  });

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          geolocalizar(setState);
        }}
      >
        Geolocalizar
      </Button>

      <GeoData state={state} />
    </div>
  );
};

export default Home;
