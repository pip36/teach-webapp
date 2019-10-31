import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import { CssBaseline, Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./core/Navigation";

const theme = createMuiTheme({
  drawerWidth: 180
});

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

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Navigation />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route path="/registers">Registers</Route>
                <Route path="/">
                  <Button variant="contained" color="primary">
                    Hello World
                  </Button>
                </Route>
              </Switch>
            </main>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
