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
		applyData(defaultCfg);
	}
}

// Helper functions (doing the heavy lifting)
var applyData = function (cfg) {
	// set Seed
	$('[name="seed"]')[0].value = cfg.seed;
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
	miscContainer.appendChild(createPile('misc-heroes', 'Heroes', cfg.misc.heroes));
	// create districts
	var districtContainer = $('.districts')[0];
	for (var i = 0; i < cfg.districts.length; i++) {
		var districtEl = document.createElement('li');

		var nameEl = document.createElement('h3');
		nameEl.innerHTML = cfg.districts[i].name;
		districtEl.appendChild(nameEl);

		districtEl.appendChild(createPile('district-' + i + '-outer-heroes', 'Outer Heroes', cfg.districts[i].outer.heroes));
		districtEl.appendChild(createPile('district-' + i + '-outer-wall', 'Outer Wall', cfg.districts[i].outer.cards));
		districtEl.appendChild(createPile('district-' + i + '-inner-wall', 'Inner Wall', cfg.districts[i].inner.cards));
		districtEl.appendChild(createPile('district-' + i + '-inner-heroes', 'Inner Heroes', cfg.districts[i].inner.heroes));

		districtContainer.appendChild(districtEl);
	}
}
// collects current state from dom and returns cfg as JSON
var collectData = function () {
	var cfg = {
		seed: $('[name="seed"]')[0].value,
		players: [],
		misc: {},
		districts: []
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
	cfg.misc.heroes = [].map.call($('.cardpile#misc-heroes > ul > li'), function (item) {return item.innerText});
	$('.districts > li').forEach(function (el) {
		cfg.districts.push({
			name: $('h3', el)[0].innerText,
			hitpoints: 2,
			locations: [],
			outer: {
				cards: [].map.call($('.cardpile[id$="-outer-wall"] > ul > li', el), function (item) {return item.innerText}),
				heroes: [].map.call($('.cardpile[id$="-outer-heroes"] > ul > li', el), function (item) {return item.innerText})
			},
			inner: {
				cards: [].map.call($('.cardpile[id$="-inner-wall"] > ul > li', el), function (item) {return item.innerText}),
				heroes: [].map.call($('.cardpile[id$="-inner-heroes"] > ul > li', el), function (item) {return item.innerText})
			}
		});
	})
	return cfg;
}
