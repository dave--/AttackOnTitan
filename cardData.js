var cardData = [{
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Pay 3 Move: Pass a card in your hand to another Hero in your District. That player passes you a card from their hand.",
	"name":"Armin"
}, {
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"If you play two or more Maneuvers during your turn, +2 Power.",
	"name":"Levi"
}, {
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Your Defense cards may be used to avoid an Ambush against any target in this District or an adjacent District.",
	"name":"Mikasa"
}, {
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Each time an Archenemy titan is defeated, you may destroy a card in your hand.\nAt the end of each of your turns, draw an additional card for each Titan in your space.",
	"name":"Hange"
}, {
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"If you play a Wound during your turn, +2 Power and Move 2.\nEach time you defeat a titan, choose a Hero. That Hero draws a card.",
	"name":"Eren"
}, {
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Pay 4 Move: Choose a Hero. That Hero draws a card.",
	"name":"Erwin"
}, {
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Pay 2 Move: Move another Hero one space.",
	"name":"Sasha"
}, {
	"type":"Hero",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"If you play two or more different Equipment during your turn, +2 Power.",
	"name":"Conny"
}, {
	"type":"Equipment",
	"subtype":"Move",
	"cost":2,
	"hitpoints":null,
	"text":"+1 Power\nYou may put this card back on the 3D Gear stack. If you do, Move 2 and an additional +1 Power.",
	"name":"3D Gear"
}, {
	"type":"Titan",
	"subtype":"Archenemy 4",
	"cost":13,
	"hitpoints":30,
	"text":"Titan Ongoing: At the end of each round, remove a token from the Wall in this District. (Cannot be taken as a Wound.)",
	"name":"Armored Titan"
}, {
	"type":"Location",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"Ongoing: Heroes in this District may use this card once during each of their turns.\nPay 3 Move: Draw a card.",
	"name":"Armory"
}, {
	"type":"Titan",
	"subtype":"Archenemy 2",
	"cost":9,
	"hitpoints":17,
	"text":"Titan Ongoing: At the end of each round, destroy a card with cost 4 or greater in any District.",
	"name":"Bean"
}, {
	"type":"Titan",
	"subtype":"Archenemy 2",
	"cost":8,
	"hitpoints":14,
	"text":"Titan Ongoing: While in this Titan's space, you cannot deal damage to it unless you played Move 3 or more this turn.",
	"name":"Bearded Titan"
}, {
	"type":"Ally",
	"subtype":"Move",
	"cost":5,
	"hitpoints":null,
	"text":"Move 2\n+3 Power",
	"name":"Bertholdt Hoover"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Add 3 to this Titan's cost this turn.\nAmbush: Remove a token from the Wall in this District. (Cannot be taken as a Wound.)",
	"name":"Breakthrough"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":6,
	"hitpoints":null,
	"text":"+3 Power\nDeal 5 damage to each Archenemy Titan in this District.",
	"name":"Cannon"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Unless you played Move 4 or more this turn, add 8 to this Titan's cost this turn.",
	"name":"Charge"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"You may pass a card from your hand to the hand of any Hero in this District.\nDefense: You may discard this card to avoid an Ambush. If you do, draw two cards.",
	"name":"Christa Lenz"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":2,
	"hitpoints":null,
	"text":"+1 Power and an additional +1 Power for each other Ally you play or have played this turn.",
	"name":"Cis"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":5,
	"hitpoints":null,
	"text":"+2 Power\nDefense: You may discard this card to avoid an Ambush. If you do, draw two cards and you may destroy a card in your hand.",
	"name":"Cloak"
}, {
	"type":"Titan",
	"subtype":"Archenemy 4",
	"cost":10,
	"hitpoints":40,
	"text":"Titan Ongoing: When you attempt to defeat this Titan, draw an additional Titans on Attack card.\nAt the end of each round, Ambush: Each Hero in this District discards a non-Wound card.",
	"name":"Colossal Titan"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":7,
	"hitpoints":null,
	"text":"Gain a non-Titan card in this District and put it into your hand.\nDefense: You may discard this card to have each Hero in this District avoid an Ambush. If you do, gain a non-Titan card in this District.",
	"name":"Commander Pyxis"
}, {
	"type":"Starter",
	"subtype":null,
	"cost":0,
	"hitpoints":null,
	"text":"+1 Power",
	"name":"Courage"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Ambush: Destroy an Equipment you played this turn (lose its Power and future effects).",
	"name":"Crush"
}, {
	"type":"Titan",
	"subtype":"Archenemy 3",
	"cost":10,
	"hitpoints":24,
	"text":"Titan Ongoing: At the end of each round, each Hero in this space must discard a Move card or gain a Wound.",
	"name":"Deviant Titan 10"
}, {
	"type":"Titan",
	"subtype":"Archenemy 3",
	"cost":11,
	"hitpoints":16,
	"text":"Titan Ongoing: While in this Titan's space, you cannot deal damage to it greater than your Move total this turn.",
	"name":"Deviant Titan 11"
}, {
	"type":"Titan",
	"subtype":"Archenemy 3",
	"cost":12,
	"hitpoints":22,
	"text":"Titan Ongoing: At the end of each round, this Titan moves to the District with the fewest number of cards inside its Wall, and then destroys all non-Titan cards in that District.",
	"name":"Deviant Titan 12"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Ambush: Destroy an Ally you played this turn (lose its Power and future effects).",
	"name":"Eat"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":5,
	"hitpoints":null,
	"text":"+2 Power\nDeal 3 damage to an Archenemy Titan in your space. If there aren't any in your space, draw a card.",
	"name":"Eld"
}, {
	"type":"Maneuver",
	"subtype":"Move",
	"cost":4,
	"hitpoints":null,
	"text":"Move 2\nDraw a card.\nDefense: You may discard this card to avoid an Ambush. If you do, draw two cards.",
	"name":"Escape"
}, {
	"type":"Titan",
	"subtype":"Archenemy 4",
	"cost":15,
	"hitpoints":25,
	"text":"Titan Ongoing: At the end of each round, this Titan moves to the District with the most Heroes. Then, Ambush: Each Hero in this District gains a Wound.",
	"name":"Female Titan"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"Draw a card.\nDeal 3 damage to an Archenemy Titan in this District.",
	"name":"Flintlock Rifle"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"You may destroy a Wound controlled by a Hero in this District. If you choose not to, you may destroy a Wound in your discard pile.",
	"name":"Food"
}, {
	"type":"Location",
	"subtype":null,
	"cost":5,
	"hitpoints":null,
	"text":"Ongoing: Heroes in this District may use this card at any time.\nDiscard a Move card: Avoid an Ambush.",
	"name":"Forest of Giant Trees"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"Choose two Heroes in your space. Each of them gains a 3D Gear from the stack and puts it into their hand.",
	"name":"Fuel Cannisters"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Ambush: Destroy a Maneuver you played this turn (lose its Power and future effects).",
	"name":"Grab"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"+1 Power\nDeal 4 damage to an Archenemy Titan in your space.",
	"name":"Gunther Schultz"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"+1 Power\nDefense: You may discard this card to have each Hero in this District avoid an Ambush. If you do, draw a card.",
	"name":"Hannes"
}, {
	"type":"Maneuver",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"+1 Power and draw a card.\nYou may destroy an Ally in your hand or discard pile. If you do, additional +2 Power.",
	"name":"Heroic Sacrifice"
}, {
	"type":"Equipment",
	"subtype":"Move",
	"cost":2,
	"hitpoints":null,
	"text":"Move 3\n+1 Power",
	"name":"Horse"
}, {
	"type":"Location",
	"subtype":null,
	"cost":6,
	"hitpoints":null,
	"text":"Ongoing: Heroes in this District may use this card once during each of their turns.\nPay 3 Move: Destroy a Wound you control or in your discard pile..",
	"name":"Hospital"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"You may gain a non-Titan card with cost 3 or less from any District, and then put it into the hand of any Hero in this District.\nIf you choose not to, +2 Power.",
	"name":"Ian Dietrich"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Add 1 to this Titan's cost this turn.\nAmbush: Each Hero in this District gains a Wound.",
	"name":"Injure"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":6,
	"hitpoints":null,
	"text":"+ Power equal to your Move this turn.",
	"name":"Jean Kirschtein"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":2,
	"hitpoints":null,
	"text":"Gain a card with cost 5 or less from the destroyed pile.",
	"name":"Jurgen"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"If you play or have played another Ally this turn, +4 Power.\nOtherwise, +2 Power.",
	"name":"Keith Shadis"
}, {
	"type":"Maneuver",
	"subtype":null,
	"cost":7,
	"hitpoints":null,
	"text":"If you share a space with a titan, +7 Power.\nOtherwise, +3 Power.",
	"name":"Kill Shot"
}, {
	"type":"Ally",
	"subtype":"Move",
	"cost":3,
	"hitpoints":null,
	"text":"Draw a card.\nDiscard any number of cards. Move 1 for each card discarded this way.",
	"name":"Kitts Woerman"
}, {
	"type":"Maneuver",
	"subtype":"Move",
	"cost":2,
	"hitpoints":null,
	"text":"Move 1\nThe player to your right looks at the top four cards of the main deck, and places them back on top in any order.",
	"name":"Long-Distance Scouting Formation"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":2,
	"hitpoints":null,
	"text":"You pay 1 less to buy non-Titan cards in your space this turn.\nDefense: You may discard this card to avoid an Ambush.",
	"name":"Marco Bodt"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"+2 Power\nFor each titan you defeat this turn, draw an additional card at the end of your turn.",
	"name":"Miche Zacharius"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"If you share a space with a Titan, draw two cards.\nOtherwise, +2 Power.",
	"name":"Nanaba"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"+2 Power\nYou may discard a Move card. If you do, draw a card.",
	"name":"Ness"
}, {
	"type":"Location",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"Ongoing: Heroes in this District may use this card once during each of their turns.\nPay 2 Move: Pass a card in your hand to any player. That player passes you a card from their hand.",
	"name":"Old Survey Corps HQ"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":5,
	"hitpoints":null,
	"text":"+2 Power\nEach time you defeat a Titan this turn, you may destroy a card in your hand or discard pile.",
	"name":"Oruo Bozad"
}, {
	"type":"Maneuver",
	"subtype":"Move",
	"cost":6,
	"hitpoints":null,
	"text":"+3 Power\nChoose a Hero in this District. Destroy a Courage in their discard pile.",
	"name":"Pay Tribute"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":5,
	"hitpoints":null,
	"text":"Each Hero in this District may destroy a card in their hand.",
	"name":"Petra"
}, {
	"type":"Maneuver",
	"subtype":"Move",
	"cost":2,
	"hitpoints":null,
	"text":"Move 1\nChoose a Hero in this District to draw a card and discard a card.",
	"name":"Reel In"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":6,
	"hitpoints":null,
	"text":"+2 Power\nDefense: You may reveal this card from your hand to avoid an Ambush. If you do, draw a card.",
	"name":"Reiner Braun"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Add 2 to this Titan's cost this turn.\nReveal the top card of the main deck. If it's a Titan, add it to this District. If not, destroy it",
	"name":"Reinforcements"
}, {
	"type":"Maneuver",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"Choose two Heroes in your space. Each of them draws a card.",
	"name":"Resupply"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Add 3 to this Titan's cost this turn.\nAmbush: Each Hero in this District discards a random card.",
	"name":"Scare"
}, {
	"type":"Location",
	"subtype":null,
	"cost":6,
	"hitpoints":null,
	"text":"Ongoing: This card coutns as a Wall token.\nHeroes in this District may use this card once during each of their turns.\nPay 2 Move: Move a Titan to this District.",
	"name":"Shiganshina"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":2,
	"hitpoints":null,
	"text":"Each other Hero may move one space.\nDefense: You may discard this card to avoid an Ambush. If you do, draw a card.",
	"name":"Signal Flare"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Add 5 to this Titan's cost this turn.",
	"name":"Smile"
}, {
	"type":"Titan",
	"subtype":"Archenemy 1",
	"cost":6,
	"hitpoints":13,
	"text":"Titan Ongoing: At the end of each round, each Hero in this space must reveal a Move card or gain a Wound.",
	"name":"Smiling Titan"
}, {
	"type":"Titan",
	"subtype":"Archenemy 2",
	"cost":7,
	"hitpoints":19,
	"text":"Titan Ongoing: At the end of each round, each Hero in this space must reveal an Equipment card or gain a Wound.",
	"name":"Sonny"
}, {
	"type":"Titans on Attack",
	"subtype":null,
	"cost":null,
	"hitpoints":null,
	"text":"Add 3 to this Titan's cost this turn. If it is not defeated, it immediately regenerates twice.",
	"name":"Steaming"
}, {
	"type":"Maneuver",
	"subtype":"Move",
	"cost":5,
	"hitpoints":null,
	"text":"Move 1\n+4 Power if you play or have played one or more Equipment this turn.\nOtherwise, +2 Power.",
	"name":"Surprise Attack"
}, {
	"type":"Maneuver",
	"subtype":"Move",
	"cost":3,
	"hitpoints":null,
	"text":"Move 2\nDefense: You may discard this card to avoid an Ambush. If you avoided an Archenemy Titan, draw a card. Otherwise, defeat that Titan.",
	"name":"Swing Away"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"If you share a space with a Titan, +4 Power.\nOtherwise, +2 Power.",
	"name":"Swords"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":2,
	"hitpoints":null,
	"text":"Draw a card.",
	"name":"Thomas Wagner"
}, {
	"type":"Starter",
	"subtype":"Move",
	"cost":0,
	"hitpoints":null,
	"text":"Move 2",
	"name":"Thrust"
}, {
	"type":"Titan",
	"subtype":null,
	"cost":5,
	"hitpoints":null,
	"text":"Ambush: Each Hero in this District gains a Wound.",
	"name":"Titan (10-meter)"
}, {
	"type":"Titan",
	"subtype":null,
	"cost":2,
	"hitpoints":null,
	"text":"Ambush: Remove a token from the Wall in this District. (Cannot be taken as a Wound)",
	"name":"Titan (4-meter)"
}, {
	"type":"Titan",
	"subtype":null,
	"cost":2,
	"hitpoints":null,
	"text":"Ambush: Each Hero in this District discards two Thrust cards.\nFour or more players: Discard two Move cards instead.",
	"name":"Titan (5-meter)"
}, {
	"type":"Titan",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"Ambush: Each Hero in this District discards a random card.\nFour or more players: If you avoid this, discard a Starter.",
	"name":"Titan (6-meter)"
}, {
	"type":"Titan",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"Ambush: Each Hero in this District discards their hand and draws four cards. If no Heroes are in this District, add the top card of the main deck to this District.",
	"name":"Titan (7-meter)"
}, {
	"type":"Titan",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"Ambush: Destroy a non-Titan card in this District.",
	"name":"Titan (8-meter)"
}, {
	"type":"Titan",
	"subtype":null,
	"cost":4,
	"hitpoints":null,
	"text":"Ambush: Each Hero in this District destroys an Ally in this district. Each who cannot destroys an Ally in their hand instead.",
	"name":"Titan (9-meter)"
}, {
	"type":"Equipment",
	"subtype":null,
	"cost":7,
	"hitpoints":null,
	"text":"Draw a card for each Titan in this District.\nPlace the Titan Trap token on the Wall in this District. At the end of this round, that Wall takes no damage. Then remove the token.",
	"name":"Titan Trap"
}, {
	"type":"Location",
	"subtype":null,
	"cost":5,
	"hitpoints":null,
	"text":"Ongoing: Heroes in this District may use this card once during each of their turns.\nPay 3 Move: Destroy a Courage or Thrust in your hand.",
	"name":"Training Grounds"
}, {
	"type":null,
	"subtype":null,
	"cost":0,
	"hitpoints":null,
	"text":"During your turn, play Wound cards before playing other cards.\nOngoing: If you play or gain a Wound, you die.\nAt the start of your turn, discard a Wound you control.\nReturn destroyed Wound cards to the Wound stack.",
	"name":"Wound"
}, {
	"type":"Ally",
	"subtype":null,
	"cost":3,
	"hitpoints":null,
	"text":"+4 Power if you play or have played one or more Maneuvers this turn.\nOtherwise, +2 Power.",
	"name":"Ymir"
}]