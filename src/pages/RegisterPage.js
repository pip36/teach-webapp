import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import { PRESENT, LATE, ABSENT } from "registers/registerStatuses";
import RegisterStatusIcon from "registers/RegisterStatusIcon";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {}
}));

const updateRows = (rows, coords, status) => {
  const rowToUpdate = rows[coords.x];
  const cellToUpdate = rows[coords.x][coords.y];

  return {
    ...rows,
    [coords.x]: {
      ...rowToUpdate,
      [coords.y]: {
        ...cellToUpdate,
        status
      }
    }
  };
};

const RegisterPage = () => {
  let { registerId } = useParams();
  const classes = useStyles();

  const [headings, setHeadings] = useState({
    0: { text: "01" },
    1: { text: "02" }
  });

  const [rows, setRows] = useState({
    0: { name: "Bob", 0: { status: PRESENT }, 1: { status: "" } },
    1: { name: "Jim", 0: { status: "" }, 1: { status: PRESENT } },
    2: { name: "Sue", 0: { status: PRESENT }, 1: { status: PRESENT } }
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [selection, setSelection] = useState({ x: null, y: null });

  const handleCellClick = (e, coord) => {
    setAnchorEl(e.currentTarget);
    setSelection(coord);
  };

  const handleStatusClick = status => () => {
    setAnchorEl(null);
    setSelection(null);

    const newRows = updateRows(rows, selection, status);
    setRows(newRows);
  };

  const onPopoverClose = () => {
    setAnchorEl(null);
    setSelection(null);
  };

  const headingsLength = Object.keys(headings).length;
  const rowsLength = Object.keys(rows).length;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell />
              {[...Array(headingsLength)].map((_, i) => (
                <TableCell>{headings[i].text}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(rowsLength)].map((_, i) => (
              <TableRow key={rows[i].name}>
                <TableCell component="th" scope="row">
                  {rows[i].name}
                </TableCell>
                {[...Array(headingsLength)].map((_, j) => (
                  <TableCell
                    aria-describedby={rows[i].name}
                    onClick={e => handleCellClick(e, { x: i, y: j })}
                  >
                    <RegisterStatusIcon status={rows[i][j].status} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Popover
        id="status-popover"
        open={Boolean(anchorEl)}
        onClose={onPopoverClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <Paper>
          <RegisterStatusIcon
            status={PRESENT}
            onClick={handleStatusClick(PRESENT)}
          />
          <RegisterStatusIcon
            status={ABSENT}
            onClick={handleStatusClick(ABSENT)}
          />
          <RegisterStatusIcon status={LATE} onClick={handleStatusClick(LATE)} />
        </Paper>
      </Popover>
    </div>
  );
};

export default RegisterPage;
