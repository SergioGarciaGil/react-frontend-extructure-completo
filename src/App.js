import React from "react";

import Boton from "./components/Boton.js";
import Users from "./components/Users";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/">
        <Boton />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
    </>
  );
}

export default App;
