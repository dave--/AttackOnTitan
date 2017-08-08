// creates action box and shows it attached to passed element
var actionBox = (function () {
	var box = document.createElement('div');
	box.className = 'actionBox hidden';
	box.innerHTML = 'action box'
	document.body.appendChild(box);

	box.addEventListener('click', function (e) {
		if (e.target.name === 'action') {
			if (e.target.value === 'drawCastle') {
				var cardCnt = $('[data-type="Equipment"]:not([data-name="3D Gear"]), [data-type="Maneuver"], [data-type="Ally"], [data-type="Location"], [data-type="Titan"]:not([data-subtype^="Archenemy "]').length,
					stackCnt = 6,
					stacksize = cardCnt / stackCnt,
					maxArchenemies = 4,
					archenemyCnt = $('[data-type="Titan"][data-subtype^="Archenemy "]').length,
					archenemiesNotInPlay = $('#misc-archenemies li'),
					archenemyInPlayCnt = archenemyCnt - archenemiesNotInPlay.length,
					cardsInCastle = $('#misc-castle li'),
					currentStack = Math.ceil(cardsInCastle.length / stacksize),
					cardsLeftInStack = stacksize - (cardCnt - (stackCnt - currentStack) * stacksize - cardsInCastle.length);
				
				var card, target, walls = $('.districts > li:not([data-hp="0"])'), targetWall = walls[0];
				
				// get wall with least amount of cards, furthest left
				for (var i = 1; i < walls.length; i++) {
					if ($('[id$="-inner-wall"] li', walls[i]).length < $('[id$="-inner-wall"] li', targetWall).length) {
						targetWall = walls[i];
					}
				}

				if (
					// chance for archenemy
					RNG(collectData()) * (cardsLeftInStack + (stackCnt - currentStack + archenemyInPlayCnt)) > cardsLeftInStack
					// archenemy potentially arrives
					&& archenemyInPlayCnt < stackCnt - currentStack
					) {
					var availableTitans = [].filter.call($('#misc-archenemies li'), function (el) { 
						return (el.getAttribute('data-subtype').substr(el.getAttribute('data-subtype').length - 2) === ' ' + (stackCnt - currentStack));
					});
					// draw random archenemy
					card = availableTitans[Math.floor(RNG() * availableTitans.length)];
				} else {
					// draw random card from castle
					card = cardsInCastle[Math.floor(RNG() * cardsInCastle.length)];
				}
				// titan goes to outer wall, other cards to inner wall
				if (card.getAttribute('data-type') === 'Titan') {
					// target will be outer district
					target = $('[id$="-outer-wall"] ul', targetWall)[0];
				} else {
					// target will be inner district
					target = $('[id$="-inner-wall"] ul', targetWall)[0];
				}

				card.parentNode.removeChild(card);
				target.appendChild(card);
				sortList($('li', target));

				
				actionBox.hide();
				$('.clicked').forEach(function (el) {
					removeClass(el, 'clicked');
				});
			} else {
				$('button', box).forEach(function (el) {
					addClass(el, 'nope');
				});
				removeClass(e.target, 'nope');
				removeClass($('.secondLevel', box)[0], 'hidden');
				$('.thirdLevel', box).forEach(function (el) {
					addClass(el, 'hidden');
				})
			}
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
					sortList($('li', target));
					break;
				case 'moveAll':
					source.forEach(function (el) {
						el.parentNode.removeChild(el);
						target.appendChild(el);
					});
					sortList($('li', target));
					break;
				case 'moveRandom':
					source = source[Math.floor(RNG(collectData()) * source.length)];
					source.parentNode.removeChild(source);
					target.appendChild(source);
					sortList($('li', target));
					break;
			}
			actionBox.hide();
			$('.clicked').forEach(function (el) {
				removeClass(el, 'clicked');
			});
		}
	});

	var source;
	var sortList = function (items) {
		if (!items.length) {
			return;
		}
		items = [].slice.call(items, 0);
		var parentNode = items[0].parentNode;
		for (var i = 0; i < items.length; i++) {
			parentNode.removeChild(items[i]);
		}
		items = items.sort(function (a, b) {
			if (a.innerText < b.innerText) {
				return -1;
			} else if (a.innerText > b.innerText) {
				return 1;
			} else {
				return 0;
			}
		});
		for (var i = 0; i < items.length; i++) {
			parentNode.appendChild(items[i]);
		}
	}

	return {
		show: function (el) {
			var elRect = el.getBoundingClientRect();
			var bodyRect = document.body.getBoundingClientRect();
			
			var players = $('.players [name^="player-"][name$="-name"]');
			var districts = $('.districts > li > h3');

			// first level buttons. represent the available actions
			var firstLevelHtml = '<div class="firstLevel">';
			// Actions depend on whether card or headline was clicked
			if (el.tagName.toUpperCase() === 'H3') {
				// Headline was clicked, offer option to "move all …" or "move random …"
				firstLevelHtml += '<button name="action" value="moveAll" class="nope">Move All to …</button>';
				firstLevelHtml += '<button name="action" value="moveRandom" class="nope">Move 1 random to …</button>';
				if (findParent(el, '.cardpile').id === 'misc-castle') {
					firstLevelHtml += '<button name="action" value="drawCastle" class="nope">Draw 1 random to add to wall.</button>';
				}
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

			// second level of buttons for players. also fills in data for third level
			var secondLevelHtml = '<div class="secondLevel hidden">';
			for (var i = 0; i < players.length; i++) {
				secondLevelHtml += '<button name="targetGroup" value="player-' + i + '">' + players[i].value + '\'s …</button>'
				targetLists = $('[id^="player-' + i + '-"].cardpile');
				thirdLevelHtml += '<div class="hidden thirdLevel player-' + i + '">';
				for (var j = 0; j < targetLists.length; j++) {
					thirdLevelHtml += '<button name="targetList" value="' + targetLists[j].id + '">' + $('h3', targetLists[j])[0].innerText + '</button>';
				}
				thirdLevelHtml += '</div>';
			}
			// second level of buttons for districts. also fills in data for third level
			for (var i = 0; i < districts.length; i++) {
				secondLevelHtml += '<button name="targetGroup" value="district-' + i + '">' + districts[i].innerText + '\'s …</button>'
				targetLists = $('[id^="district-' + i + '-"].cardpile');
				thirdLevelHtml += '<div class="hidden thirdLevel district-' + i + '">';
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

