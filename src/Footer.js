import "./css/Footer.css";

import React from "react";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Thanks for using this website!</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
