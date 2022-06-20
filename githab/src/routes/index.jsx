import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

function Routers() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path={`/cadastro`}>
        <Cadastro />
      </Route>
      <Route path={`/homePage`}>
        <HomePage />
      </Route>
    </Switch>
  );
}
export default Routers;
