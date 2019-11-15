import { createMuiTheme } from "@material-ui/core/styles";
import { green, orange, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  drawerWidth: 180,
  success: green[500],
  warning: orange[500],
  danger: red[500]
});

export default theme;
