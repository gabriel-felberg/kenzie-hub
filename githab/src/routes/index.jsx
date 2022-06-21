import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

function Routers() {
  return (
    <Switch>
      <Route exact path={`/`}>
        <Login />
      </Route>
      <Route path={"/Cadastro"}>
        <Cadastro />
      </Route>
      <Route path={`/HomePage`}>
        <HomePage />
      </Route>
    </Switch>
  );
}
export default Routers;
