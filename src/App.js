import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./core/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import RegistersPage from "./pages/RegistersPage";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/registers">
            <RegistersPage />
          </Route>
          <Route path="/">
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default App;
