import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";


import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

function Routers({
  openAddModal,
  objectData,
  setObjectData,
  setArrayTecnologi,
  arrayTecnologi,
  setIdTecnologi,
  idTecnologi
}) {
  return (
    <Switch>
      <Route exact path={`/`}>
        <Login setData={setObjectData} />
      </Route>
      <Route path={`/Cadastro`}>
        <Cadastro />
      </Route>
      <Route path={`/HomePage`}>
        <HomePage
          objectData={objectData}
          openAddModal={openAddModal}
          setArrayTecnologi={setArrayTecnologi}
          arrayTecnologi={arrayTecnologi}
          setIdTecnologi={setIdTecnologi}
          idTecnologi={idTecnologi}
        />
      </Route>
    </Switch>
  );
}
export default Routers;
