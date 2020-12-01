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
              stratName: "Strategy 1 - Leapfrog",
              overviews: [
                {text: "In this encounter, the fireteam is introduced to the tether mechanic. This involves creating a line from a key to a lock via an evenly spaced line of guardians. The key is a small cube which, when shot at, toggles a beam of light (tether) to the nearest guardian within 12m. Each guardian then acts as a signal booster causing the tether to continuously connect to either more guardians, or a lock. The tether will turn orange when it is just about to break. While part of a tether, guardians cannot shoot, use abilities, and is set in third person. The lock is a small cross shaped structure that does something when a connection is made to.", type: 0, typeContent: ""},
                {text: "There are no weapons that are recommended in this encounter, though there are some overload champions which can be burned down using heavy weapons.", type: 0, typeContent: ""},
                {text: "The objective of the encounter is to chase the Consecrated Mind far enough into the Garden. The arena is a series of rooms separated by energy walls which should be taken down to progress. The boss is immune throughout this encounter.", type: 0, typeContent:""},
                {text: "To begin, you will be split up into 2 groups of 3 (group A and group B). Both groups will have to do one of either two objectives. The groups will always be in different rooms up until the end.", type: 0, typeContent: ""},
                {text: "1. Distract the Consecrated Mind (the distraction team - let group A begin with this)", type: 0, typeContent: ""},
                {text: "2. Unlock an energy wall (referred to as a door) to advance into the next area (the advancing team - let group B begin with this)", type: 0, typeContent: ""},
                {text: "**Distracting the Consecrated Mind**", type: 0, typeContent: ""},
                {text: "To distract the consecrated mind, the members of the group will stay in the room that the boss is in. Periodically (every 30 seconds), he will move to the side of the arena and dispense a voltaic charge of motes. This voltaic charge must be picked up by a guardian (run into it) within 5 seconds, else the team is wiped. The guardian who picked up the voltaic charge will have a debuff called voltaic overflow that prevents them from picking up another charge for 120 seconds (effectively the remainder of the time they will spend in that room). Each fireteam member of the group must each pick up a charge consecutively to stall for time while the other group to unlock the path ahead. Once the door is opened by the advancing team, the boss will move into the next room, and the distraction team will sprint to the newly opened area and become the advancing team (see below).", type: 0, typeContent: ""},
                {text: "The boss continuously keeps dropping voltaic charges while he is in a room. This means if the advancing team is too slow, it may drop more than three (exceeding the number of members on the distracting team). If this happens, a guardian who has voltaic overflow can pick one up, but they will die in the process. This is a sacrifice that must be made in order to prevent a team wipe.", type: 0, typeContent: ""},
                {text: "**Advancing into the Garden**", type: 0, typeContent: ""},
                {text: "To advance the boss into the next room, the members of the group must move forward into the next area and defeat all enemies including a special kind of hydra named an Angelic - who will block the key from being toggled on. There is also an overload minotaur, and a  cyclops, which when killed, summons two cyclopes in the distracting team’s room. When all enemies are killed, they must create a tether from the key to the lock (via a line of guardians) in order to open the door. When the door is open, the fireteam members who just opened the door will now stay in the room (not the one they just unlocked) while the boss arrives - and become the distraction team for this area (see above).", type: 0, typeContent: ""},
                {text: "**Cyclops Field**", type: 0, typeContent: ""},
                {text: "After opening three doors, the final room (which should be opened by the team that began the encounter as the advancing team) will have to make three tethers to unlock the final door. After just one tether has been made, the boss will teleport to the other side of the door and wait, giving the fireteam some respite from the encounter. Feel free to allow everyone to make it to the door before fully unlocking it. The final room is a long field, full of cyclopes and unstoppable minotaurs. Once unlocked, the boss will move to the end of the field, pausing three times to drop voltaic charges. The fireteam must keep up with the boss and pick up these voltaic charges to prevent a wipe whilst surviving the horde of vex at the same time. The enemies in the field do not need to be killed to complete the encounter.", type: 0, typeContent: ""},
                {text: "After the last voltaic charge has been picked up, the encounter ends.", type: 0, typeContent: ""},
                {text: "To start the encounter, the advancing team should create a tether from the key to the lock to, and move forward into the next room.", type: 0, typeContent: ""},
              ],
              individualStrat: [[
                {text: "To begin, you will fend off waves of enemies in the first room. The boss will drop voltaic charges periodically. The FIRST one he drops, you should pick up. Then, help defend waves of enemies while waiting for the advancing team to open the door. Take care of cyclopes spawning as their attack can one shot you on a direct hit.", type: 0, typeContent: ""},
                {text: "Once the boss teleports away, sprint forward past the advancing team into the room they just opened. Defeat all enemies including the Angelic to unlock the key. Shoot the key located near the next door to activate it, and form a line with your team to the door to unlock it. You should stand closest to the key.", type: 0, typeContent: ""},
                {text: "When that door is open, you will stay in that room to distract the boss again. Fend off waves and pick up the FIRST voltaic charge when the boss drops it, and help defend in the meantime.", type: 0, typeContent: ""},
                {text: "After the advancing team has opened the final door, move forward to join up with your team and advance the cyclops field to end the encounter.", type: 0, typeContent: ""},
              ],
              [
                {text: "To begin, you will fend off waves of enemies in the first room. The boss will drop voltaic charges periodically. The SECOND one he drops, you should pick up. Then, help defend waves of enemies while waiting for the advancing team to open the door. Take care of cyclopes spawning as their attack can one shot you on a direct hit.", type: 0, typeContent: ""},
                {text: "Once the boss teleports away, sprint forward past the advancing team into the room they just opened. Defeat all enemies including the Angelic to unlock the key. Shoot the key located near the next door to activate it, and form a line with your team to the door to unlock it. You should stand between your team members.", type: 0, typeContent: ""},
                {text: "When that door is open, you will stay in that room to distract the boss again. Fend off waves and pick up the SECOND voltaic charge when the boss drops it, and help defend in the meantime.", type: 0, typeContent: ""},
                {text: "After the advancing team has opened the final door, move forward to join up with your team and advance the cyclops field to end the encounter.", type: 0, typeContent: ""},
              ],
              [
                {text: "To begin, you will fend off waves of enemies in the first room. The boss will drop voltaic charges periodically. The THIRD one he drops, you should pick up. Then, help defend waves of enemies while waiting for the advancing team to open the door. Take care of cyclopes spawning as their attack can one shot you on a direct hit.", type: 0, typeContent: ""},
                {text: "Once the boss teleports away, sprint forward past the advancing team into the room they just opened. Defeat all enemies including the Angelic to unlock the key. Shoot the key located near the next door to activate it, and form a line with your team to the door to unlock it. You should stand closest to the door.", type: 0, typeContent: ""},
                {text: "When that door is open, you will stay in that room to distract the boss again. Fend off waves and pick up the THIRD voltaic charge when the boss drops it, and help defend in the meantime.", type: 0, typeContent: ""},
                {text: "After the advancing team has opened the final door, move forward to join up with your team and advance the cyclops field to end the encounter", type: 0, typeContent: ""},
              ],
              [
                {text: "To begin, you should form a tether from the key to the door to start the encounter. You should stand closest to the key. ", type: 0, typeContent: ""},
                {text: "Move forward into the second room and defeat all enemies. Kill the Angelic to unlock the key and form another tether to the door to unlock it.", type: 0, typeContent: ""},
                {text: "Move forward into the second rooWhen that door is open, stay in the room to distract the boss. The boss will drop voltaic charges periodically. The FIRST one he drops, you should pick up. Then, help defend waves of enemies while waiting for the advancing team to open the door. Take care of cyclopes spawning as their attack can one shot you on a direct hit.m and defeat all enemies. Kill the Angelic to unlock the key and form another tether to the door to unlock it.", type: 0, typeContent: ""},
                {text: "When the advancing team has opened the door, move ahead into the penultimate room where you will defeat all enemies to unlock the key again. There are three keys in this area, with the first being in the corner past the edge of the floating island. This one is tricky but can be made with three people. If you need help, ask a fireteam member from the distracting team with voltaic overflow (as they cannot prevent the wipe without dying) to come and extend the tether.", type: 0, typeContent: ""},
                {text: "Once the final door is opened, advance the cyclops field. The boss will move back                                                                                                                                 and create three voltaic charges during this time. You should be able to pick up the FIRST one he drops.", type: 0, typeContent: ""},
              ],
              [
                {text: "To begin, you should form a tether from the key to the door to start the encounter. You should stand closest to the key. ", type: 0, typeContent: ""},
                {text: "Move forward into the second room and defeat all enemies. Kill the Angelic to unlock the key and form another tether to the door to unlock it.", type: 0, typeContent: ""},
                {text: "When that door is open, stay in the room to distract the boss. The boss will drop voltaic charges periodically. The SECOND one he drops, you should pick up. Then, help defend waves of enemies while waiting for the advancing team to open the door. Take care of cyclopes spawning as their attack can one shot you on a direct hit.", type: 0, typeContent: ""},
                {text: "When the advancing team has opened the door, move ahead into the penultimate room where you will defeat all enemies to unlock the key again. There are three keys in this area, with the first being in the corner past the edge of the floating island. This one is tricky but can be made with three people. If you need help, ask a fireteam member from the distracting team with voltaic overflow (as they cannot prevent the wipe without dying) to come and extend the tether.", type: 0, typeContent: ""},
                {text: "Once the final door is opened, advance the cyclops field. The boss will move back                                                                                                                                 and create three voltaic charges during this time. You should be able to pick up the SECOND one he drops.", type: 0, typeContent: ""},
              ],
              [
                {text: "To begin, you should form a tether from the key to the door to start the encounter. You should stand closest to the key. ", type: 0, typeContent: ""},
                {text: "Move forward into the second room and defeat all enemies. Kill the Angelic to unlock the key and form another tether to the door to unlock it.", type: 0, typeContent: ""},
                {text: "When that door is open, stay in the room to distract the boss. The boss will drop voltaic charges periodically. The THIRD one he drops, you should pick up. Then, help defend waves of enemies while waiting for the advancing team to open the door. Take care of cyclopes spawning as their attack can one shot you on a direct hit.", type: 0, typeContent: ""},
                {text: "When the advancing team has opened the door, move ahead into the penultimate room where you will defeat all enemies to unlock the key again. There are three keys in this area, with the first being in the corner past the edge of the floating island. This one is tricky but can be made with three people. If you need help, ask a fireteam member from the distracting team with voltaic overflow (as they cannot prevent the wipe without dying) to come and extend the tether.", type: 0, typeContent: ""},
                {text: "Once the final door is opened, advance the cyclops field. The boss will move back                                                                                                                                 and create three voltaic charges during this time. You should be able to pick up the THIRD one he drops.", type: 0, typeContent: ""},
              ]
            ],
            },
            {
              stratName: "Challenge - Leftovers",
              overviews: [
                {text: "In this challenge, the distracting team is not allowed to kill the two cyclopes that spawn when the advancing team kills theirs. All cyclopes in the final field can be killed. This means a total of 6 cyclopes should be left alive - 2 in the first, second, and third rooms.", type: 0, typeContent: ""},
            ],
              individualStrat: [],
            },
            {
              stratName: "Challenge - Voltaic Tether",
              overviews: [
                {text: "In this challenge, the advancing team must only create a tether while they have voltaic overflow. This includes the first door to start the encounter. To start the encounter, the fireteam should kill the minotaur in the centre of the room. All 6 guardians should stay in the first room to begin with. After the first three guardians collect the voltaic charge, they should open the door and advance as normal as the advancing team.", type: 0, typeContent: ""},
            ],
              individualStrat: [],
            },
          ],
        },
        {
          encName: "Jumping Encounter",
          strategies: [
            {
              stratName: "Underground Garden",
              overviews: [
                {text: "To progress to the next area, the fireteam should navigate the underground garden. There are moving constructs that can push or kill members, as well as leaves that can be shot at to create temporary platforms. The entrance to the next arena is on the other side of the underground region.", type: 0, typeContent: ""},
                {text: "There is a hidden chest located in a small room inside a pillar right next to a moving platform that ascends and descends near the middle of the garden.", type: 0, typeContent: ""},
              ],
              individualStrat: [],
            },
          ],
        },
        {
          encName: "Draw out the Consecrated Mind",
          strategies: [
            {
              stratName: "Strategy 1 - School Bus",
              overviews: [
                {text: "In this encounter, the fireteam is introduced to the enlightened mechanic. Enlightened is a buff you receive for 45 - 60 seconds that allows you to break special white shields on vex that make them normally immune to damage. The fireteam is also introduced to relays, however they are not functional in this encounter.", type: 0, typeContent: ""},
                {text: "Anti-barrier weapons are recommended here as there are barrier champions at each relay - as well as multiple Angelics. Erianna’s Vow is excellent here.", type: 0, typeContent: ""},
                {text: "The objective of this encounter is to defend all relays from enemies that try to sacrifice themselves to the relays. If enough enemies sacrifice, the team is wiped. Waves of enemies will spawn that have an undamageable shield (enlightened enemies) and cannot be killed without the enlightened buff - so it is essential that you always have enlightenment to stop them.", type: 0, typeContent: ""},
                {text: "To become enlightened, guardians must create a tether from a key (in front of a door), to a lock (just above a relay). It will take a minimum of 2 guardians to complete a tether, so 1 person alone can’t give themself the enlightened buff.", type: 0, typeContent: ""},
                {text: "The arena is shaped like a diamond, with a key, lock, and relay on each corner. The fireteam starts at relay 1 with enemies waiting to sacrifice, though enemies won’t spawn on the other corners of the arena until someone approaches that relay. The first time you arrive at a relay, the initial enemies will not be shielded and there will be an Angelic that locks the key, as well as 2 barrier hobgoblins.", type: 0, typeContent: ""},
                {text: "Vex portals will activate on the sides of each relay that connects them if their relays have been activated at least once which allows fast travel between them.", type: 0, typeContent: ""},
                {text: "To begin, fireteam members 1, 2, 3, and 4 will be designated defenders at each relay, while fireteam members 5 and 6 will be designated rotators that move between relays 1 and 2 (rotator 1-2), and relays 3 and 4 (rotator 3-4) to refresh enlightenment for the defenders at those relays. The relay positions correlate to the number - the first relay is 1, and clockwise from there is relays 2, 3, and 4. The plan is to move as a group around the arena and drop people off at each relay.", type: 0, typeContent: ""},
                {text: "Let relay defender 1, and rotator 1-2 stay at the initial relay, defeating all enemies and creating a tether to allow the defender to shoot the enlightened enemies. Meanwhile, all other members run to the second relay to set it up.", type: 0, typeContent: ""},
                {text: "**Setting up the relays**", type: 0, typeContent: ""},
                {text: "When arriving at a relay, you should follow these steps to conclude setting up the defender.", type: 0, typeContent: ""},
                {text: "1. Defeat all enemies - including 2 barrier hobgoblins, and an angelic to unlock the key.", type: 0, typeContent: ""},
                {text: "2. Create a tether from the key to the lock (above the relay) that involves the defender to grant them enlightenment.", type: 0, typeContent: ""},
                {text: "3. The relay defender stays at the relay to kill all enemies to prevent them from sacrificing and causing a wipe.", type: 0, typeContent: ""},
                {text: "4. The remaining members move to the next relay to set it up.", type: 0, typeContent: ""},
                {text: "You should repeat this process until all relay defenders have been set up at their designated relay.", type: 0, typeContent: ""},
                {text: "Since relay defenders are dropped off at each corner of the map, be aware that the final relay to be set up should only have 2 people to defeat all enemies.", type: 0, typeContent: ""},
                {text: "**Rotators**", type: 0, typeContent: ""},
                {text: "Rotator 1-2 should use the portals between relay 1 and 2 to refresh enlightenment for their defenders between waves of enemies. Rotator 3-4 should use the portals between relay 3 and 4 to do the same.", type: 0, typeContent: ""},
                {text: "Once all defenders have been set up, the next 4 waves of enemies will spawn 3 angelics on one of the relays - blocking that key. The rotator in charge of that relay should help dispatch them quickly as they are quite tough to deal with solo, and refresh enlightenment.", type: 0, typeContent: ""},
                {text: "Once all 4 waves of angelics have been killed, the doors will open and all fireteam members should move to the centre of the arena to defend the central relay. Just like the outer edges, there is a relay with a lock above it, and a key located in the tunnel with moving platforms. There will be 3 waves of shielded enemies that spawn here, including angelics that need to be defeated before the next wave of enemies spawn else the key will be locked. Between each wave, you should create a tether to grant enlightenment to the fireteam to break the shields. In the final wave, kamikaze harpies named Supplicants will spawn, though they are not much trouble.", type: 0, typeContent: ""},
                {text: "After all enemies are dead, the encounter ends..", type: 0, typeContent: ""},
                {text: "To start the encounter, walk up or shoot the enemies..", type: 0, typeContent: ""},
              ],
              individualStrat: [
                [
                  {text: "When the encounter begins, you should stay at the first relay and defend from enemies. You will never leave this relay until the doors to the centre open. Fireteam member 5 will help you refresh your enlightened buff between waves of enemies if you need it, so call them for help if your enlightenment is running low.", type: 0, typeContent: ""},
                  {text: "Once all relays are set up, one special wave of enemies will spawn causing an additional 3 angelics to spawn - one in each lane. Call for help from your rotator as they are difficult to kill on your own.", type: 0, typeContent: ""},
                  {text: "After all relay defenders have defeated a wave of angelics, the door to the centre will open. Run to the centre and help defeat all enemies. Create a tether between waves of enemies so that you can kill the enlightened enemies.", type: 0, typeContent: ""},
                ],
                [
                  {text: "When the encounter begins, you should run to the second relay with your team and defeat all enemies. Create a tether with at least one other person from the key to the relay to grant you enlightenment and stay at the relay to defend it. You will never leave this relay until the doors to the centre open. Fireteam member 5 will help you refresh your enlightened buff between waves of enemies if you need it, so call them for help if your enlightenment is running low.", type: 0, typeContent: ""},
                  {text: "Once all relays are set up, one special wave of enemies will spawn causing an additional 3 angelics to spawn - one in each lane. Call for help from your rotator as they are difficult to kill on your own.", type: 0, typeContent: ""},
                  {text: "After all relay defenders have defeated a wave of angelics, the door to the centre will open. Run to the centre and help defeat all enemies. Create a tether between waves of enemies so that you can kill the enlightened enemies.", type: 0, typeContent: ""},
                ],
                [
                  {text: "When the encounter begins, you should run to the second relay with your team and defeat all enemies. Help create a tether with fireteam member 2 to grant him the enlightenment buff and quickly move with the rest of your team to the third relay. Defeat all enemies and create a tether with at least one other person from the key to the relay to grant you enlightenment and stay at the relay to defend it. You will never leave this relay until the doors to the centre open. Fireteam member 6 will help you refresh your enlightened buff between waves of enemies if you need it, so call them for help if your enlightenment is running low.", type: 0, typeContent: ""},
                  {text: "Once all relays are set up, one special wave of enemies will spawn causing an additional 3 angelics to spawn - one in each lane. Call for help from your rotator as they are difficult to kill on your own.", type: 0, typeContent: ""},
                  {text: "After all relay defenders have defeated a wave of angelics, the door to the centre will open. Run to the centre and help defeat all enemies. Create a tether between waves of enemies so that you can kill the enlightened enemies.", type: 0, typeContent: ""},
                ],
                [
                  {text: "When the encounter begins, you should run to the second relay with your team and defeat all enemies. Help create a tether with fireteam member 2 to grant him the enlightenment buff and quickly move with the rest of your team to the third relay. Defeat all enemies and help fireteam member 3 create a tether to grant him enlightenment and move with the remaining fireteam member to the final relay. Defeat all enemies and create a tether to grant you enlightenment. You will never leave this relay until the doors to the centre open. Fireteam member 6 will help you refresh your enlightened buff between waves of enemies if you need it, so call them for help if your enlightenment is running low.", type: 0, typeContent: ""},
                  {text: "Once all relays are set up, one special wave of enemies will spawn causing an additional 3 angelics to spawn - one in each lane. Call for help from your rotator as they are difficult to kill on your own.", type: 0, typeContent: ""},
                  {text: "After all relay defenders have defeated a wave of angelics, the door to the centre will open. Run to the centre and help defeat all enemies. Create a tether between waves of enemies so that you can kill the enlightened enemies.", type: 0, typeContent: ""},
                ],
                [
                  {text: "When the encounter begins, help fireteam member 1 defend the relay by killing all the enemies including the angelic to unlock the key. Create a tether with them to grant them enlightenment while waiting for the second relay to be set up..", type: 0, typeContent: ""},
                  {text: "Once the second relay has been set up, you should use the portal on the side to quickly travel between the relays. Create tethers with the defenders on relays 1 and 2 to grant them enlightenment between waves of enemies. If the Angelics spawn on one of their relays, you should help them..", type: 0, typeContent: ""},
                  {text: "After all relay defenders have defeated a wave of angelics, the door to the centre will open. Run to the centre and help defeat all enemies. Create a tether between waves of enemies so that you can kill the enlightened enemies.", type: 0, typeContent: ""},
                ],
                [
                  {text: "You should bring anti-barrier weapons..", type: 0, typeContent: ""},
                  {text: "When the encounter begins, you should run to the second relay with your team and defeat all enemies. Help create a tether with fireteam member 2 to grant him the enlightenment buff and quickly move with the rest of your team to the third relay. Defeat all enemies and help fireteam member 3 create a tether to grant him enlightenment and move with the remaining fireteam member to the final relay. Defeat all enemies and create a tether to grant the final defender enlightenment.", type: 0, typeContent: ""},
                  {text: "Once the all relays have been set up, you should use the portal on the side to quickly travel between the relays. Create tethers with the defenders on relays 3 and 4 to grant them enlightenment between waves of enemies. If the Angelics spawn on one of their relays, you should help them.", type: 0, typeContent: ""},
                  {text: "After all relay defenders have defeated a wave of angelics, the door to the centre will open. Run to the centre and help defeat all enemies. Create a tether between waves of enemies so that you can kill the enlightened enemies.", type: 0, typeContent: ""},
                ]
              ],
            },
            {
              stratName: "Strategy 2 - 2 Left, 2 Right",
              overviews: [
                {text: "In this strategy, instead of sending 4 people clockwise and dropping off a person at each relay, send 2 people clockwise, and 2 people counterclockwise to quickly set up relays 2 and 4 simultaneously. This is slightly faster, but splitting up the fireteam more means there will be less firepower when setting up the relays..", type: 0, typeContent: ""},
                {text: "Let relay defender 1 and rotator 1-2 set up as normal.", type: 0, typeContent: ""},
                {text: "Relay defenders 2 and 3 should go clockwise to set up relay defender 2, while relay defender 3 heads to relay 3 on their own to meet up with rotator 3-4.", type: 0, typeContent: ""},
                {text: "Relay defender 4 and rotator 3-4 should go counter clockwise to set up relay defender 4, while rotator 3-4 heads to relay 3 on their own to meet up with relay defender 3.", type: 0, typeContent: ""},
                {text: "Relay defender 3 and rotator 3-4 should then be able to set up relay defender 3.", type: 0, typeContent: ""},
                {text: "The encounter then plays out as normal like in strategy 1.", type: 0, typeContent: ""},
              ],
              individualStrat: [],
            },
            {
              stratName: "Challenge - A Link to the Chain",
              overviews: [
                {text: "This challenge requires all members of the fireteam to gain enlightenment at the same time whenever it is required. This means you can use multiple tethers to achieve this as long as they connect at the same time. ", type: 0, typeContent: ""},
                {text: "To do this, the first tether required by relay defender 1 should include the entire fireteam.", type: 0, typeContent: ""},
                {text: "When setting up relay 2, communicate with those on relay 1 to create 2 tethers at the same time - relay 1 containing 2 guardians, and relay 2 containing 4 guardians.", type: 0, typeContent: ""},
                {text: "When setting up relay 3, relay defender 2 should use the portal to move to relay 1 in between the wave of enemies and create a tether with them at the same time as the others - relay 1 and relay 3 should both contain 3 guardians.", type: 0, typeContent: ""},
                {text: "When setting up relay 4, relay defender 2 should use the portal to move to relay 3 in between the wave of enemies and create a tether with them at the same time as the others- relay 1, 3, and 4 should all contain 2 guardians.", type: 0, typeContent: ""},
                {text: "Once all relays have been set up - as all guardians should have the same time remaining on enlightenment - whenever the buff needs refreshing, have relay defender 1, 2, and rotator 1-2 group up on relay 1, while relay defender 3, 4, and rotator 3-4 group up on relay 3 so that they can all refresh their enlightenment at the same time in between waves.", type: 0, typeContent: ""},
              ],
              individualStrat: [],
            },
          ],
        },
        {
          encName: "Defeat the Consecrated Mind",
          strategies: [
            {
              stratName: "Strategy 1",
              overviews: [],
              individualStrat: [],
            },
            {
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
