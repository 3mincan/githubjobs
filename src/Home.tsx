import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import "./home.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: theme.spacing(2),
        height: "100%",
      },
    },
    textField: {
      width: "25vw",
      div: {
        width: "100%",
      },
    },
  })
);

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Job Description"
          fullWidth
          placeholder="Filter by title, benefits, companies, expertise"
        />
        <TextField
          label="Location"
          fullWidth
          placeholder="Filter by city, state, zip code or country"
        />
        <Box pt={2}>
          <Button variant="outlined" color="primary" size="large">
            Search
          </Button>
        </Box>
      </form>
      <Link to="/positions">See All</Link>
    </div>
  );
};
