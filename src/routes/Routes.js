import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import RegistersRoutes from "routes/RegistersRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/registers">
        <RegistersRoutes />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
