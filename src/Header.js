import "./css/Header.css";
import Jumbotron from "react-bootstrap/Jumbotron"
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <h1 style={{ color: "white" }}>
          {this.props.content ? this.props.content.title : "Choose Your Raid"}
        </h1>
        <p className={"lead text-muted"}>
          Select a card below to view it's encounters and corresponding
          strategies
        </p>
      </Jumbotron>
    );
  }
}

export default Header;
