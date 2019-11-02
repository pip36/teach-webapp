import React from "react";
import { Switch, Route } from "react-router-dom";
import { Button } from "@material-ui/core";
import RegistersRoutes from "routes/RegistersRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Route>
      <Route path="/registers">
        <RegistersRoutes />
      </Route>
      <Route path="*">{"404"}</Route>
    </Switch>
  );
};

export default Routes;
