import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export const Footer = () => {
  return (
    <AppBar position="static" color="inherit" className="footer">
      <Container maxWidth="md">
        <Toolbar className="footertext">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
