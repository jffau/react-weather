import React, { useState, useContext, useRef } from "react";
import Script from "react-load-script";

import { LocationContext } from "../contexts/locations";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const { addLocation } = useContext(LocationContext);
  const autocomplete = useRef();

  const handleSubmit = () => {
    addLocation(input);
    setInput("");
  };

  const handleScript = () => {
    let options = {
      types: ["(regions)"]
    };
    // to disable any eslint 'google not defined' errors
    // init google autocomplete

    autocomplete.current = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );
    // enableEnterKey(field);

    // Fire Event when a suggested name is selected
    autocomplete.current.addListener("place_changed", handlePlaceSelect);
  };

  const handlePlaceSelect = async () => {
    const addressObject = await autocomplete.current.getPlace();

    const { formatted_address, place_id } = addressObject;
    const lat = addressObject.geometry.location.lat();
    const lng = addressObject.geometry.location.lng();

    const place = formatted_address
      .split(",")
      .slice(0, 2)
      .join(",");

    const location = { id: place_id, name: place, lat, lng };

    addLocation(location);
    setInput("");
  };

  return (
    <div>
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyDIiMlJk5jdhP-kOEDJcNEDeMoyGBszRWA"}&libraries=places`}
        onLoad={handleScript}
      />

      <input
        type="text"
        id="autocomplete"
        placeholder="input location"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}> submit </button>
    </div>
  );
};

export default SearchBar;
