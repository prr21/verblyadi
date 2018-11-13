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
