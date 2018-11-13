(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let findLal = require('../parts/findLal.js');
},{"../parts/findLal.js":2}],2:[function(require,module,exports){
// Поиск лальных слов
function findLal(){
	var LALS_WORDS = ['лаль',/прр*р/]			//массив лалей
	var p = document.getElementsByTagName('p');

	 for(let i = 0; i < p.length; i++){
		let currentP = p[i].innerHTML;

		for (let j = 0; j < LALS_WORDS.length; j++) {
			let curLal = currentP.match(RegExp(LALS_WORDS[j],'i'));

			if(curLal != null){
				let newLal = `<a class="lal-word" title='Узнать обозначение: "${curLal}"' href="https://verblyadi.000webhostapp.com/dictionary.html#${LALS_WORDS[j]}">${curLal}</a>`
				currentP = currentP.replace(RegExp(curLal), newLal);
				p[i].innerHTML = currentP;
			}
		}
	}
};

module.exports = findLal();

},{}]},{},[1]);
