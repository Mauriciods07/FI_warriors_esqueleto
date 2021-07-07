import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { AddLocation } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';

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
  if (state.latitude != 0 && state.longitude != 0) {
    return (
      <>
        <p>Latitude: {state.latitude}</p>
        <p>longitude: {state.longitude}</p>
      </>
    );
  } else {
    return <div>No se ha geolocalizado</div>;
  }
};

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0
  });

  return (
    <div>
      <IconButton
        variant="contained"
        color="primary"
        onClick={() => {
          geolocalizar(setState);
        }}
      >
        <AddLocation/>
      </IconButton>

      <GeoData state={state} />
    </div>
  );
};

export default Home;