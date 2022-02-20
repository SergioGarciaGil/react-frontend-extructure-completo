import React from "react";

import Boton from "./components/Boton.js";
import Users from "./components/Users";
import Detalle from "./components/Detalle.jsx";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <Route exact path="/">
        <Boton />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>

      <Route path="/users/:id">
        <Detalle />
      </Route>
    </>
  );
}

export default App;
