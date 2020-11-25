import React from "react";
import YouTube from "react-youtube";
import TextContainer from "./TextContainer.js";
import VideoContainer from "./VideoContainer.js";
import ImageContainer from "./ImageContainer.js";
import data from "./data.js";
class GardenOfSalvation {
  static getEncounters() {
    /*
    The raid consists of 4 parts (encounters)
    Each encounter may be completed in a variety of ways (strategies)
    Each strategy must describe what each player should do (up to 6 players in a fireteam) 
    */
    //console.log(data[0]);
    //return data[0];
    return {
      
      encounters: [
        {
          encName: "Chase the Consecrated Mind",
          strategies: [
            {
              id: 0,
              stratName: "Strategy 1 - Leapfrog",
              overviews: [
                {text: "In this encounter, the fireteam is introduced to the tether mechanic. This involves creating a line from a key to a lock via an evenly spaced line of guardians. The key is a small cube which, when shot at, toggles a beam of light (tether) to the nearest guardian within 12m. Each guardian then acts as a signal booster causing the tether to continuously connect to either more guardians, or a lock. The tether will turn orange when it is just about to break. While part of a tether, guardians cannot shoot, use abilities, and is set in third person. The lock is a small cross shaped structure that does something when a connection is made to.", type: 0, typeContent: ""},
                {text: "There are no weapons that are recommended in this encounter, though there are some overload champions which can be burned down using heavy weapons.", type: 0, typeContent: ""},
                {text: "The objective of the encounter is to chase the Consecrated Mind far enough into the Garden. The arena is a series of rooms separated by energy walls which should be taken down to progress. The boss is immune throughout this encounter.", type: 0, typeContent:""},

              
              ],
              individualStrat: [[{text: "person 1", type: 0, typeContent: ""}],[{text: "person 2", type: 0, typeContent: ""}]],
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
              overviews: [{text: "this is an img container", type: 2, typeContent: "Frog"}],
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
