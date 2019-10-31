import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const theme = createMuiTheme({});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div>
          <Home color="primary" fontSize="large" />
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
