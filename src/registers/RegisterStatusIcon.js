import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Beenhere as PresentIcon } from "@material-ui/icons";
import { Block as AbsentIcon } from "@material-ui/icons";
import { AccessTime as LateIcon } from "@material-ui/icons";
import { PRESENT, LATE, ABSENT } from "./registerStatuses";

const useStyles = makeStyles(theme => ({
  [PRESENT]: {
    color: theme.success
  },
  [LATE]: {
    color: theme.warning
  },
  [ABSENT]: {
    color: theme.danger
  }
}));

const statusIcons = {
  [PRESENT]: <PresentIcon />,
  [LATE]: <LateIcon />,
  [ABSENT]: <AbsentIcon />
};

const RegisterStatusIcon = ({ status, ...rest }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes[status]} {...rest}>
      {statusIcons[status]}
    </IconButton>
  );
};

export default RegisterStatusIcon;
