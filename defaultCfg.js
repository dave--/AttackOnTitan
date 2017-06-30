var defaultCfg = {
	seed: Date.now(),
	players: [{
		name: "Player 1",
		deck: ["Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Thrust", "Thrust", "Thrust"],
		hand: [],
		discard: []
	}, {
		name: "Player 2",
		deck: ["Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Thrust", "Thrust", "Thrust"],
		hand: [],
		discard: []
	}, {
		name: "Player 3",
		deck: ["Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Thrust", "Thrust", "Thrust"],
		hand: [],
		discard: []
	}, {
		name: "Player 4",
		deck: ["Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Thrust", "Thrust", "Thrust"],
		hand: [],
		discard: []
	}, {
		name: "Player 5",
		deck: ["Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Thrust", "Thrust", "Thrust"],
		hand: [],
		discard: []
	}],
	misc: {
		wounds: new Array(21).join('Wound;').split(';').slice(0, 20),
		gears: new Array(17).join('3D Gear;').split(';').slice(0, 16),
		castle: ["Armory", "Bertholdt Hoover", "Cannon", "Cannon", "Christa Lenz", "Cis", "Cloak", "Cloak", "Commander Pyxis", "Eld", "Escape", "Escape", "Flintlock Rifle", "Flintlock Rifle", "Food", "Food", "Forest of Giant Trees", "Fuel Cannisters", "Fuel Cannisters", "Gunther Schultz", "Hannes", "Heroic Sacrifice", "Heroic Sacrifice", "Horse", "Horse", "Hospital", "Ian Dietrich", "Jean Kirschtein", "Jurgen", "Keith Shadis", "Kill Shot", "Kill Shot", "Kitts Woerman", "Long-Distance Scouting Formation", "Long-Distance Scouting Formation", "Marco Bodt", "Miche Zacharius", "Nanaba", "Ness", "Old Survey Corps HQ", "Oruo Bozad", "Pay Tribute", "Pay Tribute", "Petra", "Reel In", "Reel In", "Reiner Braun", "Resupply", "Resupply", "Shiganshina", "Signal Flare", "Signal Flare", "Surprise Attack", "Surprise Attack", "Swing Away", "Swing Away", "Swords", "Swords", "Thomas Wagner", "Titan (10-meter)", "Titan (10-meter)", "Titan (4-meter)", "Titan (4-meter)", "Titan (5-meter)", "Titan (5-meter)", "Titan (6-meter)", "Titan (6-meter)", "Titan (6-meter)", "Titan (7-meter)", "Titan (7-meter)", "Titan (7-meter)", "Titan (8-meter)", "Titan (8-meter)", "Titan (8-meter)", "Titan (9-meter)", "Titan (9-meter)", "Titan (9-meter)", "Titan Trap", "Training Grounds", "Ymir"],
		archenemies: ["Armored Titan", "Bean", "Bearded Titan", "Colossal Titan", "Deviant Titan 10", "Deviant Titan 11", "Deviant Titan 12", "Female Titan", "Smiling Titan", "Sonny"],
		titansonattack: ["Breakthrough", "Charge", "Crush", "Eat", "Grab", "Injure", "Reinforcements", "Scare", "Smile", "Steaming"],
		destroyed: [],
		heroes: ["Armin", "Conny", "Eren", "Erwin", "Hange", "Levi", "Mikasa", "Sasha"],
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