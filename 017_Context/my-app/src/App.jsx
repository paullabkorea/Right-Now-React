import React, { createContext, useContext } from "react";
import HelloLicatTwo from './HelloLicatTwo'

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat/>
  );
};

const HelloLicat = () => {
  const {name, id} = useContext(UserInfo)
  return (
        <>
          <h2>{id}</h2>
          <strong>{name}</strong>
          <HelloLicatTwo/>
        </>
  );
};

export default App;