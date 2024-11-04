import React from "react";
import NavBar from "./Components/NavBar";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import "./App.css";

function App() {
  const username = "User";

  return (
    <>
      <NavBar username={username} cartCount={0} />
      <GroceriesAppContainer />
    </>
  );
}

export default App;
