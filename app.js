// TIMER
let daysBlock = document.querySelector('.days');
let hoursBlock = document.querySelector('.hours');
let minutesBlock = document.querySelector('.minutes');
let secondsBlock = document.querySelector('.seconds');

function go() {
	window.timerId = window.setInterval(timer, 500);
}

function timer() {
	let date = new Date();
	let dateBirthday = new Date(2002, 2, 30, 18, 23);
	
	if ( ((date.getMonth() < dateBirthday.getMonth()) && (date.getDate() < dateBirthday.getDate())) || ((date.getMonth() == dateBirthday.getMonth()) && (date.getDate() < dateBirthday.getDate())) || ((date.getMonth() == dateBirthday.getMonth()) && (date.getDate() == dateBirthday.getDate()) && (date.getHours() <= dateBirthday.getHours()) && (date.getMinutes() < dateBirthday.getMinutes())) ) {
		let futureDateBirthday = new Date(date.getFullYear(), dateBirthday.getMonth(), dateBirthday.getDate(), dateBirthday.getHours(), dateBirthday.getMinutes());
		let difference = futureDateBirthday.getTime() - date.getTime();

		daysBlock.innerHTML = addZerro(Math.trunc(difference / 1000 / 60 / 60 / 24));
		hoursBlock.innerHTML = addZerro(Math.trunc(difference / 1000 / 60 / 60) % 24);
		minutesBlock.innerHTML = addZerro(Math.trunc(difference / 1000 / 60) % 60);
		secondsBlock.innerHTML = addZerro(Math.trunc(difference / 1000) % 100);
	} else {
		let futureDateBirthday = new Date(date.getFullYear()+1, dateBirthday.getMonth(), dateBirthday.getDate(), dateBirthday.getHours(), dateBirthday.getMinutes());
		let difference = futureDateBirthday.getTime() - date.getTime();

		daysBlock.innerHTML = addZerro(Math.trunc(difference / 1000 / 60 / 60 / 24));
		hoursBlock.innerHTML = addZerro(Math.trunc(difference / 1000 / 60 / 60) % 100);
		minutesBlock.innerHTML = addZerro(Math.trunc(difference / 1000 / 60) % 100);
		secondsBlock.innerHTML = addZerro(Math.trunc(difference / 1000) % 100);
	}
}

function addZerro(element) {
	element.toString();

	if (element < 10) {
		return element = '0' + element
	} else {
		return element
	}
}