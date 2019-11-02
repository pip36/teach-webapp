import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import RegisterPage from "pages/RegisterPage";
import RegistersPage from "pages/RegistersPage";

const RegistersRoutes = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <RegistersPage />
      </Route>
      <Route path={`${path}/:registerId`}>
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default RegistersRoutes;
