// Выделить последнее обновление в refresh
function markNewUpdates() {
	var refresh = document.getElementById('refresh'),
		datePublic = refresh.getElementsByClassName('date-public');

	for (let i = 0; i < datePublic.length; i++) {
		let date = (datePublic[i].textContent).split('.'),
			dateParent = datePublic[i].parentNode;

		[date[0], date[1]] = [date[1], date[0]];
		date = new Date(date);

		let difDays = (new Date() - date) / 86400000; //столько ms в сутках

		if (difDays < 5) dateParent.classList.add('new');
		else break;
	}
}