import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

function Routers({openAddModal, closeModal, objectData, setObjectData}) {

  return (
    <Switch>
      <Route exact path={`/`}>
        <Login setData={setObjectData}/>
      </Route>
      <Route path={`/Cadastro`}>
        <Cadastro/>
      </Route>
      <Route path={`/HomePage`}>
        <HomePage objectData={objectData} openAddModal={openAddModal} closeModal={closeModal}/>
      </Route>
    </Switch>
  );
}
export default Routers;
