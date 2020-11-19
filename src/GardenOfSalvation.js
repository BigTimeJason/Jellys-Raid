import React from "react";
class GardenOfSalvation {
  static getEncounters() {
    /*
    The raid consists of 4 parts (encounters)
    Each encounter may be completed in a variety of ways (strategies)
    Each strategy must describe what each player should do (up to 6 players in a fireteam) 
    */

    const e1s1overview = (
      <div>this is an overview for encounter 1, strategy 1</div>
    );
    const e1s2overview = (
      <div>this is an overview for encounter 1, strategy 2</div>
    );
    const e4s2overview = (
      <div>this is an overview for encounter 4, strategy 2</div>
    );

    const e1s1p1 = (
      <div>
        this is the text that explains what player 1 of strategy 1 of encounter
        1 should do"
      </div>
    );
    
    const e1s1p2 = (
      <div>
        this is the text that explains what player 2 of strategy 1 of encounter
        1 should do"
      </div>
    );
    
    const e4s2p6 = (
      <div>
        this is the text that explains what player 6 of strategy 2 of encounter
        4 should do"
      </div>
    );

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
