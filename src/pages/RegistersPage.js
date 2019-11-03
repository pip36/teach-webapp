import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRegisters, addRegister, removeRegister } from "redux/actions";
import { selectRegisters } from "redux/reducers";
import { Link } from "react-router-dom";
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
  Add as AddIcon,
  DeleteForever as DeleteIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  listItem: {
    backgroundColor: theme.palette.background.paper
  },
  success: {
    color: theme.success
  }
}));

const RegistersPage = ({
  getRegisters,
  addRegister,
  removeRegister,
  registers
}) => {
  const classes = useStyles();

  const [isAddInProgress, setIsAddInProgress] = useState(false);

  useEffect(() => void getRegisters(), [getRegisters]);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
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
          <React.Fragment key={register.id}>
            {i > 0 && <Divider component="li" />}
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <DescriptionIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link to={`/registers/${register.id}`}>{register.name}</Link>
                }
                secondary={register.subtext}
              />

              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <SettingsIcon />
                </IconButton>
                <IconButton
                  onClick={() => removeRegister(register.id)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  registers: selectRegisters(state)
});

const mapDispatchToProps = {
  getRegisters,
  addRegister,
  removeRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistersPage);
