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
		var card = cardData.filter(function (card) {if (card.name === item) return true; return false;})[0];
		listitem.setAttribute('data-name', card.name)
		listitem.setAttribute('data-cost', card.cost);
		listitem.setAttribute('data-type', card.type);
		listitem.setAttribute('data-text', card.text);
		if (card.subtype) {
			listitem.setAttribute('data-subtype', card.subtype);
		}
		if (card.hitpoints) {
			listitem.setAttribute('data-hitpoints', card.hitpoints);
		}
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
		charCnt = 16,
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
// seed Math.random replacement
var RNG = (function () {
	var myRNG;
	return function (seed) {
		if (seed) {
			myRNG = new Math.seedrandom(seed);
		}
		if (!myRNG) {
			throw new Error('RNG has to be seeded first');
		}
		return myRNG();
	}
}());