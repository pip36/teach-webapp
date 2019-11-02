import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Register, Registers } from "pages";

const RegistersRoutes = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Registers />
      </Route>
      <Route path={`${path}/:registerId`}>
        <Register />
      </Route>
    </Switch>
  );
};

export default RegistersRoutes;
