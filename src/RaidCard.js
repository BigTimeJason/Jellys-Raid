import "./css/Cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

class RaidCard extends React.Component {

  /*
  This class renders cards that allow the user to select a raid
  */
  render() {
    return (
      <Card className="text-left" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={this.props.content.img} />
        <Card.Body>
          <Card.Title>{this.props.content.title}</Card.Title>
          <Card.Text>{this.props.content.description}</Card.Text>
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => this.props.setRaid(this.props.content.id)}
          >
            View Tactics
          </Button>
        </Card.Body>
        <Card.Footer className="text-right">
          <small className={"text-muted"}>
            {this.props.content.encounters} encounters //{" "}
            {this.props.content.time}
          </small>
        </Card.Footer>
      </Card>
    );
  }
}

export default RaidCard;
