import "./css/RaidDetails.css";
import GardenOfSalvation from "./GardenOfSalvation.js";

import ImageContainer from "./ImageContainer.js";
import VideoContainer from "./VideoContainer.js";
import TextContainer from "./TextContainer.js";

import React from "react";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";

class RaidDetails extends React.Component {
  /*
  This class renders details on a raid depending on what raid was selected

  Notes:
  
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

                  {strategy.overviews.map((overview) => {
                    console.log(overview.text);
                    console.log(overview.type);
                    console.log(overview.typeContent);
                    switch (overview.type) {
                      case 0:
                      default:
                        return (<TextContainer text={overview.text} />);
                      case 1:
                        return (
                          <VideoContainer
                            content={{
                              text: overview.text,
                              videoId: overview.typeContent,
                            }}
                          />
                        );
                      case 2:
                        return (
                          <ImageContainer
                            content={{
                              text: overview.text,
                              imgsrc: overview.typeContent,
                            }}
                          />
                        );
                    }
                  })}

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
