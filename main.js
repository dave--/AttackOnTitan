window.onload = function () {
	// handle clicks
	document.body.addEventListener('click', function (e) {
		// Draw a card (remove from deck, add to hand)
		if (e.target.name === 'draw') {
			var options = $(e.target.getAttribute('data-source'));
			if (options.length > 0) {
				var rng = Math.floor(Math.random() * options.length);
				var el = options[rng].parentNode.removeChild(options[rng]);
				$(e.target.getAttribute('data-target'))[0].appendChild(el);
			}
		// Move all cards selected by "source" to "target"
		} else if (e.target.name === 'moveAll') {
			var options = $(e.target.getAttribute('data-source'));
			if (options.length > 0) {
				var target = $(e.target.getAttribute('data-target'))[0];
				for (var i = options.length - 1; i >= 0; i--) {
					target.appendChild(options[i].parentNode.removeChild(options[i]));
				}
			}
		// generate new link
		} else if (e.target.name === 'generateLink') {
			var cfg = collectData();
			console.log(JSON.stringify(cfg).length, Base64.urlSafeEncode(LZString.compress(JSON.stringify(cfg))).length)
			var tinyurl = createTinyurl(location.href + '#' + Base64.urlSafeEncode(LZString.compress(JSON.stringify(cfg))));
			$('[name="url"]')[0].value = tinyurl;
		}
	});

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
				name: "Erwin",
				deck: ["Thrust", "Thrust", "Thrust", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage"],
				hand: [],
				discard: []
			}, {
				name: "Sasha",
				deck: ["Thrust", "Thrust", "Thrust", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage", "Courage"],
				hand: [],
				discard: []
			}]
		});
	}
}

// Helper functions (doing the heavy lifting)
var applyData = function (cfg) {
	// set Seed
	$('[name="seed"]')[0].value = cfg.seed;
	Math.seedrandom('cfg.seed');
	// set player data
	for (var i = cfg.players.length - 1; i >= 0; i--) {
		// player name
		$('[name="player-' + (i + 1) + '-name"]').forEach(function (el) {
			el.value = cfg.players[i].name;
		});
		// cards in deck
		if (cfg.players[i].deck.length > 0) {
			$('.player-' + (i + 1) + ' .deck').forEach(function (el) {
				el.innerHTML = '<li>' + cfg.players[i].deck.join('</li><li>') + '</li>';
			});
		}
		// cards in hand
		if (cfg.players[i].hand.length > 0) {
			$('.player-' + (i + 1) + ' .hand').forEach(function (el) {
				el.innerHTML = '<li>' + cfg.players[i].hand.join('</li><li>') + '</li>';
			});
		}
		// cards in discard
		if (cfg.players[i].discard.length > 0) {
			$('.player-' + (i + 1) + ' .discard').forEach(function (el) {
				el.innerHTML = '<li>' + cfg.players[i].discard.join('</li><li>') + '</li>';
			});
		}
	}
}
// collects current state from dom and returns cfg as JSON
var collectData = function () {
	var cfg = {
		seed: $('[name="seed"]')[0].value,
		players: []
	}
	$('.players > li').forEach(function (el) {
		var player = {
			name: $('[name="' + el.className + '-name"]', el)[0].value,
			deck: [].map.call($('.deck > li', el), function (item) {return item.innerText}),
			hand: [].map.call($('.hand > li', el), function (item) {return item.innerText}),
			discard: [].map.call($('.discard > li', el), function (item) {return item.innerText})
		};

		cfg.players.push(player);
	});
	return cfg;
}

var $ = function (selector, context) {
	if (context) {
		return context.querySelectorAll(selector);
	} else {
		return document.querySelectorAll(selector);
	}
}

// creates tinyurl link
function createTinyurl(href) {
	var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
		str = '',
		charCnt = 20,
		uri;

	for (var i = 0; i < charCnt; i += 1) {
		str += characters[Math.floor(Math.random() * characters.length)];
	}

	uri = 'http://tinyurl.com/create.php?source=indexpage&url=' + encodeURIComponent(href) + '&alias=AttackOnTitan-' + str;
	var img = document.createElement('img');
	img.className = 'tinyurl';
	img.src = uri;
	document.body.appendChild(img);

	return 'http://tinyurl.com/AttackOnTitan-' + str;
}