window.onload = function () {
	// handle clicks
	document.body.addEventListener('click', function (e) {
		if (!hasClass(e.target, 'actionBox') && !findParent(e.target, '.actionBox')) {
			// remove previously marked 
			$('.clicked').forEach(function (el) {
				removeClass(el, 'clicked');
			});
			// hide action box, if it was visible
			actionBox.hide();
			// Card Pile Header or specific card clicked, show available actions
			if (e.target.tagName.toUpperCase() === 'H3' && hasClass(e.target.parentNode, 'cardpile')
				|| e.target.tagName.toUpperCase() === 'LI' && hasClass(e.target.parentNode.parentNode, 'cardpile')) {
				actionBox.show(e.target);
				addClass(e.target, 'clicked');
			} else if (e.target.name === 'generateLink') {
				var cfg = collectData();
				var tinyurl = createTinyurl(location.protocol + '//' + location.host + location.pathname + '#' + Base64.urlSafeEncode(LZString.compress(JSON.stringify(cfg))));
				$('[name="url"]')[0].value = tinyurl;
			}
		}
	});
	document.body.addEventListener('keyup', function (e) {
		// set new seed
		if (e.target.name === 'seed') {
			RNG = new Math.seedrandom(e.target.value);
		}
	})

	// if hash data was passed, use it as default data
	if (location.hash.length > 0) {
		// sometimes location.hash includes the #-symbol. get rid of it
		if (location.hash.indexOf('#') === 0) {
			applyData(JSON.parse(LZString.decompress(Base64.urlSafeDecode(location.hash.substr(1)))));
		} else {
			applyData(JSON.parse(LZString.decompress(Base64.urlSafeDecode(location.hash))));
		}
	// otherwise, set default config as hash (automatically will fill out form)
	} else {
		applyData({
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
				destroyed: []
			}
		});
	}
}

// Helper functions (doing the heavy lifting)
var RNG;
var applyData = function (cfg) {
	// set Seed
	$('[name="seed"]')[0].value = cfg.seed;
	RNG = new Math.seedrandom(cfg.seed);
	var playerContainer = $('.players')[0];
	// create player cardpiles
	for (var i = 0 ; i < cfg.players.length; i++) {
		var playerEl = document.createElement('li');

		var nameEl = document.createElement('input');
		nameEl.value = cfg.players[i].name;
		nameEl.setAttribute('name', 'player-' + i + '-name');
		playerEl.appendChild(nameEl);
		
		playerEl.appendChild(createPile('player-' + i + '-deck', 'Deck', cfg.players[i].deck));
		playerEl.appendChild(createPile('player-' + i + '-hand', 'Hand', cfg.players[i].hand));
		playerEl.appendChild(createPile('player-' + i + '-discard', 'Discard', cfg.players[i].discard));

		playerContainer.appendChild(playerEl);
	}
	// create misc cardpiles
	var miscContainer = $('.misc')[0];
	miscContainer.appendChild(createPile('misc-wounds', 'Wounds', cfg.misc.wounds));
	miscContainer.appendChild(createPile('misc-gears', '3D Gears', cfg.misc.gears));
	miscContainer.appendChild(createPile('misc-castle', 'Castle', cfg.misc.castle));
	miscContainer.appendChild(createPile('misc-titansonattack', 'Titans on Attack', cfg.misc.titansonattack));
	miscContainer.appendChild(createPile('misc-destroyed', 'Destroyed Cards', cfg.misc.destroyed));
}
// collects current state from dom and returns cfg as JSON
var collectData = function () {
	var cfg = {
		seed: $('[name="seed"]')[0].value,
		players: [],
		misc: {}
	}
	$('.players > li').forEach(function (el) {
		cfg.players.push({
			name: $('[name^="player-"][name$="-name"]', el)[0].value,
			deck: [].map.call($('.cardpile[id$="-deck"] > ul > li', el), function (item) {return item.innerText}),
			hand: [].map.call($('.cardpile[id$="-hand"] > ul > li', el), function (item) {return item.innerText}),
			discard: [].map.call($('.cardpile[id$="-discard"] > ul > li', el), function (item) {return item.innerText})
		});
	});
	cfg.misc.wounds = [].map.call($('.cardpile#misc-wounds > ul > li'), function (item) {return item.innerText});
	cfg.misc.gears = [].map.call($('.cardpile#misc-gears > ul > li'), function (item) {return item.innerText});
	cfg.misc.castle = [].map.call($('.cardpile#misc-castle > ul > li'), function (item) {return item.innerText});
	cfg.misc.titansonattack = [].map.call($('.cardpile#misc-titansonattack > ul > li'), function (item) {return item.innerText});
	cfg.misc.destroyed = [].map.call($('.cardpile#misc-destroyed > ul > li'), function (item) {return item.innerText});
	return cfg;
}
// creates HTML for card pile
var createPile = function (id, name, cards) {
	var el = document.createElement('div');
	el.className = 'cardpile';
	el.id = id;
	
	var title = document.createElement('h3');
	title.innerHTML = name;
	el.appendChild(title);
	
	var list = document.createElement('ul');
	el.appendChild(list);
	
	cards.forEach(function (item) {
		var listitem = document.createElement('li');
		listitem.innerHTML = item;
		list.appendChild(listitem);
	});

	return el;
}

// writing document.querySelectorAll is waaaayyyyy too much effort ;-)
// also, need second argument to be able to define context
var $ = function (selector, context) {
	if (context) {
		return context.querySelectorAll(selector);
	} else {
		return document.querySelectorAll(selector);
	}
}
// remove css class from element
var removeClass = function (el, className) {
	var re = new RegExp('( |^)' + className + '( |$)','g');
	el.className = el.className.replace(re, ' ');
};
// add css class to element
var addClass = function (el, className) {
	if (!hasClass(el, className)) {
		el.className += ' ' + className;
	}
};
// checks if given element has specified css class
var hasClass = function (el, className) {
	var re = new RegExp('( |^)' + className + '( |$)', 'g');
	if (!el.className) {
		return false;
	}
	return !!el.className.match(re);
};
// get first parent node which matches passed CSS selector
var findParent = function (el, selector) {
	var parent = el.parentNode;
	if (parent.matches(selector)) {
		return parent;
	} else if (parent.tagName.toUpperCase() !== 'HTML') {
		return findParent(parent, selector);
	} else {
		return null;
	}
}
// creates tinyurl link
var createTinyurl = function (href) {
	var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
		str = '',
		charCnt = 20,
		uri;

	for (var i = 0; i < charCnt; i += 1) {
		str += characters[Math.floor(Math.random() * characters.length)];
	}

	uri = 'https://tinyurl.com/create.php?source=indexpage&url=' + encodeURIComponent(href) + '&alias=AttackOnTitan-' + str;
	var img = document.createElement('img');
	img.className = 'tinyurl';
	img.src = uri;
	document.body.appendChild(img);

	return 'https://tinyurl.com/AttackOnTitan-' + str;
}
// creates action box and shows it attached to passed element
var actionBox = (function () {
	var box = document.createElement('div');
	box.className = 'actionBox hidden';
	box.innerHTML = 'action box'
	document.body.appendChild(box);

	box.addEventListener('click', function (e) {
		if (e.target.name === 'action') {
			$('button', box).forEach(function (el) {
				addClass(el, 'nope');
			});
			removeClass(e.target, 'nope');
			removeClass($('.secondLevel', box)[0], 'hidden');
			$('.thirdLevel', box).forEach(function (el) {
				addClass(el, 'hidden');
			})
		} else if (e.target.name === 'targetGroup') {
			$('.secondLevel button').forEach(function (el) {
				addClass(el, 'nope');
			})
			removeClass(e.target, 'nope');
			$('.thirdLevel', box).forEach(function (el) {
				addClass(el, 'hidden')
			})
			removeClass($('.thirdLevel.' + e.target.value)[0], 'hidden');
		} else if (e.target.name === 'targetList') {
			var action = $('[name="action"]:not(.nope)', box)[0].value;
			var target = $('#' + e.target.value + ' > ul')[0];
			switch (action) {
				case 'moveOne':
					source.parentNode.removeChild(source);
					target.appendChild(source);
					break;
				case 'moveAll':
					source.forEach(function (el) {
						el.parentNode.removeChild(el);
						target.appendChild(el);
					});
					break;
				case 'moveRandom':
					source = source[Math.floor(RNG() * source.length)];
					source.parentNode.removeChild(source);
					target.appendChild(source);
					break;
			}
			actionBox.hide();
			$('.clicked').forEach(function (el) {
				removeClass(el, 'clicked');
			});
		}
	});

	var source;

	return {
		show: function (el) {
			var elRect = el.getBoundingClientRect();
			var bodyRect = document.body.getBoundingClientRect();
			
			var players = $('.players [name^="player-"][name$="-name"]');

			// first level buttons. represent the available actions
			var firstLevelHtml = '<div class="firstLevel">';
			// Actions depend on whether card or headline was clicked
			if (el.tagName.toUpperCase() === 'H3') {
				// Headline was clicked, offer option to "move all …" or "move random …"
				firstLevelHtml += '<button name="action" value="moveAll" class="nope">Move All to …</button>';
				firstLevelHtml += '<button name="action" value="moveRandom" class="nope">Move 1 random to …</button>';
				source = $('li', findParent(el, '.cardpile'));
			} else {
				// specific card was clicked, off option to "move"
				firstLevelHtml += '<button name="action" value="moveOne" class="nope">Move to …</button>';
				source = el;
			}
			firstLevelHtml += '</div>';
			
			// level three buttons. will also be filled when looping through players for level two
			var thirdLevelHtml = '';
			var targetLists = $('[id^="misc"].cardpile');
			thirdLevelHtml += '<div class="hidden thirdLevel misc">';
			for (var j = 0; j < targetLists.length; j++) {
				thirdLevelHtml += '<button name="targetList" value="' + targetLists[j].id + '">' + $('h3', targetLists[j])[0].innerText + '</button>';
			}
			thirdLevelHtml += '</div>';

			// second level of buttons. also fills in data for third level
			var secondLevelHtml = '<div class="secondLevel hidden">';
			for (var i = 0; i < players.length; i++) {
				secondLevelHtml += '<button name="targetGroup" value="player-' + i + '">' + players[i].value + '\'s …</button>'
				targetLists = $('[id^="player-' + i + '"].cardpile');
				thirdLevelHtml += '<div class="hidden thirdLevel player-' + i + '">';
				for (var j = 0; j < targetLists.length; j++) {
					thirdLevelHtml += '<button name="targetList" value="' + targetLists[j].id + '">' + $('h3', targetLists[j])[0].innerText + '</button>';
				}
				thirdLevelHtml += '</div>';
			}
			secondLevelHtml += '<button name="targetGroup" value="misc">non-Player pile …</button>'
			secondLevelHtml += '</div>';

			box.innerHTML = firstLevelHtml + secondLevelHtml + thirdLevelHtml;
			box.style.left = elRect.left - bodyRect.left + 'px';
			box.style.top = elRect.top -bodyRect.top + elRect.height + 'px';
			removeClass(box, 'hidden');
		},
		hide: function () {
			addClass(box, 'hidden');
		}
	};
}())
