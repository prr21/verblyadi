function formValid(form) {
	var errorDiv = document.getElementsByClassName("invalid-feedback"),
		errorInfo = {
			erName: "Введите ФИО или вашу ссылку в ВК",
			erEmail: "Введите почту или ссылку в ВК выше",
			bigLev: "У вас не может быть уровень выше чем у Эрпули, это физически невозможно",
		    smallLev: "Если у вас такой уровень, то идите нахуй отсюда",
		    subZeroLev: "Уровень не может быть меньше нуля, не наёбуй",
		    suspectLev: "Чтот у вас слишком большой уровень, может пройдете тест?",
		    erMessage: "Расскажи о себе больше чем на 10 букв, еблан"
		},

		nameInp = document.getElementById("userName-text"),
		emailInp = document.getElementById("email-text"),
		levelInp = document.getElementById("userLevel-text"),
		messageInp = document.getElementById("message-text");

		emailVal = form.email.value,
		nameVal = validName(form.userName.value),
		levelVal = validLevel(form.userLevel.value),
		messageVal = validMessage(form.message.value);

	function validName(value) {
		if (value.indexOf("vk.com/") == -1) {
			emailVal = validEmail(emailVal);

		} else if (value == ''){
			errorDiv[0].textContent = errorInfo.erName

			event.preventDefault();
        	event.stopPropagation();

		} else {
			nameInp.classList.remove("is-invalid");
			emailInp.classList.remove("is-invalid");
		}
	};

	function validEmail(value) {
		if (value == '') {
			nameInp.classList.add("is-invalid");
			emailInp.classList.add("is-invalid");

			errorDiv[0].textContent = errorInfo.erName;
			errorDiv[2].textContent = errorInfo.erEmail

			event.preventDefault();
        	event.stopPropagation();
		} else {
			nameInp.classList.remove("is-invalid");
			emailInp.classList.remove("is-invalid");
		}
	};

	function validLevel(value) {
		if (value >= 143 || value < 5 || value < 0) {
			levelInp.classList.add("is-invalid");

			event.preventDefault();
	    	event.stopPropagation();

			if (value >= 143) {
				errorDiv[1].textContent = errorInfo.bigLev;

			} else if (value < 0) {
				errorDiv[1].textContent = errorInfo.subZeroLev;

			} else if (value < 5) {
				errorDiv[1].textContent = errorInfo.smallLev;
			}

		} else if (value > 100 && value < 143) {
			confirm(errorInfo.suspectLev)? location.href = "games.html" : alert("Смотри тогда не наеби");

		} else levelInp.classList.remove("is-invalid");
	};

	function validMessage(value) {
		if (value.length < 10) {

			event.preventDefault();
	    	event.stopPropagation();

			messageInp.classList.add("is-invalid");
			errorDiv[3].textContent = errorInfo.erMessage;

		} else messageInp.classList.remove("is-invalid")
	}
};