import React, { FC, useMemo } from "react";
import { JobList } from "./JobList";
import { JobDetail } from "./JobDetail";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from "react-router-dom";

import "./App.css";

export const App: FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#2B7FC3",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
        },
        typography: {
          fontFamily: ["Inter"].join(","),
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar />
          <CssBaseline />
          <Container maxWidth="md">
            <Route path="/" exact component={JobList} />
            <Route path="/position/:id" component={JobDetail} />{" "}
          </Container>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
};
