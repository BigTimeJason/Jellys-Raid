import React from "react";
class GardenOfSalvation {
    //I renamed getRaids to getEncounters because it made more sense in this context
  static getEncounters() {
    /*
    The raid consists of 4 parts (encounters)
    Each encounter may be completed in a variety of ways (strategies)
    Each strategy must describe what each player should do (up to 6 players in a fireteam) 
    */

    //Each strategy for each encounter has an overview
    //const Encounter One Strategy One overview
    const e1s1overview = (
      <div>this is an overview for encounter 1, strategy 1</div>
    );
    const e1s2overview = (
      <div>this is an overview for encounter 1, strategy 2</div>
    );
    const e4s2overview = (
      <div>this is an overview for encounter 4, strategy 2</div>
    );

    //const Encounter One, Strategy One, Player One...
    const e1s1p1 = (
      <div>
        this is the text that explains what player 1 of strategy 1 of encounter
        1 should do"
      </div>
    );
    //const Encounter One, Strategy One, Player Two...
    const e1s1p2 = (
      <div>
        this is the text that explains what player 2 of strategy 1 of encounter
        1 should do"
      </div>
    );
    //const e1s1p3, e1s1p4, e1s1p5, e1s1p6, e1s2p1, etc...
    const e4s2p6 = (
      <div>
        this is the text that explains what player 6 of strategy 2 of encounter
        4 should do"
      </div>
    );

    /*
    For this one raid, there are 4 encounters.
    
    Let's say that for each encounter, there are 2 strategies.
    
    To describe how each player would do their part, for each of the strategies, for all of the encounters means I would have to create (6 players * 2 strategies * 4 encounters) = 48 consts to describe everything!
    
    This does not count each strategies' overview which would be an additional 8 (2 strategies * 4 encounters).
    
    Furthermore, other raids may have more encounters (Last Wish) - up to 6 which would add up to possibly 72 consts!
    */

    /*
    Questions for later

    1. Why does RaidArray exist (in Home.js) if we have classes like this one (GardenOfSalvation.js // if we make a new raid - LastWish.js for example)?
    2. With the description above, does that mean we have to create many many constants to accomodate the description of all the raid details?

    */

    return {
      encounters: [
        {
          encName: "Chase the Consecrated Mind",
          strategies: [
            {
              id: 0,
              stratName: "Strategy 1",
              overview: e1s1overview,
              individualStrat: [e1s1p1, e1s1p2],
            },
            {
              id: 1,
              stratName: "Challenge - Leftovers",
              overview: e1s2overview,
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
              overview: "",
              individualStrat: [],
            },
            {
              id: 1,
              stratName: "Strategy 2",
              overview: "",
              individualStrat: [],
            },
            {
              id: 2,
              stratName: "Challenge - A Link to the Chain",
              overview: "",
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
              overview: "",
              individualStrat: [],
            },
            {
              id: 1,
              stratName: "Challenge - To The Top",
              overview: "",
              individualStrat: [],
            },
          ],
        },
        {
          encName: "Defeat the Sanctified Mind",
          strategies: [
            {
              id: 0,
              stratName: "Strategy 1",
              overview: "",
              individualStrat: [],
            },
            {
              id: 1,
              stratName: "Strategy 2",
              overview: "",
              individualStrat: [],
            },
            {
              id: 2,
              stratName: "Challenge - Zero to One Hundred",
              overview: "",
              individualStrat: [],
            },
            {
              id: 3,
              stratName: "Challenge - Stop Hitting Yourself",
              overview: "",
              individualStrat: [],
            },
          ],
        },
      ],
    };
  }
}

export default GardenOfSalvation;
