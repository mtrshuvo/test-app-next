"use client";

import { useTheme } from "next-themes";
import React from "react";
import Map, { Marker } from "react-map-gl";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div  className=" relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
     <Map
      initialViewState={{
        latitude: 37.577,
        longitude: -122.4376,
        zoom: 8,
        // width: window.innerWidth,
        // height: window.innerHeight,
      }}
      style={{ width: "50%", height:"500px" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={'pk.eyJ1IjoibXRyc2h1dm8iLCJhIjoiY2w3Y3JsZXVvMWYzczN4bzhqbHM3YWdycCJ9.UnsYyGWI3GE4RQdMXTpiaA'}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
    </div>
  );
};

export default NewsLatterBox;
