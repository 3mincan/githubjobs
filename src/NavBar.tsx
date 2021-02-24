import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    deneme: {
      display: "flex",
      justifyContent: "space-around",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      height: 20,
    },
  })
);

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Box borderTop={4} borderColor="#1D5C8F">
          <Toolbar className={classes.deneme}>
            <Link to="/">
              {" "}
              <img
                src="https://jobs.github.com/images/layout/logo@2x.png"
                className={classes.logo}
              />
            </Link>
            <Button variant="outlined">Post a job</Button>
            {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
};
