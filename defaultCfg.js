var defaultCfg = {
	seed: Date.now(),
	players: [{
		name: "Player 1",
		deck: ["Thrust", "Thrust", "Thrust", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage"],
		hand: [],
		discard: []
	}, {
		name: "Player 2",
		deck: ["Thrust", "Thrust", "Thrust", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage"],
		hand: [],
		discard: []
	}, {
		name: "Player 3",
		deck: ["Thrust", "Thrust", "Thrust", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage"],
		hand: [],
		discard: []
	}, {
		name: "Player 4",
		deck: ["Thrust", "Thrust", "Thrust", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage"],
		hand: [],
		discard: []
	}, {
		name: "Player 5",
		deck: ["Thrust", "Thrust", "Thrust", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage"],
		hand: [],
		discard: []
	}],
	misc: {
		wounds: new Array(21).join('Wound;').split(';').slice(0, 20),
		gears: new Array(17).join('3D Gear;').split(';').slice(0, 16),
		castle: ["Titan (4-meter)", "Titan (4-meter)", "Titan (5-meter)", "Titan (5-meter)", "Titan (6-meter)", "Titan (6-meter)", "Titan (6-meter)", "Titan (7-meter)", "Titan (7-meter)", "Titan (7-meter)", "Titan (8-meter)", "Titan (8-meter)", "Titan (8-meter)", "Titan (9-meter)", "Titan (9-meter)", "Titan (9-meter)", "Titan (10-meter)", "Titan (10-meter)", "Ian Dietrich", "Commander Pyxis", "Jurgen", "Christa Lenz", "Hannes", "Oruo Bozad", "Miche Zacharius", "Marco Bodt", "Nanaba", "Ymir", "Eld", "Jean Kirschtein", "Petra", "Thomas Wagner", "Kitts Woerman", "Ness", "Keith Shadis", "Gunther Schultz", "Reiner Braun", "Cis", "Bertholdt Hoover", "Swing Away", "Swing Away", "Resupply", "Resupply", "Kill Shot", "Kill Shot", "Long-Distance Scouting Formation", "Long-Distance Scouting Formation", "Reel In", "Reel In", "Heroic Sacrifice", "Heroic Sacrifice", "Surprise Attack", "Surprise Attack", "Pay Tribute", "Pay Tribute", "Escape", "Escape", "Cannon", "Cannon", "Signal Flare", "Signal Flare", "Fuel Cannisters", "Fuel Cannisters", "Horse", "Horse", "Swords", "Swords", "Flintlock Rifle", "Flintlock Rifle", "Cloak", "Cloak", "Food", "Food", "Titan Trap", "Training Grounds", "Shiganshina", "Armory", "Old Survey Corps HQ", "Hospital", "Forest of Giant Trees"],
		archenemies: [],
		titansonattack: ["Injure", "Reinforcements", "Scare", "Breakthrough", "Crush", "Charge", "Steaming", "Smile", "Grab", "Eat"],
		destroyed: [],
		heroes: ["Armin", "Conny", "Eren", "Erwin", "Hange", "Levi", "Mikasa", "Sasha"]
	},
	districts: [{
		name: "Wall Maria - West",
		hitpoints: 2,
		locations: [],
		outer: {
			cards: [],
			heroes: []
		},
		inner: {
			cards: [],
			heroes: []
		}
	}, {
		name: "Wall Maria - East",
		hitpoints: 2,
		locations: [],
		outer: {
			cards: [],
			heroes: []
		},
		inner: {
			cards: [],
			heroes: []
		}
	}, {
		name: "Wall Rose - West",
		hitpoints: 2,
		locations: [],
		outer: {
			cards: [],
			heroes: []
		},
		inner: {
			cards: [],
			heroes: []
		}
	}, {
		name: "Wall Rose - East",
		hitpoints: 2,
		locations: [],
		outer: {
			cards: [],
			heroes: []
		},
		inner: {
			cards: [],
			heroes: []
		}
	}, {
		name: "Wall Sina",
		hitpoints: 2,
		locations: [],
		outer: {
			cards: [],
			heroes: []
		},
		inner: {
			cards: [],
			heroes: []
		}
	}]
}