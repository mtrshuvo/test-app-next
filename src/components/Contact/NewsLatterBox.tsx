"use client";

import { useTheme } from "next-themes";
import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div  className=" z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
     <Map
    //  23.827890977004053, 90.36667702635759
      initialViewState={{
        latitude:23.827,
        longitude: 90.367,
        zoom: 13,
        // width: window.innerWidth,
        // height: window.innerHeight,
        
      }}
      style={{ width: "100%", height:"300px" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={'pk.eyJ1IjoibXRyc2h1dm8iLCJhIjoiY2w3Y3JsZXVvMWYzczN4bzhqbHM3YWdycCJ9.UnsYyGWI3GE4RQdMXTpiaA'}
    >
      <Marker longitude={90.367} latitude={23.827} color="red" />
    </Map>
    </div>
  );
};

export default NewsLatterBox;
