import React, { createContext, useContext } from "react";

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

const HelloLicatTwo = () => {
  const {name, id} = useContext(UserInfo)
  return (
        <>
          <h2>Two : {id}</h2>
          <strong>Two : {name}</strong>
        </>
  );
};

export default App;