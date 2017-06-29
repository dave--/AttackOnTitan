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
					source = source[Math.floor(RNG(collectData()) * source.length)];
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
			var districts = $('.districts > li > h3');

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