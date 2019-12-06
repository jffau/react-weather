import React from "react";

export const LocationContext = React.createContext([]);

const { Consumer } = LocationContext;

export const LocationConsumer = Consumer;

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = React.useState([]);

  const addLocation = newLocation => {
    setLocations(locations => locations.concat(newLocation));
  };
  const clearLocations = () => {
    setLocations([]);
  };

  return (
    <LocationContext.Provider
      value={{
        locations,
        addLocation,
        clearLocations
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
