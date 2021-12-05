let btn = document.getElementById('hamburguerBTN');
let menu = document.getElementById('menu');
btn.addEventListener('click', () => {
	menu.classList.toggle('menuAtivo');
	btn.classList.toggle('btnActive');
}) // using pure javascript

// $('#hamburguerBTN').click(() => {
// 	$('#menu').slideToggle(750, () => {
// 		console.log('the header was used!')
// 	});
// }) // using the jquery javascript library