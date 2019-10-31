import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const theme = createMuiTheme({});

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/registers">Registers</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/registers">Registers</Route>
              <Route path="/">
                <Home color="primary" fontSize="large" />
                <Button variant="contained" color="primary">
                  Hello World
                </Button>
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
