import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { PrintLocation } from "./Misc/PrintLocation";

export default function GetLocation() {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    road: "",
    neighbourhood: "",
    suburb: "",
    city: "",
    county: "",
    state_district: "",
    state: "  ",
    postcode: "",
    country: "",
    continent: "",
  });
  var coords;
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    return { lat: latitude, lng: longitude };
  }

  function getReverseLocation(lat, lng) {
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=77289672bbf649d2a7bdcb8181c35620&pretty=10`
      )

      .then((data) => {
        // console.log(data.data.results[0]["components"]);
        coords = data.data.results[0]["components"];
        setAddress({
          ...address,
          road: coords.road,
          neighbourhood: coords.neighbourhood,
          suburb: coords.suburb,
          city: coords.city,
          county: coords.county,
          state_district: coords.state_district,
          state: coords.state,
          postcode: coords.postcode,
          country: coords.country,
          continent: coords.continent,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function showAddress() {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        showPosition(position);
        var received = getReverseLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    alert("Location services are required ");
    showAddress();
  }, []);

  if (loading) {
    return (
      <Alert status="info">
        <AlertIcon />
        Using Live location to detect address
      </Alert>
    );
  }

  return (
    <Box w={"300px"} h="300px">
      <PrintLocation obj={address} />
    </Box>
  );
}
