import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Box from "@material-ui/core/Box";

import "./footer.css";

export const Footer = () => {
  return (
    <AppBar color="inherit" className="footer">
      <Box borderTop={4} borderColor="#ddd">
        <Toolbar className="footertext">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </Toolbar>
      </Box>
    </AppBar>
  );
};
