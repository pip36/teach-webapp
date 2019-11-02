import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, NotFound } from "pages";
import RegistersRoutes from "routes/RegistersRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/registers">
        <RegistersRoutes />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
