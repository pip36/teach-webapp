import React, { useState } from "react";
import { connect } from "react-redux";
import { addRegister } from "redux/actions";
import { selectRegisters } from "redux/reducers";
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
  listItem: {
    backgroundColor: theme.palette.background.paper
  },
  success: {
    color: theme.success
  }
}));

const RegistersPage = ({ addRegister, registers }) => {
  const classes = useStyles();

  const [isAddInProgress, setIsAddInProgress] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={() => setIsAddInProgress(true)}
      >
        Add New Register
      </Button>

      <List>
        {isAddInProgress && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DescriptionIcon />
              </Avatar>
            </ListItemAvatar>
            <form
              onSubmit={e => {
                e.preventDefault();
                const { name } = e.target;
                addRegister({ name: name.value });
                setIsAddInProgress(false);
              }}
            >
              <TextField
                className={classes.margin}
                id="name"
                label="name"
                margin="normal"
                variant="outlined"
                placeholder="Enter a name..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="confirm name" type="submit">
                        {<CheckIcon className={classes.success} />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                autoFocus
              />
            </form>
          </ListItem>
        )}

        {registers.map((register, i) => (
          <>
            {i > 0 && <Divider component="li" />}
            <ListItem className={classes.listItem} key={register.name}>
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
                <IconButton edge="end" aria-label="edit">
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

const mapStateToProps = selectRegisters;

const mapDispatchToProps = {
  addRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistersPage);
