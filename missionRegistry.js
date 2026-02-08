/**
 * ARC Raiders Mission Data Registry
 */
const missionRegistry = [
                {
        id: "picking-up-the-pieces",
        title: "Picking Up The Pieces",
        trader: "Shani",
        location: "Any map (Dam Battlegrounds recommended)",
        description: "In the wake of a devastating storm, Shani enlists your help to scavenge materials for rebuilding. As a new arrival, you’re tasked with visiting a loot-rich area and gathering basic supplies to “pull your weight” in the repair efforts. This first mission is a gentle introduction to Arc Raiders’ core loop of exploring, looting, and surviving.",
        loadout: [],
        briefingMap: "Picking Up the Pieces.png",
        rewards: [
        "Not specified in reference data."
    ],
        objectives: [
        "Visit any area on your map with a loot-category icon",
        "Loot 3 containers"
    ],
        phases: [
        {
            title: "Phase 1: Plan and Deploy",
            
            image: "Picking Up the Pieces.png",text: "Choose a low-tier loot zone on the Dam Battlegrounds map (the only starter area) for a safer run. Open your map and set a waypoint to a white-tier loot icon so you don’t wander empty areas. Lower-tier zones have fewer enemies and other raiders, making it ideal for a first outing."
        },
        {
            title: "Phase 2: Navigate to Loot Area",
            text: "Once deployed, move cautiously toward the marked loot site. Stay alert and move quietly, as early on you have minimal gear and any combat can be risky. Use cover and watch corners as you approach the area with containers."
        },
        {
            title: "Phase 3: Locate and Open Containers",
            text: "Inside the loot zone, search for containers – they may be tucked in corners, near walls, or inside structures. Break open three containers of any type. You can melee or shoot them; each will drop resources. Be quick when looting so you don’t draw unnecessary attention. The moment you open the third container, the mission objectives are fulfilled."
        },
        {
            title: "Phase 4: Extract Safely (Optional)",
            text: "Although extracting is not required to complete the quest, it’s wise to leave safely with any loot you found. Head to the nearest extraction point once you have opened the three containers, avoiding fights on the way out. Early on, stealth and disengagement are key – you can always come back better armed in later missions."
        }
    ]
    },
                {
        id: "clearer-skies",
        title: "Clearer Skies",
        trader: "Shani",
        location: "Any map (Dam Battlegrounds suggested)",
        description: "Shani’s next request focuses on clearing the skies of hostile ARC drones. After a swarm of ARC Wasps crash-landed near the colony’s skylight, she needs you to thin out ARC’s ranks and gather sturdy components for repairs. This mission introduces basic combat against drones and resource collection from enemies.",
        loadout: [],
        briefingMap: null,
        rewards: [
        "Healing bandages (quantity not specified in reference data)",
        "Light shield (quantity not specified in reference data)"
    ],
        objectives: [
        "Destroy 3 ARC enemies (e.g. drones like Hornets or Wasps)",
        "Get 3 pieces of ARC Alloy for Shani"
    ],
        phases: [
        {
            title: "Phase 1: Locate ARC Drones",
            text: "Head into a nearby combat zone known to have flying ARC drones (Hornets or Wasps). Any map area works, but Dam Battlegrounds has plenty. Look to the skies or open areas for small flying robots patrolling overhead. Move with cover and scan for targets rather than sprinting in the open."
        },
        {
            title: "Phase 2: Engage and Destroy 3 ARC Enemies",
            text: "Using cover, take out three ARC drones. Hornets and Wasps are fragile but often travel in groups. Fire from safe cover and at a distance, picking them off one by one. After destroying each drone, ensure it’s fully downed (confirm the kill). If they haven’t noticed you, even better – avoid drawing additional enemies. Keep moving between kills so you aren’t a stationary target."
        },
        {
            title: "Phase 3: Collect ARC Alloy (3)",
            text: "Each destroyed ARC unit can drop ARC Alloy. Approach the wreckage and loot it to collect alloy pieces. If you’re unlucky and a drone doesn’t drop alloy, you can also obtain ARC Alloy by recycling other ARC scrap you find, but typically three drones will yield what you need. After each pickup, immediately place the alloy in your Safe Pocket (secure stash) so that dying won’t cause you to lose these quest items."
        },
        {
            title: "Phase 4: Return to Base",
            text: "Once you have 3 alloy pieces, you’ve met the objective. You won’t necessarily have to extract to “complete” the quest (the objective counts as complete when you have the items), but you do need to survive to deliver them. The safest approach is to head for extraction now with the alloys secured. Back at base (Speranza), talk to Shani or open the Quests tab to turn in the quest and claim your reward 19 (which includes healing bandages and a light shield to boost your survivability)."
        }
    ]
    },
                {
        id: "trash-into-treasure",
        title: "Trash Into Treasure",
        trader: "Shani",
        location: "Any map (focus on Technological/Electrical loot areas)",
        description: "Shani believes there’s no such thing as junk to a Raider – only materials waiting to be reused. She challenges you to prove your resourcefulness by gathering electronic components – Wires and a Battery – from the field. You’ll need to scavenge in high-tech areas or find alternative ways to obtain these items.",
        loadout: [],
        briefingMap: "Trash Into Treasure.png",
        rewards: [
        "Tactical Mk.1 augment",
        "3× Adrenaline Shots"
    ],
        objectives: [
        "Obtain 6 Wires",
        "Obtain 1 Battery"
    ],
        phases: [
        {
            title: "Phase 1: Identify a Tech Loot Zone",
            text: "Use your map to locate an area marked with a Technological or Electrical loot icon (circuit board symbol). A highly recommended spot is the Research & Administration building just southeast of the Dam Battlegrounds spawn. This large building reliably contains the electronics (wires, batteries) you need. Be aware it’s marked as a high- tier loot area, which means more enemies and possibly other raiders – approach carefully."
        },
        {
            title: "Phase 2: Enter and Secure the Area",
            text: "Go in through the main entrance of the Research & Admin building (ground floor). Inside, prepare to encounter unique ARC enemies known as “Fireballs” – these floating orbs will chase you and explode when close. If a Fireball spots you, back away and break line of sight, or sprint out of range before it detonates. Getting caught in the blast causes heavy damage. It’s often possible to avoid or outrun them entirely. Preserve your health and ammo by not engaging every enemy; you’re here to loot, not to clear the area."
        },
        {
            title: "Phase 3: Search for Wires and Battery",
            text: "Use the interior structures to your advantage. Immediately inside, you’ll find a yellow zipline behind a reception desk – take it up to the second floor. Upstairs is a maze of office rooms and labs where the quest items spawn. Systematically loot each room: open cabinets, search crates, and check corners. Most rooms on this floor can contain Wires or a Battery. Start on one side (e.g. left wing of the floor) and sweep through. If Fireball drones roam here, note that they often won’t enter small rooms, so you can use rooms as temporary safe zones while looting."
        },
        {
            title: "Phase 4: Find the Battery",
            text: "Batteries are a bit rarer than wires. Typically, at least one Battery will spawn in this building if you thoroughly search all the offices. If you haven’t found a Battery after looting one side of the floor, cross over to the opposite wing via the central area or upper catwalks. Look for larger rooms with desks and electronic equipment – Batteries often spawn on tables or shelves in 3 these spaces. Keep an eye out for a distinctive blue or gray battery item model while you sweep the area."
        },
        {
            title: "Phase 5: Gather 6 Wires",
            text: "Wires are common in these tech locations. As you search for the battery, you will likely pick up multiple Wires from toolboxes, crates, or shelves. Ensure by the end of your search that you have at least. If not, you might need to loot another nearby tech building or revisit a missed room. (Wires are thin coil-like items – easy to overlook, so double-check container contents.)"
        },
        {
            title: "Phase 6: Extraction",
            text: "Once you have 6× Wires and 1× Battery in your inventory, it’s time to extract. The quest won’t hand over rewards until you successfully bring the items back. Plot a path to the nearest extraction point (preferably one not far from the building to minimize travel while carrying valuable loot). Move cautiously; if you suspect other players in the area (since it’s high-tier loot, it attracts attention), consider sneaking or waiting for a clear path. Use any defensive items you have if confronted, or even stash the quest items in your Safe Pocket to safeguard them during a fight."
        },
        {
            title: "Phase 7: Turn In Items",
            text: "After a successful extraction, go to the Quests tab in the main menu or talk to Shani to claim your reward for “Trash Into Treasure”. You will receive a Tactical MK.1 augment (a gear piece) and 3× Adrenaline Shots for healing. These will aid you in subsequent missions."
        }
    ]
    },
                {
        id: "off-the-radar",
        title: "Off The Radar",
        trader: "Shani",
        location: "Dam Battlegrounds (Field Depots are found on this map)",
        description: "With basic scavenging done, Shani’s focus shifts to reestablishing communication. The storm knocked out several antenna towers “topside,” and she needs a Raider to repair a Field Depot antenna to get the network back online. This quest teaches you about Field Depots – unmarked structures housing comms gear – and how to fix them under live conditions.",
        loadout: [
        "Free Loadout (low-risk scouting run)",
        "Binoculars or a scoped weapon (for scouting threats)"
    ],
        briefingMap: "Off-The-Radar.png",
        rewards: [
        "Black Hiker Backpack",
        "Defibrillators (quantity not specified in reference data)"
    ],
        objectives: [
        "Visit a Field Depot",
        "Repair the antenna on the Field Depot’s roof"
    ],
        phases: [
        {
            title: "Phase 1: Unlocking the Quest",
            text: "After turning in Trash Into Treasure (and Clearer Skies), Off The Radar becomes available from Shani. Accept it and ensure you select the Dam Battlegrounds map for your next deployment, as you must find a Field Depot located on Dam. Consider gearing up lightly or even taking the Free Loadout, since this mission doesn’t require heavy combat – you’ll be minimizing risk while running to a point of interest."
        },
        {
            title: "Phase 2: Locate a Field Depot",
            text: "Once in the Dam instance, you need to find a Field Depot structure. Field Depots are not marked on your map initially – you have to be near one for the icon to appear. These depots are identifiable by their appearance: a rusted metal trailer or shack topped with a tall antenna mast. There are several fixed locations for them. A reliable one is at the Northern Power Yard, an area with cranes and containers north of the dam wall. Another is around the central Dam Outskirts near the Hydroponic Dome (west of the dam, as Shani hinted). Move toward one of these known spots; when you get close, a purple Field Depot icon will pop up on your in-game map/minimap."
        },
        {
            title: "Phase 3: Approach with Caution",
            text: "As you near the Field Depot, proceed carefully. These locations can have enemy patrols (ARC bots or even other raiders) nearby. Before rushing in, scout the area — use binoculars or a scoped weapon to scan for threats from a safe distance. If you see AI enemies (like ARC turrets or ground units), you might choose to clear them out quietly. If other players are around, you could wait for them to pass, since your objective only requires a quick interaction. The key is not to get caught in an unnecessary firefight."
        },
        {
            title: "Phase 4: Repair the Antenna",
            text: "Once the coast is relatively clear, move up to the Field Depot. Climb the ladder or stairs on the side of the depot to reach the roof. The broken antenna base will be obvious (a panel or device at the base of the mast, often sparking or highlighted). Go up to it and press the interact button to repair. The repair action is instant or very quick – your character will tighten a bolt or fiddle with the device, and then the antenna will spring to life. Congratulations, you’ve now restored the comms at that depot. Both objectives (visit and repair) are completed in this single action."
        },
        {
            title: "Phase 5: Evaluate Your Situation",
            text: "At this point, the quest is technically complete without requiring extraction (the mission will count as done immediately after the antenna is fixed). However, you may want to take advantage of being at a Field Depot: often there are loot crates inside the depot shack. After repairing, consider dropping into the trailer – there’s usually a door – and quickly looting any containers for bonus supplies (ammo, materials). But don’t linger too long; other players might have heard or seen the antenna repair."
        },
        {
            title: "Phase 6: Extract (Optional but Recommended)",
            text: "Since you’ve just completed a quest objective, it’s good practice to extract safely and bank your progress. If you brought nothing valuable (free gear) and don’t mind risking it, you could continue exploring. Otherwise, head to an extraction point. Field Depots themselves are not extraction sites, so you’ll need to travel to the nearest elevator or exit. Move out carefully; use one of your two provided Remote Raider Flares if needed as a distraction or decoy (these flares can draw NPC attention away, buying you time – though using one isn’t usually necessary here). Extracting successfully ensures you keep any extra loot you picked up."
        },
        {
            title: "Phase 7: Turn In Quest",
            text: "Back at base, talk to Shani or go to the quest menu to finalize Off The Radar. You’ll receive a Black Hiker Backpack (cosmetic) as a reward, along with some emergency gear (Defibrillators for reviving). The backpack is mostly a visual reward, but it marks your progress in the early quest line."
        }
    ]
    },
                {
        id: "a-bad-feeling",
        title: "A Bad Feeling",
        trader: "Celeste",
        location: "Any map (unmarked locations; Dam edges are a good bet)",
        description: "Celeste, another trader in Speranza, picks up a strange signal unlike anything heard before. She has a bad feeling about ARC’s next move and sends you to investigate by retrieving data from one of ARC’s hidden devices. Your goal is to find an ARC Probe or ARC Courier, mysterious objects that occasionally crash or land in the field, and search it for intel.",
        loadout: [],
        briefingMap: "A Bad Feeling.png",
        rewards: [
        "10× Metal Parts",
        "5× Steel Springs",
        "5× Duct Tape"
    ],
        objectives: [
        "Find and search any ARC Probe or ARC Courier"
    ],
        phases: [
        {
            title: "Phase 1: Hunt for an ARC Probe/Courier",
            text: "ARC Probes and Couriers are small, rare world objects that spawn in random locations (often near the edges of the map or in out-of-the-way spots). They are not marked on your map unless you’re very close. A known easy spot to check is just southwest of the Hypersonic Dome Complex on Dam Battlegrounds. Head to that forested area behind the dome – players frequently find a probe or courier there. If you’re on a different map, try quiet fringes of the area (for example, corners of The Spaceport or Buried City maps). Move around and keep your eyes peeled for any unusual metallic object."
        },
        {
            title: "Phase 2: Recognize the Targets",
            text: "It helps to know what you’re looking for. An ARC Probe looks like a spindly metal instrument, almost like a tall surveyor’s tripod or satellite probe. An ARC Courier, on the other hand, is a round, disk-like metal structure – some describe it as looking like a small UFO or a flying saucer that’s landed. Both usually emit a faint mechanical hum or flicker when nearby. As you search, listen for any unusual electronic buzzing which might indicate one is close."
        },
        {
            title: "Phase 3: Close in and Mark",
            text: "When you come within roughly ~50 meters of a probe or courier, the game will notify you by marking it on your HUD and map (you’ll see a small icon or label, making it much easier to pinpoint). So once you think you’re in the right area, move in a sweeping pattern to trigger this proximity alert. As soon as the object’s icon pops up, head straight toward it."
        },
        {
            title: "Phase 4: Breach the Device",
            text: "Approach the ARC Probe or Courier carefully. There usually aren’t traps or immediate enemies tied to it, but remain alert (other players might be after it too). When you’re next to the device, you’ll get a prompt to “Breach” or “Search” it. Activate this. Breach is a progress-bar action that takes a few seconds to complete. During this time you must stand nearby and be vulnerable, so ensure the area is safe (no enemies chasing you). After a short moment, the probe/ courier will open or reveal its cache."
        },
        {
            title: "Phase 5: Loot the Contents",
            text: "Once breached, loot the probe/courier like you would a container. Typically it will contain a bit of ARC tech or resources (sometimes alloy, components, etc., which you can keep). More importantly, breaching it counts for the quest completion. The instant you’ve looted one of these ARC devices, the quest objective is fulfilled. You do not have to extract for the quest to count – even if you die afterward, the quest will still register as completed. However, any items you looted from it would be lost on death, so consider extracting if you grabbed something valuable."
        },
        {
            title: "Phase 6: Extract or Continue",
            text: "With the quest technically done upon looting, you have a choice: extract now to bank any loot, or continue your raid. If you have no other goals and especially if you pulled rare materials from the probe/courier, it’s wise to head out. If you do stay, remember that you’re carrying extra items that you could lose – stash what you can in your Safe Pocket to be safe."
        },
        {
            title: "Phase 7: Claim Rewards",
            text: "Back at base, redeem the quest A Bad Feeling with Celeste. She’ll reward you with some useful crafting materials: 10× Metal Parts, 5× Steel Springs, and 5× Duct Tape. These are basics for building and upgrading equipment. They’ll be delivered directly to your inventory when you claim them in the quest menu."
        }
    ]
    },
                {
        id: "the-right-tool",
        title: "The Right Tool",
        trader: "Tian Wen",
        location: "Any map (seek specific ARC enemy types)",
        description: "One of Speranza’s tech experts, Tian Wen, has an upgraded anti-ARC weapon he wants tested. He gives you a prototype Ferro IV pistol and challenges you to prove its effectiveness by taking down a variety of ARC units. You’ll need to eliminate a fast-moving Fireball, a patrolling Hornet, and a stationary Turret – covering the spectrum of ARC enemies.",
        loadout: [
        "Provided: 1× Ferro IV pistol",
        "Provided: 20× Heavy Ammo"
    ],
        briefingMap: null,
        rewards: [
        "Stitcher II",
        "Extended Light Mag I"
    ],
        objectives: [
        "Destroy a Fireball",
        "Destroy a Hornet",
        "Destroy a Turret"
    ],
        phases: [
        {
            title: "Phase 1: Gear Up with the Ferro IV",
            text: "Upon accepting The Right Tool, Tian Wen provides you with 1× Ferro IV pistol and 20× heavy ammo for it. The Ferro IV is a high-powered handgun effective against armored targets. Equip this weapon in your loadout (it uses heavy ammo). Note that using the Ferro is optional – any weapon can destroy the required ARC targets 74 – but the Ferro will make it easier. Ensure you also carry some regular arms for safety (in case you run out of ammo or need range). Now deploy into a map (Dam is fine) where you can find all three target types.",
            image: "The Right Tool.png"
        },
        {
            title: "Phase 2: Find a Fireball",
            text: "Fireballs are small spherical ARC units that roam indoors. They appear in complexes like Research buildings, bunkers, or sometimes warehouses. They have a distinct behavior: when they detect you, they rush forward and attempt to explode. Your strategy is to kill one from a distance before it can get close. Visit a known interior spot (for example, the Dam’s underground bunkers or any building you looted for electronics earlier). Move slowly and listen for a telltale humming or the rolling sound of a Fireball. The moment you see a Fireball, backpedal and shoot it – two or three solid hits from the Ferro IV will detonate it safely away from you (or use another gun if needed). Alternatively, lure it around a corner and hit it when it pauses. Destroying one Fireball completes that part of the objective. Fireballs are often alone or in pairs, so you likely won’t face a crowd.",
            image: "The Right Tool part 2.png"
        },
        {
            title: "Phase 3: Hunt a Hornet",
            text: "Hornets are flying drone enemies commonly found outdoors, hovering over open areas or roads. They resemble small helicopter-like bots and often patrol in wide circles. To find a Hornet, go outside after dealing with the Fireball. Check areas like Dam’s exterior or any place you see drones in the sky. Use your binoculars or simply look for a lone flyer (distinct from Wasps by their size and behavior). When you spot a Hornet, use cover and aim carefully. The Ferro IV can take one down in a few hits, but it has noticeable recoil – consider crouching to steady your aim. You can also use an assault rifle if that’s easier. Hornets may fire back with light projectiles, so strafe or use cover between your shots. Destroy the Hornet to tick off the second objective.",
            image: "The Right Tool part 3.png"
        },
        {
            title: "Phase 4: Locate a Turret",
            text: "Turrets are immobile ARC defenses often found guarding valuable areas or set up at ARC outposts. They look like mounted guns on a tripod and are usually inside buildings or at bunker entrances. A good way to encounter a Turret is to head for an ARC-infested structure (for example, some locked areas or underground facilities on Dam have turrets). Move cautiously and listen for the turret’s whirring servo or scanning laser. Turrets have a cone of fire; you want to flank or surprise it. If you have a grenade, you could toss one to soften it up. Otherwise, peek from cover and fire the Ferro IV rounds into the turret – the Ferro’s high penetration should destroy it 8 quickly. Make sure to pop back into cover if the turret starts locking on to you (its shots can hurt). Once the Turret is blown up, you have completed all kill requirements."
        },
        {
            title: "Phase 5: Quest Completion",
            text: "There’s no special item to collect here – you just needed to eliminate those three ARC types. As soon as the Fireball, Hornet, and Turret have all been destroyed (this can be in any order, even all in one raid), The Right Tool mission is complete. If you got them all in one run and you’re still alive, you can choose to extract or continue playing. If you died partway and lost the Ferro, don’t worry – you can re-attempt with any weapon; kills you made in previous runs still count (you don’t have to redo kills you already secured in earlier raids, since the objective tallies persist). Head back to Tian Wen at base or open the Quests menu to turn in the quest."
        },
        {
            title: "Phase 6: Claim Reward",
            text: "Tian Wen will reward your field trial by giving you a Stitcher II (a mid-tier shotgun) and an Extended Light Mag I attachment. These are valuable upgrades to your arsenal. The Stitcher shotgun in particular can help with close quarters in future missions. Collect these from the quest completion screen."
        }
    ]
    },
                {
        id: "hatch-repairs",
        title: "Hatch Repairs",
        trader: "Shani",
        location: "Any map (Raider Hatch locations exist on all maps; Dam has several)",
        description: "Shani has an urgent maintenance task: some Raider Hatches – hidden emergency escape routes that Raiders use – are failing due to leaking hydraulics. These hatches can provide quick extractions when you have a Hatch Key, so keeping them operational is important. She asks you to find a malfunctioning hatch in the field, repair its hydraulic pipe, and secure the Hatch Key stored there.",
        loadout: [],
        briefingMap: "Hatch Repairs.png",
        rewards: [
        "Raider Hatch Key",
        "Binoculars"
    ],
        objectives: [
        "Repair the leaking hydraulic pipes near a Raider Hatch",
        "Search for a Hatch Key near the Raider Hatch"
    ],
        phases: [
        {
            title: "Phase 1: Find a Raider Hatch",
            text: "Raider Hatches are scattered around each map as alternative extraction points. They are indicated in-game by a special icon (a small square hatch symbol) once you’ve discovered them. On Dam Battlegrounds, there are four known Raider Hatch locations. For example, one hatch is near the Dam Control area, another by the Research & Administration outskirts, etc. Use the in-game map: if you have previously passed by a hatch, its icon will show up; if not, you might stumble on one by exploring. A quick way: since you just did “A Bad Feeling” and likely know the Hypersonic Dome area, note there is a Raider Hatch not far west of that dome. Choose a hatch location and head there. As you get close, you may see the hatch icon appear on your map, confirming you’re in the right spot."
        },
        {
            title: "Phase 2: Secure the Area",
            text: "When you approach the Raider Hatch, be cautious. Hatches can attract ARC patrols (since they’re points of interest) or even player ambushes hoping to catch people extracting. Before interacting, clear out any nearby ARC bots if present. For instance, there might be a couple of Grunts or a Turret guarding a hatch area. Take them out quietly. The good news is you don’t have to fight waves – just ensure you won’t get shot in the back while fixing the hatch."
        },
        {
            title: "Phase 3: Repair the Hydraulic Pipe",
            text: "The hatch itself looks like a metal trapdoor on the ground with some machinery around it. You’ll notice a small pipe or console next to the hatch emitting steam or fluid – this is the leaky hydraulic that needs fixing. Walk up to that pipe; it should highlight in yellow indicating an interact action. Press the interact key to repair it. The repair is very quick – essentially your character tightens the pipe or patches it. Once done, the leak stops. This completes the first objective (“repair pipes”)."
        },
        {
            title: "Phase 4: Obtain the Hatch Key",
            text: "As soon as the hatch is repaired, look around on the ground nearby. A small box or container spawns next to the hatch. This box contains a Raider Hatch Key. Open or loot the box and take the key item. That satisfies the second objective. The Hatch Key will go into your special slot (or inventory) – it’s an item you can carry and even keep for future use if you don’t use it now."
        },
        {
            title: "Phase 5: Use the Hatch (Optional Extraction)",
            text: "Now that you have a Hatch Key in hand, you have the option to extract immediately using the very hatch you repaired. To do so, interact with the hatch door itself. When you repaired it, the hatch became functional. Consuming a Raider Hatch Key lets you and your team (if co-op) escape through that hatch. If you’re ready to leave the raid, this is a perfect time to try it out – it’s usually a very quick extraction (a few seconds animation). Using it now is optional; you could also save the key for later. Importantly, the quest does not require using the hatch, only repairing it and grabbing the key. So whether you extract via the hatch, a normal point, or even die afterward, as long as you repaired and picked up the key, the quest will count as completed. That said, extracting safely is always recommended to keep any loot you have."
        },
        {
            title: "Phase 6: Return to Shani",
            text: "Back at base, turn in Hatch Repairs. Your reward is essentially the Raider Hatch Key you found (the game formally gives you one, so if you used the one you picked up, you’ll 10 still have one) and a pair of Binoculars. Binoculars are a useful tool for long-range scanning, so it’s a nice utility reward. Shani’s dialogue highlights that these hatches “still work, but not for long,” indicating this might not be the last time we deal with them."
        }
    ]
    },
                {
        id: "safe-passage",
        title: "Safe Passage",
        trader: "Apollo",
        location: "Any map (anywhere with ARC enemies)",
        description: "Apollo, the munitions specialist, has been monitoring ARC’s evolving tactics and wants to escalate firepower on the Raiders’ side. After hearing rumors of ARC’s “warning signals,” he’s decided that if ARC is stepping up, so should we. He tasks you with demonstrating effective use of explosives by eliminating ARC units with grenades.",
        loadout: [
        "Provided: 10× Light Impact Grenades",
        "Provided: 3× Snap Blast Grenades"
    ],
        briefingMap: "Safe Passage.png",
        rewards: [
        "5× Li’l Smoke Grenades",
        "3× Shrapnel Grenades",
        "3× Barricade Kits"
    ],
        objectives: [
        "Destroy 2 ARC enemies using any explosive grenade"
    ],
        phases: [
        {
            title: "Phase 1: Load Up on Grenades",
            text: "Upon starting this quest, Apollo provides you with a set of grenades to ensure you have the tools needed. Specifically, you’ll receive 10× Light Impact Grenades and 3× Snap Blast Grenades. Light Impact grenades detonate on impact, while Snap Blasts create a powerful airburst after a short delay. Equip whichever type you prefer (or both) in your throwable slot. You can also buy more grenades from Apollo’s shop if needed (he stocks various explosives)."
        },
        {
            title: "Phase 2: Find ARC Targets",
            text: "Enter a raid on any map and seek out some standard ARC enemies. Nearly any will do: common Grunts (the bipedal robots), Drones, or even smaller Wasps count as long as the grenade’s explosion is what kills them. For efficiency, you might drop near a known ARC spawn – e.g., a Dam facility or outskirt where a few bots roam. Two targets are needed in total, so you can even do this with one group of enemies."
        },
        {
            title: "Phase 3: Soften and Group (optional)",
            text: "Grenades work best on clusters or weakened enemies. If you spot a pair of Grunts walking together, that’s perfect – you might kill two with one grenade. If enemies are spread out, you can shoot one or two to lure them closer together or to weaken a larger enemy’s health. The objective doesn’t require a double kill or anything fancy, just two kills total by grenade. Still, conserving grenades is wise, so try to get multi-kills if possible."
        },
        {
            title: "Phase 4: Throw Explosive Grenades to Kill",
            text: "Now, use your grenades to destroy the ARC units. For Light Impact grenades, aim slightly above or directly at the target so that it hits near their feet – it explodes immediately on contact. For Snap Blast grenades, remember there’s a tiny fuse: you’ll see a blinking light after it leaves your hand; it will then detonate, dealing heavy area damage. If using Snap Blasts, either toss it into the middle of a group or against a surface near an enemy and take cover for a second. Ensure the explosion finishes off the ARC enemies – direct hits will usually one- shot weaker bots, but sturdier ones might need to be damaged first. When an ARC enemy dies and the kill feed or XP indicator credits an “explosion” or grenade icon, that means it counted. Do this for two ARC enemies."
        },
        {
            title: "Phase 5: Mission Complete",
            text: "The quest completes as soon as you achieve those two explosive kills. There’s no item to collect and no special extraction requirement – it’s a simple kill challenge. If you get both kills in one encounter, you’re done within moments. If you only got one kill and ran out of grenades or targets, Apollo’s grenades are still in your inventory; you can reposition and find another enemy. (If you somehow used all provided grenades without getting two kills, you may purchase or craft more, or re-try the quest – but 13 grenades is plenty for two kills.)"
        },
        {
            title: "Phase 6: Extract or Continue",
            text: "With the objective done, you could just continue the raid normally or extract. Since this quest is quick, many players combine it with other tasks in the same run. Just make sure not to die before getting the kills, or you’ll have to attempt them again. If you have completed it, dying afterward doesn’t remove completion status. Regardless, when you’re back in Speranza, turn in the quest to Apollo via the quest menu."
        },
        {
            title: "Phase 7: Claim Rewards",
            text: "Apollo will give you a set of explosives and defensive tools as a reward: 5× Li’l Smoke Grenades, 3× Shrapnel Grenades, and 3× Barricade Kits. Li’l Smokes are small smoke bombs for cover; Shrapnel grenades are lethal anti-personnel mines you can throw (great for area denial); Barricade Kits allow you to deploy temporary cover in the field. These rewards underline the theme of using tactics and tools for safe passage through ARC-infested territory."
        }
    ]
    },
                {
        id: "down-to-earth",
        title: "Down To Earth",
        trader: "Shani",
        location: "Dam Battlegrounds (Field Depot + Field Crate required)",
        description: "Shani has caught wind of strange crates dropping from ARC Probes, hinting that ARC is gathering or transporting something valuable. In Down To Earth, she asks you to intercept one of these supply crates and deliver it to a Raider Field Depot for analysis. This quest requires you to not only find a Field Depot (as you did in Off The Radar) but also to locate a Field Crate in the world and physically carry it to the depot.",
        loadout: [],
        briefingMap: "Down to Earth.png",
        rewards: [
        "Combat Mk.1 augment",
        "Medium Shield"
    ],
        objectives: [
        "Visit a Field Depot",
        "Deliver a Field Crate to the Supply Station (Field Depot)",
        "Collect the reward (from the Field Depot)"
    ],
        phases: [
        {
            title: "Phase 1: Plan Your Route",
            text: "As with Off The Radar, start on Dam Battlegrounds (other maps also have Field Depots and crates, but Dam is accessible early). Before deploying, pick a Field Depot that you will use for the delivery. It’s smartest to choose one close to an extraction point, because after delivering the crate you’ll need to extract successfully. For example, the Field Depot just west of the Research & Administration building is very near an extract – a prime choice. Mark that depot’s approximate location in your mind or map."
        },
        {
            title: "Phase 2: Find a Field Crate",
            text: "Upon entering the raid, make your way toward the chosen Field Depot area. Field Crates are special crates that spawn at fixed spots on the map (often in open areas or near structures) but are not marked on your map by default. They look like medium-sized gray or green military supply crates sitting on the ground. As you approach the Field Depot, search the surrounding area for a Field Crate – typically within a couple hundred meters. Often, there’s one crate logically associated with each Field Depot. Use your eyes; if you’re close, you might also see a faint icon or get a prompt when aiming at it. (Refer to community maps or the Steam guide’s image for Field Crate examples to know what to look for.)"
        },
        {
            title: "Phase 3: Secure the Crate Site",
            text: "Field Crates can attract interest – both from ARC and players – since they hold loot. Before grabbing it, ensure no immediate threats are around. Clear out any roaming ARC units nearby quietly. Also listen for gunfire; if other raiders are around, you might wait for them to pass or choose a different depot to avoid an ambush. Remember, carrying the crate will slow you down and leave you vulnerable, so a safe pickup zone is crucial."
        },
        {
            title: "Phase 4: Pick Up the Field Crate",
            text: "Stand next to the crate and use the interact prompt to pick it up. Once you have it, you’ll notice you move significantly slower (and likely can’t use your weapons while carrying it). This is a critical moment – you need to cover the distance to the Field Depot with limited mobility. Keep your eyes on your surroundings; you can still drop the crate if you need to fight (but that wastes time). Ideally, move in a path that avoids open sightlines. If someone starts shooting, you might need to drop the crate behind cover, deal with the threat, then pick it up again."
        },
        {
            title: "Phase 5: Deliver the Crate to the Depot",
            text: "Bring the crate to the Field Depot device – usually a console or slot at the base of the antenna tower. When you get close, you should get a prompt to insert or deliver the Field Crate into the depot. Do so; your character will place the crate onto the depot’s platform. After insertion, there’s a short delay (a few seconds) while the Field Depot processes the crate. During this time, you might hear some machinery noise. Stay on guard – if an enemy was trailing you, they might show up now. Once processing is done, a reward box will pop out of the Field Depot next to the console. Interact with that box to collect the reward contents (this is an in-raid reward, usually some materials or items from ARC’s cache). That completes the “collect the reward” objective and thus all quest objectives have been met."
        },
        {
            title: "Phase 6: Extract Successfully",
            text: "Unlike Off The Radar, Down To Earth requires a successful extraction to count (because if you die after doing it, you technically wouldn’t “have delivered” the intel, plus you would lose the items). The objectives say “in one round,” implying you must do delivery and reward collection in the same life. Now that you have completed the depot interaction, get to the nearby extraction point you wisely chose earlier. Since you picked a Field Depot near extract, it should be a short walk. Still, be cautious; other players might be drawn by the Field Depot activity (it’s somewhat conspicuous). Use any smoke grenades or tools if you have them to cover your final dash. Call for extraction (if it’s an elevator, call it and wait; if it’s a hatch and you have a key, you could even use that if quicker). Successfully extract from Dam with the mission done."
        },
        {
            title: "Phase 7: Claim Quest Rewards",
            text: "Back in Speranza, turn in Down To Earth. Shani will reward you with a Combat Mk.1 augment and a Medium Shield. The augment improves your combat capability (exact effect depends on augment type, likely damage or handling) and the Medium Shield provides better protection than your starter shield. These are great assets for tougher upcoming missions."
        }
    ]
    },
                {
        id: "the-trifecta",
        title: "The Trifecta",
        trader: "Shani",
        location: "Any map (Dam Battlegrounds ideal for finding all targets)",
        description: "Intelligence only goes so far – now Shani needs you to prove your combat prowess against ARC’s aerial drones. ARC is “closing in,” and this quest, aptly named The Trifecta, requires you to take down three distinct types of ARC scouts and harvest their core components. You must eliminate Wasps, Hornets, and Snitches – two of each – and retrieve their corresponding tech (Drivers and Scanner).",
        loadout: [
        "Mid-range rifle (AR/DMR) for aerial targets",
        "Remote Raider Flare (optional decoy)"
    ],
        briefingMap: "Trifecta Quest.png",
        rewards: [
        "Origin outfit (Orange Camo color)",
        "Raider Hatch Key",
        "2× Defibrillators",
        "Dam Control Tower Key"
    ],
        objectives: [
        "Destroy 2 Wasps and collect 2 Wasp Drivers",
        "Destroy 2 Hornets and collect 2 Hornet Drivers",
        "Destroy 2 Snitches and collect 2 Snitch Scanners (You need a total of 2 of each part: Wasp Driver, Hornet Driver, Snitch Scanner.)"
    ],
        phases: [
        {
            title: "Phase 1: Prepare for the Hunt",
            text: "Before heading out, Shani supplies you with 3× Remote Raider Flares. These flares can be deployed to possibly lure ARC units or distract them – in this context, they are especially useful for drawing attention of nearby ARC drones or confusing other raiders. Equip them to your quick-use slot. Load up with a decent mid-range weapon (assault rifle or DMR) for hitting flying targets, and perhaps a shotgun or SMG in case things get close. Also, consider carrying healing and ammo; this mission might involve extended fighting. Launch into Dam Battlegrounds daylight if possible – better visibility helps spot drones against the sky."
        },
        {
            title: "Phase 2: Track Down Wasps and Hornets",
            text: "Once in the field, start looking for Wasps and Hornets, the two flying ARC combat drones. Wasps are small, aggressive drones often found in swarms; Hornets are larger solo drones patrolling broader areas. Use your ping or binoculars frequently to scan the sky for drone silhouettes. Dam’s open areas (fields, over roads, near the dam structure) are good places to find Hornets cruising. Wasps might appear when combat starts or near ARC objectives. If you don’t see enough of them, proceed to the Snitch step – a Snitch can actually cause Wasps and Hornets to show up."
        },
        {
            title: "Phase 3: Flush Out a Snitch",
            text: "Snitches are recon drones – small, hovering eyeball-like bots that emit a distinct noise. They typically spawn in quieter areas and will try to fly away or alert others when they detect you. Interestingly, if a Snitch “spots” you and sounds an alarm, it will call in backup, often including Wasps and Hornets (the very targets you need). A sound strategy is to intentionally trigger a 15 Snitch’s alarm to draw in ARC reinforcements, then quickly destroy the Snitch before the fight escalates too much. To do this, find a Snitch (often at the edges of points of interest or patrolling near ARC drop pods). Let it see you briefly – it will start wailing – then shoot it down fast (Snitches are fragile, a few shots will do). By doing so, you’ve eliminated one Snitch (you need two total) and likely caused a squad of Wasps or a Hornet to home in on your location. This method effectively “spawns” the other targets if they weren’t present, achieving the trifecta of drawing all three kinds out."
        },
        {
            title: "Phase 4: Engage Incoming Drones",
            text: "Now handle the response. If Wasps swarm in, find cover (like a rock or building) to avoid being surrounded. Wasps often come in a pack; use burst fire or explosives to thin them. They’re weak individually – a few bullets each will drop them. Hornets, if one arrives, tend to circle at medium range and fire occasionally; strafe and lead your shots to hit them. Focus on one type at a time – for instance, drop all Wasps first (they usually attack more aggressively) then deal with the Hornet. Use your Remote Raider Flare here if overwhelmed: throwing a flare can attract ARC attention to that spot, potentially giving you breathing room or clustering them for an easier multi-kill. Keep moving and use cover, since a swarm can chip away your health quickly if you stand still. Remember to aim for drone weak points: usually the thrusters or center mass to bring them down faster."
        },
        {
            title: "Phase 5: Collect Drivers and Scanners",
            text: "Each time you kill a target drone, quickly loot its remains. You need to pick up Wasp Drivers from Wasps, Hornet Drivers from Hornets, and Snitch Scanners from Snitches. These are quest items. Stash them in your Safe Pocket immediately upon pickup 113 – this is critical because if you die with them only in your backpack, you’ll lose them and the quest will not count them. By safe-pocketing, you secure your progress. Note: the objective requires 2 of each item, meaning you must kill at least two of each type of drone. Repeat encounters as necessary: hunt another Snitch elsewhere (or possibly one might spawn during ARC escalations), find additional Hornets/Wasps in another area or another raid. The quest does not require all in one raid; you can do this over multiple deployments. Just make sure each part you collect makes it out safely."
        },
        {
            title: "Phase 6: Multiple Raids (if needed)",
            text: "It’s common not to finish all 6 kills in one go. If you have, say, 2 Wasp Drivers and 1 Hornet Driver and 1 Snitch Scanner and you feel it’s risky to continue, feel free to extract and come back fresh. Your collected items (in Safe Pocket) will persist. On your next raid, target what you’re missing. Maybe you still need one more Snitch – so focus on that first. There’s no penalty for doing it in parts, aside from time. Just keep track of which items you have already. The in- game quest log will update the counts (e.g., 1/2 Hornet Driver). Once you have 2/2 of each required item, you’re ready for the final step."
        },
        {
            title: "Phase 7: Final Extraction with All Parts",
            text: "This is crucial – you must extract with all the collected components for the quest to register as completed. If you die with any required items not safely pocketed, you’ll have to reacquire those. Assuming you’ve pocketed them, even on death you wouldn’t lose them, but you’d still need to finish any remaining kills. Ideally, when the last needed item is obtained, head straight to an extraction point. Don’t risk extra firefights when you’re holding everything. Use your second or third flare as decoy if you worry about being followed during extraction – for example, toss a flare in one direction and then move the opposite way to confuse pursuers or ARC bots. Get out of the raid successfully."
        },
        {
            title: "Phase 8: Turn In the Quest",
            text: "With all six items collected and secured, deliver them to Shani through the quest turn-in. She will reward you handsomely. The loot includes an Origin outfit (Orange Camo color) to customize your Raider’s appearance, 1× Raider Hatch Key (another free escape route for future use), 2× Defibrillators (revive devices, great for co-op or second chances), and a Dam Control Tower Key. The Dam Control Tower Key is especially noteworthy – it likely unlocks a special room or cache on the Dam map, giving you access to high-tier loot in later expeditions. These rewards acknowledge that you’ve proven yourself capable of handling ARC’s aerial threats and multi-part objectives."
        }
    ]
    },
                {
        id: "a-better-use",
        title: "A Better Use",
        trader: "Tian Wen",
        location: "Any map (Dam Battlegrounds recommended for easy access to Call Stations)",
        description: "Tian Wen wants you to call in and loot a supply drop. Supply drops are not guaranteed each raid, so you may need multiple deployments until a Call Station is active.",
        loadout: [
            "Free/expendable loadout (you may need multiple raids)",
            "Dam Battlegrounds is recommended (many Call Station spawns)",
            "Plan your extraction route before calling the drop"
        ],
        briefingMap: "Better Use.png",
        rewards: [
            "Attachment: Extended Light Mag I",
            "Attachment: Stable Stock I",
            "Attachment: Muzzle Brake II"
        ],
        objectives: [
            "Request a Supply Drop from a Call Station",
            "Loot the Supply Drop"
        ],
        phases: [
            {
                title: "Phase 1 - Preparation",
                text: "Accept the mission from Tian Wen. Use a free/expendable kit. Dam Battlegrounds is recommended because Call Stations are easy to reach and you can reset quickly if none are active.",
                image: null,
            },
            {
                title: "Phase 2 - Locate a Call Station",
                text: "Search known Call Station spawns (radio tower icon). Not every station is active each raid; rotate spawns until you find one you can interact with.",
                image: null,
            },
            {
                title: "Phase 3 - Call in the Supply Drop",
                text: "Interact with the active Call Station to fire a red flare. Stay nearby and watch for other Raiders and ARC drawn to the flare while the pod descends.",
                image: null,
            },
            {
                title: "Phase 4 - Secure the Drop",
                text: "When the pod lands, breach/loot it (hold interact). Interacting with the drop completes the requirement; check the contents if it is safe.",
                image: null,
            },
            {
                title: "Phase 5 - Extract and Turn In",
                text: "Extract safely, then return to Tian Wen in Speranza to complete the mission.",
                image: null,
            }
        ],
    },
                {
        id: "what-goes-around",
        title: "What Goes Around",
        trader: "Apollo",
        location: "Any map (Dam Battlegrounds recommended)",
        description: "Apollo wants you to kill any ARC enemy using a Fireball Burner. If you don't already have one, you must loot it from a Fireball ARC first.",
        loadout: [
            "Free/expendable loadout",
            "Bring a Fireball Burner if you already have one",
            "Use the granted Red Light Sticks to distract or lure ARC if needed"
        ],
        briefingMap: "What Goes Around.png",
        rewards: [
            "Reward: Cans backpack charm",
            "Reward: 3× Blaze Grenade",
            "Reward: 2× Noisemaker",
            "Granted: 5× Red Light Stick"
        ],
        objectives: [
            "Destroy any ARC enemy using a Fireball Burner"
        ],
        phases: [
            {
                title: "Phase 1 - Gear Up",
                text: "Accept the mission from Apollo. Use a free kit. If you already own a Fireball Burner, bring it; otherwise plan to loot one during the raid.",
                image: null,
            },
            {
                title: "Phase 2 - Acquire a Fireball Burner",
                text: "Hunt a Fireball ARC (Dam Battlegrounds is a common choice). Dodge its flame burst, focus the glowing core, and loot the remains to obtain a Fireball Burner.",
                image: null,
            },
            {
                title: "Phase 3 - Get a Burner Kill",
                text: "Find another ARC target (POPs or weaker ARCs are reliable). Use the Fireball Burner so the kill credit comes from the fire damage; soften the target first if needed.",
                image: null,
            },
            {
                title: "Phase 4 - Extract and Turn In",
                text: "Extract and return to Apollo to complete the mission.",
                image: null,
            }
        ],
    },
                {
        id: "sparks-fly",
        title: "Sparks Fly",
        trader: "Apollo",
        location: "Any map (Hornets can spawn on all maps; Dam Battlegrounds is a common choice)",
        description: "Apollo challenges you to destroy a Hornet ARC using explosives (Trigger 'Nade or Snap Blast). The final blow must be from an explosive, not gunfire.",
        loadout: [
            "Use the provided explosives: Trigger 'Nade and/or Snap Blast grenades",
            "Free/expendable loadout (Hornet fights can get messy)",
            "Look for Hornets near active ARC areas; avoid long open chases"
        ],
        briefingMap: "Sparks Fly.png",
        rewards: [
            "Reward: Trigger 'Nade Blueprint",
            "Reward: 4× Crude Explosives",
            "Reward: 2× Processor",
            "Granted: 6× Trigger 'Nade",
            "Granted: 2× Snap Blast Grenade"
        ],
        objectives: [
            "Destroy a Hornet ARC using a Trigger 'Nade or a Snap Blast grenade"
        ],
        phases: [
            {
                title: "Phase 1 - Prep Explosives",
                text: "Accept the mission from Apollo and equip the provided Trigger 'Nades / Snap Blasts. Gun kills will not count for the objective.",
                image: null,
            },
            {
                title: "Phase 2 - Find a Hornet",
                text: "Search ARC hotspots for Hornets. Identify them by their buzzing/humming and hovering saucer-like movement. Engage when the area is clear of other threats.",
                image: null,
            },
            {
                title: "Phase 3 - Secure an Explosive Final Blow",
                text: "Set a Trigger 'Nade trap on a wall/doorway and lure the Hornet into range, then detonate. Alternatively, time a Snap Blast to finish the Hornet. The kill must be credited to explosive damage.",
                image: null,
            },
            {
                title: "Phase 4 - Extract and Turn In",
                text: "Confirm the mission updates, extract, and report back to Apollo.",
                image: null,
            }
        ],
    },
                {
        id: "greasing-her-palms",
        title: "Greasing Her Palms",
        trader: "Celeste",
        location: "Dam Battlegrounds, Spaceport, Buried City (one objective on each map)",
        description: "Celeste sends you on a three-map scavenger hunt to check specific locations. Dam requires using the Dam Surveillance Key; the other two steps are location checks without a required pickup.",
        loadout: [
            "Dam Surveillance Key (keep it in your safe pocket)",
            "Free/expendable loadout recommended for Spaceport and Buried City steps",
            "Avoid open sightlines at Spaceport rocket area (very exposed)"
        ],
        briefingMap: [
            "Greasing Her Palms.png",
            "Greasing Her Palms part 2.png",
            "Greasing Her Palms part 3.png"
        ],
        rewards: [
            "Reward: Lure Grenade Blueprint",
            "Reward: 3× Speaker Component",
            "Reward: 3× Electrical Component"
        ],
        objectives: [
            "Dam Battlegrounds: Visit the locked room in the Water Treatment Control building (requires Dam Surveillance Key)",
            "Spaceport: Scope out the rocket thrusters outside the Rocket Assembly area",
            "Buried City: Visit the barricaded area on floor 6 of the Space Travel building"
        ],
        phases: [
            {
                title: "Phase 1 - Dam Battlegrounds (Water Treatment Control)",
                text: "Bring the Dam Surveillance Key and keep it safe. Go to the Water Treatment Control building in southwest Dam. From the main entrance, turn right down the dark hallway, then right again to the locked door under the security camera. Use the key and enter to complete the step.",
                image: "Greasing Her Palms.png",
            },
            {
                title: "Phase 2 - Spaceport (Rocket Assembly Thrusters)",
                text: "Deploy to Spaceport and go to the grounded rocket between Rocket Assembly and Control Tower A6. Stand near the rocket's thrusters at the southwest end to trigger completion. The area is very exposed; move in and out quickly.",
                image: "Greasing Her Palms part 2.png",
            },
            {
                title: "Phase 3 - Buried City (Space Travel Building, Floor 6)",
                text: "Go to Buried City and reach floor 6 of the Space Travel building (north-central). On the 6th floor, pass the 'J. Kozma Ventures' sign, take the second right into the boardroom/conference area, and enter the barricaded (or already-breached) room to complete the step.",
                image: "Greasing Her Palms part 3.png",
            },
            {
                title: "Phase 4 - Extract and Turn In",
                text: "Extract (recommended) and return to Celeste in Speranza to finish the mission and claim rewards.",
                image: null,
            }
        ],
    },
                {
        id: "a-first-foothold",
        title: "A First Foothold",
        trader: "Apollo",
        location: "Blue Gate (four objectives across the map)",
        description: "Apollo asks you to reinforce Raider infrastructure across Blue Gate by completing four on-site repair/activation tasks. These are corner-to-corner objectives, so expect multiple raids.",
        loadout: [
            "Free/expendable loadout (you may split objectives across raids)",
            "Use the granted Noisemakers to distract ARC while interacting",
            "Prioritize extraction after completing 1-2 objectives to bank progress"
        ],
        briefingMap: [
            "A First Foothold.png",
            "A First Foothold part 2.png",
            "A First Foothold part 3.png",
            "A First Foothold part 4.png"
        ],
        rewards: [
            "Reward: 3× Shrapnel Grenade",
            "Reward: 2× Snap Blast Grenade",
            "Reward: 3× Heavy Fuze Grenade",
            "Granted: 2× Noisemaker"
        ],
        objectives: [
            "Stabilize the observation deck near the Ridgeline (eastern Blue Gate)",
            "Enable the comms terminal near the Olive Grove (southern Blue Gate)",
            "Rotate the satellite dishes on the church roof north of the Data Vault (northern Blue Gate)",
            "Nail down the roof plates on the Raider structure near Trapper's Glade (western Blue Gate)"
        ],
        phases: [
            {
                title: "Phase 1 - Ridgeline (Stabilize Observation Deck)",
                text: "Head to The Ridgeline on the far east side of Blue Gate. Interact with the observation deck supports to stabilize it (one interaction completes the step).",
                image: "A First Foothold.png",
            },
            {
                title: "Phase 2 - Olive Grove (Enable Comms Terminal)",
                text: "Go to Olive Grove in the south. Find the raised platform with the orange communication terminal and interact to power it up. Olive Grove can be a player hotspot, so approach carefully.",
                image: "A First Foothold part 2.png",
            },
            {
                title: "Phase 3 - Trapper's Glade (Secure Roof Plates)",
                text: "Move to Trapper's Glade on the west side. Find the partially built Raider structure, climb onto the roof, and interact to nail down the loose metal plates. Use Noisemakers if you need to pull ARC away.",
                image: "A First Foothold part 3.png",
            },
            {
                title: "Phase 4 - Data Vault Church (Align Satellite Dishes)",
                text: "Go north near Data Vault to the hilltop church. Use scaffolding/ladder to reach the roof and interact to rotate/align the satellite dishes.",
                image: "A First Foothold part 4.png",
            },
            {
                title: "Phase 5 - Extract and Turn In",
                text: "You do not need all four in one raid. Extract after completing steps to bank progress, then return to Apollo in Speranza once all objectives are checked off.",
                image: null,
            }
        ],
    },
                {
        id: "dormant-barons",
        title: "Dormant Barons",
        trader: "Shani",
        location: "Any map (Dam Battlegrounds recommended; Baron Husks can also be found on Spaceport and Blue Gate)",
        description: "Shani wants you to loot a dormant Baron Husk. This is not a boss fight - you are scavenging a dead Baron wreck by breaching it and looting its core.",
        loadout: [
            "Free/expendable loadout (you may need to move through open areas)",
            "Bring basic healing; the breach causes a brief flame burst",
            "Prefer west-side Dam Baron Husks for safer approaches"
        ],
        briefingMap: [
            "Dormant Baron.png",
            "Dormant Baron part 2.png"
        ],
        rewards: [
            "Reward: 3× Doorblocker",
            "Reward: 3× Li'l Smoke Grenade"
        ],
        objectives: [
            "Loot a Baron Husk (find a dormant Baron wreck and breach it to retrieve what's inside)"
        ],
        phases: [
            {
                title: "Phase 1 - Locate a Baron Husk",
                text: "Find a Baron Husk (giant spider-like ARC carcass). On Dam Battlegrounds, multiple husks spawn in fixed locations; west-side spawns are generally safer than the northern Breach.",
                image: "Dormant Baron.png",
            },
            {
                title: "Phase 2 - Breach the Husk",
                text: "Climb onto the husk and start the breach interaction on the hatch panel. When the breach completes, immediately jump off and back away - the core erupts in flames briefly.",
                image: "Dormant Baron part 2.png",
            },
            {
                title: "Phase 3 - Loot the Core",
                text: "After the flames subside, climb back up and interact with the husk's center to loot it. This completes the mission objective.",
                image: null,
            },
            {
                title: "Phase 4 - Extract and Report Back",
                text: "Extract to keep any high-tier ARC materials you looted, then return to Shani in Speranza to complete the mission.",
                image: null,
            }
        ],
    },
                {
        id: "mixed-signals",
        title: "Mixed Signals",
        trader: "Shani",
        location: "Any map (Surveyors can spawn on every map; look for the blue data beam)",
        description: "Shani asks you to destroy an ARC Surveyor and recover its dropped data core (the Surveyor Vault). Surveyors are mobile and will flee, so stuns and timing matter.",
        loadout: [
            "Use the granted stuns: Jolt Mines and Showstopper EMP grenades",
            "High-damage weapon recommended for burst damage during transmission",
            "Keep room in inventory for the Surveyor Vault (special slot)"
        ],
        briefingMap: null,
        rewards: [
            "Reward: 1× Photoelectric Cloak",
            "Reward: 1× Raider Hatch Key",
            "Granted: 3× Jolt Mine",
            "Granted: 2× Showstopper"
        ],
        objectives: [
            "Destroy an ARC Surveyor",
            "Obtain 1 Surveyor Vault (loot the core the Surveyor drops)"
        ],
        phases: [
            {
                title: "Phase 1 - Track the Surveyor",
                text: "Scan for a vertical blue beam in the sky - that marks a Surveyor transmitting data. Move toward it while listening for mechanical whirring.",
                image: null,
            },
            {
                title: "Phase 2 - Disable and Destroy",
                text: "Stun the Surveyor with a Jolt Mine or Showstopper, or wait until it is transmitting (beam active) when it stays still and exposes its core. Hit hard with burst damage; avoid chasing it across open ground.",
                image: null,
            },
            {
                title: "Phase 3 - Loot the Surveyor Vault",
                text: "Immediately loot the dropped Surveyor Vault. If possible, secure it in a safe pocket/augment slot so you don't lose it on death.",
                image: null,
            },
            {
                title: "Phase 4 - Extract and Deliver",
                text: "Extract with the Vault and bring it to Shani in Speranza to finish the mission.",
                image: null,
            }
        ],
    },
                {
        id: "what-we-left-behind",
        title: "What We Left Behind",
        trader: "Tian Wen",
        location: "Buried City, Dam Battlegrounds, Spaceport (one objective on each)",
        description: "Tian Wen sends you to abandoned Raider locations across three maps to search containers and investigate specific outposts for anything significant left behind.",
        loadout: [
            "Bring a breaching kit for the Buried City parking garage door",
            "Free/expendable loadout recommended (no special items required to extract)",
            "Extract after each objective to bank progress"
        ],
        briefingMap: [
            "What We Left Behind.png",
            "What We Left Behind part 2.png",
            "What We Left Behind part 3.png"
        ],
        rewards: [
            "Reward: 1× Muzzle Brake II",
            "Reward: 1× Vertical Grip II",
            "Reward: 1× Stable Stock II"
        ],
        objectives: [
            "Buried City: Search 2 containers in the Raider Camp beneath the Parking Garage (northwest Buried City)",
            "Dam Battlegrounds: Search for anything significant in the South Swamp Outpost (west Dam)",
            "Spaceport: Search for anything significant in Bilguun's Hideout (next to Container Storage)"
        ],
        phases: [
            {
                title: "Phase 1 - Buried City (Parking Garage Raider Camp)",
                text: "Go to the northwest Parking Garage. On the ground floor, find the barred door labeled '01' and breach it. Take the zipline down into the buried Raider Camp and loot 2 separate containers.",
                image: "What We Left Behind.png",
            },
            {
                title: "Phase 2 - Dam Battlegrounds (South Swamp Outpost)",
                text: "Go to South Swamp Outpost on the western edge of Dam. Inside the circular building, interact with the pile of documents/papers on the central table to complete the search.",
                image: "What We Left Behind part 2.png",
            },
            {
                title: "Phase 3 - Spaceport (Bilguun's Hideout)",
                text: "Find Container Storage and the yellow ladder on the cement wall. Climb to Bilguun's Hideout and interact with the notes/documents inside to complete the final objective.",
                image: "What We Left Behind part 3.png",
            },
            {
                title: "Phase 4 - Extract and Debrief",
                text: "Extract, then return to Tian Wen in Speranza to complete the mission and claim rewards.",
                image: null,
            }
        ],
    },
                {
        id: "doctors-orders",
        title: "Doctor's Orders",
        trader: "Lance",
        location: "Any map (best farm spots include Dam Battlegrounds and Buried City medical locations)",
        description: "Lance asks you to collect basic medical supplies to prove you're resourceful: Syringe, Antiseptic, Durable Cloth, and Great Mullein. You must bring these items back to turn in.",
        loadout: [
            "Hit medical POIs (Dam Testing Annex; Buried City Hospital/pharmacy)",
            "If available, use safe pockets for collected items",
            "If RNG is bad: Antiseptic and Durable Cloth can be crafted at base (Syringes cannot)"
        ],
        briefingMap: "Doctor's Orders.png",
        rewards: [
            "Reward: 3× Adrenaline Shot",
            "Reward: 3× Sterilized Bandage",
            "Reward: 1× Surge Shield Recharger"
        ],
        objectives: [
            "Collect 1× Syringe",
            "Collect 2× Antiseptic",
            "Collect 1× Durable Cloth",
            "Collect 1× Great Mullein"
        ],
        phases: [
            {
                title: "Phase 1 - Scavenge Medical Supplies",
                text: "Search medical POIs for Syringe, Antiseptic, and Durable Cloth (e.g., Dam Testing Annex; Buried City Hospital or pharmacies). Keep count: 2 Antiseptic, 1 Syringe, 1 Durable Cloth.",
                image: null,
            },
            {
                title: "Phase 2 - Harvest Great Mullein",
                text: "Harvest Great Mullein (medicinal herb) in wet areas. A reliable spot is the Testing Annex basement pool area on Dam; grab at least one.",
                image: null,
            },
            {
                title: "Phase 3 - Extract and Turn In",
                text: "Extract with all required items and deliver them to Lance in Speranza to complete the mission and receive rewards.",
                image: null,
            }
        ],
    },
                {
        id: "medical-merchandise",
        title: "Medical Merchandise",
        trader: "Lance",
        location: "Spaceport, Buried City, Dam Battlegrounds (one objective on each)",
        description: "Lance asks you to loot advanced medical gear from three specific facilities across three maps by searching a set number of containers in each target area.",
        loadout: [
            "Free/expendable loadout (container counts are the objective)",
            "Move quickly through PvP-heavy areas (Spaceport Departure Building)",
            "Team play: container searches count for the whole party"
        ],
        briefingMap: [
            "Medical Merchandise.png",
            "Medical Merchandise part 2.png"
        ],
        rewards: [
            "Reward: Banana Backpack Charm",
            "Reward: 3× Defibrillator",
            "Reward: 3× Vita Shot"
        ],
        objectives: [
            "Spaceport: Search 2 containers in the Departure Building exam rooms",
            "Buried City: Search 3 containers in the Hospital",
            "Dam Battlegrounds: Search 2 containers in the Research & Administration building medical room (first floor)"
        ],
        phases: [
            {
                title: "Phase 1 - Spaceport (Departure Building Exam Rooms)",
                text: "Go to the Departure Building near the Spaceport terminals. On the first floor, find the exam room corridor and loot 2 containers in that section to complete the Spaceport objective.",
                image: "Medical Merchandise.png",
            },
            {
                title: "Phase 2 - Buried City (Hospital)",
                text: "Go to the central Hospital and loot any 3 containers anywhere inside the building to complete the Buried City objective.",
                image: "Medical Merchandise part 2.png",
            },
            {
                title: "Phase 3 - Dam Battlegrounds (R&A Medical Room)",
                text: "Go to the Research & Administration building. Reach the first floor, find the medical room marked with a white cross on green, and loot 2 containers inside/adjacent infirmary offices.",
                image: null,
            },
            {
                title: "Phase 4 - Wrap Up",
                text: "After all three container objectives are complete, return to Lance in Speranza to turn in and claim rewards.",
                image: null,
            }
        ],
    },
                {
        id: "a-reveal-in-ruins",
        title: "A Reveal in Ruins",
        trader: "Lance",
        location: "Buried City (any Pharmacy location)",
        description: "Lance needs a replacement ESR Analyzer from a Buried City pharmacy. Find an ESR Analyzer in a pharmacy and extract with it to deliver it to Lance.",
        loadout: [
            "Weapon you are comfortable with (pharmacies can be contested).",
            "Safe Pocket augment (recommended to secure the ESR Analyzer).",
        ],
        briefingMap: "A Reveal in Ruins.jpeg",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Search for an ESR Analyzer inside any pharmacy in Buried City (in one round).",
            "Extract and deliver the ESR Analyzer to Lance.",
        ],
        phases: [
            {
                title: "Phase 1: Locate a Pharmacy",
                text: "Enter Buried City and locate a pharmacy (look for “Farmacia” signage / green cross). Search the pharmacy, especially behind the front counter (yellow loot box is a common spawn for the ESR Analyzer). Pharmacies are popular loot spots—stay alert for other Raiders and ARC patrols.",
                image: null
            },
            {
                title: "Phase 2: Secure and Extract",
                text: "Pick up the ESR Analyzer manually and keep it safe. Move to a nearby extraction point and extract successfully. If you die before extracting, you will lose the analyzer and must repeat the search.",
                image: null
            }
        ]
    },
                {
        id: "broken-monument",
        title: "Broken Monument",
        trader: "Tian Wen",
        location: "Dam Battlegrounds (Formicai Hills — Scrap Yard / “hallowed ground” site)",
        description: "Tian Wen sends you to a First Wave battleground near the Scrap Yard to recover three relics (compass, video tape, and old field rations). Extract with all three and deliver them to Tian Wen.",
        loadout: [
            "Binoculars or flashlight (to spot containers in dark wreckage).",
        ],
        briefingMap: "Broken Monument.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Reach the hallowed grounds by the Scrap Yard (old First Wave battleground).",
            "Search for a First Wave Compass near the broken-down vehicles.",
            "Search for the First Wave Video Tape near the cylindrical containers.",
            "Search for the Old Field Rations in the nearby Raider camp.",
            "Extract and deliver the Compass, Video Tape, and Rations to Tian Wen.",
        ],
        phases: [
            {
                title: "Phase 1: Reach the Scrap Yard",
                text: "Drop into Dam Battlegrounds and travel to the Scrap Yard area in Formicai Hills (the “hallowed ground” marked by wrecked vehicles and debris). Approach cautiously—ARC scouts or other Raiders may still appear.",
                image: null
            },
            {
                title: "Phase 2: Find the First Wave Compass",
                text: "Search around broken-down vehicles (car husks, tire piles, and nearby containers) for the First Wave Compass.",
                image: null
            },
            {
                title: "Phase 3: Find the First Wave Video Tape",
                text: "Check the cylindrical storage containers (tanks/silos). The Video Tape is commonly in a yellow crate tucked beside or between the cylinders.",
                image: null
            },
            {
                title: "Phase 4: Find the Old Field Rations",
                text: "Search the nearby Raider camp (tents, supply caches, campfire area) for the Old Field Rations, typically in a crate near the camp setup.",
                image: null
            },
            {
                title: "Phase 5: Extract and Deliver",
                text: "After collecting all three relics, head to an extraction point and extract safely. If you die before extracting, you must recollect the items on a new run. Deliver the relics to Tian Wen after extraction.",
                image: null
            }
        ]
    },
                {
        id: "marked-for-death",
        title: "Marked for Death",
        trader: "Tian Wen",
        location: "Buried City (Outskirts — Su Durante Warehouses area, north side)",
        description: "Tian Wen rigged a cache with tracer dye to mark a thief. Find the cache near Su Durante Warehouses, trigger the trap, follow the dye trail to a clue, and complete the mission on-site (no extraction required).",
        loadout: [],
        briefingMap: "Marked for Death.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Reach the Su Durante Warehouses in the Outskirts of Buried City.",
            "Search for Tian Wen’s cache near the warehouses.",
            "Follow the clues (track the trail left by the thief).",
        ],
        phases: [
            {
                title: "Phase 1: Find and Inspect the Cache",
                text: "Travel to Su Durante Warehouses (north outskirts). Locate Tian Wen’s cache outside the warehouse exterior (north side), near the outer wall/loading bays. Interact with the cache to trigger the marker dye and update the next objective.",
                image: null
            },
            {
                title: "Phase 2: Follow the Dye Trail",
                text: "Follow the tracer dye markings/footprints leading away from the cache (reported heading into shrubbery/sand dune). Track them to the nearby bushes/trees and inspect the suspicious object/debris you find at the end of the trail.",
                image: null
            },
            {
                title: "Phase 3: Completion",
                text: "The mission completes immediately after inspecting the clue. Extraction is optional (recommended only to keep any loot you found).",
                image: null
            }
        ]
    },
                {
        id: "straight-record",
        title: "Straight Record",
        trader: "Celeste",
        location: "Dam Battlegrounds (Victory Ridge — EMP trap site)",
        description: "Celeste wants you to disable an old EMP trap at Victory Ridge. Locate the device, activate three nearby power switches, and then shut the trap down. Completion is on-site (no extraction required).",
        loadout: [
            "Use the granted binoculars to scout for threats and locate switch panels.",
            "Free/minimal loadout (optional; completion does not require extraction).",
        ],
        briefingMap: "Straight Record.png",
        rewards: [
            "Granted: Binoculars (mission).",
            "Granted: Defibrillator (mission).",
            "Completion rewards: not specified in reference data.",
        ],
        objectives: [
            "Reach Victory Ridge (the trap site).",
            "Find the old EMP trap at the site.",
            "Disable the three power switches scattered nearby (Switch 1, Switch 2, Switch 3).",
            "Shut down the EMP trap after restoring power.",
        ],
        phases: [
            {
                title: "Phase 1: Locate the EMP Trap",
                text: "Go to Victory Ridge and locate the EMP device (tall, thin machine wrapped in wires among ruins). Interact with it to confirm it has no power and start the switch objectives.",
                image: null
            },
            {
                title: "Phase 2: Switch 1 (North Cliff)",
                text: "Find Switch 1 on the small cliff north of the EMP trap. Circle the base to find a path up and activate the panel on the ledge.",
                image: null
            },
            {
                title: "Phase 3: Switch 2 (East Ruin)",
                text: "Find Switch 2 east of the trap in a partially collapsed concrete structure. Climb to the exposed second floor and activate the panel there.",
                image: null
            },
            {
                title: "Phase 4: Switch 3 (South Tree)",
                text: "Find Switch 3 south of the trap near a large tree (partly hidden at ground level). Activate the panel.",
                image: null
            },
            {
                title: "Phase 5: Shut Down the Trap",
                text: "Return to the EMP device and interact again to shut it down (overload/neutralize). The mission completes immediately; extraction is optional afterward.",
                image: null
            }
        ]
    },
                {
        id: "a-lay-of-the-land",
        title: "A Lay of the Land",
        trader: "Shani",
        location: "The Spaceport (Jiangsu Warehouse → Control Tower A6)",
        description: "Shani needs shipping notes from the Jiangsu Warehouse and a LiDAR Scanner from Control Tower A6. You must extract with 1× LiDAR Scanner and deliver it to Shani (in one round).",
        loadout: [
            "Ample healing supplies (long traversal).",
            "Safe Pocket augment (recommended to secure the LiDAR Scanner).",
            "Comfortable weapons for sustained encounters.",
        ],
        briefingMap: ["Lay of the Land.png", "Lay of the Land part 2.png"],
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Reach the Jiangsu Warehouse (NW Spaceport) (in one round).",
            "Find the shipping notes in the warehouse foreman’s office.",
            "Locate the LiDAR scanners on the upper floor of Control Tower A6 (mid-map).",
            "Extract with and deliver 1× LiDAR Scanner to Shani.",
        ],
        phases: [
            {
                title: "Phase 1: Prepare for a Long Run",
                text: "This mission spans a large portion of Spaceport. Bring sustainment (heals) and consider a Safe Pocket to secure the LiDAR Scanner quest item.",
                image: null
            },
            {
                title: "Phase 2: Retrieve the Shipping Notes",
                text: "At Jiangsu Warehouse, go upstairs to the foreman’s office and interact with the shipping notes on the desk to collect them.",
                image: null
            },
            {
                title: "Phase 3: Retrieve a LiDAR Scanner (Control Tower A6)",
                text: "Travel to Control Tower A6. Expect higher traffic and defenses; a stationary turret may be present inside. Go up to the upper floor and find the LiDAR scanner box in the office/cubicle area. Interact so a scanner drops, then pick up 1× LiDAR Scanner.",
                image: null
            },
            {
                title: "Phase 4: Extract and Deliver",
                text: "With the LiDAR Scanner in inventory (Safe Pocket if possible), extract safely and return to Shani to deliver it. If you die before extracting, you must repeat the run.",
                image: null
            }
        ]
    },
                {
        id: "market-correction",
        title: "Market Correction",
        trader: "Tian Wen",
        location: "Buried City (near Marano Station — southern station area)",
        description: "Tian Wen orders you to locate a rival faction cache near Marano Station and sabotage it. The mission completes on interaction; extraction is not required.",
        loadout: [],
        briefingMap: "Market Correction.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Locate the rival cache near Marano Station (marked with a ribbon).",
            "Sabotage the cache (interact to tamper with/destroy it).",
        ],
        phases: [
            {
                title: "Phase 1: Find the Cache",
                text: "Go to Marano Station (south Buried City). The cache is reported on the north end near a car park, often behind a small metal outbuilding/shack. It may resemble “two trash cans tied together” and be marked with a ribbon.",
                image: null
            },
            {
                title: "Phase 2: Sabotage the Cache",
                text: "Interact with the cache to sabotage it. The objective completes immediately; there is no item to retrieve or deliver.",
                image: null
            },
            {
                title: "Phase 3: Optional Loot / Extract",
                text: "After sabotage, you can continue looting or extract at your convenience. Mission progress is not tied to extraction for completion.",
                image: null
            }
        ]
    },
                {
        id: "keeping-the-memory",
        title: "Keeping the Memory",
        trader: "Celeste",
        location: "Dam Battlegrounds (Formicai Hills — memorial near old ARC wreckage)",
        description: "Celeste sends you to a memorial site near an old ARC wreck in Formicai Hills. Find the missing helmet and return it to the memorial. Completion is on-site (no extraction required).",
        loadout: [
            "Binoculars (optional, to help scan for the helmet near bushes/debris).",
        ],
        briefingMap: "Keeping the Memory.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Reach the wreckage in the Formicai Hills (memorial site).",
            "Search the area for the missing helmet.",
            "Return the helmet to the memorial.",
        ],
        phases: [
            {
                title: "Phase 1: Visit the Memorial Site",
                text: "Travel to Formicai Hills and locate the memorial near the old wreckage. Clear the area and approach to trigger the search objective.",
                image: null
            },
            {
                title: "Phase 2: Find the Missing Helmet",
                text: "Search around the wreckage and nearby bushes/debris. The helmet is reported to be in or under a bush near the crash site. Pick it up when prompted.",
                image: null
            },
            {
                title: "Phase 3: Restore the Memorial",
                text: "Bring the helmet back to the memorial marker and interact to place it back. The mission completes immediately after the helmet is returned; extraction is optional.",
                image: null
            }
        ]
    },
                {
        id: "reduced-to-rubble",
        title: "Reduced to Rubble",
        trader: "Shani",
        location: "The Blue Gate (Highway Collapse → Broken Earth → downed ARC wreckage)",
        description: "Investigate a fresh highway collapse in The Blue Gate. Photograph the collapse, follow the destruction trail through Broken Earth, and inspect the downed ARC machine (Deforester). Extraction may be required depending on mission state; when in doubt, extract after investigation.",
        loadout: [
            "Use the binoculars provided for the mission (photo objective).",
        ],
        briefingMap: [
            "Reduced to Rubble.png",
            "Reduced to Rubble part 2.png",
        ],
        rewards: [
            "Granted: Binoculars (mission).",
            "Reward: Defensive tools (ziplines, barricades, door blockers) — quantities not specified in reference data.",
        ],
        objectives: [
            "Take a photo of the Collapsed Highway (Highway Collapse location).",
            "Go to the Broken Earth area.",
            "Follow the trail of destruction through Broken Earth.",
            "Investigate the unknown ARC machine (downed “Deforester”).",
        ],
        phases: [
            {
                title: "Phase 1: Photograph the Collapsed Highway",
                text: "Go to the Highway Collapse site (SW Blue Gate). Use the provided binoculars/camera objective to take a photo of the collapsed highway segment to complete the first objective.",
                image: null
            },
            {
                title: "Phase 2: Follow the Destruction Trail (Broken Earth)",
                text: "Move toward Broken Earth and follow the visible trail of destruction (flattened trees, gouged earth, scorched marks). Stay alert for roaming threats while tracking the path.",
                image: null
            },
            {
                title: "Phase 3: Investigate the Downed ARC",
                text: "At the end of the trail, inspect the downed ARC wreckage (Deforester). Interact with the investigation prompt(s) on/near the remains to register the clue.",
                image: null
            },
            {
                title: "Phase 4: Extract if Required",
                text: "Some reports indicate the mission completes after investigation without extraction, but mission text may require “investigate and extract.” To be safe, extract after investigating unless the mission completes automatically.",
                image: null
            }
        ]
    },
                {
        id: "with-a-trace",
        title: "With a Trace",
        trader: "Shani",
        location: "The Blue Gate (Barren Clearing and surrounding areas)",
        description: "Return to The Blue Gate to search the Barren Clearing for signs of the group capable of downing major ARC machines. Inspect an adorned wreckage and a communications device. Completion is on-site (no extraction required).",
        loadout: [],
        briefingMap: "With A Trace.png",
        rewards: [
            "Reward: Looting Mk.2 module.",
            "Reward: Medium Shield.",
        ],
        objectives: [
            "Reach the Barren Clearing.",
            "Find signs of who brought down the ARC machines.",
            "Inspect the Adorned Wreckage.",
            "Inspect the communications device.",
        ],
        phases: [
            {
                title: "Phase 1: Survey the Barren Clearing",
                text: "Reach the Barren Clearing and search for signs (tracks, shell casings, graffiti, symbols, arranged scrap). The quest may highlight areas as you approach.",
                image: null
            },
            {
                title: "Phase 2: Inspect the Adorned Wreckage",
                text: "Locate the ARC wreckage that appears deliberately marked/modified (“adorned”). Interact to inspect it and register the clue.",
                image: null
            },
            {
                title: "Phase 3: Inspect the Communications Device",
                text: "Find the discarded communications device (radio/transmitter/datapad) in the area and inspect it to collect intel.",
                image: null
            },
            {
                title: "Phase 4: Completion",
                text: "The mission completes after inspecting the second clue. Extraction is optional and only needed to keep any loot you collected.",
                image: null
            }
        ]
    },
                {
        id: "eyes-on-the-prize",
        title: "Eyes on the Prize",
        trader: "Tian Wen",
        location: "Buried City (near Southern Station — rooftop terrace marked by blue tarps)",
        description: "Power Tian Wen’s surveillance rig by rewiring a rooftop solar panel near Southern Station. You must have 3× Wires in inventory; the mission completes after rewiring (no extraction required).",
        loadout: [
            "3× Wires (required item).",
            "Safe Pocket slot for the 3× Wires (recommended to avoid losing them if downed).",
        ],
        briefingMap: "Eyes on the Prize.png",
        rewards: [
            "Reward: Improved magazine mods for weapons — exact items/quantities not specified in reference data.",
        ],
        objectives: [
            "Have 3× Wires in your inventory (required).",
            "Find the secluded roof terrace near Southern Station (marked by blue tarps).",
            "Rewire the solar panel at the site (consumes 3× Wires).",
        ],
        phases: [
            {
                title: "Phase 1: Prep and Reach the Rooftop",
                text: "Before deploying, move 3× Wires into your inventory (Safe Pocket if possible). Go to Southern Station and locate the rooftop terrace just west of the station (blue tarps). Use stairs/fire escapes/roof routes to reach it.",
                image: null
            },
            {
                title: "Phase 2: Identify the Solar Junction",
                text: "On the terrace, locate the solar panel junction / electrical box with the rewiring interact prompt. Clear any immediate threats before starting the interaction.",
                image: null
            },
            {
                title: "Phase 3: Rewire the Panel (Use 3× Wires)",
                text: "Interact with the junction to rewire the panel. The game consumes 3× Wires from your inventory to complete the objective.",
                image: null
            },
            {
                title: "Phase 4: Completion (No Extraction Required)",
                text: "The mission completes immediately after rewiring. You can extract at Southern Station if desired, but extraction is not required for mission credit.",
                image: null
            }
        ]
    },
    {
        id: "echoes-of-victory-ridge",
        title: "Echoes of Victory Ridge",
        trader: "Celeste",
        location: "Dam Battlegrounds (Victory Ridge area, near West Broken Bridge)",
        description: "Celeste reports that overnight tremors unearthed an old First Wave Raider hideout at Victory Ridge, and she wants you to secure any valuable intel before others do. In particular, she’s after lost battle plans – recovering these historical plans could aid the Raiders’ efforts. Requirement: All must be completed in one raid.",
        rewards: [
            "Not specified in reference data",
        ],
        objectives: [
            "Reach Victory Ridge (West Broken Bridge area on Dam Battlegrounds)",
            "Retrieve the battle plans from the hideout under the broken highway",
            "Deliver Major Aiva’s Patch (the recovered memento) to Celeste",
        ],
        loadout: [
            "Safe Pocket (recommended for mission item)",
        ],
        briefingMap: "Echoes of Victory Ridge.png",
        phases: [
            {
                title: "Phase 1: Reach Victory Ridge",
                text: "Spawn into Dam Battlegrounds and head for the West Broken Bridge region in the north. Victory Ridge corresponds to the area around the western broken highway bridge (you may recall visiting this spot during the “Straight Record” quest). Look for a broken section of elevated highway labeled “West Broken Bridge” on your map. Once you arrive at the ridge, the objective will update.",
                image: "Echoes of Victory Ridge.png"
            },
            {
                title: "Phase 2: Retrieve the Battle Plans",
                text: "At Victory Ridge, locate the newly exposed hideout underneath a collapsed highway segment. The entrance is somewhat hidden: face south under the broken highway and you’ll spot a small alcove with a yellow interaction prompt on a metal box. Interact with this cache to retrieve Major Aiva’s Patch, the fallen Raider’s unit patch that contains the battle plans. (Tip: The hideout is easy to miss – approach from the north looking south to see the opening clearly.) No special enemy spawns are triggered here, but remain alert for ambient ARC units or rival Raiders in the area.",
                image: null
            },
            {
                title: "Phase 3: Deliver the Patch",
                text: "With Major Aiva’s Patch in hand, your task is to exfiltrate safely and return it to Celeste. It’s recommended to stow the Patch in a Safe Pocket (if your loadout has one) immediately after picking it up. This ensures you won’t lose the item if you’re downed. Plan your extraction route: the Swamp Hatch or Generator Hall lifts are common exfil points on the Dam map. Both can be hot zones – Rocketeer drones often patrol near the swamp and Generator Hall exits. Move cautiously, use cover to avoid their rockets, and consider extracting during a lull in enemy activity. Once you successfully extract, return to Celeste in Speranza to hand over the patch and complete the mission.",
                image: null
            }
        ]
    },
    {
        id: "industrial-espionage",
        title: "Industrial Espionage",
        trader: "Tian Wen",
        location: "Buried City (Outskirts district near the Gas Station)",
        description: "After securing his own caches from recent raids, arms dealer Tian Wen decides to turn the tables on a rival. In this mission, Tian Wen enlists you to infiltrate a competitor’s weapon stash in Buried City, plant a bug, and leave behind a “gift” – one of Tian Wen’s Burletta pistols – to mislead and spy on the competition. Note: Upon accepting the quest, you are granted a basic Burletta I pistol to use as the decoy item.",
        rewards: [
            "Not specified in reference data",
            "Granted on accept: Burletta I pistol (decoy item for planting)",
        ],
        objectives: [
            "Find Tian Wen’s weapon cache near the Gas Station in the Outskirts (Buried City)",
            "Deliver a Burletta handgun to the rival’s weapon cache",
            "Plant a listening bug on the rival’s cache",
        ],
        loadout: [
            "Not specified in reference data",
        ],
        briefingMap: "Industrial Espionage.png",
        phases: [
            {
                title: "Phase 1: Locate Tian Wen’s Cache",
                text: "Deploy to Buried City and make your way to the Outskirts area, where a Gas Station is a prominent landmark. Tian Wen’s personal weapon cache is hidden near this gas station. Approach the station and look for a stash container or prompt (often tucked behind buildings or under debris). Finding Tian’s cache serves as a marker for the rival drop-off point to come. There’s no item to collect here; simply discovering the location advances the mission.",
                image: "Industrial Espionage.png"
            },
            {
                title: "Phase 2: Deliver the Burletta (Rival Cache)",
                text: "Next, travel to the rival gang’s weapon cache. It’s located in Buried City – Tian Wen’s hint suggests it’s at one of his rival’s drop-off points in the city. (Listen for any additional clues Tian Wen gives over comms as you move; he may reiterate the general area of the drop.) When you find the rival cache – likely a storage box or container marked with a yellow interact prompt – place the Burletta pistol inside. Use the Burletta provided (or any spare one; just don’t use a custom-upgraded Burletta of your own, as Tian Wen warned 20 ). Interact with the cache to deposit the handgun, faking a delivery as if you were one of their couriers.",
                image: null
            },
            {
                title: "Phase 3: Plant the Listening Device",
                text: "Immediately after stashing the weapon, plant the bug on the cache. There should be a second prompt to “Plant Device” or similar. Activate it to slip a listening device into the rival’s stash. This bug will let Tian Wen eavesdrop on the competition’s activities. Once the bug is planted, the mission objectives will be complete. Extraction: Since you haven’t picked up any physical item, you technically just need to survive long enough for the quest to register completion. It’s wise to head to an extraction point and leave safely to ensure the quest progress isn’t lost. Fortunately, with the bug planted, you won’t be carrying contraband – you can engage other Raiders or ARC freely on your way out. Still, caution is advised: make a stealthy exit to avoid any last-minute firefights near exfil. Return to Tian Wen in base to finalize the quest and claim your reward. (Note: This quest does not explicitly require a single-round completion, but it’s most efficient to do all steps in one deployment. If needed, you could locate the cache in one run and deliver the bug in another. However, doing it in one go avoids giving the rival time to discover the intrusion.)",
                image: null
            }
        ]
    },
    {
        id: "unexpected-initiative",
        title: "Unexpected Initiative",
        trader: "Tian Wen 22",
        location: "Buried City (Grandioso Apartments & Piazza Roma)",
        description: "Tian Wen surprises the team with a benevolent project: setting up a greenhouse to boost food production for Speranza. Officially, he insists he’s just doing Celeste “a solid” and not going soft. Regardless, he needs two pieces of equipment from topside – a Moisture Meter and a Nutrient Meter – and he wants them retrieved in one outing. Time to scale some rooftops in Buried City and gather these agricultural devices for Tian Wen’s initiative. Requirement: All in one round.",
        rewards: [
            "Not specified in reference data",
        ],
        objectives: [
            "Reach the Grandioso Apartments in Buried City",
            "Search the rooftop of Grandioso Apartments for a Moisture Meter",
            "Reach Piazza Roma in Buried City",
            "Search the broken rooftop gardens at Piazza Roma for a Nutrient Meter",
            "Deliver both the Moisture Meter and Nutrient Meter to Tian Wen (extract with both items)",
        ],
        loadout: [
            "Zipline",
            "Safe Pocket (recommended for mission item)",
        ],
        briefingMap: "Unexpected Initiatives.png",
        phases: [
            {
                title: "Phase 1: Grandioso Apartments",
                text: "Find the Moisture Meter: Make your way to the Grandioso Apartments, a large apartment complex on the western side of Buried City (it’s in the southwest quarter of the map). Enter the building and locate a zipline that leads up toward the higher floors. Ride the zipline and climb any remaining interior stairwells to access the rooftop. Once on the roof, search around for gardening supplies – the Moisture Meter is hidden near a couple of pots filled with soil in a corner of the roof. Look for a yellow “Search” prompt by those planters and interact to retrieve the Moisture Meter device. (Be on guard: Buried City rooftops can sometimes host Scavenger drones or snipers, though no specific enemy is scripted here. Clear any threats before taking time to search.)",
                image: "Unexpected Initiatives.png"
            },
            {
                title: "Phase 2: Piazza Roma",
                text: "Find the Nutrient Meter: The second item is in Piazza Roma, which lies north of Grandioso in Buried City. Piazza Roma features broken rooftop gardens atop a partly ruined building. To reach it, find the zipline in the area that goes up to the building with overgrown roof terraces. Take the zipline or otherwise climb up (there may be multiple entry points, but the zipline is fastest 30 ). Navigate through the upper floors until you emerge in the shattered rooftop garden. You’re looking for the Nutrient Meter near some farming remnants – it’s often found beside a water tank or large tub of dirt on the roof. Use the interaction prompt to search and collect the Nutrient Meter. (Again, watch for any roaming enemies; this high vantage could attract a flying Snitch drone or ARC unit, so secure the area if needed.)",
                image: "Unexpected Initiatives part 2.png"
            },
            {
                title: "Phase 3: Extraction with Both Meters: With both the Moisture Meter and Nutrient Meter in your possession, you must extract safely to deliver them to Tian Wen. Carrying two quest items is challenging",
                text: "you can only stash one item in your Safe Pocket (if you have an augment that provides a second safe slot, that helps, but most players can secure only one item). It’s recommended to put one meter in your Safe Pocket and keep the other in your backpack. Because you risk dropping the second item if you die, consider taking a stealthy approach to extraction: avoid unnecessary combat and choose an exfil point that is less likely to be camped by hostiles. The Generator Hall elevator or Old Town hatch (if available) are potential extraction points in Buried City. Move quickly – there’s no time limit, but staying longer increases risk. Once you successfully extract, head back to Tian Wen at base. He will gratefully (if a bit gruffly) accept the devices, completing the mission. (If for some reason you only secured one of the meters before extracting, you’ll have to redo the quest in a fresh raid – both must be delivered together in one round.) Tips: This quest is a rooftop treasure hunt – pack a Zipline or two in your gear. Tian Wen even hints that climbing gear will help (“put the scanners pretty high up, so you may want to bring a zipline” applies similarly here). Also note that as of late 2025, a bug occasionally caused objectives not to tick off even after picking up the items. If you’ve collected both meters and the quest still shows incomplete, return to base and verify with Tian Wen; if it remains unfinished, you may need to repeat the quest. Hopefully, this issue has been fixed by current patches.",
                image: null
            }
        ]
    },
    {
        id: "a-symbol-of-unification",
        title: "A Symbol of Unification",
        trader: "Celeste 37",
        location: "Dam Battlegrounds (Formicai Outpost & Red Lake area)",
        description: "Celeste recalls that during the First Wave war, the Raiders rallied under a makeshift flag – a simple scrap of cloth that nonetheless boosted morale and reminded everyone they weren’t alone. Now she wants to revive that symbol of unity. In this mission, Celeste sends you to recover the old Raider flag from a derelict outpost and proudly hoist it where all can see, as a reminder of the solidarity that once bound the survivors. Requirement: All in one raid.",
        rewards: [
            "Not specified in reference data",
        ],
        objectives: [
            "Reach the Formicai Outpost in Dam Battlegrounds",
            "Locate the Raider flag stored at the Formicai Outpost",
            "Hoist the flag on the small platform overlooking the Red Lake (Dam Battlegrounds)",
        ],
        loadout: [
            "Not specified in reference data",
        ],
        briefingMap: "A Symbol of Unification.png",
        phases: [
            {
                title: "Phase 1: Infiltrate Formicai Outpost (Find the Flag)",
                text: "Head to the Formicai Outpost in Dam Battlegrounds. (Formicai Outpost is in the northern part of the Dam map – likely near the Formicai Hills area, which is adjacent to the Red Lake.) Upon reaching the outpost, be prepared to deal with any local ARC presence; outposts often have a few lingering machines. Your goal is to find the Raider flag that Celeste left behind. Search inside the outpost’s structures, especially around living quarters or storage areas. According to other Raiders, the flag is tucked in a duffel bag on a medical cot at the outpost. Look for a bed or cot with a bag on it; a yellow search prompt should appear once you’re close. Interact to retrieve the Raider Flag item. (The flag doesn’t take up a weapon slot but you will need to carry it as a mission item.)",
                image: "A Symbol of Unification.png"
            },
            {
                title: "Phase 2: Hoist the Flag (Red Lake Platform)",
                text: "With the flag in hand, make your way to the designated platform overlooking Red Lake. The quest marker will guide you to a small balcony or ledge near the outpost that has a clear view of the reddish lake below. This is the spot Celeste wants the flag raised. Climb up to the platform – it might be an upper floor of a ruined building or a scaffold; if needed, use a Grapple or jump from a nearby ledge. Once on the platform, approach the flagpole or mount and interact with the prompt to hoist the flag. Your character will raise the tattered Raider banner high. There’s a brief moment to take in the sight – you’ve just placed a visible symbol of hope in the war-torn landscape.",
                image: null
            },
            {
                title: "Phase 3: Extraction: After hoisting the flag, the mission completes immediately (a celebratory cutscene “A Symbol of Unification” will play upon completion 45 ). There is no physical item to extract, but you should still leave the area safely. Any nearby ARC may be alerted by the activity, so be careful on your way to an extraction point. However, even if you fall in combat after raising the flag, the quest should count as completed since the flag is already raised. For good measure (and to secure any loot you found), get to an exfil hatch or elevator and return to base. Celeste and the Raiders will surely notice the flag flying on their next topside excursion. Strategy Notes: This mission is more about navigation than combat, but remain vigilant. The Formicai Outpost could have an ARC patrol (e.g., a few Scouts or a dormant Husker)",
                text: "deal with threats quietly if possible. When raising the flag, you’ll be exposed on a high platform; scan for any Sniper or Rocketeer ARC in the vicinity before you climb up. The sight of the flag won’t buff you in gameplay, but it’s a major lore moment – enjoy it! Celeste’s hopes of rekindling unity rest on that simple banner you’ve raised.",
                image: null
            }
        ]
    },
    {
        id: "celestes-journals",
        title: "Celeste's Journals",
        trader: "Celeste 48",
        location: "Dam Battlegrounds (South Swamp Outpost & Raider Outpost East)",
        description: "Speranza’s normally unflappable leader, Celeste, has a personal favor to ask. She’s misplaced two of her journals – diaries she kept during the early Arc War – while inspecting outposts topside. Embarrassed by the lapse, she asks you to retrieve them discreetly before someone else finds them and reads her private thoughts. The mission is a scavenger hunt across Dam Battlegrounds to recover these sentimental (and potentially sensitive) journals. Requirement: All in one raid.",
        rewards: [
            "Not specified in reference data",
        ],
        objectives: [
            "Retrieve Celeste’s journal from the South Swamp Outpost (southwestern Dam)",
            "Retrieve Celeste’s journal from the northern outpost overlooking Red Lakes (Raider Outpost East, in",
            "Deliver both Journal items to Celeste (extract with both in one run)",
        ],
        loadout: [
            "Safe Pocket (recommended for mission item)",
        ],
        briefingMap: ["Celeste's Journal.png", "Celeste's Journal part 2.png"],
        phases: [
            {
                title: "Phase 1: South Swamp Outpost",
                text: "First Journal: Travel to the South Swamp Outpost, located in the west/ southwest region of Dam Battlegrounds. This outpost lies southwest of the Hydroponic Dome complex and just north of some large water towers in the swamp. Once you find the outpost (a small bunker-like structure amid the swamp), head inside its entrance room. The first of Celeste’s journals is relatively easy to find: look in the entry area for a bunk or bed with a yellow prompt that says “Search for journals.” Indeed, there is a cot in the small front room of the outpost where Celeste likely set the journal down. Activate the prompt to search, and Celeste’s Journal (Item 1) will pop out onto the bed for you to pick up. Grab the journal. (It occupies your quest item slot – similar to other quest loot – so plan to carry it along.) There is no special enemy encounter here beyond whatever roaming enemies the swamp might already have. Still, clear out any nearby ARC units (leeches or grunts often lurk in swamps) so you aren’t ambushed during the search.",
                image: null
            },
            {
                title: "Phase 2: Northern Outpost (Red Lakes)",
                text: "Second Journal: Next, you’ll head to the northern outpost overlooking the Red Lakes. This is known on the map as Raider Outpost East, situated in the northeast corner of Dam Battlegrounds. It’s east of the Power Generation Complex and the Generator Hall area, perched on higher ground near the Red Lake area. The outpost structure here is almost identical to the South Swamp Outpost (a tiny one-room bunker). Enter the outpost’s small interior and check immediately to your left (near the doorway or along the wall) for another bed or sleeping mat. Just like before, you should see a yellow “Search for journals” prompt at a bed in the entry area. Interact to search and spawn the second Celeste’s Journal (Item 2). Pick up the journal. Celeste now owes you big – but you’re not done yet! With both diaries in hand, you need to get out alive to return them.",
                image: null
            },
            {
                title: "Phase 3: Escape with the Journals: Now comes the challenging part",
                text: "extracting with two quest items. You can only secure one item in a Safe Pocket at a time, so one journal can be safeguarded but the other will be in your inventory and dropped if you die. Because of this, Celeste herself suggests not overburdening yourself with valuable gear on this run – consider bringing a free (disposable) loadout so that if you’re killed, you only risk the mission and not your personal arsenal. With both journals, head for the nearest extraction point. The Generator Hall lift is relatively close to Raider Outpost East (the second journal site), making it a tempting exit – but be cautious. Generator Hall is notoriously “spicy” (highly contested); other raiders often extract there, and a Rocketeer patrols the area frequently. If you choose Generator Hall, time your run: ideally go when it’s quiet, or after any Arc storm passes. Use cover to avoid the Rocketeer’s line of sight. Alternatively, you might backtrack to the Swamp extraction hatch you used earlier (if still open) or another exit like the Hydroponics elevator. Moving with stealth is key – avoid engagements since a firefight could attract ARC or enemy players. If you do encounter resistance, remember you can drop one journal (temporarily) to fight more freely, but that’s risky; it’s better to sneak. Once you successfully extract, return to Celeste in Speranza. She will be extremely relieved to have her lost journals back 55 – and perhaps a bit red-faced. Mission complete. (If you fail to extract and lose one or both journals, you’ll have to retry the mission. Both diaries must be collected anew in a fresh raid. As Celeste quipped, “we’ll pretend I never lost them” – meaning discretion is expected, so try not to let every Raider on the surface know you’re carrying her personal diaries!)",
                image: null
            }
        ]
    },
    {
        id: "back-on-top",
        title: "Back on Top",
        trader: "Tian Wen 58",
        location: "Multi-region – Dam Battlegrounds, Buried City, The Spaceport, and The Blue Gate (one target",
        description: "In an exciting development, the Raiders plan to establish new outposts topside. Shani has roped Tian Wen into helping scout locations, and Tian Wen is surprisingly enthusiastic about the idea of reclaiming ground above. He provides you with a list of four strategic buildings across different regions to mark as potential outpost sites. Armed with spray paint, you’ll tour the Dam, Buried City, Spaceport, and Blue Gate to literally “mark” the spots for the construction crews. It’s a multi-stage mission that symbolizes the Raiders getting “back on top” – returning to the surface in force. Note: These four sub-tasks can be done in any order and over multiple raids – you do not need to complete all in one deployment. Each marked location is saved toward the quest.",
        rewards: [
            "Not specified in reference data",
        ],
        objectives: [
            "In Dam Battlegrounds: Mark the Pattern House building",
            "In The Blue Gate: Mark the white lookout tower south of the Warehouse Complex",
            "In The Spaceport: Mark the South Trench Tower structure",
            "In Buried City: Mark the building with the mural in the Buried Properties area",
        ],
        loadout: [
            "Not specified in reference data",
        ],
        briefingMap: "Back on Top.png",
        phases: [
            {
                title: "Phase 1: Dam Battlegrounds",
                text: "Pattern House: Load into Dam and head to the Pattern House, which is located in the north of the Dam map, north of the Generator Hall and Power Generation Complex, and just east of West Broken Bridge. The Pattern House is a tall, distinctive building (you might recognize it by the eye-pattern graffiti adorning it 64 ). When you arrive, you’ll see multiple yellow spray-paint markers around the base of the building’s exterior walls. Interact with any of these prompts to “mark” the building with Raider paint. (Your character will spray a symbol or X to tag it for outpost setup.) Only one mark is needed – once done, the Pattern House objective will complete. Enemy presence: The Pattern House is in a relatively open area; be wary of sniper drones or ARC snitches in the sky. Marking takes only a second, but do a quick scan for threats before exposing yourself on the building’s perimeter.",
                image: "Back on Top.png"
            },
            {
                title: "Phase 2: Buried City",
                text: "Mural Building (Buried Properties): Next, in Buried City, make your way to the Buried Properties district on the east side of the map. The target is “the building with the mural, just north of Buried Properties”. Specifically, look for a low concrete building that has a large mural (graffiti artwork) on one of its walls, with some scaffolding around it and a billboard behind it. This spot is east of Town Hall and southeast of the Galleria, right on the northern edge of the Buried Properties zone. When you find the brightly painted mural wall, approach it and look for the yellow paint marker. Interact to mark the mural building. This tags the structure for outpost use. Enemy presence: Buried City’s eastern area can be active – watch for ARC patrols like packs of Scavengers or an occasional Leaper. There’s also potential player traffic due to nearby landmarks. Use the surrounding low cover and scaffolds; you only need a moment to spray the mark.",
                image: "Back on Top part 2.png"
            },
            {
                title: "Phase 3: Spaceport",
                text: "South Trench Tower: In The Spaceport map, you’ll mark the South Trench Tower, which lies in the northern part of Spaceport, north of the massive Launch Towers. The South Trench Tower is a tall structure at the edge of a trench network. As you approach, note that this area can be dangerous: a Leaper or Rocketeer often patrols near the trench, and sometimes a hanging Sentinel drone is attached to the tower itself. Clear any immediate threats or sneak past them to get to the tower. You’ll want to be on the raised side of the trench (not down in the trench pit) to find the marking spots. On the concrete base of the South Trench Tower (above the trench), look for the yellow spray prompts. There are several along the sides of the tower’s base. Choose one and mark the South Trench Tower. Enemy presence: As mentioned, this is a “hot” location. It’s wise to take out the Sentinel (the flying camera drone) quietly if it’s present, as it can call reinforcements. If a Rocketeer is patrolling, you might try to avoid or quickly mark and retreat rather than engage – fighting a Rocketeer in the open trench area is risky. Use cover from the trench walls if you must fight.",
                image: "Back on Top part 3.png"
            },
            {
                title: "Phase 4: Blue Gate",
                text: "White Lookout Tower: Finally, in The Blue Gate region, you need to find a white lookout tower south of the main Warehouse Complex. This one is a bit tricky since it’s not a named POI on the map. From the Warehouse Complex (central Blue Gate), head directly south toward a hilly area north of the Maintenance Bunker. The lookout tower is somewhat concealed by a hill until you get close. It’s a white-painted, relatively small tower structure that overlooks a concrete ravine. A clue is that it’s near the Overlook Shaft extraction point – if you know that exfil, go to the Overlook Shaft then move slightly north from it, down into a little depression where a second short tower stands. That short, whitish tower is the target. Run alongside it to reveal the yellow interaction marker on its side, and spray-mark the lookout tower. Once this last one is tagged, the “Back on Top” quest will complete. Enemy presence: Blue Gate’s wilderness often has fewer ARC, but it’s not without danger. A Flier or pack of Hounds could wander near the tower. Also, since Blue Gate is less populated by players, you might be alone here – which is good for stealth, but also means no help if ARC show up. Stay alert, mark quickly, and then exfil. After marking all four locations (in any sequence), report back to Tian Wen. He’s pleased that the buildings are marked and ready for new outposts, though he cautions that maintaining a topside presence will be challenging. This mission’s completion is a pivotal step for the Raiders’ expansion, unlocking the next phase of Shani’s plans.",
                image: "Back on Top part 4.png"
            }
        ]
    },
    {
        id: "the-majors-footlocker",
        title: "The Major's Footlocker",
        trader: "Tian Wen 80",
        location: "Dam Battlegrounds (apartments northwest of The Dam structure)",
        description: "Tian Wen turns to a deeply personal task: recovering a keepsake of his mother, Major Aiva. Aiva was a First Wave resistance fighter, and Tian Wen secretly hoped your earlier quests might turn up something of hers. Now, with new info in hand, he directs you to an old apartment complex in Dam Battlegrounds – rumored to be where his mother bunkered down during the war. Your mission is to search that location for Major Aiva’s mementos (her footlocker contents) and bring them back to Tian Wen. It’s a touching errand that reveals a softer side of the grizzled trader. Requirement: In one round.",
        rewards: [
            "Hullcracker weapon blueprint",
        ],
        objectives: [
            "Search the apartments NW of the Dam for Major Aiva’s mementos",
            "Deliver Major Aiva’s Mementos to Tian Wen",
        ],
        loadout: [
            "Safe Pocket (recommended for mission item)",
        ],
        briefingMap: "The Major's Footlocker.png",
        phases: [
            {
                title: "Phase 1: Search the Northwest Apartments (Find the Footlocker): Deploy to Dam Battlegrounds and move toward the northwestern quadrant of the map, near the Dam itself. Tian Wen’s intel pinpoints an apartment building known as the Ruby Residence or Pale Apartments (these names came up in his info) in that NW area. Essentially, you’re looking for a cluster of apartments just north or west of the Dam’s massive wall. Once you locate the likely building (it might be a multistory residential block), begin your search floor by floor. The item you seek is referred to as Major Aiva’s Footlocker contents, but in gameplay it will appear as a generic container or prompt. Check rooms for anything out of place",
                text: "for example, a military footlocker trunk or a shining yellow prompt on furniture. According to other Raiders, the objective tends to spawn on an upper floor (reports say 3rd floor of one apartment building). So climb stairs or use any accessible ladder to reach the higher levels. Look for the apartment unit where Aiva stayed; it might have subtle clues like Raider graffiti or equipment. When you find a prompt like “Search for mementos”, activate it to search Aiva’s stash. Major Aiva’s Mementos (likely a small personal item such as dog tags or a pendant) will drop onto the floor. Pick up this quest item. Tian Wen’s reaction upon retrieval suggests it’s something immediately recognizable as his mother’s (possibly her service tags or a keepsake). Tips: The search area is an open-world environment, so enemies might be present. The Dam’s northwest zone can spawn ARC guardians or patrols. Move carefully through tight corridors – a Shotgun or SMG is useful for close quarters if you run into ARC Scouts inside. If the building has multiple entries, secure or trap one entrance to avoid surprises from rival players. Remember, your clue is that Aiva’s bunker was around “Ruby Residence” – some buildings in Arc Raiders have signs or names; keep an eye out for any identifying markers.",
                image: "The Major's Footlocker.png"
            },
            {
                title: "Phase 2: Deliver the Mementos (Extract Safely): After securing Aiva’s memento, you must extract to deliver it to Tian Wen. The item occupies your quest slot (one item), so you can place it in a Safe Pocket if you have one to ensure it’s not lost on death. Given the personal importance of this item, do everything you can to survive. Exfil options in the Dam’s northwest include the Dam elevator (if you have clearance to extract through the Dam facility) or you may trek back to a safer point like the Swamp hatch. The Generator Hall lift is more to the east",
                text: "reachable, but if it’s hot with enemies (as it often is), it might be wiser to pick a different route. Use stealth and cover; avoid engaging ARC heavies like Rocketeers. If you encountered no resistance on the way in, don’t let your guard down on the way out – other Raiders might be about. Once you successfully extract with Major Aiva’s Mementos, return to Speranza and talk to Tian Wen. In a rare show of emotion, Tian Wen is profoundly grateful: “That’s hers… I thought it’d be gone forever. You don’t know what it means to have it back”. You’ve not only completed the quest but also delivered a piece of personal history back to its owner. Reward-wise, Tian Wen gives you the Hullcracker weapon blueprint for your effort, but the real reward was earning his trust. (This mission sheds light on Tian Wen’s background – “mum” Aiva was a Raider Major. The subtitles and Tian Wen’s voice lines may use “mum”/“mom” interchangeably due to regional phrasing, but in all cases he’s referring to his mother, Aiva.)",
                image: "The Major's Footlocker part 2.png"
            }
        ]
    },
    {
        id: "out-of-the-shadows",
        title: "Out of the Shadows",
        trader: "Shani 89",
        location: "Any map (Rocketeers can appear in Dam, Spaceport, Buried City, etc. – no fixed location)",
        description: "With the Raiders becoming bolder topside, Shani decides it’s time to take down one of the ARC’s deadliest patrol units – the Rocketeer. These hulking machines rain down rockets and have long terrorized anyone on the surface. Shani calls on you, a battle-tested Raider, to step out of the shadows and face a Rocketeer head-on. The goal: destroy it and recover its Rocketeer Driver, a component that could help the Raiders understand (or even repurpose) the tech. This mission is a single-objective hunt – challenging, but a necessary show of force.",
        rewards: [
            "Granted on accept: Medium Shield",
            "Granted on accept: Combat Mk.2 rifle",
            "Surge Shield Rechargers",
        ],
        objectives: [
            "Destroy a Rocketeer (ARC heavy unit)",
            "Obtain a Rocketeer Driver (loot the component from its wreckage)",
        ],
        loadout: [
            "Not specified in reference data",
        ],
        briefingMap: "Out of the Shadows.png",
        phases: [
            {
                title: "Phase 1: Hunt and Destroy a Rocketeer",
                text: "First, you’ll need to find a Rocketeer. These are large bipedal ARC machines equipped with rocket launchers; they’re often wandering high-threat zones or guarding valuable areas. Common Rocketeer spawn points include: near the Swamp extraction in Dam Battlegrounds (they patrol the boggy areas), around the Launch Tower fields in Spaceport, or other open areas where they can get line-of-sight. There’s an element of luck – if your map doesn’t have an active Rocketeer, you may need to redeploy or roam until one spawns. Once you locate a Rocketeer, engage it with caution. Cover and mobility are crucial. Shani advises you to keep something solid between you and the Rocketeer’s rockets, and to stay quick on your feet. Use buildings, ruins, or large rocks as cover; pop out to fire and duck back in before the incoming salvo hits. Aim for the Rocketeer’s weak points (if any are exposed – often the sensor array or joints). Heavy weapons like LMGs, explosives, or precision rifles work well. If you have teammates, coordinate flanks to confuse its targeting. During the fight, ensure you’re not also drawing other ARC units; clear any smaller enemies first, so you can focus on the big guy. Rocketeers usually don’t come in pairs, so you should only have one to deal with. Keep moving – if you stay still, a rocket will find you. Use dodge rolls or jump jets (if available) to evade splash damage. After enough sustained damage, the Rocketeer will collapse in a fiery heap.",
                image: "Out of the Shadows.png"
            },
            {
                title: "Phase 2: Recover the Rocketeer Driver",
                text: "Approach the downed Rocketeer’s wreckage and loot it to obtain the Rocketeer Driver item (it might appear automatically on death, or as a prompt on the corpse). The Driver is the quest item Shani wants, likely a piece of its control unit or targeting system. Pick it up quickly, but remain alert – the explosion may attract other ARC or even opportunistic players. The quest will update once the Driver is in your inventory.",
                image: null
            },
            {
                title: "Phase 3: Survive and Deliver",
                text: "Now that you’ve got the Driver, you need to extract to secure it. The mission doesn’t explicitly say “deliver to Shani” in objectives, but effectively you must bring it back to base (Speranza) to complete the quest. The Rocketeer Driver is a single quest item; stash it in your Safe Pocket if possible to ensure it’s not lost. Make your way to the nearest extraction point. If the fight drew a lot of attention, consider relocating to a quieter exfil. For example, if you fought the Rocketeer on Dam near the swamp, maybe avoid the swamp hatch if it’s likely swarming and try the Dam elevator or vice versa. As you move, Shani continues to give encouragement and tips (“Find solid cover… a single misstep can be curtains” she warns during the mission) 95 – heed her advice until you’re safely off the map. Once extracted, report to Shani. She will commend you: she “can scarcely believe” you took down a Rocketeer, and notes that it proves the Raiders might “stand a chance after all”. Hand over the Driver to complete the quest. Loadout & Tactics: Before starting this mission, equip yourself for a boss fight. Shani actually supplies some gear upon accepting the task: you’ll receive a Medium Shield and a Combat Mk.2 rifle for free 97 – use them if you don’t have better. A Medium Shield helps absorb a direct rocket hit if you get caught out. Additionally, consider carrying Surge Shield Rechargers (rewarded from this quest) or other healing, since rockets can chunk your health. One effective tactic against Rocketeers is to shoot them when they pause to aim; their chest opens slightly – a well-placed sniper round or explosive can stagger them. Lastly, always have an exit plan (nearby cover or a ditch) for when you see a rocket headed your way. Completing “Out of the Shadows” is as much about smart survival as it is about firepower.",
                image: null
            }
        ]
    },
    {
        id: "eyes-in-the-sky",
        title: "Eyes in the Sky",
        trader: "Shani 99",
        location: "Multi-region – Dam Battlegrounds, The Spaceport, and Buried City (one installation per map)",
        description: "In the ongoing effort to monitor ARC activity, Shani wants to set up a network of LiDAR scanners at high vantage points across the region. These scanners will help detect ground tremors and ARC movements from afar. Previously, you obtained a LiDAR device in “A Lay of the Land”; now you’ll put them to use. The mission involves installing LiDAR scanners atop tall structures in Dam Battlegrounds, Spaceport, and Buried City. Shani notes that this job will require a head for heights and suggests bringing a zipline or two for the climb. Note: You are provided 1× Zipline item when you start this quest, to help reach high places. Each objective can be done in separate runs; not required in one round.",
        rewards: [
            "Tagging Grenades",
            "Vita Spray",
            "Light sticks",
        ],
        objectives: [
            "In Dam Battlegrounds: Install a LiDAR Scanner at the top of the Control Tower",
            "In Spaceport: Install a LiDAR Scanner at the Communications Tower",
            "In Buried City: Install a LiDAR Scanner on top of the Galleria sign",
        ],
        loadout: [
            "Zipline (quest provides 1×)",
        ],
        briefingMap: "Eyes in The Sky.png",
        phases: [
            {
                title: "Phase 1: Dam",
                text: "Control Tower Installation: In Dam Battlegrounds, make your way to the Control Tower – this is a tall tower structure (likely an air control or lookout tower) somewhere near the Dam facility. The Control Tower is prominent in the landscape. To reach the top, head inside the tower building and find the interior stairway or ladder. Climb as high as you can. If the final roof is not accessible by stairs, use your Zipline: find a vantage point across from the tower or at a lower section of it and fire the zipline up to the roof edge. Once on the roof of the Control Tower, approach the spot indicated by the quest (likely a railing or a platform at the peak). There will be a prompt to install the LiDAR Scanner. Interact to place the scanner device securely. After a brief setup animation, that scanner is online. Watch out: You’re very exposed on the tower roof. Before climbing, clear any nearby Snitch drones (also nicknamed “eyes in the sky” by Shani – those flying camera bots) which could call reinforcements. Also, a Rocketeer sometimes patrols near the Dam’s swamp; if you hear its telltale hum, wait until it moves off before climbing the tower.",
                image: "Eyes in The Sky.png"
            },
            {
                title: "Phase 2: Spaceport",
                text: "Communications Tower Installation: In the Spaceport map, the target is the Communications Tower. This likely refers to the large radio or air-traffic control tower in the spaceport (possibly Control Tower A2 or a comms array tower). It’s a structure that stands out in the skyline of the Spaceport. Navigate to its base; you might have to enter a fenced area or building. Look for stairwells or ladders leading up. Use caution if the facility is infested with ARC (Spaceport towers can have Sniper sentries or even a Sentinel hanging around). Climb as high as allowed, then use a Zipline or grapple to reach the very top if needed. Once at the designated height (usually the roof or an upper balcony of the comms tower), find the install prompt and place the LiDAR Scanner there. Shani will likely confirm that the placement is good via radio. Enemy presence: Spaceport’s Communications Tower area can be active. As noted in Back on Top, the northern Spaceport is frequented by Leapers and possibly a Sentinel drone. Deal with those threats first – a Leaper could knock you off a ladder, and a Sentinel could shoot you off a zipline. The provided zipline tool can help bypass some interior enemies by letting you ascend from the outside.",
                image: "Eyes in The Sky part 2.png"
            },
            {
                title: "Phase 3: Buried City",
                text: "Galleria Sign Installation: In Buried City, head to the Galleria – this is a shopping center with a large neon sign, located in the eastern part of Buried City (not far from Town Hall and Buried Properties). The sign is up high on a building facade, and that’s where the scanner must go. To reach the top of the Galleria sign, locate a pre-existing zipline in Old Town that leads up near the sign, or deploy your own. Shani specifically mentions you’ll need sure footing; in fact, the wiki notes a zipline is required for the Buried City location. Find the building that hosts the Galleria marquee and use a zipline to get onto its roof or the frame of the sign. Once you’ve climbed up to the sign’s platform, carefully walk along the scaffold or ledge until you get the install prompt. Install the LiDAR Scanner on the sign’s top. With that, all scanners are placed. Enemy presence: The Galleria sign is not usually swarming with ARC, but Buried City streets below often have roving Hounds or scavenger bots. Also, players sometimes pass through the Galleria area to get to Town Hall events, so be quick. Falling from this height could be fatal, so double-check your footing and zipline anchors. The quest-provided zipline can only be anchored in certain spots – if you see a yellow zipline anchor point on a roof edge (indicating a pre-set anchor location), use it. Once all three LiDAR Scanners are installed (you can verify each objective ticked off in your quest log), Shani will congratulate you on a job well done: “Now we won’t have to rely on our ears to monitor those tremors”. The Raiders now have an eye in the sky of their own, thanks to you. Return to base and speak with Shani if needed to complete the mission and receive your rewards (Tagging Grenades, a Vita Spray, and some light sticks for celebrations). Additional Tip: You’re given 1 zipline for free, but if you think you might need more (in case you want one for each tower without retrieving it, or if one breaks), craft or buy extras. You can retrieve a deployed zipline by picking up the base after use, so consider reusing it across objectives if doing multiple in one run. Shani’s dialogue emphasizes “don’t fall down” 109 – take that to heart, especially if you attempt to do two or all three installations in one expedition. Slow and steady climbs win this race.",
                image: null
            }
        ]
    },
    {
        id: "our-presence-up-there",
        title: "Our Presence Up There",
        trader: "Shani 112",
        location: "Dam Battlegrounds (Pattern House building, north of the Dam)",
        description: "This mission is the culmination of the Raiders’ push to re-establish themselves on the surface. With outpost sites marked and scanners deployed, Shani tasks you with finishing the setup of a new Raider outpost at the Pattern House (the building you marked earlier in Back on Top). She wants you to get the Requirement: All in one raid.",
        rewards: [
            "Buried City Town Hall Key",
            "Raider Hatch Key",
        ],
        objectives: [
            "Visit the Pattern House in Dam Battlegrounds",
            "Find and flip the power switch in the Pattern House",
            "Complete the antenna installation on the roof of the Pattern House",
        ],
        loadout: [
            "Zipline",
        ],
        briefingMap: "Our Presence Up There.png",
        phases: [
            {
                title: "Phase 1: Restore Power in Pattern House",
                text: "Head to the Pattern House (north Dam area, recognizable by its unique patterned walls, as previously noted). Enter the building – likely through a ground-floor door or gap in the wall. Your first task is to locate the building’s main power switch. This will usually be on the first floor or in a maintenance room. In the Pattern House, search along the walls for an electrical panel or breaker box. According to guidance, the switch is on the 1st floor interior. Once you find the big lever or breaker panel highlighted by a quest marker, flip the power switch on. Expect some lighting or equipment in the building to come alive – you’re essentially powering up the outpost. This also likely provides power to the roof, which you’ll need for the antenna. Potential resistance: The Pattern House could be occupied by ARC scouts or, given its significance, possibly an ARC turret or two. However, since you previously cleared the area when marking it, it might be empty. Still, be on alert; flipping the power won’t itself trigger enemies, but the noise could attract nearby ARC.",
                image: "Our Presence Up There.png"
            },
            {
                title: "Phase 2: Install the Antenna on the Roof",
                text: "With power on, make your way to the roof of Pattern House to set up the communications antenna. Conveniently, there is a zipline inside or attached to the building that you can use to reach the rooftop. (If a zipline isn’t already in place, you might have to deploy one, but intel suggests a zipline becomes available – possibly after restoring power or it was always there as part of the structure). Ride or climb to the top of the building. On the roof, find the antenna assembly point – likely a base mount where an antenna dish needs to be installed. Interact with the prompt to complete the antenna installation. Your character will finish the setup, effectively establishing a functional comms outpost. Ensure you stick around a second or two for the task to register (a progress bar may appear during installation). Once done, the mission objectives are fulfilled.",
                image: null
            },
            {
                title: "Phase 3: Secure and Exit",
                text: "After the antenna is set, Shani will confirm success over the radio, celebrating that the outpost is now live (“Excellent… every building we claim is proof we’re not giving up on Topside” she remarks at completion). The quest will complete immediately upon installation, so even if you were to be eliminated after, it should count as done. However, you’ve also now powered a building in ARC territory – it could draw attention. If an ARC Electromagnetic Storm event is happening or any ARC units take interest, be ready to fight or flee. There’s no item to extract, but you should still get out safely to keep any loot. The nearest extraction might be the Dam elevator not far south, or the Swamp hatch if you run west – both are reasonably close. Choose one and make a swift exit. Mission Notes: This mission is straightforward and scripted: flip switch, install antenna. The key is doing it quickly in one raid. If you die before installing the antenna, you’ll have to start over (including flipping the switch again). So avoid unnecessary combat. Shani’s dialogue before and during the mission emphasizes urgency and the symbolic value of this act. Completing “Our Presence Up There” effectively kicks off a new era – the Raiders now have a foothold on the surface with a working outpost and communications. Your rewards include keys to future content: notably a Buried City Town Hall Key and a Raider Hatch Key (likely granting access to special locked facilities). With those in hand, and an outpost online, you’ve helped humanity literally climb out of the shadows and declare a presence above ground. Congratulations, Raider – mission accomplished, Topside secured.",
                image: null
            }
        ]
    },
    {
        id: "communication-hideout",
        title: "Communication Hideout",
        trader: "Tian Wen",
        location: "Dam Battlegrounds (Riverbank)",
        description: "Tian Wen has triangulated a rogue signal coming from a hidden bunker in the Dam region. It's a pre-war comms hideout, likely containing military-grade encryption keys. The entrance is concealed by overgrowth and mud near the waterline. You'll need to find it, breach it, and grab the data before ARC triangulates the same signal.",
        loadout: ["Scanner", "CQC Weapons", "Mud Camo"],
        briefingMap: "Communication Hideout.png",
        rewards: [
            "Item: Encrypted Hard Drive",
            "Material: 5x Wire Spool"
        ],
        objectives: [
            "Locate the hidden bunker entrance.",
            "Retrieve the Encryption Keys."
        ],
        phases: [
            {
                title: "Phase 1: Bushwhacking",
                text: "The signal originates near the river, obscured by dense reeds and mud. Look for a rusted, circular hatch half-buried in the bank. Use your scanner to pick up the electronic hum.",
                image: null
            },
            {
                title: "Phase 2: Data Heist",
                text: "The bunker is small—a single room. The server rack is in the back. Grab the physical drive. Be prepared for an ambush upon exit; ARC patrols use the river road frequently.",
                image: null
            }
        ]
    },
    {
        id: "after-rain-comes",
        title: "After Rain Comes",
        trader: "Celeste",
        location: "Buried City (Grandioso Apartments vicinity)",
        description: "Celeste has received reports of malfunctioning solar panels after a recent downpour. She tasks you with repairing a set of flooded solar panels in Buried City to restore power for the survivors. The catch is that you’ll need to bring or find the repair materials (Wires and Batteries) to fix the panels 9. Be prepared: this quest is short but takes place in a high-traffic area where other raiders or ARC units maybe active.",
        loadout: [
            "Bring: 5× Wires",
            "Bring: 2× Batteries"
        ],
        briefingMap: "After Rain Comes.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Find the flooded solar panels nearby the Grandioso Apartments",
            "Repair the solar panels using 5 Wires and 2 Batteries"
        ],
        phases: [
            {
                title: "Phase 1: Locate the flooded solar panels (Grandioso Apartments)",
                text: "Drop into Buried City and head towardthe Grandioso Apartments on the west side of the map. The solar panels are on the ground outside the apartment complex, near a highway. This spot is known to be busy – Grandioso is a popular looting area – so move carefully and watch for snipers or hostile players above you on the apartments. Once you reach the array of solar panels (they’re large and hard to miss), the objective will update.",
                image: null
            },
            {
                title: "Phase 2: Prepare/obtain repair materials",
                text: "Ensure you have 5× Wires and 2× Batteries available to use forthe repair. It’s strongly recommended to bring these items with you in your safe pockets or inventory before starting the mission. (Celeste’s shop in Speranza sells up to 10 Wires and Batteries daily, if you need to stock up.) If you didn’t bring them, you’ll have to scavenge nearby electrical loot points or toolboxes, which could be risky and time-consuming. Having them on hand means you can fix the panels immediately.",
                image: null
            },
            {
                title: "Phase 3: Repair the solar panels",
                text: "Among the flooded panel equipment, look for a small yellow control box under one of the tilted panels. Interact with this box – you’ll be prompted to use the Wires and Batteries. Your character will automatically install the 5 Wires and 2 Batteries into the panel’s control unit. Once the components are added, the solar array will spring back to life, completing the repair. This finishes the quest objectives.",
                image: null
            },
            {
                title: "Phase 4: Extraction (optional)",
                text: "You do not have to extract to complete this quest – it completes immediately after the panels are repaired. However, it’s wise to leave safely to avoid losing any gear you brought. A convenient extraction point is the Western Station lift just slightly northeast ofthe solar panel site. Consider heading there once the job is done, especially if you’ve fired shotsor made noise that could attract enemies. Strategy Notes: This mission is essentially a quick repair job. Carry the required materials in advance – showing up without Wires and Batteries can leave you scrambling as other raiders might ambush you. Because the task is in an open area, try to approach from cover (e.g., through alleyways or under the highway) and scout for threats. If you suspect enemy players nearby, you might clear them out or wait until it’s quieter. Once at the panels, the repair interaction only takes a moment. After completion, since the quest auto-completes without needing any item extraction, you can either safely extract at the nearest point or even continue exploring the map. Just remember that if you die after completing the task, you’ll lose any gear you’re carrying – though the quest itself will still be marked complete.",
                image: null
            }
        ]
    },
    {
        id: "a-balanced-harvest",
        title: "A Balanced Harvest",
        trader: "Celeste",
        location: "Dam Battlegrounds (Research & Administration Building)",
        description: "Celeste is investigating an old agricultural research project. She needs you to search the Research & Administration (R&A) building in the Dam Battlegrounds for records of this project. In this mission, you must infiltrate a notoriously contested building, locate Lab 1, and retrieve documents aboutthe failed harvest experiment. Expect heavy resistance – both ARC and other raiders – as the R&A building isa known hot zone. The good news: the quest doesn’t require extracting any item, so your focus is on finding the intel, not hauling loot.",
        loadout: [
            "No extraction required"
        ],
        briefingMap: "A Balanced Harvest.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Go to the Research & Administration building",
            "Locate Lab 1 on the upper floor above the reception",
            "Search for any traces of the agricultural research project"
        ],
        phases: [
            {
                title: "Phase 1: Infiltrate the Research & Administration building",
                text: "Head to the R&A building, which is a large structure in the Dam Battlegrounds (often marked on your map). This building is a high-traffic PvP area due to valuable loot spawns inside. We advise entering from the southwest side (reception entrance), which puts you directly into the reception lobby. As you approach, move cautiously – it’s common to encounter other raiders or ARC units around here. Once you step intothe reception area, your quest will update to the next objective.",
                image: null
            },
            {
                title: "Phase 2: Tip",
                text: "Because you don’t need to extract an item for this quest, consider using a minimal loadout. Dying here is quite possible given the frequent firefights, so you might not want to risk rare gear. Conversely, if you anticipate player combat, bring a reliable weapon and armor to give yourself a fighting chance. Balance the risk as you see fit.",
                image: null
            },
            {
                title: "Phase 3: Locate Lab 1 (upper floor)",
                text: "From the reception lobby, find a way up to the second floor. The fastest route is a zipline at the back wall of reception which leads upward. Take that zipline to reachthe next level. Once on the upper floor, proceed down the hallway and take the first door on your left – this is Lab 1. (It’s above the reception area, consistent with the quest hint.) Be on guard; other players might camp these halls. Lab 1 should be labeled or recognizable by the lab equipmentand computers inside.",
                image: null
            },
            {
                title: "Phase 4: Search for traces of the research project",
                text: "Inside Lab 1, look for any clue or document regardingthe agricultural project. In the center of the lab, there is a desk with a stack of papers that are highlighted for the quest. Interact with the papers on the desk to “search” them – your character will examine the documents. This action counts as finding the trace of the project. As soon asyou do this, the mission objective is fulfilled.",
                image: null
            },
            {
                title: "Phase 5: Mission completion and exfiltration",
                text: "After interacting with the papers, A Balanced Harvest is complete. No item is picked up, so the quest completes without needing extraction. You are freeto stay and loot or leave the area. Given the building’s high danger, you may choose to extract immediately to avoid unnecessary fights. However, since completion is secured, even if you die afterward, you won’t lose quest progress (though you will lose any loot). Many players choose to grab nearby loot after the quest, then exit. Plan an extraction route (perhaps the same way you came or via a close extraction point on the Dam map) if you want to play it safe. Strategy Notes: The R&A building is essentially a PvP hotspot. Use audio cues and clear rooms methodically. If you hear heavy gunfire, consider waiting until it dies down or use alternate entrances (thereare multiple ways in – e.g., climbing through upper windows or other doors – if the front is camped 16 ). Inside, move quickly to the objective. The longer you linger, the higher the chance of running into trouble. Once the intel is secured, decide if you want to risk searching for loot in this lucrative building or get out with just the mission done. Remember, you don’t carry out any items for the quest itself, so dying after interacting with the papers won’t force you to repeat the quest – but it might cost any gear you brought.",
                image: null
            }
        ]
    },
    {
        id: "untended-garden",
        title: "Untended Garden",
        trader: "Celeste",
        location: "Dam Battlegrounds (Swamp area – Hydroponic Dome Complex)",
        description: "Celeste’s investigation continues, following clues from the lab documents. The data suggests the agricultural researchers set up a hydroponic dome complex out in the Dam’s swamps. Celeste believes those domes might hold valuable information about the failed cultivation project. Your mission is to search the domes for a data archive and upload that data to the Raiders’ network. This quest must be done in one run and involves both exploration and a quick data transfer, providing a short respite from combat – though the domes area is still dangerous due to roaming ARC units.",
        loadout: [],
        briefingMap: "Untended Garden.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Go to the Hydroponic Dome Complex",
            "Access the data archive in one of the domes",
            "Upload the data to the computer terminal in any Field Depot"
        ],
        phases: [
            {
                title: "Phase 1: Travel to the Hydroponic Dome Complex",
                text: "Make your way to the hydroponic domes located in the northwestern corner of the Dam Battlegrounds map. The complex consists of a couple of large, dome-shaped greenhouses in the swamp (often labeled on the map). Expect resistance as this areais frequented by ARC creatures and possibly other raiders – the swamp can host heavier ARC units, so move carefully through cover. Once you arrive at the dome site, your objective will update.",
                image: null
            },
            {
                title: "Phase 2: Tip",
                text: "Set a waypoint on your map for the dome complex before deploying, so you can follow the compass straight there. Avoid open areas on your approach, as swamp ARC (like gunners or snipers on ridges) can catch you off guard. Using cover and moving quickly will help you reachthe domes with minimal confrontation.",
                image: null
            },
            {
                title: "Phase 3: Access the data archive in one of the domes",
                text: "Among the cluster of hydroponic domes, head tothe northernmost dome (there are two big domes on the north edge of the complex). Enter the dome – you should be able to go inside through an opening or door. Inside, look for a computer terminal that is still powered. (It will likely be highlighted or marked once you’re inside the correct dome.) Interact with the terminal to download the research data. No physical item will go into your inventory; rather, you are effectively grabbing digital data. Be alert while inside the dome: ARC units might wander in or be guarding the area, so you may need to dispatch them in the confined space. Close-quarters weapons or grenades can help if things get tight.",
                image: null
            },
            {
                title: "Phase 4: Note",
                text: "If you have trouble finding the terminal, know that it’s usually in the northwest dome, as hinted by Celeste’s intel (the “northwest most dome”). However, either of the two large domes inthe area could potentially contain it – typically it’s in the one with accessible computer stations. Check for a glowing or sparking console.",
                image: null
            },
            {
                title: "Phase 5: Upload the data at a Field Depot",
                text: "After securing the data, you need to transmit it from a Field Depot (a small outpost building where raiders can call extracts, etc.). The quest doesn’t specify a particular depot, so any Field Depot on the map will do 33. Conveniently, the closest Field Depot is just southwest of the domes – it should be visible on your map as a white building icon notfar from your location 35. Head to that depot while avoiding or fighting off any ARC in your way. Once at the Field Depot, go inside and find the computer terminals (usually near the entrance or central area of the depot building). Interact with a terminal to upload the research data you gathered. This will complete the quest objectives. You’ll get a confirmation once the upload finishes.",
                image: null
            },
            {
                title: "Phase 6: Extraction",
                text: "The mission completes upon uploading, and you do not have an item to extract (the data is transmitted, not carried). Therefore, as soon as the upload is done, you’re technically free to leave or continue playing. We recommend extracting at this point since you likely traveled a bit andmay have aggroed enemies. The Field Depot you’re in often doubles as an extraction point (if there’s a call station, you can summon a lift). Use the Field Depot’s extraction lift or move to the nearest available extract to safely end your run. If you choose to linger and loot nearby areas (the swamp has some caches), stay vigilant; the upload will likely have made noise that could draw attention. Strategy Notes: “Untended Garden” is more about navigation and swift execution than protracted fighting. Still, the swamp domes can attract ARC due to whatever was “grown” there (expect creatures like Striders or the occasional Baron Husk in the area). Clearing a path or sneaking is up to you – if you prefer stealth, time your movements between patrol patterns. Once the data is in hand, it’s wise not to stick around. The upload at a Field Depot will expose you for a short time while interacting, so before you startthe upload, clear the depot of any enemies and shut the door (if possible) for cover. Because the objectives must all be done in one life, prioritize survival over loot. Healing items and maybe a trap (like a mine at the depot door) can give you peace of mind during the upload. Upon completion, you’ll receive some useful crafting components 37, making this a quick but worthwhile quest.",
                image: null
            }
        ]
    },
    {
        id: "the-root-of-the-matter",
        title: "The Root of the Matter",
        trader: "Celeste",
        location: "Buried City (Research Building by Marano Park)",
        description: "The clues from the domes have led to a final piece of the puzzle – the lead researcher onthe project took some seed samples when the project was shut down. Celeste wants you to retrieve an Experimental Seed Sample from a secret seed vault hidden in a room with “a great view.” This mission returns you to Buried City, specifically to the Research Building near Marano Park. You’ll need to decipherthe clue about the “room with a great view,” find the seed vault, and extract with the seed sample for Celeste 39. This is a dangerous job requiring you to carry and extract an item, so come prepared for a fight and ensure you survive to evac.",
        loadout: [],
        briefingMap: [
            "The Root of the Matter.png",
            "The Root of the Matter part 2.jpg"
        ],
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Go to the Research Building",
            "Search the seed vault in the “room with a great view”",
            "Deliver the Experimental Seed Sample to Celeste"
        ],
        phases: [
            {
                title: "Phase 1: Reach the Research Building (Buried City)",
                text: "Make your way to the Research Building in Buried City. This building is located near Marano Park, adjacent to the “Space Travel” facility, roughly towardsthe center of the map. Look for a multi-story building that stands near some open park space (Marano Park) – this is your target. Approach from the south side: you’ll find a sandy slope that leadsup to an open window on the second floor of the building. Enter through that blown-out window to get inside. This places you in an upper corridor of the Research Building.",
                image: null
            },
            {
                title: "Phase 2: Tip",
                text: "The area around Marano Park is often crawling with hostiles. Notably, a Bastion ARC (heavily armored mech) often patrols the park and the street between the Space Travel building and the Galleria. Avoid or skirt this enemy if possible – fighting it is loud and risky. Also, other players frequently roam this central zone, so be alert. Because you’ll have to extract an item, consider equipping a safe pocket to store the seed sample once you get it 45. That way, even if you get ambushed on the way out, you won’t lose the quest item.",
                image: null
            },
            {
                title: "Phase 3: Find the “room with a great view” (seed vault location)",
                text: "Inside the Research Building, you need to locate the specific room described by the clue. From the window where you entered, go straight down the hallway and then take the second left. You should enter a room that has another open window looking west over Marano Park 48. This is the “room with a great view” – the view of the park is the hint. In this room, scan for anything unusual. What you’re looking for is a big yellow-marked cylindrical container labeled with Cryogenic Hazard. This container is actuallythe seed vault. It’s hard to miss due to the yellow markings and its size.",
                image: null
            },
            {
                title: "Phase 4: Search the seed vault",
                text: "Approach the yellow cryo container and interact with it. Upon interacting, the container will open or be “searched,” and it will drop the Experimental Seed Sample item onto the floor. The seed sample might appear as a small canister or object you can pick up (look for a highlighted item where the container was). Pick up the Experimental Seed Sample. Once it’s in your hands/inventory, stow it into your safe pocket (if you have one) to protect it. This item is the key quest item and must survive until extraction. As soon as you grab it, the mission objectives update to prompt delivery (which means extraction).",
                image: null
            },
            {
                title: "Phase 5: Extract with the Experimental Seed Sample",
                text: "Now you must exfiltrate successfully to deliver the sample to Celeste. Plan your exit. A recommended extraction point is the Southern Station (subway) north of your location – it’s fairly close, just north of Marano Park. However, be cautious heading there: as mentioned, a Bastion ARC patrols near that route. You may either sneak around it or take a longer route east or west to avoid direct confrontation. If the Central Station is too hot, any other extraction on the map will do, as long as you survive with the item. Move deliberately, watching for PvP ambushes (with such a central mission, players might guess someone will be carrying a valuable item out). If you stored the seed in a safe pocket, you have a safety net, but you should still try to avoid dying as it’s time-consuming to repeat the trek. Once you ride an extraction elevator or transport out, the seed will be delivered to Celeste, completing the mission. Strategy Notes: This mission is a mix of puzzle and peril. The riddle “room with a great view” is solved by knowing vantage points in Buried City – now you know it’s the park-facing room on an upper floor 53. The actual building interior isn’t too maze-like, but the real danger is other players and ARC while you’re carrying the seed. Many players consider the Research Building/Marano Park area one of the most PvPactive in Buried City. Thus, it’s often wise to bring strong gear for combat, despite the risk of loss – youmay need it to fight off threats. If you have teammates, moving as a group can greatly increase your survival odds (one can carry the item while others cover). The seed sample is a rare quest item, so if you’re solo, using stealth or waiting for quieter raid times could help. Also, use the environment to your advantage: the building has multiple zip lines and window exits – you might escape a pursuer by zigzagging through buildings or jumping down rubble that a heavy ARC can’t follow. Finally, if you do get killedbut had the seed in your safe pocket, the quest will count as complete (you’ll see a cutscene “The Root ofthe Matter” play when you return to base). Of course, try not to let it come to that. Once back in safety, talk to Celeste to hand in the sample (usually automatic upon extract) and claim your reward – you’ve finally gotten to the “root” of this mystery.",
                image: null
            }
        ]
    },
    {
        id: "water-troubles",
        title: "Water Troubles",
        trader: "Celeste",
        location: "Dam Battlegrounds (Red Lake area)",
        description: "Celeste has been inundated with complaints about the drinking water in Speranza – it smells or tastes off. Suspecting something’s wrong with the water supply, she asks you to head topsideand collect a water sample from the source. This quest kicks off a multi-part storyline about contaminated water. For now, your goal is to find the Flood Access Tunnel at the dam’s Red Lake and take a sample from the intake. All objectives must be done in one run, but once you gather the sample, the quest completes without needing to extract any item (though extracting safely is advised). 7",
        loadout: [],
        briefingMap: "Water Troubles.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Locate the Flood Access Tunnel under the Red Lake Balcony",
            "Find the intake to the district’s water supply",
            "Sample the water"
        ],
        phases: [
            {
                title: "Phase 1: Locate the Flood Access Tunnel (Red Lakes area)",
                text: "Deploy to Dam Battlegrounds and make yourway to the Red Lakes region, which is on the eastern side of the map (the “Red Lake Balcony” is a raised area overlooking a reddish water reservoir). Specifically, look near the Control Tower point-of-interest – the flood access tunnel is on the dam’s outer wall, beneath the Control Tower and balcony. If you’re up on the balcony, you may need to drop down or take a zipline down towards the water. From below, it appears as a large concrete drainage opening in the side of the dam 61. It’s marked by a massive round tunnel entrance. Approach that tunnel; once you’ve identified it, the quest will update.",
                image: null
            },
            {
                title: "Phase 2: Tip",
                text: "The tunnel entrance is somewhat hidden by the terrain if you’re not at the right angle. It’s basically “to the right of the Control Tower” when facing the dam, on ground level. Use the red/brown color of the lake and the distinct concrete structure as a visual cue. Be careful of fall damage if dropping from the balcony – use ziplines or descend gradually. Also, the Dam area can have ARC patrols (e.g., troopers near the Testing Annex nearby), so clear a path if needed.",
                image: null
            },
            {
                title: "Phase 3: Find the water intake inside the tunnel",
                text: "Enter the Flood Access Tunnel. You’ll be going into a dim, concrete corridor leading into the dam’s infrastructure. Follow the linear tunnel path forward; it’s fairly straight with only one direction to go. Eventually, the tunnel opens up to a small chamber where you’ll see a pool of filthy, stagnant water (this is part of the water supply intake system). The district’s water intake is essentially the pipe or grate where water is drawn in. Look on the left sideof the chamber: there should be a pipe outlet or valve that’s accessible near the pool 65. As you approach the pool of murky water, the objective should tick off that you’ve found the intake.",
                image: null
            },
            {
                title: "Phase 4: Collect a water sample",
                text: "Stand by the intake (you might see an interact prompt on a specific valve or pipe end submerged a bit in the water). Interact with the intake/pipe to collect a water sample. Your character will take a sample of the water in a vial. This completes the main objective – younow have what you came for. Notably, the sample is automatically handled by your character (no inventory item is given), so the quest is flagged as complete immediately after the interaction.",
                image: null
            },
            {
                title: "Phase 5: Extraction (recommended)",
                text: "You don’t need to extract to finish this quest (the quest is marked complete once the sample is taken). However, it’s wise to leave safely, especially if you brought gear. One suggested extraction point is the Red Lake Balcony lift which is not far from where you came in (to the southeast of the tunnel entrance). Backtrack out of the tunnel the way you came. On exiting, be cautious: the area around the Red Lake Balcony and Testing Annex often has ARC (e.g., Formicans or turrets) and can attract other players hunting for loot. Use stealth – the tunnel provided cover, but outside you might need to sneak along the dam wall or through bushes. If things look too hot at the balcony lift (maybe ARC congregated there), consider another extract like the Dam Control elevator or any available one on your map. Since the quest is already complete, your priority is keeping your loadout. Strategy Notes: This mission is mostly navigational and not combat-heavy, unless you encounter enemiesen route. That said, the dam area is known to have frequent ARC patrols and even player presence (especially around the Testing Annex key area). Going in with a “free loadout” is a safe bet because you truly don’t have to bring anything back. If you do that, even if you’re killed post-sample, you lose nothing except some time. The tunnel itself is a tight space – if an ARC enemy follows you inside, you’ll have limited mobility, so it can be useful to dispatch any pursuers before entering. The sample interaction is quick, but your guard might be down while doing it; ensure the chamber is clear first. Finally, on extraction: if you want to be extra cautious, you can wait in the tunnel for a bit and listen. Many players zoom through this quest and leave, so patience can let nearby threats clear out. Once back in base, Celeste will have Lance analyze the sample immediately 68, paving the way for the next quest in the storyline.",
                image: null
            }
        ]
    },
    {
        id: "into-the-fray",
        title: "Into the Fray",
        trader: "Shani",
        location: "Any (find a Leaper on any map)",
        description: "Shani is rallying the Raiders to prove they can challenge even the deadliest ARC machines. She assigns you a bold task: hunt down and destroy a Leaper, one of the giant spider-like ARC walkers known for their leaping ability and crushing legs. You’ll need to retrieve a component called a Leaper Pulse Unit from its wreckage as proof. This mission can be completed on any map – Leapers roamall over – and it does not restrict you to a single location. However, it does require you to successfully extract with the Pulse Unit to count. “Into the Fray” is a high-risk combat mission, so gear up accordingly and possibly team up.",
        loadout: [],
        briefingMap: "Into the Fray.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Destroy a Leaper",
            "Obtain a Leaper Pulse Unit"
        ],
        phases: [
            {
                title: "Phase 1: Find a Leaper",
                text: "Leapers are large, towering ARC machines with long legs that allow them to jump far distances. They can spawn in various maps and typically appear in open outdoor areas or near significant landmarks. There’s no fixed spawn, but Shani’s intel and community tips suggest checking the Dam Battlegrounds map around the Water Treatment Control Building and R&A Building elevator area. In that region, there are bunkers and a lift, and players often report Leaper sightings there (this may depend on map rotation and timing). Another common area is nearbig open fields or Baron husk sites. Once you load into a raid, you can either roam until you hear/seea Leaper (they make distinctive thudding sounds and roars when active), or deliberately go to known spawn spots. When a Leaper appears, it will likely spot you (they have long sightlines). Prepare to engage.",
                image: null
            },
            {
                title: "Phase 2: Tip",
                text: "One effective strategy is to fight the Leaper near structures or bunkers. For example, at theDam location mentioned, there are concrete bunkers you can hide inside. A Leaper cannot enter small buildings, giving you cover. If you provoke a Leaper and then duck into a bunker, the Leaper will approach but cannot reach you inside. Use this to your advantage no matter whereyou fight: identify any nearby building, bunker, or even tall rock that can block the Leaper.",
                image: null
            },
            {
                title: "Phase 3: Destroy the Leaper",
                text: "Engaging a Leaper is a challenging fight. Leapers attack by leaping into the airand crashing down, and by spearing or stomping with their legs. They also have a weak point – the glowing eye-like sensor in the center of their body – and vulnerable leg joints. If using the bunker tactic, stay inside and shoot the Leaper from cover. It won’t be able to hit you if you’re fully inside. Peek out to draw its attention if it wanders off, then duck back in and continue firing.",
                image: null
            },
            {
                title: "Phase 4: Use heavy firepower",
                text: "Bring weapons that deal high damage – explosives and heavy ammo are very effective. Grenades, rocket launchers, or high-caliber sniper shots to the weak spot will takeit down faster. Many raiders bring a shotgun or LMG (for heavy DPS) plus explosives. Aim for the knee joints to immobilize it or directly for the central eye for maximum damage. If you’re safelyin a bunker or behind robust cover, focusing on the eye is best, since breaking legs won’t matter if it can’t reach you anyway.",
                image: null
            },
            {
                title: "Phase 5: Phase 5",
                text: "If you’re caught in the open, keep moving. A Leaper’s jumps can be dodged if you sprint perpendicular to its landing trajectory. The legs can trap or one-hit kill you, so never stay too close unless you’re dodging between its legs to confuse it (an advanced tactic). Using terrain like dense ruins or large rocks can block its line of sight and leaps. Keep up the assault and don’t let the Leaper disengage – if it starts to wander off, pop out and shoot it to regain aggro. Eventually, with sustained damage, the Leaper will collapse in a fiery wreck.",
                image: null
            },
            {
                title: "Phase 6: Obtain the Leaper Pulse Unit",
                text: "When the Leaper is destroyed, it will drop loot, notably the Leaper Pulse Unit, which is the quest item you need to retrieve. Approach the Leaper’s wreckage and look for a glowing or indicated item on the ground. Pick up the Leaper Pulse Unit. It is a single-unit quest item (ensure you have at least one inventory slot free to carry it, though it should fit even in a small pack). This item is required for quest completion, and now you must survive with it.",
                image: null
            },
            {
                title: "Phase 7: Extract with the Pulse Unit",
                text: "With the Pulse Unit in your possession, head to the nearest extraction point. Put the Pulse Unit in your secure container (safe pocket) if you have one, to guarantee you don’t lose it on death 77. (However, do note: some quest items might not go into secure containers depending on game design – but usually small items like this can. If it doesn’t fit, you must survive.) The fight likely made a lot of noise, potentially attracting players. Use the fact that you picked a fight location near an extraction (if you lured the Leaper near an evac lift) to your advantage. For instance, in Dam Battlegrounds, there’s an elevator lift in the Water Treatment area you can take immediately after looting the Pulse Unit. If you’re on another map, plan your extraction route before engaging the Leaper so you know where to run afterward. Call the extraction and hold out until it arrives. Keep your head on a swivel for opportunistic enemies – a Leaper fight is like a flare drawing attention. Once the elevator/ride arrives, get out safely. Upon extracting, deliver the Pulse Unit to Shani (the handover is automatic when you successfully exfil with the item). The mission completes once you’re back in base with the Pulse Unit secured. Strategy Notes: This quest is essentially a mini-boss fight. Going solo is possible (many have done it by exploiting cover), but having a team makes it easier – one can distract the Leaper while others shoot its weak point. Shani’s dialogue hypes that raiders “have what it takes” now, implying you likely have decent gear by this point. Don’t hesitate to use your best weaponry; the Leaper is not a foe to take lightly. If you die, you’ll have to find and fight another one in a new raid, so survival is key. The recommended strategy of using a bunker or building for cover cannot be overstated – it almost trivializes the Leaper’s threat if done right. Just be wary of any ARC minions or players that join the fray; you might have to fend them off from your hideout. Lastly, remember to place the Pulse Unit in a safe container if possible, as that guarantees quest completion even if someone ambushes you before you extract. Shani will reward your bravery with a unique outfit and gear 81. More importantly, this mission’s completion marks a significant milestone – you’ve proven Raiders can bring the fight to the ARC on their own terms.",
                image: null
            }
        ]
    },
    {
        id: "source-of-the-contamination",
        title: "Source of the Contamination",
        trader: "Celeste",
        location: "Dam Battlegrounds (Water Treatment Center, near the swamp)",
        description: "The water sample from “Water Troubles” confirmed Celeste’s fears – the contamination isn’t natural 83. Now, she needs you to pinpoint and neutralize whatever (or whoever) is polluting the water. The quest directs you back to the Dam Battlegrounds, specifically the Water Treatment Center bythe swamp. You must inspect the Flood Spill Intake area for anything suspicious. Essentially, you’re lookingfor the source of the contamination in the water system. This mission is straightforward: go to the location, investigate, and disable the contaminant. No item needs extracting, but do it in one raid. Expect possible resistance around the Water Treatment facility as it’s a known hotspot.",
        loadout: [],
        briefingMap: "Source of the Contamination.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Reach the Water Treatment Building in the Dam",
            "Search for the Flood Spill Intake near the swamp",
            "Investigate any suspicious objects (at the intake)"
        ],
        phases: [
            {
                title: "Phase 1: Reach the Water Treatment Center (Dam map)",
                text: "Head to the Water Treatment Building on theDam Battlegrounds. This facility is roughly mid-map, slightly to the left (west) of center, borderingthe swampy Red Lakes area. It’s a large structure where water from the swamp is processed. The building is a common landmark, and often other raiders loot there, so be cautious. Approach fromthe swamp side (north side) if possible. Approaching from the swamp is suggested because the intake you need is on the exterior northern wall of the treatment plant, facing the swamp 88. By coming from the swamp, you can potentially avoid the front of the building where PvP is more likely, and you’ll be closer to your objective.",
                image: null
            },
            {
                title: "Phase 2: Tip",
                text: "Move quietly through the swamp’s foliage. The Water Treatment Center is a high-traffic area (lotsof loot inside, many players and NPCs). By skirting around to the back, you minimize contact. Still, keep eyes open for patrols or snipers on the roof. If you’re detected, you might choose to engage or retreat into the swamp and come back around.",
                image: null
            },
            {
                title: "Phase 3: Find the Flood Spill Intake (exterior near swamp)",
                text: "Once you’re behind the Water Treatment building (north side), look for the Flood Spill Intake structure. This is basically a channel where overflow water spills out towards the swamp. In practice, you’ll see concrete walls holding polluted water pooling out in the open. It’s on the northern part of the facility, fairly low to the ground. You might notice murky, discolored water and maybe some debris. When you find this polluted water area bounded by concrete, you’re in the right spot. Jump down or move into that area (it’s slightly sunken) and wade into the water. As you step into the spill basin, the quest should prompt you to look for “suspicious objects.” The environment itself looks nasty, but there’s a specific item to find.",
                image: null
            },
            {
                title: "Phase 4: Investigate any suspicious object (find the contaminant)",
                text: "Search the pool of dirty water for an unusual object. Look for a barrel or container submerged in the water 91. Indeed, there is a barrel leaking something toxic – this is the source of the contamination in the water supply. It should be marked or at least obvious once you’re close (likely glowing or highlighted as an interactable). Approach the barrel and interact with it to “investigate” or remove it. Your character will presumably disable or neutralize the barrel (in-game, this might be represented as defusing a chemical barrel bomb, for example). Once you interact with the suspicious barrel, the quest will complete – you have effectively “removed” the contamination source. Be aware: Interacting with the barrel might take a second or two, and you’re exposed in the waist-deep water. Ensure the area is clear of hostiles before doing so. If ARC creatures or enemy players are around, take them out or scare them off first.",
                image: null
            },
            {
                title: "Phase 5: Extraction (optional)",
                text: "With the contaminant dealt with, the mission ends immediately upon interaction. You don’t pick up the barrel; you neutralize it on the spot. Therefore, no item needsto be extracted. Nevertheless, consider a safe exit. From the spillway, a convenient extraction is the Central Swamp lift just north of you (which you may have even passed if you came from that direction) 93. You could also slip back into the swamp and extract at Red Lakes Balcony or elsewhere. Since you likely didn’t alert too many enemies if all went smoothly, exfiltrating quietly is feasible. Additionally, Celeste mentioned time is of the essence to stop any sickness spreading 95 – by completing this, you’ve bought some time, and Celeste will now direct efforts to restoring clean water (which leads into the next quest). Feel free to loot the Water Treatment building now if you want; many parts of it might be less contested after a big fight or late in the raid. Just remember thatany fighting is optional – your primary job is done. Strategy Notes: “Source of the Contamination” is an investigative mission with minimal combat required. Still, the challenge comes from the location’s danger. It’s wise to bring at least a mid-tier weapon and some defense in case another team had the same idea or an ARC brute wanders by. The swamp side of Water Treatment can sometimes have Striders (mid-size walkers) or colonies of Rovers (the dog-like ARC) – if they’re present, dispatch them stealthily (silenced weapons or melee) to avoid drawing unwanted attention. One advantage of this quest is its quick completion – many players will be busy inside the building or elsewhere, and you might be in and out before anyone notices. Celeste explicitly noted you won’t be carrying anything out here 96, so you can go in with a light kit to minimize risk. If things go loud, you can always bail into the swamp; ARC don’t navigate water well and you can break line of sight in foliage. Once finished, Celeste is alarmed by what you found (a deliberate act – “Oh... this is bad,” she says upon completion 97 ) and she’ll be preparing the next steps. In the meantime, pat yourself on the back for preventing further poisoning of the colony’s water supply.",
                image: null
            }
        ]
    },
    {
        id: "switching-the-supply",
        title: "Switching the Supply",
        trader: "Celeste",
        location: "The Spaceport (underground tunnels)",
        description: "With the contaminant identified (and clearly an act of sabotage), Celeste’s priority shiftsto protecting the colony’s water source. The plan is to reroute the water supply from an alternate reservoir to buy time while the sabotage is investigated. There’s an old water reservoir under the Spaceport, and you’ve been tasked with going into the Spaceport’s underground tunnels to turn a valve that will switch Speranza’s water to this backup source. This mission is quite straightforward: find the tunnels, find the valve, turn it. It must be done in one raid, but requires no item extraction. That said, Spaceport is a dangerous map full of both ARC and PvP action, so caution is warranted despite the simple objectives.",
        loadout: [],
        briefingMap: "Switching the Supply.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Find the tunnels under the Spaceport",
            "Find and turn the valve in the tunnels under Spaceport"
        ],
        phases: [
            {
                title: "Phase 1: Find the tunnels under the Spaceport",
                text: "Navigate to the Spaceport map, and specifically look for an entrance into the underground tunnel network. There are multiple tunnel entry points scattered around the central area of Spaceport (the trench lines). The easiest entrance for this quest is described as a large hole in the ground in front of the Spaceport Launch Towers (central launch pads) 100. Essentially, near the big rocket launch structures, you’ll find a gaping hole/collapse in the earth. It’s pretty noticeable once you know to look for a giant crater 101. Go to that crater and head down into it, using pieces of collapsed concrete as ramps 102. This drops you into the subterranean tunnel complex beneath Spaceport.",
                image: null
            },
            {
                title: "Phase 2: Tip",
                text: "Before dropping in, double-check your surroundings. The Spaceport surface often has roamingARC (especially humanoid troopers and snipers on the towers) and is notorious for sniper battles between players. It’s recommended to drop with a decent weapon and meds even though you don’t need to extract items 103, because Spaceport can be unforgiving. Use smoke grenades or cover if you come under fire while approaching the hole. Once you’re in the tunnels, you’ll find relative safety from the big ARC above 104, but other players might also use tunnels to rotate, so listen for footsteps.",
                image: null
            },
            {
                title: "Phase 3: Navigate the tunnels to find the valve",
                text: "The underground tunnels are a maze of concrete corridorsand pipeways. However, the valve you need to turn is actually very close to where you drop in 105. After descending through the hole, you’ll be on a platform or rubble pile in the tunnels. Do not wander off too far. Instead, from the base of your entry point, circle around behind a large pieceof collapsed concrete (northeastern side of the entry) 105. On a wall pipe there, you should spota red valve wheel attached to the pipeline 106. It’s slightly tucked behind debris and easy to run past if you’re not looking carefully. If you have trouble: essentially, turn 360 degrees around the immediate area of the drop, scanning the walls for anything colored (red stands out in the gray tunnels). The valve is likely within a few dozen feet ofthe entry hole. Once you find the red valve wheel, move to it.",
                image: null
            },
            {
                title: "Phase 4: Turn the valve to switch the water supply",
                text: "Approach the valve and interact with it (it might say “Turn Valve” or similar). Your character will spin the wheel, triggering the mechanism to reroutethe water flow. This is the main objective – as soon as the valve is turned, the quest objective is completed. You should hear or see some confirmation (maybe an in-game audio of water pressure changing). Celeste will be relieved; the colony now temporarily switches to the reservoir under Spaceport for fresh water.",
                image: null
            },
            {
                title: "Phase 5: Extraction (optional)",
                text: "With the task done, you can take your time to exfil. No item needs to be carried out, since turning the valve was the goal 107. However, be mindful that Spaceport’s tunnels, while safer from aerial ARC, can still have patrols of ARC (like Sentries or the occasional Tick nests) and definitely can funnel players. After completing the quest, you have a couple of choices:",
                image: null
            },
            {
                title: "Phase 6: Loot and explore",
                text: "The tunnels often contain supply crates, and as mentioned, you’re relatively safe from large ARC above 104. You might scavenge a bit. Just remember, extraction still requires going back topside or to a connected area with a lift.",
                image: null
            },
            {
                title: "Phase 7: Extract promptly",
                text: "You could go back out the way you came (climb the rubble) and hit an extraction point on the surface, but that could expose you again. Alternatively, follow the tunnel network to a known extraction. For instance, Spaceport often has an extraction elevator in the trenches (like the Central Trench Lift). The tunnels might lead near one – use your map to navigate. If unsure, you can simply climb out and dash to the nearest evac while everyone else might be busy at the launch pads. Either way, since there’s no pressure of losing a quest item, you can weigh risk vs reward here. Celeste jokingly notes that thanks to you, they had “enough reserve water for one more cup of coffee” – implying your quick action saved the day 108. Take pride in that as you leave the area. Strategy Notes: The trickiest part of “Switching the Supply” is actually finding the valve if you’re not observant 109 105. Many raiders initially get lost in the tunnels, but remember the hint: it’s right near whereyou drop in. By not straying too far, you’ll save a lot of time. As such, there’s typically no need to clear the entire tunnel system of enemies – you can be in and out quickly. That said, Spaceport is a warzone. It’s noted that you should consider a free loadout because the map is so hot 103. If you do that, you minimize losses if something goes wrong. But also consider bringing a decent close-quarters weapon (shotguns or SMGs excel in tunnels) because if you encounter another player down there, it might come to a quick firefight. Flashlights or NV scopes can help in the dark areas, too. Keep an ear out as sound echoes underground; you’ll often hear others before you see them. Once you’ve turned the valve, Shani’s crew willbe hunting the saboteurs while the water flows from the new source 110, so you’ve done your part. The rewards include a unique outfit and a Spaceport tower key for future use 111. Take a breather – but not too long, as Apollo has a request coming up next.",
                image: null
            }
        ]
    },
    {
        id: "a-warm-place-to-rest",
        title: "A Warm Place to Rest",
        trader: "Apollo",
        location: "Buried City",
        description: "A more humanitarian request comes from Apollo. A trader by profession, Apollo has heard of a family of survivors possibly hiding in an abandoned highway camp in Buried City 112. He’s concerned for their safety (especially if children are involved) and is unofficially asking you to check on them 14 and escort them if possible 113. This mission deviates from pure combat: it’s about investigation and following a trail. You’ll need to find the camp, look for signs of the family (which might tragically be evidence something went wrong), and follow their trail marked by red signals. Ultimately, you’ll likely discover a grave – the “warm place to rest” – indicating a somber outcome. Complete the investigation to give Apollo closure. There’s no item to extract, but you’ll be traveling across the entire Buried City map during this quest 114, so gear up for a long trek.",
        loadout: [
            "No extraction required"
        ],
        briefingMap: [
            "A Warm Place.png",
            "A Warm Place part 2.png"
        ],
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Locate the Abandoned Highway Camp",
            "Search for any signs of survivors",
            "Follow the red markers",
            "Inspect the grave"
        ],
        phases: [
            {
                title: "Phase 1: Locate the Abandoned Highway Camp",
                text: "Head to the Buried City map, specifically looking for a highway that’s no longer in use. The camp in question is on a raised highway section southeast ofthe Grandioso Apartments 117. Essentially, find the highway that cuts through the city – one end ofit is broken and elevated. On that stretch, near (or above) the Buried City outskirts, look for a clusterof abandoned buses and makeshift tents. That’s the Abandoned Highway Camp. It’s just off the main city blocks, on the elevated road. When you get onto the highway and see a group of derelict buses, you’ve found it 117. The quest will update, prompting you to search for survivor signs.",
                image: null
            },
            {
                title: "Phase 2: Note",
                text: "As you approach, consider climbing up via ramps or rubble that lead to the highway. Theremay be ARC scouts around, but often these camps are empty of ARC (since they were human hideouts). Still, other players might be passing through, so clear the area if needed. The camp itself might feel eerily quiet.",
                image: null
            },
            {
                title: "Phase 3: Search for any signs of survivors",
                text: "In the highway camp, look around the buses and shacks for something left behind by the family. Approach one of the old buses – on the ground next to it, you should see a discarded backpack or pack 118. This is a clue. Interact with the pack to examine it 118. Doing so will trigger the next objective: follow the red markers. The pack might contain a note or simply indicates that whoever was here left in a hurry, marking their path.",
                image: null
            },
            {
                title: "Phase 4: Follow the red markers",
                text: "After you inspect the bag, start looking for red markers painted or placed around the environment. These could be red cloth strips, spray-painted arrows, or red graffiti marks – something clearly artificial and red-hued. These markers form a trail leading away from the highway camp. If you want, you can literally walk from one marker to the next. They tend to lead eastward across the map, likely winding through alleys and side streets of Buried City, guiding toward where the survivors went 119. However, note that you don’t actually have to follow each marker one by one if you already know where they end up 120. The final destination is a site on the far eastern side of the map, in the Buried Properties district (the area with partially buried buildings). If you want to save time, you can head straight there, which is basically to a ruined building with rubble – the approximate location of the grave you need to find 120. But if you’re unsure, follow the trail: - From the highway, drop down and go east through Old Town and Buried Properties. - Keep an eye on walls, ground, and objects for red paint or cloth at intervals. They might be on building corners or street objects. - The path is somewhat long – Apollo wasn’t kidding that you’d cross the entire map 114. Stay vigilant; this trek could lead you through ARC-infested zones or open sniping areas. Deal with threats as necessary, or slip past them, but try not to lose the trail if you’re actively following it. Eventually, you’ll reach the end of the trail at a collapsed building on the eastern edge. The quest log will likely note you’ve arrived and update to the final task.",
                image: null
            },
            {
                title: "Phase 5: Inspect the grave",
                text: "At the final location (some rubble in Buried Properties), look for a grave site. This might be a shallow grave with a marker like a cross or piled stones, possibly with a red cloth tiedto it (to continue the marker theme). It’s tucked amidst the rubble of a ruined building 121. Once you spot it, go up to the grave and interact with it to inspect 122. Upon interacting, you’ll complete the quest. The implication, sadly, is that the family (or at least some members) did not survive – the presence of a grave suggests a death. Apollo’s reaction confirms this somber outcome (he “really hoped...” for a better result) 123. After inspecting, there’s nothing to pick up; your job was to find out what happened. The mission concludes here.",
                image: null
            },
            {
                title: "Phase 6: Extraction",
                text: "The quest is done upon inspecting the grave, and no items are needed for turn-in. Youcan choose to extract whenever convenient. Check your map for the nearest extraction point – possibly the Eastern Station if it’s nearby, or you might backtrack to Southern Station. Since you’ve traversed so far, consider hitting any remaining objectives in Buried City or doing some looting now that your main task is done 124. Just remember Buried City can be unpredictable; don’t drop your guard yet. When ready, extract to return and report to Apollo. Strategy Notes: This mission is a long, winding journey rather than a fight. The key challenge is endurance and navigating possible encounters along the route. Because you’ll likely cover almost every neighborhood of Buried City, plan for varied threats: bring ample healing items and maybe extra ammunition 114. Apollo even suggests not going in with a minimal kit, given the distance and likely encounters 114. A balanced loadout (medium-range rifle for street combat, plus close-range for building interiors) is wise. Use vehicles and walls as cover when moving between markers, and don’t chase a marker into an obvious trap (like an open plaza) without scanning from a distance first. The red markers are a clever guidance system; if you lose sight of the next one, slow down and scout from a high point or use your visor if available. Also note that the guide at the time suggested you could skip following the markers by heading straight to the grave’s known location 120. If you replay the mission or know where to go, this is a time-saver. However, if it’s your first time, it’s immersive to follow the trail and ensures you don’t miss the credit for “follow the red markers” (though the game likely flags completion even if you go direct to grave). Emotionally, this quest is a bit of a downer – finding a grave instead of live survivors. Apollo thanks you for trying, and still rewards you, recognizing the effort even though the outcome was grim 123. In terms of gameplay, treat this like a wide-ranging exploration quest. Sometimes you might avoid combat entirely by clever routing; other times you might have to shoot your way through an ARC blockade. Always have an exitin mind if things get hairy. By finishing this quest, you tie off a narrative thread about hope and loss on the surface, and you’ve helped provide closure. You also receive some unique items (like a Radio Renegade outfit variant and trinkets) as Apollo’s reward for your compassion 125. Sources: The mission details, objectives, and strategies were compiled from official ARC Raiders quest descriptions and community walkthroughs, including the ARC Raiders Wiki and guides from PC Gamer and GameSpot, to ensure accuracy: - ARC Raiders Official Wiki – Quest listings and dialogues for missions 41–50 - PC Gamer and GameSpot – Step-by-step quest walkthroughs and tips for Communication Hideout, After Rain Comes, A Balanced Harvest, The Root of the Matter, Water Troubles, Into the Fray, Source of the Contamination, Switching the Supply, and A Warm Place to Rest 3 14 20 47 64 73 91 105 119. Each guide provided insights on locations, hidden objectives, and survival strategies which have been integrated above. 1 3 4 5 6 7 8 How to complete Communication Hideout in Arc Raiders | PC Gamer https://www.pcgamer.com/games/third-person-shooter/arc-raiders-communication-hideout/ 2 11 18 115 Quests - ARC Raiders Wiki https://arcraiders.wiki/wiki/Quests 9 10 12 13 14 15 Arc Raiders After Rain Comes Quest Guide - GameSpot https://www.gamespot.com/articles/arc-raiders-after-rain-comes-quest-guide/1100-6536245/ 16 17 19 20 21 22 Arc Raiders A Balanced Harvest Quest Guide - GameSpot https://www.gamespot.com/articles/arc-raiders-a-balanced-harvest-quest-guide/1100-6537260/ 23 24 25 31 33 35 37 Untended Garden - ARC Raiders Wiki https://arcraiders.wiki/wiki/Untended_Garden 26 27 28 29 30 32 34 36 Arc Raiders: How to Complete the Untended Garden Quest | 1v1Me Blog https://www.1v1me.com/blog/arc-raiders-untended-garden-quest-guide 38 39 40 41 52 53 56 The Root Of The Matter - ARC Raiders Wiki https://arcraiders.wiki/wiki/The_Root_Of_The_Matter 42 43 44 45 46 47 48 49 50 51 54 55 How to complete The Root of the Matter in Arc Raiders | PC Gamer https://www.pcgamer.com/games/third-person-shooter/arc-raiders-the-root-of-the-matter-room-with-a-great-view/ 57 59 60 65 68 Water Troubles - ARC Raiders Wiki https://arcraiders.wiki/wiki/Water_Troubles 58 61 62 63 64 66 67 Arc Raiders Water Troubles Quest Guide - GameSpot https://www.gamespot.com/articles/arc-raiders-water-troubles-quest-guide/1100-6535974/ 69 71 72 73 74 75 76 78 82 How to complete Into the Fray in ARC Raiders – Destructoid https://www.destructoid.com/how-to-complete-into-the-fray-in-arc-raiders/ 70 77 79 80 81 Into The Fray - ARC Raiders Wiki https://arcraiders.wiki/wiki/Into_The_Fray 83 84 85 88 92 95 97 Source Of The Contamination - ARC Raiders Wiki https://arcraiders.wiki/wiki/Source_Of_The_Contamination 86 87 89 90 91 93 94 96 Arc Raiders Source of the Contamination Quest Guide - GameSpot https://www.gamespot.com/articles/arc-raiders-source-of-the-contamination-quest-guide/1100-6535935/ 98 99 108 110 111 Switching The Supply - ARC Raiders Wiki https://arcraiders.wiki/wiki/Switching_The_Supply 100 101 102 103 104 105 106 107 109 Arc Raiders Switching The Supply Quest Guide - GameSpot https://www.gamespot.com/articles/arc-raiders-switching-the-supply-quest-guide/1100-6535934/ 112 113 116 123 125 A Warm Place To Rest - ARC Raiders Wiki https://arcraiders.wiki/wiki/A_Warm_Place_To_Rest 114 117 118 119 120 121 122 124 Arc Raiders A Warm Place To Rest Quest Guide - GameSpot https://www.gamespot.com/articles/arc-raiders-a-warm-place-to-rest-quest-guide/1100-6537266/",
                image: null
            }
        ]
    },
    {
        id: "prescriptions-of-the-past",
        title: "Prescriptions of the Past",
        trader: "Lance",
        location: "Spaceport (Departure Building)",
        description: "Lance, the colony’s medical trader , needs old medical records from the Spaceport. He sends you to the Spaceport’s Departure Building to retrieve any useful records from the Medical Exam Room . The Departure Building is a high-loot, contested area, so watch for other raiders and ARC patrols. Completing the objective only requires finding and searching the records – you don’t need to extract with anything to finish this quest .",
        loadout: [
            "No extraction required (quest completes on interaction)."
        ],
        briefingMap: "Prescriptions of the Past.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Visit the Spaceport Departure Building (west side of map)",
            "Find the Medical Exam Room on the second floor (northwest section)",
            "Search for the medical records on the desk"
        ],
        phases: [
            {
                title: "Phase 1: Enter Departure Building",
                text: "Go to the Departure Building on the west side of Spaceport . Enter through the main (north) entrance. This building has many drawers/containers, so be prepared for encounters.",
                image: null
            },
            {
                title: "Phase 2: Locate Exam Room",
                text: "Inside, take the stairs up and turn left at the top. Follow the hallway on the left (look for the “Exam Rooms” sign ) to reach the Medical Exam Room .",
                image: null
            },
            {
                title: "Phase 3: Retrieve Records",
                text: "In the exam room, look for a desk with yellow folders or a computer . Interact with the medical records on the desk to complete the quest . (Tip: No extraction is needed, so you can use a free loadout and focus on loot if you wish .)",
                image: null
            }
        ]
    },
    {
        id: "power-out",
        title: "Power Out",
        trader: "Celeste",
        location: "Spaceport (southern end, near Security Checkpoint)",
        description: "Celeste reports a power outage – the Spaceport’s southern substation has been disabled and her engineer is missing . She asks you to go to that Electrical Substation, find the engineer’s missing fuse, and restore power . A free-standing electrical box at the substation needs a fuse installed, then flipped on to resume power flow .",
        loadout: [
            "Combat augment (long trek).",
            "Good weapon + shield.",
            "Ammo + medkits."
        ],
        briefingMap: "Power Out.jpg",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Find the Electrical Substation south of Spaceport",
            "Find any sign of the missing engineer (fuse in his bag)",
            "Install the fuse in the electrical box",
            "Restore the power by turning on the switch"
        ],
        phases: [
            {
                title: "Phase 1: Reach the Substation",
                text: "Travel to the south end of Spaceport to the Electrical Substation (near the Security Checkpoint). This trek can be long, so equip a combat augment, a good weapon & shield, and plenty of ammo and medkits . The area around the substation is relatively empty, but be ready for random encounters on the way.",
                image: null
            },
            {
                title: "Phase 2: Get the Fuse",
                text: "At the substation, you will see a large electrical box. Immediately to the left of this box is the missing engineer’s bag . Interact with the bag to retrieve the fuse (a quest item).",
                image: null
            },
            {
                title: "Phase 3: Repair Power",
                text: "Return to the electrical box, interact with it to insert the fuse , and then flip the power switch on the box to restore power (this completes the quest). (Tip: No extraction is required for quest credit. Afterward, you can run to the nearest elevators (South or East Elevator) if you wish to extract .)",
                image: null
            }
        ]
    },
    {
        id: "lost-in-transmission",
        title: "Lost in Transmission",
        trader: "Shani (implied)",
        location: "Spaceport (Control Tower A6, center)",
        description: "Shani needs communications restored. She sends you to Spaceport’s Control Tower A6, where you must use a terminal to “establish a connection” and relay data . The quest grants a Spaceport Control Tower Key – be sure to bring it into the raid to open the tower door . Control Tower A6 is in the center of Spaceport and is often contested by other raiders .",
        loadout: [
            "Bring Spaceport Control Tower Key (quest item).",
            "Keep key in a safe pocket if possible."
        ],
        briefingMap: "Lost in Transmission.png",
        rewards: [
            "Quest item granted: Spaceport Control Tower Key."
        ],
        objectives: [
            "Visit Control Tower A6 in Spaceport",
            "Reach the top of Control Tower A6 (via the zipline)",
            "Establish a connection at the terminal on the roof"
        ],
        phases: [
            {
                title: "Phase 1: Go to Control Tower A6",
                text: "Travel to the tall Control Tower A6 in central Spaceport . Carry the Spaceport Control Tower Key on you (put it in a safe pocket) . Be alert – this locked tower room has great loot and may have other raiders.",
                image: null
            },
            {
                title: "Phase 2: Ascend to the Roof",
                text: "Enter the tower and unlock a door with your key. (There are two doors leading to the same zipline; if one is open, someone else may have passed.) Use the key on one door , then take the zipline up to reach the roof .",
                image: null
            },
            {
                title: "Phase 3: Use the Terminal",
                text: "Once on the roof, find the terminal on the left side of the room. Interact with it to establish the connection (the quest completes immediately upon upload) . (Tip: If another raider already used the zipline, prepare to negotiate or fight. You can loot the tower afterward and extract normally.)",
                image: null
            }
        ]
    },
    {
        id: "flickering-threat",
        title: "Flickering Threat",
        trader: "Celeste",
        location: "Dam Battlegrounds (Power Generation Complex)",
        description: "Celeste’s primary engineer is hurt and power is low at the Dam. She tasks you with repairing the main generator in the Dam’s Power Generation Complex . You must reach the Generator Hall, repair the generator with 4 wires, then find the power switch in the adjacent ventilation shaft and flip it to restore the grid. (You will need 4 Wires in your inventory before starting this mission .)",
        loadout: [
            "Bring 4 Wires (required to repair generator)."
        ],
        briefingMap: "Flickering Threat.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Find the Generator Room (Generator Hall)",
            "Repair the generator (requires 4 Wires)",
            "Find the Ventilation Shaft building (tall building west of the elevators)",
            "Enable the power by flipping the switch under the stairs"
        ],
        phases: [
            {
                title: "Phase 1: Enter the Generator Hall",
                text: "Go to the Power Generation Complex in Dam Battlegrounds (northwest side of the map) . Drop into or enter the Generator Hall (look for ground-floor openings to drop in quickly) . This area can have ARC enemies and other raiders, so proceed with caution.",
                image: null
            },
            {
                title: "Phase 2: Repair the Generator",
                text: "In the Generator Hall, stand between the two large elevators. The prompt to repair the generator is at the end of the western elevator shaft. Interact and use your 4 Wires to repair the generator . The generator will hum to life, but power remains off until you flip the switch.",
                image: null
            },
            {
                title: "Phase 3: Flip the Power Switch",
                text: "Exit the Generator Hall via the south door at the end of the room. Go upstairs through two doors, then immediately turn left and pass through two more doors . In this upper ventilation shaft room, look in the corner for a control box. Interact with it to flip the switch and enable power , completing the quest.",
                image: null
            },
            {
                title: "Phase 4: Tip",
                text: "A staircase in the switch room leads up near the North Complex Elevator . You can use this elevator to extract after repair (raiders often camp it, so stay in cover while you wait).",
                image: null
            }
        ]
    },
    {
        id: "bees",
        title: "Bees!",
        trader: "Celeste",
        location: "The Blue Gate (Olive Grove, south)",
        description: "Celeste’s scouts have spotted surviving bees on the surface, and the greenhouse crew wants live bees for their crops . Celeste asks you to collect one beehive from the Olive Grove in the Blue Gate. You must extract back to Speranza with the hive in your inventory to complete the quest .",
        loadout: [
            "Safe Pocket augment recommended for the beehive.",
            "Plan an extraction route."
        ],
        briefingMap: "Bees!.jpg",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Reach the Olive Grove POI in southern Blue Gate",
            "Search for and collect the beehive under the shack’s roof"
        ],
        phases: [
            {
                title: "Phase 1: Go to the Olive Grove",
                text: "Head to the Olive Grove in southern Blue Gate . This POI is busy (Olives are valuable), so other raiders may be present. Move carefully and avoid drawing fire if possible .",
                image: null
            },
            {
                title: "Phase 2: Collect the Beehive",
                text: "Locate the small shack at Olive Grove. Stand nearby and listen for buzzing. Look under one side of the shack’s roof: a beehive is hanging there, with bees swarming around . Interact with the hive to pick it up (the bees will not sting and will remain alive).",
                image: null
            },
            {
                title: "Phase 3: Extract with Hive",
                text: "With the hive in your inventory (place it in a Safe Pocket augment if possible ), immediately head to an extraction point. Nearby options are the Forest Airshaft (northwest) or Overlook Airshaft (northeast) . Enter an open elevator and exfiltrate to finish the quest.",
                image: null
            }
        ]
    },
    {
        id: "espresso",
        title: "Espresso",
        trader: "Apollo",
        location: "Any (objective in Buried City)",
        description: "Apollo traded for a broken espresso machine but it’s missing parts. He asks you to find the machine in the Buried City and retrieve its parts . This quest can start on any map, but the machine is located in Buried City’s Plaza Rosa. You must extract with the machine to complete the quest.",
        loadout: [
            "Must extract with Espresso Machine Parts."
        ],
        briefingMap: "Espresso.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Find an Espresso Machine (café) to salvage for parts",
            "Collect the Espresso Machine Parts for Apollo"
        ],
        phases: [
            {
                title: "Phase 1: Travel to Plaza Rosa (Buried City)",
                text: "Enter the Buried City map and go to Plaza Rosa in the south . The target is a red café building with a “cafe” sign above its door . Watch out for ARC patrols inside, and approach slowly to avoid alarms .",
                image: null
            },
            {
                title: "Phase 2: Retrieve the Machine",
                text: "Go inside the red café. On the counter or interior of the café, you will see the broken espresso machine . Interact with it to pick it up (it becomes “Espresso Machine Parts” in your inventory). You can loot the café for supplies afterward.",
                image: null
            },
            {
                title: "Phase 3: Extract with Machine",
                text: "Exit the café. The Souther Station elevator is right outside, in front of a broken patch of floor . Jump or zip down into it, activate it, and ride the train out. Returning to base with the machine completes the quest.",
                image: null
            }
        ]
    },
    {
        id: "life-of-a-pharmacist",
        title: "Life of a Pharmacist",
        trader: "Lance",
        location: "Buried City (east, near collapsed highway)",
        description: "Lance wants a “photo mood board” of how past medical pros lived . He directs you to the Arbusto Farmacia (pharmacist’s home) near the collapsed highway in the Buried City . You must photograph the pharmacist’s family, skills, hobbies, and taste by finding specific items in the house.",
        loadout: [
            "Door is locked—be ready to breach quietly."
        ],
        briefingMap: "Life of a Pharmacist.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Locate the Arbusto Farmacia by the collapsed highway",
            "Photograph/document the pharmacist’s hobbies, family, taste, and skills"
        ],
        phases: [
            {
                title: "Phase 1: Enter Arbusto Farmacia",
                text: "Go to eastern Buried City and find the Arbusto Farmacia (look for a green “Farmacia” sign above the door) . The door is locked, so breach it carefully (alerting ARC or raiders is possible).",
                image: null
            },
            {
                title: "Phase 2: Document Family",
                text: "Immediately go upstairs. At the top of the stairs, a framed photo hangs on the wall in front of you. Interact with this photo to document the pharmacist’s family .",
                image: null
            },
            {
                title: "Phase 3: Document Skill",
                text: "In the same upstairs area, find a piano against the wall. Interact with the piano to document the pharmacist’s skill .",
                image: null
            },
            {
                title: "Phase 4: Document Hobby",
                text: "Move to the next room upstairs (adjacent to the piano). On a dresser in that room is a potted plant. Interact with it to document the pharmacist’s hobby .",
                image: null
            },
            {
                title: "Phase 5: Document Taste",
                text: "In the same room with the plant, look for a small table behind the staircase holding various decorative items. Interact with these items to document the pharmacist’s taste .",
                image: null
            },
            {
                title: "Phase 6: Finish and Exit",
                text: "After capturing all four photos, the quest is complete. You can then loot any remaining supplies. The Eastern Station elevator is right outside the pharmacy’s front door , providing a quick exit.",
                image: null
            }
        ]
    },
    {
        id: "tribute-to-toledo",
        title: "Tribute to Toledo",
        trader: "Celeste",
        location: "Any (obtain a Power Rod by any means)",
        description: "Celeste discovered that the so-called Official Toledo Tubes Management (OTTM) is demanding one of Speranza’s Power Rods. She asks you to secure a Power Rod for us . Power Rods are Epic-tier items, so they are very rare.",
        loadout: [
        ],
        briefingMap: "Tribute to Toledo.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Acquire 1 Power Rod for Celeste"
        ],
        phases: [
            {
                title: "Phase 1: Acquire a Power Rod",
                text: "Power Rods can be obtained in several ways (choose whichever is feasible): Loot: Raiding Spaceport’s Rocket Assembly is the most common loot source . Check lockers and machines there; someone leaving might walk away with one. (Night raids slightly increase rare drop chances.) Crafting: If your Refiner Workbench is level 3, you can craft a Power Rod by combining 2 Advanced Electrical Components and 2 Arc Circuitry . Both of these components can themselves be crafted from common materials (Plastic, Rubber , ARC Alloy, etc.). Dismantle: Break down a legendary (yellow) Snap Hook item. That will yield 1 Power Rod along with other materials .",
                image: null
            },
            {
                title: "Phase 2: Return to Celeste",
                text: "After you obtain a Power Rod, go back to Celeste and give it to her . Handing over the Power Rod completes the quest.",
                image: null
            }
        ]
    },
    {
        id: "digging-up-dirt",
        title: "Digging Up Dirt",
        trader: "Celeste",
        location: "Buried City (Santa Maria Houses, Old Town)",
        description: "Celeste’s team caught an OTTM operative making a clandestine delivery. The target: a dead drop inside the Santa Maria Houses in Old Town (Buried City) . You need to retrieve that package. The drop is in a courtyard that’s hard to access from the ground, so use the rooftops.",
        loadout: [
        ],
        briefingMap: "Digging Up Dirt.png",
        rewards: [
            "Completion rewards: not specified in reference data."
        ],
        objectives: [
            "Find the Santa Maria Houses POI in Buried City",
            "Locate the dead drop inside the courtyard"
        ],
        phases: [
            {
                title: "Phase 1: Reach Santa Maria Houses",
                text: "Go to the Santa Maria Houses complex in the southern Buried City . This area is usually fairly safe.",
                image: null
            },
            {
                title: "Phase 2: Access via Roof",
                text: "Approach from the south side. There is a makeshift bridge spanning to the building’s roof. Cross it halfway and then mantle up. On the roof, find and go through the open attic window .",
                image: null
            },
            {
                title: "Phase 3: Zipline Down",
                text: "Once inside the attic, immediately take the zipline down one level .",
                image: null
            },
            {
                title: "Phase 4: Grab the Drop",
                text: "You will now be in the ground-floor courtyard (with sand on the floor). In the center of this large room is a small crate – the dead drop . Interact with it to collect the files.",
                image: null
            },
            {
                title: "Phase 5: Extract",
                text: "After collecting the evidence, head to the nearest extraction. Both the Southern Station and Eastern Station elevators are within reach . Exit through one of them before time runs out.",
                image: null
            }
        ]
    },
    {
        id: "turnabout",
        title: "Turnabout",
        trader: "Celeste",
        location: "Spaceport (North Trench Tower , far north)",
        description: "Celeste now has blackmail files on the OTTM and needs them securely uploaded. She instructs you to go to the Spaceport North Trench Tower and use the terminal there to send her the files . She provides a Spaceport Trench Tower Key for this purpose. Expect other raiders, as the Trench Tower is a well-known POI.",
        loadout: [
            "Bring Spaceport Trench Tower Key (quest item).",
            "Keep key in a safe pocket if possible."
        ],
        briefingMap: "Turnabout.png",
        rewards: [
            "Quest item provided: Spaceport Trench Tower Key."
        ],
        objectives: [
            "Go to the North Trench Tower (Spaceport)",
            "Locate and upload the blackmail files at the terminal inside"
        ],
        phases: [
            {
                title: "Phase 1: Go to North Trench Tower",
                text: "Travel to the northernmost point of Spaceport . The North Trench Tower is obvious on the map. Beware – other raiders (and possibly ARC enemies) often patrol this area .",
                image: null
            },
            {
                title: "Phase 2: Use the Trench Tower Key",
                text: "Carry the Spaceport Trench Tower Key (given by Celeste) on you. At the tower , two staircases (left and right) lead to doors. Use your key on one of these doors to gain entry . Be sure you’re at North Trench Tower – using the key on the South Trench Tower wastes it .",
                image: null
            },
            {
                title: "Phase 3: Upload the Files",
                text: "Upon entering, go upstairs. In the upper room you’ll find a glowing yellow terminal . Interact with the terminal to upload the files. Once the upload is complete, the quest is done.",
                image: null
            },
            {
                title: "Phase 4: Afterward",
                text: "With Turnabout finished, you can loot the Trench Tower (it has great gear) and extract via the Central Elevator or any other available exit.",
                image: null
            }
        ]
    },
                {
        id: "building-a-library",
        title: "Building a Library",
        trader: "Apollo",
        location: "Buried City (City Center)",
        description: "Apollo needs fresh reading material for Speranza's library - the current stock is outdated. He asks the raiders to visit Buried City's library and find three books (one romance, one detective, one adventure) to bring back",
        loadout: [],
        briefingMap: "Building a Library.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Locate the Library in City Center",
            "Find 1 Romance book",
            "Find 1 Detective book",
            "Find 1 Adventure book",
            "Deliver all 3 books to Apollo",
        ],
        phases: [
            {
                title: "Phase 1: Collecting Books",
                text: "Enter Buried City and head to the Library building (central area of the map). Inside the library, loot three books from carts or bookshelves. The GameSpot guide notes that all three required books (romance, detective, adventure) can be found within the library POI. Books may spawn in any cart, so search thoroughly. Be prepared for enemy ARCs or raiders in this busy area. Tips: Gather all three books before extracting. The library is a well-trafficked POI, so equip a shield and decent weapons. According to one walkthrough, the books are on carts inside the library.",
                image: null
            },
            {
                title: "Phase 2: Extraction & Delivery",
                text: "Once you have all books, exit the map via the nearest extract (e.g. Northern Station on Spaceport or another lift). Return to Speranza and hand the books to Apollo to complete the quest.",
                image: null
            },
        ]
    },
                {
        id: "a-new-type-of-plant",
        title: "A New Type of Plant",
        trader: "Lance",
        location: "Dam Battlegrounds (Old Battlegrounds, swamp area)",
        description: "Lance has learned of a strange plant in the ruins. He sends you to Dam Battlegrounds (the swamp near Old Battlegrounds) to investigate. The task is to collect a \"possibly toxic\" plant sample from near the Baron Husk (a large ARC wreck) and bring it back",
        loadout: [],
        briefingMap: "A New Type of Plant.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Search for a new plant near Baron Husk",
            "Deliver the possibly toxic plant to Lance",
        ],
        phases: [
            {
                title: "Phase 1: Locate the Plant",
                text: "Deploy to Dam Battlegrounds and head to the Baron Husk ARC wreck in the southern swamp. The GameSpot guide explains the plant spawns in the swamp water around the Baron Husk. Walk around the wreck until you see orange-flowered plants (Great Mullein) on the wreck or nearby. Interact to harvest one. Tips: The swamp can be dangerous with ARCs and hostile raiders. Moving stealthily or quickly is recommended. There is no strict time pressure, so use caution when looting.",
                image: null
            },
            {
                title: "Phase 2: Extraction & Delivery",
                text: "With the plant in inventory, extract via Central Swamp Lift or nearest extract point. Head back to Lance in Speranza and deliver the sample to complete the quest.",
                image: null
            },
        ]
    },
                {
        id: "armored-transports",
        title: "Armored Transports",
        trader: "Tian Wen",
        location: "The Blue Gate (Checkpoint area)",
        description: "Tian Wen needs you to find and loot an armored patrol car on Blue Gate. First, find the Patrol Car Key in the central Checkpoint POI, then use it to open a random armored vehicle on the road tunnel north of Checkpoint",
        loadout: [],
        briefingMap: [
            "Armored Transports.png",
            "Armored Transports part 2.png",
            "Armored Transports part 3.png",
        ],
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Reach the Checkpoint POI",
            "Search the guard huts for the Patrol Car Key",
            "Reach the Traffic Tunnel north of Checkpoint",
            "Find and unlock the rear door of an intact armored patrol car",
        ],
        phases: [
            {
                title: "Phase 1: Find the Key",
                text: "Deploy to Blue Gate and go to the Checkpoint POI (central map). Inside the guard hut structures, look for the Patrol Car Key on a table or folder. (GameSpot notes it often spawns in one of the huts; if one player dies with the key, a spare appears in the security hut near the tunnel entrance.) Collect the key. Tips: The Checkpoint is high-threat (ARCs like Bastions may patrol there). Move carefully, stick to cover, or eliminate threats first. Keep the key safe in your safe pocket or inventory.",
                image: "Armored Transports.png"
            },
            {
                title: "Phase 2: Open an Armored Car",
                text: "Head north from Checkpoint into the large tunnel. GameSpot advises this area has ARCs (Rocketeers, Bastions) and wasp/hornet nests. Stay hidden or use smoke to pass. Look for an unopened armored car: it has a lit-up closed rear door. Approach and use the Patrol Car Key to unlock the back. Inside is a gun case - loot it to complete the quest Tips: If you can't find an intact car, note that spawns are random but usually in the tunnel. Use the key and loot before extracting. GameSpot suggests extracting from Overlook or Cliffside afterward, but ensure you finish objectives first.",
                image: "Armored Transports part 2.png"
            },
            {
                title: "Phase 3: Extraction",
                text: "After obtaining the loot, extract (e.g. via a nearby airshaft) and return to Tian Wen to turn in the quest.",
                image: "Armored Transports part 3.png"
            },
        ]
    },
                {
        id: "cold-storage",
        title: "Cold Storage",
        trader: "Shani",
        location: "Stella Montis (Stella Montis Battlegrounds)",
        description: "Not specified in reference data.",
        loadout: [],
        briefingMap: [
            "Cold Storage part 1.png",
            "Cold Storage part 2.png",
        ],
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Search any J Kozma Ventures container in Stella Montis",
            "Deliver the Rare Books to Shani",
        ],
        phases: [
            {
                title: "Phase 1: Find the Container",
                text: "Deploy into Stella Montis. Locate a container labeled \"J Kozma Ventures.\" The wiki and guides indicate one reliable container is on the south wall of Cargo Dock A. This container (white with logo) sits in a loading bay; you may need to stand on a ledge or second floor to drop down into it. Search the container to collect the rare books. Tips: Use the map image from Fandom to find it. The area is moderately trafficked, so watch for enemies. The Wiki guide suggests extracting via the nearby Wind Tunnel for safety",
                image: "Cold Storage part 1.png"
            },
            {
                title: "Phase 2: Extraction",
                text: "With the books obtained, exit the map. The Wind Tunnel extract (north) is convenient after Cargo Dock A. Return to Shani and turn in the books.",
                image: "Cold Storage part 2.png"
            },
        ]
    },
                {
        id: "in-my-image",
        title: "In My Image",
        trader: "Lance",
        location: "Stella Montis",
        description: "Lance learned that androids like himself may exist intact. He tasks you with entering Stella Montis and searching for any three intact androids (\"others like me\"). You must find and search three looted-capable androids (not all models are lootable) and return to Lance.",
        loadout: [],
        briefingMap: "In My Image.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Deploy into Stella Montis",
            "Find and search 3 Androids",
        ],
        phases: [
            {
                title: "Phase 1: Find Androids",
                text: "Enter Stella Montis. Explore thoroughly—androids spawn randomly in rooms and corridors. GameSpot notes that lootable androids have an interaction icon, whereas static models do not. Check walls, floors, and corners. Search any android by interacting when prompted. You need three. Tips: There are several known spawn spots, but runs vary. GameSpot advises patience and a sharp eye Bring minimal gear (no extract needed) if you only want to find them. Avoid drawing ARCs' fire unless needed.",
                image: null
            },
            {
                title: "Phase 2: Completion",
                text: "Once three androids are searched, the quest completes. Extract from Stella Montis (or die safely) and return to Lance in Speranza to finish. Lance will be waiting to receive confirmation.",
                image: null
            },
        ]
    },
                {
        id: "snap-and-salvage",
        title: "Snap and Salvage",
        trader: "Tian Wen",
        location: "Stella Montis (Sandbox and Lobby) and any map with Exodus loot (e.g. Assembly)",
        description: "Tian Wen wants tech from Stella Montis. This multi-step quest sends you to capture images of rovers, retrieve secret papers, and find two rare items (Flow Controller and Magnetron) from Exodus-tagged loot. All steps may be done across multiple raids",
        loadout: [],
        briefingMap: [
            "Snap and Salvage.png",
            "Snap and Salvage part 2.png",
            "Snap and Salvage part 3.png",
            "Snap and Salvage part 4.png",
            "Snap and Salvage part 5.png",
            "Snap and Salvage part 6.png",
        ],
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Take a photo of any Rover in the Sandbox",
            "Search the papers in the Security Checkpoint room near the Lobby",
            "Deliver a Flow Controller to Tian Wen",
            "Deliver a Magnetron to Tian Wen",
        ],
        phases: [
            {
                title: "Phase 1: Photograph Rover",
                text: "Deploy to Stella Montis. Go to the Robotics Sandbox A building (bottom layer). Locate any rover (often by machinery). As soon as you approach, interact to \"take a photo\" - this counts for the quest",
                image: "Snap and Salvage.png"
            },
            {
                title: "Phase 2: Retrieve Papers",
                text: "Still in Robotics Sandbox A, go to the main Lobby/Security Checkpoint. Find the door marked \"Security - Restricted Access\" (Lobby area). Breach it if locked, then turn right; search the desk in the office alcove for the papers. Collecting them completes the second objective.",
                image: "Snap and Salvage part 2.png"
            },
            {
                title: "Phase 3: Find Flow Controller & Magnetron",
                text: "Now search for a Flow Controller and a Magnetron, which drop randomly in Exodus-tagged loot zones (any map). Prioritize areas like the Assembly POI (Stella Montis) marked \"Exodus\". Loot everything - these items are rare drops. When you pick them up, keep them in safe pockets. You may need multiple runs; each item must be extracted to count. Tips: You can do this over several runs. The Dexerto guide confirms the items only come from Exodus areas and any map works. Use safe pockets (augment) in case of death",
                image: "Snap and Salvage part 3.png"
            },
            {
                title: "Phase 4: Extraction",
                text: "Once you have both items, extract. Return to Speranza and deliver the Flow Controller and Magnetron to Tian Wen to complete the quest.",
                image: "Snap and Salvage part 4.png"
            },
        ]
    },
                {
        id: "a-toxic-trail",
        title: "A Toxic Trail",
        trader: "Shani",
        location: "Dam Battlegrounds (Water Treatment/swamp area)",
        description: "Shani suspects the sabotage of Speranza's water supply was an inside job. She directs you back to Dam Battlegrounds, to retrace the barrel's origin. First, revisit the water intake where the contaminated barrel was found, then investigate the swamp around it. You must photograph a submerged truck and search it for clues (the saboteur's key).",
        loadout: [],
        briefingMap: "A Toxic Trail.png",
        rewards: [
            "Not specified in reference data.",
        ],
        objectives: [
            "Return to the water intake below the Water Treatment Control building",
            "Search the swamp for traces of the barrel's origins",
            "Take a photo of the barrel truck",
            "Search the truck's trunk for clues",
        ],
        phases: [
            {
                title: "Phase 1: Trigger at Intake",
                text: "Deploy to Dam Battlegrounds. Go to the same water intake location under the Water Treatment Control building where the first quest ended. Stand near the leaking barrel there - simply being in the toxic water will advance the quest. No interaction is needed, just trigger proximity.",
                image: null
            },
            {
                title: "Phase 2: Find the Truck",
                text: "From the intake, walk slightly west into the swamp. Look for a rusty truck partially submerged with barrels on it. GameSpot confirms this truck is near the intake. When you approach it, interact to take a photo of the truck",
                image: null
            },
            {
                title: "Phase 3: Search the Truck",
                text: "After the photo, interact with the truck's door/console to loot inside. You will find a \"Spaceport Warehouse Key\" in the cab. Pick it up (store in safe pocket). This completes the final objective",
                image: null
            },
            {
                title: "Phase 4: Return",
                text: "Extract via the nearby Central Swamp Lift. Return to Shani in Speranza. Turn in the quest - Shani notes the found key points back to Spaceport.",
                image: null
            },
        ]
    },
                {
        id: "the-stench-of-corruption",
        title: "The Stench of Corruption",
        trader: "Shani",
        location: "Spaceport (Departure Building and tunnels). Objectives (In One Round): - Reach the southwest lobby of the Departure Building - Find the staff locker room - Search the room for any clues of the saboteur's identity (obtain the Flushing Terminal Key) - Reach the tunnels below Spaceport - Use the Flushing Terminal Key on any Flushing Terminal to override the bypass protocol",
        description: "Shani believes the water saboteur is from Speranza's own ranks. Using the key found in the truck, she sends you to Acerra Spaceport. You must find clues in a staff locker room and then access the underground flushing terminals.",
        loadout: [],
        briefingMap: [
            "The Stench of Corruption.png",
            "The Stench of Corruption part 2.png",
            "The Stench of Corruption part 3.png",
        ],
        rewards: [
            "the Warden outfit (blue)",
        ],
        objectives: [
            "Not specified in reference data.",
        ],
        phases: [
            {
                title: "Phase 1: Locate Locker Room",
                text: "Deploy to Spaceport. Find the Departure Building's southwest lobby (near Launch Tower). Enter on the bottom floor. In that dark lobby, look for a door labeled \"Staff Room\". Enter - this is the locker room.",
                image: "The Stench of Corruption.png"
            },
            {
                title: "Phase 2: Collect Clues",
                text: "Inside the locker room, inspect the back of the room where hazmat suits hang. Interact with the hazmat suits to search them. This yields the Flushing Terminal Key. Pick up the key. (GameSpot has the exact spot: suits at back of room.) Tips: This entire step must be done in the same raid (don't die before finishing, or you restart). You can extract after completion, but if you die after getting the key before using it, you must redo it.",
                image: "The Stench of Corruption part 2.png"
            },
            {
                title: "Phase 3: Go Underground",
                text: "Exit the Departure Building. Head to Spaceport's underground tunnels (enter via the collapsed vent near the Launch Tower, as in earlier quests)",
                image: "The Stench of Corruption part 3.png"
            },
            {
                title: "Phase 4: Use Flushing Terminal",
                text: "In the tunnels, find any Flushing Terminal. GameSpot suggests one just west of the entrance (within sight). Interact with the terminal using your key to complete the quest.",
                image: null
            },
            {
                title: "Phase 5: Completion",
                text: "Once the terminal is used, the quest finishes. Extract via any Spaceport exit and return to Shani (no extraction required to complete). As a reward, you receive the Warden outfit (blue) upon turn-in",
                image: null
            },
        ]
    },
                {
        id: "the-clean-dream",
        title: "The Clean Dream",
        trader: "Apollo",
        location: "Spaceport (tunnels) and The Blue Gate (Maintenance Bunker)",
        description: "Apollo dreams of a better water distiller. He tasks you with monitoring Spaceport's filtration systems. First, search underground tunnels for containers and activate a filtration unit. Then travel to Blue Gate's maintenance bunker to inspect its purification system and photograph its blueprints",
        loadout: [],
        briefingMap: "The Clean Dream.png",
        rewards: [
            "the \"Deadline\" shotgun",
            "Showstopper pistols",
            "grenades",
        ],
        objectives: [
            "On Spaceport, search 4 containers in the underground tunnels",
            "Find and monitor any Filtration System in the tunnels",
            "On The Blue Gate, visit the Maintenance Bunker",
            "Monitor the Purification System in the bunker",
            "Find and photograph the blueprints in the bunker",
        ],
        phases: [
            {
                title: "Phase 1: Search Containers",
                text: "Deploy to Spaceport. Enter the underground tunnels (use the collapsed vent SW of the Launch Tower as usual). Search any four lootable containers or breach boxes down there They can be anywhere in the tunnel network - simply searching four containers completes this step.",
                image: null
            },
            {
                title: "Phase 2: Monitor Filtration System",
                text: "Still in the tunnels, find a water Filtration System unit (large pump/ valve). The easiest is usually next to the collapsed entrance stairs. Activate or \"monitor\" it (interact on the valve or nearby). This completes the tunnels portion.",
                image: null
            },
            {
                title: "Phase 3: Travel to Blue Gate",
                text: "Exit the tunnels and extract. Then load into The Blue Gate. Go to the Maintenance Bunker (an underground facility southeast of the Checkpoint POI). The entrance is near the \"Maintenance\" label on the map. Enter the bunker.",
                image: null
            },
            {
                title: "Phase 4: Monitor  Purification  System",
                text: "Inside the bunker's main chamber, locate the purification cylinders (large chemical tanks). Interact with them to \"monitor\" the system",
                image: null
            },
            {
                title: "Phase 5: Photograph Blueprints",
                text: "Return upstairs inside the bunker. On the walkway, enter the small side room with lockers and a Security Breach panel. On the desk, find a stack of blueprints. Interact (take a photo) to collect them. This action completes the quest.",
                image: null
            },
            {
                title: "Phase 6: Extraction",
                text: "Exit via the nearby subway/metro extract (found just below the bunker). Return to Speranza and talk to Apollo to turn in the quest. You receive the \"Deadline\" shotgun, Showstopper pistols, and grenades",
                image: null
            },
        ]
    },
                {
        id: "paving-the-way",
        title: "Paving the Way",
        trader: "Apollo",
        location: "Dam Battlegrounds (Enelica buildings) and Buried City (Piazza Roma)",
        description: "Not specified in reference data.",
        loadout: [],
        briefingMap: [
            "Paving the Way.png",
            "Paving the Way part 2.png",
        ],
        rewards: [
            "a Raider Hatch Key",
            "grenades",
        ],
        objectives: [
            "Go to any ENELICA building",
            "Search for a notice board with a note from the researcher",
            "On Buried City, reach the top floor above the Convinio apartments in Piazza Roma",
            "Find the researcher's flat and search for any research data",
        ],
        phases: [
            {
                title: "Phase 1: Enelica Building & Notice Board",
                text: "Enelica has multiple buildings (Dam Battlegrounds has two, and Blue Gate's spaceport headquarters). The easiest is the Dam's Water Treatment Center (an Enelica power facility). Approach from the south; just outside the entrance you'll see a notice board. Interact with it to collect the researcher's note.",
                image: "Paving the Way.png"
            },
            {
                title: "Phase 2: Travel to Buried City",
                text: "Extract after obtaining the note (e.g. via nearby lift), then deploy to Buried City. Go to the Piazza Roma dual apartment complex (middle of the map). Enter the southern building from the main entrance above the metro entrance",
                image: "Paving the Way part 2.png"
            },
            {
                title: "Phase 3: Researcher's Apartment",
                text: "Take the stairs (or elevator) all the way to the top (several floors up, floor 6). At the back of the top floor is the researcher's flat (marked by a wall of monitors). Interact with the monitors to retrieve the research data",
                image: null
            },
            {
                title: "Phase 4: Extraction",
                text: "Once the data is collected, exit and use the metro extract directly below the complex (the nearest exit). Return to Apollo in Speranza to turn in the quest. You receive a Raider Hatch Key and grenades as rewards",
                image: null
            },
        ]
    },
    {
        id: "deciphering-the-data",
        title: "Deciphering the Data",
        trader: "Shani",
        location: "Acerra Spaceport",
        description: "Shani asks you to use abandoned Exodus-era decryptors to rescue critical housing research data. You must locate and use two magnetic decryptor terminals to salvage the information.",
        loadout: [],
        briefingMap: [
            "Deciphering the Data.png",
            "Deciphering the Data part 2.png"
        ],
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "Use the Magnetic Decryptor in the Fuel Control Building",
            "Reach the Arrival Building",
            "Use the Magnetic Decryptor on the top floor of the Arrival Building"
        ],
        phases: [
        {
            title: "Fuel Control Building",
            text: "Go to the Fuel Control Building on the northeast side of the Spaceport (it’s a dark hangar – use your flashlight). Inside, look along the southeast wall for a special terminal (the “decrypt data” interact). Use it to decrypt Shani’s data. Completing this updates the objective."
        },
        {
            title: "Arrival Building",
            text: "Next, cross to the northwest side of the map to the Arrival Building (watch for open ground snipers). Take the stairs to the top floor. Along the north–northwest wall of the top floor you’ll find the second decryptor array. Use it to finish the decryption."
        },
        {
            title: "Extraction",
            text: "Once both terminals are used, the quest completes. Extract safely (be wary of campers at elevators) and turn in the quest back at base."
        }
        ]
    },
    {
        id: "groundbreaking",
        title: "Groundbreaking",
        trader: "Apollo",
        location: "The Blue Gate (northern region)",
        description: "Apollo needs any clue to making buildings quake-resistant. He gives you a rare Blue Gate Tower Key and sends you to Pilgrim’s Peak to find construction research (there’s a whiteboard with a blueprint). Afterward, photograph the depicted abandoned housing project.",
        loadout: [],
        briefingMap: "Groundbreaking.png",
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "Find a spare Blue Gate Communication Tower Key",
            "Enter the locked room at Pilgrim’s Peak",
            "Search the room for construction research (whiteboard)",
            "Find the building pictured on the whiteboard",
            "Photograph the abandoned housing project"
        ],
        phases: [
        {
            title: "Pilgrim’s Peak – Locked Room",
            text: "At Pilgrim’s Peak (northern map), use the Blue Gate Tower Key on the locked door inside the main building. If someone else opened it, you can skip using your key. Enter and head inside the room."
        },
        {
            title: "Search for Research (Whiteboard)",
            text: "Inside, locate the whiteboard on the right wall and interact with it. This reveals a picture of the abandoned housing project. You can also loot the room for extra gear while here."
        },
        {
            title: "Find Housing Project",
            text: "Go southwest to the Abandoned Housing Project (marked on the map). Reach the building shown on the whiteboard. Simply being near this building (triggering the “photograph goal”) updates the objective."
        },
        {
            title: "Photograph Project",
            text: "Look for any interactable camera icon around the unfinished complex and take a photo of it. This completes the quest."
        },
        {
            title: "Extraction",
            text: "Return to base. Watch for campers near extractions. Apollo will praise your breakthrough when you turn in the quest."
        }
        ]
    },
    {
        id: "a-prime-specimen",
        title: "A Prime Specimen",
        trader: "Shani",
        location: "The Blue Gate",
        description: "Shani wants you to examine an ARC Deforester hull as a research sample. It requires powering up with two ARC Powercells to loot it safely.",
        loadout: [],
        briefingMap: "A Prime Specimen.jpeg",
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "In one round: Obtain 2 ARC Powercells",
            "Interact with any ARC Deforester",
            "Loot an ARC Deforester"
        ],
        phases: [
        {
            title: "Locate a Deforester",
            text: "Find an ARC Deforester on Blue Gate. (There are three fixed spawns: one near Adorned Wreckage, one in the Barren Clearing, and one near Ridgeline.) You need two ARC Powercells in your inventory before interacting (these are random spawns in the world)."
        },
        {
            title: "First Panel",
            text: "Climb inside the main chamber of the Deforester and use an ARC Powercell on the first exposed circuit panel (on the left wall). This triggers internal flames."
        },
        {
            title: "Second Panel",
            text: "Wait for the flames to subside, then move to the back of the chamber. Interact with the second circuit panel and use your second ARC Powercell."
        },
        {
            title: "Ascend and Loot",
            text: "Exit and climb to the upper platform (e.g. via the side, then drop in). Wait out any more flames, then run in and loot the Deforester for the “ARC Deforester” item to complete the objectives."
        },
        {
            title: "Tips",
            text: "Take out any Spotters overhead first. A known bug may prevent the quest from triggering – if your interactions don’t work, try another Deforester or restart. Once looted, extract with your items and turn in the quest."
        }
        ]
    },
    {
        id: "with-a-view",
        title: "With a View",
        trader: "Shani",
        location: "Stella Montis",
        description: "Shani needs rare Exodus parts for a stargazing device. First, grab a Rotary Encoder (random in Stella Montis), then use it in a control room near the assembly line. Finally, deliver an Ion Sputter to Shani.",
        loadout: [],
        briefingMap: "With a View.png",
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "Obtain a Rotary Encoder",
            "Visit a Control Room near the Assembly Line",
            "Use the Rotary Encoder to activate the server switch",
            "Interact with a nearby computer to identify the correct paths",
            "Deliver an Ion Sputter to Shani"
        ],
        phases: [
        {
            title: "Find Rotary Encoder",
            text: "Spawn in Stella Montis and search medical or assembly areas. These Exodus materials often appear in upper floors or security rooms. (For example, look in a Medical-area drawer or Assembly security office.) Run toward these areas early in the match. Once found, immediately put it in a safe pocket or stash."
        },
        {
            title: "Control Room (Assembly)",
            text: "Go to any Assembly control room (upper floor of Assembly Workshop with yellow-lever consoles). Inside, locate the yellow valve handle on the wall. Use the Rotary Encoder on it to activate the server switch. Then, interact with the computer terminal in the same room (it’s the bank of terminals next to the lever) to “identify the correct paths”. This completes the Assembly tasks. You may now pass the Rotary Encoder to another if desired."
        },
        {
            title: "Find Ion Sputter",
            text: "Exit Stella Montis and spawn near Medical, Assembly, or the Lobby security office. Search containers (drawers, crates) for an Ion Sputter. These are rare, so you may need multiple runs. Use a safe pocket for the Sputter."
        },
        {
            title: "Deliver to Shani",
            text: "Return to base (or simply extract) and turn in the Ion Sputter to Shani. You’ve completed the quest once you hand over the item."
        }
        ]
    },
    {
        id: "the-league",
        title: "The League",
        trader: "Apollo",
        location: "Dam Battlegrounds and Buried City",
        description: "Apollo is organizing a kids’ sports program. He needs a deflated football and a pump, plus photos of makeshift goals and football magazines to recreate a playground.",
        loadout: [],
        briefingMap: [
            "The League.png",
            "The League part 2.png"
        ],
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "Deliver a Deflated Football to Apollo",
            "Deliver a Bicycle Pump to Apollo",
            "On Dam Battlegrounds, photograph the goal posts by the Water Towers",
            "On Buried City, photograph a football magazine kiosk"
        ],
        phases: [
        {
            title: "Buried City – Kiosk",
            text: "In northwest Buried City (Marano Station area), locate the small newspaper stand (north end of the station). There are two kiosks; only the north one is open. Go inside and photograph the magazine stand (trigger “search” icon). This completes that objective. Then outside the same stand, find the parked bicycle leaning on the north wall. Interact with it to spawn a Bicycle Pump item. Pick it up (you can now extract to deliver it)."
        },
        {
            title: "Dam – Goal Posts",
            text: "Head to Dam Battlegrounds (southwest corner) at the Water Towers. Find the football goalposts on the east side, next to the northeastern tower. Photograph the posts (target icon). Nearby, there’s a small metal box in the grass between the goals and tower containing the Deflated Football. Collect this item (guaranteed spawn)."
        },
        {
            title: "Deliver Items",
            text: "After obtaining the football and pump, extract and return to Apollo. Give him the deflated football and bicycle pump to complete the quest."
        }
        ]
    },
    {
        id: "combat-recon",
        title: "Combat Recon",
        trader: "Shani",
        location: "Buried City",
        description: "Shani warns of ARC Bombardiers that use Spotters for targeting. You must find safe cover positions and eliminate their Spotters to prepare for these assaults.",
        loadout: [],
        briefingMap: [
            "Combat Recon.png",
            "Combat Recon part 2.png",
            "Combat Recon part 3.png"
        ],
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "Scope out a cover spot in the Parking Garage staircases",
            "Scope out a cover spot in the buses near Marano Park",
            "Scope out a cover spot in the attics around Main Street",
            "Destroy 2 Spotters",
            "Deliver a Spotter Relay to Shani"
        ],
        phases: [
        {
            title: "Cover Scouting",
            text: "Visit each listed area in Buried City. At each one, find and interact with a designated “cover spot” (in-game prompt will appear). Specifically: ◦ Parking Garage (spiral ramp): Climb to the second level of the garage spiral ramp to interact with a cover spot. ◦ Marano Park (buses): Approach the bus shelters by Marano Park; interact at the marked cover location among the buses. ◦ Main Street (attics): Enter a nearby building on Main Street and reach an attic or rooftop area to scope the cover spot. (These “scope out” actions each update the objective once triggered.)"
        },
        {
            title: "Destroy Spotters",
            text: "After all cover spots are recorded, ARC Spotter drones will appear. Find and destroy two Spotters. (They may hover high or move around; use cover and ranged attacks.)"
        },
        {
            title: "Recover Relay",
            text: "Approach a destroyed Spotter and loot it to obtain a single Spotter Relay item. (Only one relay is needed even though you kill two.)"
        },
        {
            title: "Deliver Relay",
            text: "Carry the Spotter Relay out of the raid (best in a safe pocket) and give it to Shani back at base. This completes the quest. (Tip: use a safe pocket to avoid dropping it.)"
        }
        ]
    },
    {
        id: "on-deaf-ears",
        title: "On Deaf Ears",
        trader: "Lance",
        location: "Stella Montis",
        description: "Lance is looking for information on special hearing devices. An auditory researcher visited Stella Montis during the Exodus; you must retrace her steps through campus computers to find where prototypes were sent.",
        loadout: [],
        briefingMap: [
            "On Deaf Ears.png",
            "On Deaf Ears part 2.png",
            "On Deaf Ears part 3.png",
            "On Deaf Ears part 4.png"
        ],
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "Find the researcher’s guest logs on the reception computers",
            "Find where the researcher held her lecture and access the notes",
            "Find information about the prototypes on the Medical Research computers",
            "Find the printed shipping logs in the Assembly Workshops"
        ],
        phases: [
        {
            title: "Reception Logs",
            text: "In the Business Lounge reception area, look for any computer terminal. Interact with it to retrieve the researcher’s guest logs. This reveals where she gave a lecture."
        },
        {
            title: "Lecture Notes",
            text: "Next, locate the lecture hall where she spoke (as hinted by Lance). Find and interact with a terminal or whiteboard in that lecture space to view her notes. (The notes confirm she showed hearing aid prototypes to attendees.)"
        },
        {
            title: "Medical Research",
            text: "Go to the Medical Research wing. Find any computer there and interact to download data about the hearing aid prototypes."
        },
        {
            title: "Assembly Shipping Logs",
            text: "Finally, move to the Assembly Workshops. Search for a computer or printed charts to find the shipping logs of those prototypes. Once you access the logs (which give coordinates), the quest completes."
        },
        {
            title: "Completion",
            text: "Leave Stella Montis and report back. Lance will note that the coordinates point to the Spaceport 48 (clue for the next mission)."
        }
        ]
    },
    {
        id: "bombing-run",
        title: "Bombing Run",
        trader: "Shani",
        location: "Any (Bombardiers spawn in Blue Gate or Buried City)",
        description: "Shani tasks you with downing an ARC Bombardier and salvaging its power cell. Bombardiers are vulnerable but armed with heavy mortars.",
        loadout: [],
        briefingMap: "Bombing Run.png",
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "Destroy a Bombardier",
            "Deliver a Bombardier Cell to Shani"
        ],
        phases: [
        {
            title: "Locate Bombardier",
            text: "Enter Blue Gate or Buried City and find a Bombardier. You can identify one by its distinctive Spotter drones overhead."
        },
        {
            title: "Engage",
            text: "Take cover frequently (mortars are deadly). First eliminate any Spotters to prevent additional mortar calls. Then focus fire on the Bombardier itself. It’s less armored than a Bastion but still dangerous."
        },
        {
            title: "Loot Cell",
            text: "Once the Bombardier is destroyed, loot its wreckage to obtain a Bombardier Cell."
        },
        {
            title: "Deliver Cell",
            text: "Carry the cell out (place in safe pocket to avoid loss) and return to Shani. Hand it in to finish the quest."
        }
        ]
    },
    {
        id: "movie-night",
        title: "Movie Night",
        trader: "Apollo",
        location: "Any (Stella Montis and Buried City)",
        description: "Apollo wants to host a relaxing movie night. He needs an old film collection and a working TV. Your tasks are to scavenge vintage movie tapes from Stella’s archives and find a Portable TV, then bring these items to Apollo.",
        loadout: [],
        briefingMap: "Movie Night.png",
        rewards: [
            "Not specified in reference data."
        ],
        objectives: [
            "In one round: Deliver a Portable TV to Apollo",
            "In Stella Montis, search the Cultural Archives for old movie tapes",
            "Deliver the Stack of Movie Tapes to Apollo"
        ],
        phases: [
        {
            title: "Find Movie Tapes (Stella Montis)",
            text: "Go to the Cultural Archives (access via the Atrium). Head downstairs and immediately turn right into the southwest corner of the archive. Look for a pile of old furniture (white-sheeted with a blue cross on the wall). Interact with it to retrieve the Stack of Movie Tapes. ◦ Tip: Bring no weapons/gear needed here; Shredders lurk in the archive, but you only need to grab the tapes. Keep them in a safe pocket and you can even surrender immediately (quest persists)."
        },
        {
            title: "Find Portable TV (Buried City)",
            text: "Search Buried City residential areas for a Portable TV in storage containers. Good spots include household drawers/cabinets in Buried Properties or Santa Maria Houses, or filing cabinets in Piazza Arbusto or Plaza Rosa pharmacies. Once found, secure the TV in your inventory/safe pocket."
        },
        {
            title: "Deliver Items",
            text: "After obtaining both the TV and tape stack, extract and return to Apollo’s base. Hand over the Portable TV and Stack of Movie Tapes to complete the quest. Apollo will reward you for restoring some normalcy for everyone."
        }
        ]
    }
];
