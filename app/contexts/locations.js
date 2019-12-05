import React from "react";

export const LocationContext = React.createContext();

const { Consumer, Provider } = LocationContext;

export const LocationConsumer = Consumer;
export const LocationProvider = Provider;
