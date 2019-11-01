import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Button
} from "@material-ui/core";

import {
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  CheckCircleOutline as CheckIcon,
  Add as AddIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  success: {
    color: theme.success
  }
}));

const RegistersPage = () => {
  const classes = useStyles();

  const registers = [
    {
      name: "Number1",
      subtext: "It's here..."
    },
    {
      name: "The second",
      subtext: "Ok then."
    },
    {
      name: "Another",
      subtext: "Yes."
    }
  ];

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add New Register
      </Button>

      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>

          <TextField
            className={classes.margin}
            margin="normal"
            variant="outlined"
            placeholder="Enter a name..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="confirm name">
                    {<CheckIcon className={classes.success} />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </ListItem>

        {registers.map((register, i) => (
          <>
            {i > 0 && <Divider component="li" />}
            <ListItem key={register.name}>
              <ListItemAvatar>
                <Avatar>
                  <DescriptionIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={register.name}
                secondary={register.subtext}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <SettingsIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};

export default RegistersPage;
