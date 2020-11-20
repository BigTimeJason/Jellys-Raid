import React from "react";
import YouTube from "react-youtube";
import TextContainer from "./TextContainer.js";
import VideoContainer from "./VideoContainer.js";
import ImageContainer from "./ImageContainer.js";
class GardenOfSalvation {
  static getEncounters() {
    /*
    The raid consists of 4 parts (encounters)
    Each encounter may be completed in a variety of ways (strategies)
    Each strategy must describe what each player should do (up to 6 players in a fireteam) 
    */

    return {
      
      encounters: [
        {
          encName: "Chase the Consecrated Mind",
          strategies: [
            {
              id: 0,
              stratName: "Strategy 1",
              overviews: [{text: "this is a video container", type: 1, typeContent: "3VTkBuxU4yk"}],
              individualStrat: [],
            },
            {
              id: 1,
              stratName: "Challenge - Leftovers",
              overviews: [{text: "this is a text container", type: 0, typeContent: ""}],
              individualStrat: [],
            },
          ],
        },
        {
          encName: "Draw out the Consecrated Mind",
          strategies: [
            {
              id: 0,
              stratName: "Strategy 1",
              overviews: [{text: "this is an img container", type: 2, typeContent: "H:/JellysRaid/src/img/gardenimg/Frog.png"}],
              individualStrat: [],
            },
            {
              id: 1,
              stratName: "Strategy 2",
              overviews: [],
              individualStrat: [],
            },
            {
              id: 2,
              stratName: "Challenge - A Link to the Chain",
              overviews: [],
              individualStrat: [],
            },
          ],
        },
        {
          encName: "Defeat the Consecrated Mind",
          strategies: [
            {
              id: 0,
              stratName: "Strategy 1",
              overviews: [],
              individualStrat: [],
            },
            {
              id: 1,
              stratName: "Challenge - To The Top",
              overviews: [],
              individualStrat: [],
            },
          ],
        },
        {
          encName: "Defeat the Sanctified Mind",
          strategies: [],
        },
      ],
    };
  }
}

export default GardenOfSalvation;
