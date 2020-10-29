import "./css/RaidDetails.css";
import GardenOfSalvation from "./GardenOfSalvation.js";

import React from "react"
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";

class RaidDetails extends React.Component {

  /*
  This class renders details on a raid depending on what raid was selected
  */
  render() {
    var currentRaid = null;
    switch (this.props.content.id) {
      case 0:
        currentRaid = GardenOfSalvation.getEncounters();
        break;
      default:
        break;
    }
    return (
      <>
        {currentRaid.encounters.map((encounter) => (
          <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>{encounter.encName}</Navbar.Brand>
            </Navbar>
            <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
              {encounter.strategies.map((strategy) => (
                <Tab
                  eventKey={strategy.id}
                  title={strategy.stratName}
                  className="text-left"
                >
                  {console.log(strategy)}
                  <Container>{strategy.overview}</Container>

                  <Accordion>
                    {strategy.individualStrat.map((person, index) => (
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey={index + 1}
                          >
                            {console.log(index)}
                            {"Fireteam Member " + (index + 1)}
                          </Accordion.Toggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey={index + 1}>
                          <Card.Body>{person}</Card.Body>
                        </Accordion.Collapse>

                      </Card>
                    ))}
                  </Accordion>
                </Tab>
              ))}
            </Tabs>
          </>
        ))}
      </>
    );
  }
}

export default RaidDetails;
