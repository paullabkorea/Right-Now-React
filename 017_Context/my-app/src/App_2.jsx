import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <HelloLicat/>
    </UserInfo.Provider>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => 
        <>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
          <HelloLicatTwo/>
        </>
      }
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => 
        <div>
          <h2>Two : {value.id}</h2>
          <strong>Two : {value.name}</strong>
        </div>
      }
    </UserInfo.Consumer>
  );
};

export default App;