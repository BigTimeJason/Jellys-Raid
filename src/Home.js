import RaidCard from "./RaidCard.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import RaidDetails from "./RaidDetails.js";

import './css/Home.css';

import garden from "./img/garden.png";
import lastwish from "./img/lastwish.png";
import deepstonecrypt from "./img/deepstonecrypt.png";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
      raidArray: [
        {
          id: 0,
          title: "Garden of Salvation",
          description: "The Garden calls out to you.",
          encounters: 4,
          time: "45-90 mins",
          img: garden,
        },
        {
          id: 1,
          title: "Last Wish",
          description: "The opportunity of a lifetime.",
          encounters: 6,
          time: "45-90 mins",
          img: lastwish,
        },
        {
          id: 2,
          title: "Deep Stone Crypt",
          description: "Fear what waits below.",
          encounters: 5,
          time: "45-90 mins",
          img: deepstonecrypt,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Header>
        </Header>
        <Button
        className="backbutton"
          variant="outline-secondary"
          size="lg"
          onClick={() => this.setState({currentPage: null})}
        >
          Home
        </Button>
        {this.state.currentPage == null ? (
          <Row className="row justify-content-md-center">
            <CardGroup>
              {this.state.raidArray.map((raid) => (
                <RaidCard
                  content={raid}
                  setRaid={(index) => this.setState({ currentPage: index })}
                ></RaidCard>
              ))}
            </CardGroup>
          </Row>
        ) : (
          <></>
        )}
        <Container>
          {this.state.currentPage != null ? (
            <RaidDetails
              content={this.state.raidArray[this.state.currentPage]}
            ></RaidDetails>
          ) : (
            <></>
          )}
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
