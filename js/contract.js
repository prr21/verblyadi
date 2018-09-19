'use strict'
// Валидация формы, которую нужно будет переписать.
function formValid(form) {

	fail  = validName(form.userName.value)
	fail += validLevel(form.userLevel.value)
	fail += validEmail(form.email.value)
	fail += validMessage(form.message.value)
}

function testLevel() {
	if (confirm("Вы будете перенапревлены к тесту, все введенные данные будут утеряны, вы уверенны?")){
		location.href = 'tut.html doljen byt';
	}
}

function validName(prr) {	
	var elem = document.querySelector("#emailText");
	var	userVk = prr.indexOf("k.com/")
	if (userVk < 0) {
		emailText.setAttribute('placeholder', 'Уже придется ввести почту')
		emailText.setAttribute('required', 'required');
		elem.classList.add("is-invalid");
		event.preventDefault();
        event.stopPropagation();
	}else elem.classList.remove("is-invalid")
}
function validEmail(prr) {
	var elem = document.querySelector("#emailText");
	var help = document.getElementById("error-email")
	if (prr == "") {
		help.innerHTML = "Если вы захотели ввести ссылку вк выше, то обновите страницу, да я не ахуенный"
	}else elem.classList.remove("is-invalid")
	
}
var huesos;
var huesosLevel;

function validLevel(prr) {
	var elem = document.querySelector("#userLevel-text");
	var help = document.getElementById('error-userLevel');

    var e = "У вас не может быть уровень выше чем у Эрпули, это физически невозможно"
    var m = "Если у вас такой уровень, то идите нахуй отсюда"
    var l = "Уровень не может быть меньше нуля, не наёбуй"
    var i = "Чтот у вас слишком большой уровень, может пройдете тест?"
    var h = "Говорю нахуй иди отсюда, кого ты наебать хочешь"
    var hh = "Блять, я тебе говорю сука, уёбуй, у тебя " + huesosLevel + " уровень";

	if (prr >= 143 || prr < 5 || prr < 0) {
		elem.classList.add("is-invalid");
		event.preventDefault();
    	event.stopPropagation();		
		if (prr >= 143) {
			help.innerHTML = e;
		}
		else if (prr < 0) {
			help.innerHTML = l;
		}
		else if (prr < 5 && huesos == 1) {
			help.innerHTML = m;
		}
		else if (prr < 5) {
			huesosLevel = prr;
			huesos =+ 1;
			help.innerHTML = m;
		}
	}else if (huesos == 1) {
		event.preventDefault();
    	event.stopPropagation();
    	huesos++;
		help.innerHTML = h;
	}else if (huesos > 1) {
		event.preventDefault();
    	event.stopPropagation();
		help.innerHTML = hh;
	}else if (prr > 100 && prr < 143) {
		if (confirm(i)){
			location.href = 'tut.html doljen byt';
			event.preventDefault();
    		event.stopPropagation();
		}else {
			alert('Смотри тогда не наеби')
		}
	}else elem.classList.remove("is-invalid")
}

function validMessage(prr) {
	var help = document.getElementById("error-message")
	var elem = document.querySelector("#message-text");

	var a = "Расскажи о себе больше чем на 10 букв, еблан"

	if (prr.length < 10) {
		event.preventDefault();
    	event.stopPropagation();
		elem.classList.add("is-invalid");
		help.innerHTML = a
	}else elem.classList.remove("is-invalid")
}

/*window.onload=function() {
	var date = new Date;

	var year =  date.getFullYear() + '.';
	var month = date.getMonth() + '.';
	var day = date.getDate() + '.';

	var update = 'Prrrrrrrrrrrrrrrrrrrrrrr'; //Ебаца с ней, ёбаный в рот

	year = year.slice(2);

	if (day.length < 3) {
		day = '0' + day;
	}
	if (month.length < 3) {
		month = '0' + month;
	}

	var dateNow = (year + month + day);

	var listUpdate = document.getElementById('updates');
	var newli = document.createElement('li');
	newli.innerHTML = '<span class="date">' + dateNow + '</span>' + update;

	document.body.appendChild(newli);
	alert(  dateNow );
};
*/

// Всё что выше переписать, ниже - поиск лальных слов

window.onload = function toFindLal(){
	const LALS_WORDS = ['лаль', 'прр']; //массив лалей
	var start = new Date;
	var p = document.getElementsByTagName('p');

	 for(let i = 0; i < p.length; i++){
		var currentP = p[i].innerHTML; //

		for(let j = 0; j < LALS_WORDS.length; j++){
			let numLal = currentP.indexOf(LALS_WORDS[j]) //Е! не будетищет другой регистр

			if(numLal != -1){
				let currentLal = LALS_WORDS[j];
				currentP = currentP.replace(RegExp(currentLal,'g'),`<a class="lal-word"
				title='Узнать обозначение: "${currentLal}"' href="file:///C:/Users/Prr/Desktop/++prrr/grubo/Verblyadi2/dictionary.html#${currentLal}">${currentLal}</a>`);
				p[i].innerHTML = currentP; //Е! каждый раз новый текст идет в иннер,
									   // из-за этого не ищет слова в верхнем регистре, вставляется все с маленькой
			}											//https://verblyadi.000webhostapp.com/dictionary.html вместо статичн
		}
	}
}