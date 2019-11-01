import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home, FolderShared } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          <ListItem component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem component={Link} to="/registers">
            <ListItemIcon>
              <FolderShared />
            </ListItemIcon>
            <ListItemText primary={"Registers"} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.drawerWidth
  }
}));

export default Navigation;
